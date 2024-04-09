export const getRepoDescription = (repo) => {
  return repo.description;
};

// Uncomment the below to print the description of a repo
// import { fetchRepo } from "./api/fetchRepo.js";
// fetchRepo("oaknational", "oak-web-application")
//   .then(getRepoDescription)
//   .then(console.log);
