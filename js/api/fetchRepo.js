export const fetchRepo = async (owner, repo) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  return data;
};
