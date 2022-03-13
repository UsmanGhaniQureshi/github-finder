import RepoItem from "../RepoItem";

const ReposList = ({ repos }) => {
  return (
    <div className="shadow-lg mt-2 p-6  bg-slate-800 rounded-3xl text-white">
      <h3 className="text-center font-extrabold">All Public Repository</h3>
      {repos.map((repo) => (
        <RepoItem key={repo.id} item={repo} />
      ))}
    </div>
  );
};

export default ReposList;
