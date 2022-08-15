import { FaMobile, FaEnvelope } from "react-icons/fa";
import SocialMediaLinks from "../components/SocialMediaLinks";

const About = () => {
  return (
    <div className="flex bg-slate-900 mt-10 rounded-3xl w-full md:w-3/4 mx-auto p-10  md:justify-center md:items-center ">
      <div className="flex flex-col  md:flex-row">
        <div className="flex-1 md:w-2/3 p-4 rounded-2xl bg-white">
          <img
            className=" w-full lg:w-96 rounded-2xl"
            src={"usman-ghani.png"}
            alt="Usman Ghani"
          />
        </div>
        <div className="flex flex-col flex-1 px-7 mt-4  md:p-10  md:mt-0">
          <div className="mt-2">
            <p>
              Hello I am <strong>Usman Ghani Qureshi</strong>
            </p>
            <label>
              <strong>Junior React Developer</strong>
            </label>
            <p className="flex items-center">
              <FaMobile className="text-cyan-400 mx-2" /> 0335-1495270
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-white mx-2" />
              musmanghani2000@gmail.com
            </p>
          </div>

          <p className="mt-2">
            A React Developer from Lahore, Pakistan. Graduated from University
            of Education, Lahore. Love to Listen song, play game and read book.
          </p>
          <div className="mt-3">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
