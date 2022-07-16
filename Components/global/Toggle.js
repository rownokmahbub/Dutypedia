import { Switch } from "@headlessui/react";
import { Fragment } from "react";
import { CgSpinner } from "react-icons/cg";

const Toggle = ({ enabled, onChange, size, isLoading }) => {
  const toggleWidth = size;
  const toggleHeight = Math.round(size / 2);
  const ballSize = toggleHeight - 4;
  const ballXTranslate = enabled ? toggleWidth - toggleHeight : 0;
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      style={{ width: toggleWidth, height: toggleHeight }}
      className={`${enabled ? "bg-primary" : "bg-gray-300"}
          relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        style={{
          width: ballSize,
          height: ballSize,
          transform: `translateX(${ballXTranslate}px)`,
        }}
        className={`text-primary justify-center items-center pointer-events-none inline-flex rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      >
        {isLoading && (
          <Fragment>
            <CgSpinner className="animate-spin text-2xl" />
          </Fragment>
        )}
      </span>
    </Switch>
  );
};
Toggle.defaultProps = {
  size: 60,
  isLoading: false,
};
export default Toggle;
