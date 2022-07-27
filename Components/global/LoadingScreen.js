import { CgSpinner } from "react-icons/cg";

const LoadingScreen = ({ fullScreen = true }) => {
  if (fullScreen) {
    return (
      <div className="w-screen h-screen fixed flex justify-center items-center top-0 left-0 bg-white dark:bg-bg z-50">
        <span className="text-primary text-6xl animate-spin">
          <CgSpinner />
        </span>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full min-h-[150px] flex justify-center items-center dark:bg-bg bg-white z-50">
        <span className="text-primary text-4xl animate-spin">
          <CgSpinner />
        </span>
      </div>
    );
  }
};

export default LoadingScreen;
