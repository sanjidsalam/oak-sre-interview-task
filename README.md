# Interview task

**Please clone this repo to your own GitHub account, or if you don't have one, just check it out locally, but in that case please don't push the results**

A technical exercise for SRE interviews, exploring coding approach and API interactions.

You can use JavaScript, Python, or shell to complete this task. All the tasks require you have [Git](https://git-scm.com/downloads) installed on your machine.

You will need to use the GithHub API, specifically the [List repository issues](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues) endpoint. Feel free to use [Octokit.js](https://github.com/octokit/octokit.js) or [PyGithub](https://github.com/PyGithub/PyGithub).

## Task

For the public [Oak Web Application repository on GitHub](https://github.com/oaknational/Oak-Web-Application/):

1. Write a function which fetches and returns the repo's issues, as an object of the form `{ open: [], closed: [] }`.
2. Write a function which takes a list of issues, and returns the issue with the most comments.
3. Write a function which takes a list of issues, and returns a list of the top 3 posters (users) of these issues.
4. Write a function which returns some health metrics for the repo. This could include:
   - average time taken to close issues
   - open vs closed issue ratio
   - number of issues with no comments
   - number of stars and forks
   - number of contributors
   - what else could you include?

Feel free to organise your code as best you see fit.

If you'd prefer to write in Javascript, there's some boilerplate code for you in the `/js` directory, if Python's your thing, head to `/python`, or if you prefer shell `/sh`.

## Testing

Testing is encouraged, but try to ensure to test your own logic, not that an external API is doing what it should be doing.
