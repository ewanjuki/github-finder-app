import { Link } from "react-router-dom";

function UserItem(props) {
  const { login, avatar_url } = props.user;

  return (
    <div className="card shadow-md bg-base-100 compact side">
      <div className="card-body flex-row items-center space-x-4">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>

        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
