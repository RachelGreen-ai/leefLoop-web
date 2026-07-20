/* eslint-disable @typescript-eslint/no-unused-vars */

const WAITLIST_SHEET_NAME = "Waitlist Leads";
const PLANT_SIGNALS_SHEET_NAME = "Plant Signals";

const WAITLIST_HEADERS = [
  "email",
  "region",
  "interest",
  "source",
  "first_seen_at",
  "last_seen_at",
  "submission_count",
];

const PLANT_SIGNAL_HEADERS = [
  "plant",
  "context",
  "signal",
  "email",
  "source",
  "created_at",
];

function setupPlantPulseSheets() {
  ensureHeaders_(getSheet_(WAITLIST_SHEET_NAME), WAITLIST_HEADERS);
  ensureHeaders_(getSheet_(PLANT_SIGNALS_SHEET_NAME), PLANT_SIGNAL_HEADERS);
}

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("PLANTPULSE_WEBHOOK_SECRET") || "";

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return json_({ ok: false, error: "Unauthorized" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      if (payload.recordType === "waitlist") {
        captureWaitlist_(payload);
      } else if (payload.recordType === "plant_signal") {
        capturePlantSignal_(payload);
      } else {
        return json_({ ok: false, error: "Unknown record type" });
      }
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function captureWaitlist_(payload) {
  const email = String(payload.email || "").trim().toLowerCase();

  if (!isValidEmail_(email)) {
    throw new Error("Invalid email");
  }

  const now = new Date().toISOString();
  const createdAt = String(payload.created_at || now);
  const sheet = getSheet_(WAITLIST_SHEET_NAME);
  ensureHeaders_(sheet, WAITLIST_HEADERS);

  const values = sheet.getDataRange().getValues();
  const existingRowIndex = findWaitlistRow_(values, email);

  if (existingRowIndex >= 0) {
    const rowNumber = existingRowIndex + 1;
    const row = values[existingRowIndex].slice();
    while (row.length < WAITLIST_HEADERS.length) row.push("");

    row[1] = String(payload.region || row[1] || "");
    row[2] = String(payload.interest || row[2] || "");
    row[3] = String(payload.source || row[3] || "web");
    row[5] = createdAt;
    row[6] = Number(row[6] || 1) + 1;
    sheet.getRange(rowNumber, 1, 1, WAITLIST_HEADERS.length).setValues([row]);
    return;
  }

  sheet.appendRow([
    email,
    String(payload.region || ""),
    String(payload.interest || ""),
    String(payload.source || "web"),
    createdAt,
    createdAt,
    1,
  ]);
}

function capturePlantSignal_(payload) {
  const plant = String(payload.plant || "").trim();
  const context = String(payload.context || "").trim();
  const signal = String(payload.signal || "").trim();

  if (!plant || !context || !signal) {
    throw new Error("Invalid plant signal");
  }

  const sheet = getSheet_(PLANT_SIGNALS_SHEET_NAME);
  ensureHeaders_(sheet, PLANT_SIGNAL_HEADERS);
  sheet.appendRow([
    plant,
    context,
    signal,
    String(payload.email || "").trim().toLowerCase(),
    String(payload.source || "plantpulse"),
    String(payload.created_at || new Date().toISOString()),
  ]);
}

function findWaitlistRow_(values, email) {
  for (let index = 1; index < values.length; index += 1) {
    const rowEmail = String(values[index][0] || "").trim().toLowerCase();
    if (rowEmail === email) {
      return index;
    }
  }

  return -1;
}

function getSheet_(sheetName) {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID") || "";
  const spreadsheet = spreadsheetId
    ? SpreadsheetApp.openById(spreadsheetId)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("No active spreadsheet found. Create this script from the Google Sheet, or set SPREADSHEET_ID in Script Properties.");
  }

  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaders_(sheet, headers) {
  const currentHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const needsHeaders = headers.some((header, index) => currentHeaders[index] !== header);

  if (needsHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function json_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
