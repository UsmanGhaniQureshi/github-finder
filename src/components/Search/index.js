import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useGitHub } from "../../store/GitHubContext";
import { getUsersSearch } from "../../store/GitHubActions";

const Search = () => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);
  const { dispatch } = useGitHub();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!text || text === "") {
      setAlert("Please Enter Something");
      setTimeout(() => setAlert(null), 2000);
    } else {
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_SEARCH_TEXT", payload: text });
      const data = await getUsersSearch(text);
      dispatch({ type: "GET_SEARCH_USERS", payload: data });
      setText("");
    }
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR_USER" });
  };
  return (
    <>
      {alert && (
        <p className=" flex items-center font-semibold p-1">
          <span className="text-warning mr-1">
            <GoAlert />
          </span>
          <strong>{alert}</strong>
        </p>
      )}
      <form className="flex items-center p-1 mx-auto" onSubmit={handleSearch}>
        <div className="flex-1 text-slate-600">
          <input
            className="input-bordered w-full input"
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <button type="submit" className="btn btn-ghost flex-none">
          <FaSearch />
        </button>
        <button
          type="reset"
          onClick={handleClear}
          className="btn border-0 btn-error text-white hover:bg-sky-900"
        >
          Clear
        </button>
      </form>
    </>
  );
};

export default Search;
