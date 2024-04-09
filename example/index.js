/**
 * This script gets information about a public GitHub repository using the GitHub API.
 *
 */

// Import the Octokit core library for interacting with the GitHub API.
// https://github.com/octokit/octokit.js/
// https://github.com/octokit/rest.js#readme
// https://octokit.github.io/rest.js/v20
import { Octokit } from "@octokit/rest";

// Import synchronous Node filesystem write function.
// https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback
// https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
import { writeFileSync } from "node:fs";

// Import the GitHub configuration file for specifying the owner and repo.
/**
 * @typedef {Object} GithubConfig
 * @property {string} owner The owner of the repository.
 * @property {string} repo The repository name.
 */
import githubConfig from "./github-config.js";

// A collection of utility functions for working with the GitHub API and the filesystem.
import { getOpenIssues, writeIssuesToFile } from "./utils.js";


/**
 * The main script function that gets information about a public GitHub repository.
 *
 * @param {Octokit} Octokit The Octokit constructor.
 * @param {GithubConfig} githubConfig
 *
 * @returns
 */
export async function getRepoInfo(Octokit, githubConfig) {
  /** @type {import('./node_modules/@octokit/rest').Octokit}*/
  const octokit = new Octokit();

  const owner = githubConfig.owner;
  const repo = githubConfig.repo;

  if (!owner || !repo) {
    console.error(
      `Please provide owner and repo in the config file.\nReceived owner: ${owner}, repo: ${repo}`,
    );
    return;
  }

  // All network requests are asynchronous, and may fail.
  try {
    // Get repository information
    const repoResult = await octokit.rest.repos.get({
      owner,
      repo,
    });
    const repoData = repoResult.data;

    console.log("Repository Information:");
    console.log(`Name: ${repoData.name}`);
    console.log(`Description: ${repoData.description}`);
    console.log(`URL: ${repoData.html_url}`);
    console.log(`Open Issues: ${repoData.open_issues_count}`);

    // Call the getOpenIssues function
    const openIssues = await getOpenIssues(octokit, owner, repo);

    console.log("\nOpen Issues:");
    openIssues.forEach((issue) => {
      console.log(`- ${issue.title}`);
    });

    // Get closed issues.
    // Write both set of issues to file, in one section for open and another for closed, in updated_at order.
    // Rewrite the issue fetching functions to use the octokit.rest.issues API.
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getRepoInfo(Octokit, githubConfig);
