import {
  captureToGoogleSheet,
  isValidEmail,
  jsonResponse,
  sanitizeText,
} from "../../lib/capture";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return jsonResponse({ ok: false, message: "Please send the form again." }, 400);
  }

  if (sanitizeText(payload.website)) {
    return jsonResponse({ ok: true, stored: false, message: "Thanks." });
  }

  const email = sanitizeText(payload.email, 160).toLowerCase();
  const region = sanitizeText(payload.region, 120);
  const interest = sanitizeText(payload.interest, 120);
  const source = sanitizeText(payload.source, 80) || "web";

  if (!isValidEmail(email)) {
    return jsonResponse({ ok: false, message: "Please enter a valid email." }, 400);
  }

  const result = await captureToGoogleSheet("waitlist", {
    email,
    region,
    interest,
    source,
    created_at: new Date().toISOString(),
  });

  return jsonResponse(result, result.ok ? 200 : 502);
}
