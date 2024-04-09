import { describe, test, expect } from "vitest";
import { getRepoDescription } from "./index.js";

describe("index", () => {
  test("getRepoDescription", async () => {
    expect(
      getRepoDescription({
        description: "A simple web application",
      })
    ).toBe("A simple web application");
  });
});
