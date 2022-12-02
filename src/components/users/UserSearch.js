import { useState, useContext } from "react";
import GithubContext from "../../store/github/github-context";
import AlertContext from "../../store/alert/alert-context";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const textChangeHandler = (e) => setText(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text === "") {
      return setAlert("Please enter something.", "error");
    }

    searchUsers(text);
    setText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={textChangeHandler}
            />
            <button
              type="submit"
              className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36"
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
