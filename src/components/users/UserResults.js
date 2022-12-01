import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_URL}/users`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
