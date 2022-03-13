import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="flex mx-auto w-full h-full items-center justify-center">
      <FaSpinner className="animate-spin h-10 w-10 mr-3" />
    </div>
  );
};

export default LoadingSpinner;
