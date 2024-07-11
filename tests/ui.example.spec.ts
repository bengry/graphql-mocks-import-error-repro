import { test } from "@playwright/test";

import { playwrightHandler } from "@graphql-mocks/network-playwright";
import { GraphQLHandler } from "graphql-mocks";

const graphqlHandler = new GraphQLHandler({
  dependencies: {
    graphqlSchema: "",
  },
});

test.beforeEach(async ({ page }) => {
  await page.route("/graphql", playwrightHandler(graphqlHandler));
});

test("basic test without POM", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("text=Get started").click();
});
