import RepoItem from "./RepoItem";

function RepoList(props) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold my-4">
          Latest Repositories
        </h2>
        {props.repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
