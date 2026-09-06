# Notch – Playwright Automation Test

## Overview

This project contains a Playwright automated test created as part of the QA Automation assignment for Notch.

The test covers the **Automation Audit** configuration page and verifies that an email pattern can be added, saved, and persists after page reload.

## Test Scenario

**Add email pattern and save it**

The test performs the following steps:

1. Navigate to the Automation Audit configuration page.
2. Add the email pattern `@shopify`.
3. Press Enter to add the pattern.
4. Click **Save**.
5. Reload the page.
6. Verify that `@shopify` is still visible.

## Prerequisite

The user must be logged in to the application before running the test.

## Technologies

- Playwright
- TypeScript
- Node.js

## Run the Test

Install dependencies:

```bash
npm install

run the test npx playwright test tests/automation-audit.spec.ts

