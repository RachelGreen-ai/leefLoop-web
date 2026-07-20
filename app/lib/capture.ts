type CaptureResult = {
  ok: boolean;
  stored: boolean;
  mode: "google-sheet" | "preview";
  message: string;
};

type CaptureRecord = Record<string, string | number | boolean | null>;

function getEnvValue(name: string) {
  return (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.[name];
}

export function sanitizeText(value: unknown, maxLength = 240) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

export async function captureToGoogleSheet(
  recordType: "waitlist" | "plant_signal",
  record: CaptureRecord,
): Promise<CaptureResult> {
  const webhookUrl = getEnvValue("PLANTPULSE_WEBHOOK_URL");
  const webhookSecret = getEnvValue("PLANTPULSE_WEBHOOK_SECRET");

  if (!webhookUrl || !webhookSecret) {
    return {
      ok: true,
      stored: false,
      mode: "preview",
      message: "Preview captured. Add the Google Sheet webhook to store submissions.",
    };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      secret: webhookSecret,
      recordType,
      ...record,
    }),
  });

  const body = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; message?: string }
    | null;

  if (!response.ok || body?.ok === false) {
    return {
      ok: false,
      stored: false,
      mode: "google-sheet",
      message: body?.error || body?.message || "Google Sheet capture failed.",
    };
  }

  return {
    ok: true,
    stored: true,
    mode: "google-sheet",
    message: "Thanks. Your note was saved.",
  };
}
