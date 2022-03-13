import Footer from "../Footer";
import NavBar from "../NavBar";

const LayOut = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex-none">
        <NavBar />
      </div>
      <div className="bg-slate-700 text-white flex-1">{children}</div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;
