import assert from "assert";

import sinon from "sinon";

import { getOpenIssues } from "./utils.js";

describe("getOpenIssues", () => { 
  it("attempts to fetch open issues", async () => {
    const githubConfig = {
      owner: "octocat",
      repo: "hello-world",
    };

    const issuesOpenResult = {
      data: [{ title: "Issue 1" }, { title: "Issue 2" }],
    };

    // Create a stub for the Octokit class, so we can control the response.
    const octokit = {
      request: sinon.stub().resolves(issuesOpenResult),
    }

    // Call the function with the stubbed Octokit instance.
    const result = await getOpenIssues(octokit, githubConfig);

    assert.deepStrictEqual(result, issuesOpenResult.data);
    assert(octokit.request.calledOnce);
  });
});
