import { createContext, useContext, useReducer } from "react";

import gitHubReducer from "./GitHubReducer";

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  searchText: "",
};

const GITHUB_CONTEXT = createContext({
  users: [],
  repos: [],
  user: {},
  loading: false,
  searchText: "",
});

export const GitHubContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  return (
    <GITHUB_CONTEXT.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GITHUB_CONTEXT.Provider>
  );
};

export default GITHUB_CONTEXT;

export const useGitHub = () => useContext(GITHUB_CONTEXT);
