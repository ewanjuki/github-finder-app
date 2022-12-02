import { createContext, useReducer } from "react";
import githubReducer from "./github-reducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const GithubContext = createContext({
  users: [],
  user: {},
  loading: false,
  searchUsers: () => {},
  getUser: () => {},
  clearUser: () => {},
});

const initialState = {
  users: [],
  user: {},
  loading: false,
};

export const GithubProvider = (props) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      return (window.location.pathname = "/notfound");
    }

    const data = await response.json();

    dispatch({ type: "GET_USER", payload: data });
  };

  // Search users
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: "GET_USERS", payload: items });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
