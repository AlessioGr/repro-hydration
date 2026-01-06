import type { BrowserContext, Page } from "@playwright/test";

import { expect, test } from "@playwright/test";

export function initPageConsoleErrorCatch(page: Page) {
  page.on("console", (msg) => {
    if (
      msg.type() === "error" &&
      !msg.text().includes("the server responded with a status of")
    ) {
      console.log(`Browser console error: ${msg.text()}`);
      throw new Error(`Browser console error: ${msg.text()}`);
    }
  });

  page.on("pageerror", (error) => {
    throw error;
  });
}

const { beforeAll, describe } = test;

describe("General", () => {
  let page: Page;
  let context: BrowserContext;

  beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    initPageConsoleErrorCatch(page);
  });

  test("repro", async () => {
    for (let i = 0; i < 100; i++) {
      await page.goto("http://localhost:3000/test");
      expect(true).toBe(true);
    }
  });
});
