import { sortBy } from "@lib/utils";
import { nanoid } from "nanoid";
import { BsArrowLeftSquare, BsPlusCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import CheckBox from "@components/global/CheckBox";
import toast from "react-hot-toast";

const OptionsViewer = ({
  defaultOptions = [],
  onSubmit,
  goBack,
  title,
  data,
  actionButtonTitle = "Done",
  noHeader = false,
}) => {
  const sortOptions = sortBy(defaultOptions, "title");
  const [customOptions, setCustomOptions] = useState(data?.customOptions || []);
  const [selectedOptions, setSelectedOptions] = useState(
    data?.selectedOptions || []
  );
  // add custom option
  const addCustomOption = () => {
    setCustomOptions([
      ...customOptions,
      {
        id: nanoid(),
        title: "",
      },
    ]);
  };

  //toggle selected option
  const toggleSelectedOption = (option) => {
    if (selectedOptions.some((d) => d.id === option.id)) {
      setSelectedOptions(selectedOptions.filter((d) => d.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, { ...option }]);
    }
  };

  //remove custom option
  const removeCustomOption = (id) => {
    setCustomOptions(customOptions.filter((option) => option.id !== id));
  };

  //update custom option
  const updateCustomOption = (id, title) => {
    setCustomOptions(
      customOptions.map((option) => {
        if (option.id === id) {
          return {
            ...option,
            title,
          };
        }
        return option;
      })
    );
  };

  //submit
  const submit = () => {
    if (!noHeader) {
      if (customOptions.some((option) => option.title === "")) {
        toast.error("Please fill all custom options");
        return;
      }
    }
    onSubmit({
      title,
      selectedOptions,
      customOptions,
    });
  };

  useEffect(() => {
    //scroll to top
    window?.scrollTo(0, 150);
  }, []);

  useEffect(() => {
    if (noHeader) {
      submit();
    }
  }, [selectedOptions, customOptions]);

  return (
    <div className={`max-w-4xl mx-auto ${!noHeader && "container"}`}>
      {!noHeader && (
        <>
          <BsArrowLeftSquare
            onClick={() => goBack()}
            className="text-3xl cursor-pointer text-gray-400 md:mx-20  md:mt-10"
          />
          <h1 className="text-center text-xl pt-8">
            Choose your service from here
          </h1>
        </>
      )}
      <div className="max-w-xl mx-auto">
        <div className=" rounded-lg overflow-hidden mt-8 border shadow-md bg-white">
          <div className="flex bg-primary px-4 py-3">
            <div className="flex-1 text-white pl-4">{title}</div>
            <div className="flex-shrink-0 text-white pr-8 w-20 sm:w-40 text-center">
              Select
            </div>
          </div>

          <div className="divide-y-2">
            {sortOptions.map((option, i) => (
              <div key={i} className="flex px-8 divide-x-2">
                <div className="flex-1 py-4 pr-4">{option.title}</div>
                <div className=" flex-shrink-0 px-4 py-4 w-20 sm:w-40 text-center flex justify-center items-center">
                  <CheckBox
                    value={selectedOptions.some((d) => d.id === option.id)}
                    onChange={() => toggleSelectedOption(option)}
                  />
                </div>
              </div>
            ))}

            {customOptions.map((option, i) => (
              <div key={i} className="flex px-8 divide-x-2">
                <input
                  type="text"
                  placeholder="Title"
                  className=" bg-transparent py-4 flex-1 border-0 w-full pr-4 focus:outline-none"
                  onChange={(event) =>
                    updateCustomOption(option.id, event.target.value)
                  }
                  value={option.title}
                />
                <div className=" flex-shrink-0 w-40 py-4 flex items-center justify-center">
                  <a
                    onClick={() => removeCustomOption(option.id)}
                    className="text-red-500 text-xl duration-200 hover:text-red-700 cursor-pointer"
                  >
                    <MdDelete />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          onClick={() => addCustomOption("test")}
          className="btn btn-link gap-2 p-0 text-gray-500 lowercase font-normal"
        >
          <BsPlusCircle />
          add more
        </a>

        {!noHeader && (
          <div className="mt-4 flex justify-end pb-16">
            <button
              disabled={
                !data && !selectedOptions?.length && !customOptions?.length
              }
              onClick={submit}
              className="btn btn-primary px-16"
            >
              {actionButtonTitle}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionsViewer;
