import { Link } from "react-router-dom";

const ListItem = ({ user }) => {
  return (
    <div className="flex flex-1 p-4 items-center bg-slate-800 rounded-2xl border shadow hover:shadow-slate-50 transition-all  hover:bg-slate-700">
      <div className="w-10 h-10 p-px bg-slate-100 rounded-full">
        <img
          className="flex items-center rounded-full bg-contain"
          src={user.avatar_url}
          alt="user-Name"
        />
      </div>
      <div className="flex-1 flex-col mx-3">
        <h4>{user.login}</h4>
        <Link
          className="text-xs text-slate-50 font-light font-mono"
          to={"/user/" + user.login}
        >
          Visit Git Profile
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
