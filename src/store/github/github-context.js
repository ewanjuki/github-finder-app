import { createContext, useReducer } from "react";
import githubReducer from "./github-reducer";

const GithubContext = createContext({
  users: [],
  user: {},
  repos: [],
  loading: false,
  dispatch: () => {},
});

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  dispatch: () => {},
};

export const GithubProvider = (props) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
