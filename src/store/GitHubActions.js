import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_API = process.env.REACT_APP_GITHUB_API_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_API}`,
  },
});

// Get Search Users
export const getUsersSearch = async (search) => {
  const result = await github(`search/users?q=${search}`);

  return result.data.items;
};

// Get User And His Repos
export const getUserAndRepos = async (userLogin) => {
  const [userData, userRepos] = await Promise.all([
    github.get(`users/${userLogin}`),
    github.get(`users/${userLogin}/repos`),
  ]);

  return {
    user: userData.data,
    repos: userRepos.data,
  };
};
