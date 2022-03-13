import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="flex bg-slate-800 items-center justify-between text-slate-100 px-4 ">
      <div className="flex m-2 items-center">
        <Link to="/">
          <FaGithub className="text-3xl" />
        </Link>

        <Link to="/">
          <span className="text-2xl font-bold ml-2 hidden   md:block">
            GitHub Finder
          </span>
        </Link>
      </div>
      <nav className="flex list-none font-bold">
        <Link to="/">
          <li className="p-4  hover:bg-slate-800">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-4  hover:bg-slate-800">About</li>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
