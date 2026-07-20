import { captureToGoogleSheet, jsonResponse, sanitizeText } from "../../lib/capture";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return jsonResponse({ ok: false, message: "Please send the form again." }, 400);
  }

  if (sanitizeText(payload.website)) {
    return jsonResponse({ ok: true, stored: false, message: "Thanks." });
  }

  const plant = sanitizeText(payload.plant, 120);
  const context = sanitizeText(payload.context, 160);
  const signal = sanitizeText(payload.signal, 160);
  const email = sanitizeText(payload.email, 160).toLowerCase();
  const source = sanitizeText(payload.source, 80) || "plantpulse";

  if (!plant || !context || !signal) {
    return jsonResponse(
      { ok: false, message: "Please share a plant, broad place, and what made you notice it." },
      400,
    );
  }

  const result = await captureToGoogleSheet("plant_signal", {
    plant,
    context,
    signal,
    email: email || null,
    source,
    created_at: new Date().toISOString(),
  });

  return jsonResponse(result, result.ok ? 200 : 502);
}
