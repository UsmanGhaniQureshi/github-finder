import { useGitHub } from "../../store/GitHubContext";
import ListItem from "../ListItem";
import LoadingSpinner from "../LoadingSpinner";

const UserList = () => {
  const { users, loading, searchText } = useGitHub();

  if (loading) return <LoadingSpinner />;
  else
    return (
      <div className="flex flex-col sm:items-stretch">
        <h1 className="font-bold font-sans md:text-4xl p-3">
          {!searchText && "Search Github Users"}

          {users.length === 0 && searchText && "No Users Found"}

          {users.length > 0 && (
            <>
             Search result for {searchText} is {users.length}
            </>
          )}
        </h1>

        {users.length > 0 && (
          <div className="grid bg-slate-800 rounded-lg grid-cols-1 p-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:grid-cols-2 ">
            {users.map((user, index) => (
              <ListItem user={user} key={index} />
            ))}
          </div>
        )}
      </div>
    );
};

export default UserList;
