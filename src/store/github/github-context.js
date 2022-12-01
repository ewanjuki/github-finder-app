import { createContext, useReducer } from "react";
import githubReducer from "./github-reducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const GithubContext = createContext({
  users: [],
  loading: false,
  fetchUsers: () => {},
});

const initialState = {
  users: [],
  loading: true,
};

export const GithubProvider = (props) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: "GET_USERS", payload: data });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
