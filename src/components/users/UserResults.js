import { useContext, useEffect } from "react";
import Spinner from "../UI/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../store/github/github-context";

function UserResults() {
  const {users, loading, fetchUsers} = useContext(GithubContext)

  useEffect(() => {
    fetchUsers();
  }, []);

  
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
