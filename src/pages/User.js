import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUsers, FaUserCheck, FaGift } from "react-icons/fa";
import { getUserAndRepos } from "../store/GitHubActions";
import { useGitHub } from "../store/GitHubContext";
import ReposList from "../components/ReposList";
import LoadingSpinner from "../components/LoadingSpinner";

const User = () => {
  const { loading, user, repos, dispatch } = useGitHub();
  const { login } = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    (async () => {
      const userData = await getUserAndRepos(login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    })();
  }, [login, dispatch]);
  if (loading) return <LoadingSpinner />;
  else
    return (
      <div className="w-full h-full ">
        <div className="flex flex-col  p-10 lg:w-4/5 mx-auto">
          <div className="text-white mb-4 font-bold">
            <Link className="link no-underline hover:underline " to="/">
              Back to Search
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <div
              className="flex p-5 w-72  h-72 bg-no-repeat bg-contain rounded-lg font-bol  box-border"
              style={{ backgroundImage: `url(${user.avatar_url})` }}
            >
              <div className="self-end text-white text-2xl py-4">
                <h1 className="m-1">{user.name}</h1>
                <p className="m-1 text-sm">{user.login}</p>
              </div>
            </div>

            <div className="flex-1 md:p-6 text-white">
              <div className="flex items-center">
                <h3 className="font-bold">{user.name}</h3>
                <div className="flex p-2 m-2">
                  <span className="bg-lime-900 rounded text-xs mx-2 font-bold from-stone-500">
                    {user.type}
                  </span>
                  <span className="bg-lime-900 rounded text-xs font-bold from-stone-500">
                    {user.hireable ? "Hireable" : "Not Hireable"}
                  </span>
                </div>
              </div>
              <p>{user.bio}</p>
              <a
                href={user.html_url}
                className="btn border-4 mt-5 border-slate-300 outline-2 shadow-sm shadow-black "
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub Profile
              </a>

              <div className="flex gap-2 flex-col md:flex-row mt-4 border-b text-slate-400 rounded-md font-serif border-slate-900 shadow shadow-zinc-800">
                <div className="flex-1 border-r border-slate-600 p-2">
                  <p>Location</p>
                  <strong className="text-white font-extrabold">
                    {user.location}
                  </strong>
                </div>
                <div className="flex-1 border-r border-slate-600 p-2">
                  <p>Website</p>
                  <strong className="text-white font-extrabold">
                    {user.blog}
                  </strong>
                </div>
                <div className="flex-1  p-2">
                  <p>Twitter</p>
                  <strong className="text-white font-extrabold">
                    {user.twitter_username}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-4 p-4 rounded-md border-b text-slate-400  font-serif border-slate-900 shadow shadow-zinc-800">
            <div className="flex flex-1 border-r justify-between border-slate-600 p-4">
              <div>
                <p>Followers</p>
                <strong className="text-white font-extrabold">
                  {user.followers}
                </strong>
              </div>
              <div>
                <FaUsers className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
              </div>
            </div>
            <div className="flex flex-1 border-r justify-between border-slate-600 p-4">
              <div>
                <p>Following</p>
                <strong className="text-white font-extrabold">
                  {user.following}
                </strong>
              </div>
              <div>
                <FaUserCheck className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
              </div>
            </div>
            <div className="flex flex-1 justify-between border-r border-slate-600 p-4">
              <div>
                <p>Public Repos</p>
                <strong className="text-white font-extrabold">
                  {user.public_repos}
                </strong>
              </div>
              <div>
                <div>
                  <FaGift className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-1  justify-between  p-4">
              <div>
                <p>Public Gists</p>
                <strong className="text-white font-extrabold">
                  {user.public_gists}
                </strong>
              </div>
              <div>
                <FaUsers className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
              </div>
            </div>
          </div>
          <ReposList repos={repos} />
        </div>
      </div>
    );
};

export default User;
