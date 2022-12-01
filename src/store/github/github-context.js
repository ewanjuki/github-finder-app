import { createContext, useState } from "react";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const GithubContext = createContext({
  users: [],
  loading: false,
  fetchUsers: () => {}
});

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
