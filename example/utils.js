/**
 * Given an instance of the Octokit class, owner, and repo, returns an array of open issues.
 * 
 * @param {Octokit} An instance of the Octokit class. 
 * @param {string} owner  
 * @param {string} repo
 * @returns {Promise<Array>} An array of open issues.
 * 
 * @throws {OctokitError} If the request fails.
 * 
 * @see https://github.com/octokit/octokit.js/?tab=readme-ov-file#octokitrequest
 * 
 */
export async function getOpenIssues(octokit, owner, repo) {
  const issuesOpenResult = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    {
      owner,
      repo,
      state: "open",
    },
  );
  const openIssues = issuesOpenResult.data;

  return openIssues;
}

/**
 * A stub for a function to write a list of issues to a file.
 * 
 * @param {string} filename The name of the file to write to.
 * @param {Array} issues An array of issues to write to the file.
 * 
 * @throws {Error} If the write operation fails.
 */
export function writeIssuesToFile(writeFileSync, filename, issues) {
  // Write the issues to a file.
}

export default { getOpenIssues, writeIssuesToFile };
