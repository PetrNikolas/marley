// ------------------------------------------------------------------------------
// Import components for tests
// ------------------------------------------------------------------------------
import { Selector } from "testcafe";

fixture(`Login component`).page`https://getmarleyjs.com/`;

test("Login in to the building", async test => {
  await test.click("button");
});
