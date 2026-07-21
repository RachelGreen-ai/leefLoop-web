# Google Sheet Capture For PlantPulse

This captures beta waitlist leads and PlantPulse observations into a Google Sheet without a paid database.

## What It Stores

Sheet: `Waitlist Leads`
- email
- region
- interest
- source
- first seen time
- last seen time
- submission count

Sheet: `Plant Signals`
- plant
- broad context
- signal type
- optional email
- source
- created time

## Setup

1. Create a Google Sheet, for example `Rachel’s Garden PlantPulse Leads`.
2. Open `Extensions -> Apps Script`.
3. Paste the contents of `scripts/plantpulse-google-apps-script.js`.
4. In Apps Script, open `Project Settings -> Script Properties`.
5. Add:
   - `PLANTPULSE_WEBHOOK_SECRET`
   - value: a long random string
6. Optional, if the Apps Script is not bound to the target sheet:
   - `SPREADSHEET_ID`
   - value: the Google Sheet ID
7. Run `setupPlantPulseSheets` once and approve permissions.
8. Deploy with `Deploy -> New deployment -> Web app`.
9. Use:
   - Execute as: `Me`
   - Who has access: `Anyone`
10. Copy the Web App URL.

## App Environment Variables

Add these locally and in hosting environment settings:

```bash
PLANTPULSE_WEBHOOK_URL="https://script.google.com/macros/s/..."
PLANTPULSE_WEBHOOK_SECRET="same long random string as Apps Script"
```

Do not expose `PLANTPULSE_WEBHOOK_SECRET` to the browser.

## Local Preview Behavior

If the webhook URL or secret is missing, the website returns a friendly preview success message but does not store the submission.

This lets the site keep working locally while we set up the Google Sheet.

## Why This First

Google Sheets is a good first capture layer because:
- it is free
- it is easy to inspect
- it can be exported to CSV/XLSX
- it supports filters and charts
- it avoids adding Supabase/AWS before the data shape is proven

Supabase can still be added later when we need accounts, app persistence, larger analytics, or richer admin workflows.
