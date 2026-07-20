"use client";

import { useState } from "react";

type SubmitState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: SubmitState = {
  status: "idle",
  message: "",
};

async function postForm(endpoint: string, form: HTMLFormElement) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = (await response.json().catch(() => null)) as { message?: string } | null;

  if (!response.ok) {
    throw new Error(body?.message || "Something went wrong. Please try again.");
  }

  return body?.message || "Thanks. Your note was received.";
}

export function WaitlistForm({ source = "newsletter" }: { source?: string }) {
  const [state, setState] = useState<SubmitState>(initialState);

  return (
    <form
      className="waitlist-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setState({ status: "submitting", message: "Sending your note..." });

        try {
          const message = await postForm("/api/waitlist", event.currentTarget);
          event.currentTarget.reset();
          setState({ status: "success", message });
        } catch (error) {
          setState({
            status: "error",
            message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          });
        }
      }}
    >
      <input type="hidden" name="source" value={source} />
      <label className="hidden-field">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        Region or ZIP
        <input type="text" name="region" placeholder="San Jose, CA or Zone 9b" />
      </label>
      <label>
        What notes would help most?
        <select name="interest" defaultValue="">
          <option value="" disabled>
            Pick one
          </option>
          <option>Houseplants</option>
          <option>Costco and local plant finds</option>
          <option>Herbs and vegetables</option>
          <option>Seasonal farm-to-table ideas</option>
          <option>Organic plant fixes</option>
        </select>
      </label>
      <button type="submit" disabled={state.status === "submitting"}>
        {state.status === "submitting" ? "Subscribing..." : "Subscribe to plant notes"}
      </button>
      <small>
        {state.message ||
          "Weekly care notes, local plant signals, indoor plant ideas, and farm-to-table prompts."}
        {state.status === "idle" ? (
          <>
            {" "}<a href="/privacy">Privacy</a>
          </>
        ) : null}
      </small>
    </form>
  );
}

export function PlantSignalForm() {
  const [state, setState] = useState<SubmitState>(initialState);

  return (
    <form
      className="waitlist-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setState({ status: "submitting", message: "Sending your plant note..." });

        try {
          const message = await postForm("/api/plant-signal", event.currentTarget);
          event.currentTarget.reset();
          setState({ status: "success", message });
        } catch (error) {
          setState({
            status: "error",
            message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          });
        }
      }}
    >
      <input type="hidden" name="source" value="plantpulse" />
      <label className="hidden-field">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Plant you are seeing
        <input type="text" name="plant" placeholder="Monstera, basil, olive tree" required />
      </label>
      <label>
        Broad place or context
        <input
          type="text"
          name="context"
          placeholder="Bay Area, indoor apartment, local nursery"
          required
        />
      </label>
      <label>
        What made you notice it?
        <select name="signal" defaultValue="" required>
          <option value="" disabled>
            Pick one
          </option>
          <option>People are buying it</option>
          <option>People are asking care questions</option>
          <option>It is showing up online</option>
          <option>I am growing it myself</option>
        </select>
      </label>
      <label>
        Email, optional
        <input type="email" name="email" placeholder="you@example.com" />
      </label>
      <button type="submit" disabled={state.status === "submitting"}>
        {state.status === "submitting" ? "Sharing..." : "Share a plant signal"}
      </button>
      <small>
        {state.message || "Broad places and gentle observations help shape future guides."}
      </small>
    </form>
  );
}
