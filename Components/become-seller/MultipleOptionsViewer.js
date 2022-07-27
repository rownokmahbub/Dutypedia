import { useEffect, useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import MultipleOptionsForm from "./MultipleOptionsForm";
const MultipleOptionsViewer = ({
  defaultOptions = [],
  onSubmit,
  goBack,
  title,
  data,
}) => {
  const [multiFormData, setMultiFormData] = useState([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const getOptions = (title) => {
    const options = data.find((d) => d.title == title);
    if (options) {
      return {
        selectedOptions: options.selectedOptions || [],
        customOptions: options.customOptions || [],
      };
    }
  };

  const addToMultiFormData = (data) => {
    if (!multiFormData.find((d) => d.title === data.title)) {
      setMultiFormData([...multiFormData, data]);
    } else {
      setMultiFormData(
        multiFormData.map((d) => {
          if (d.title === data.title) {
            return data;
          }
          return d;
        })
      );
    }
  };
  const submit = () => {
    // if (customOptions.some((option) => option.title === "")) {
    //   toast.error("Please fill all custom options");
    //   return;
    // }
    console.log(multiFormData);
    onSubmit({
      title,
      multiple: true,
      multiFormData,
    });
  };

  useEffect(() => {
    //scroll to top
    window?.scrollTo(0, 150);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
      setIsBtnDisabled(false);
      return;
    }
    console.log(multiFormData);
    if (
      multiFormData.some((d) => d.selectedOptions.length > 0) ||
      multiFormData.some((d) => d.customOptions.length > 0)
    ) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [multiFormData]);

  return (
    <>
      <div className="max-w-4xl mx-auto container pb-4">
        <BsArrowLeftSquare
          onClick={() => goBack()}
          className="text-3xl cursor-pointer text-gray-400 dark:text-white md:mx-20  md:mt-10"
        />
        <h1 className="text-center text-xl pt-8 dark:text-white">
          Choose your service from here
        </h1>
      </div>
      {Object.keys(defaultOptions).map((title) => (
        <MultipleOptionsForm
          title={title}
          defaultOptions={defaultOptions[title]}
          data={getOptions(title)}
          onSubmit={(data) => {
            addToMultiFormData(data);
          }}
        />
      ))}
      <div className="mt-4 flex justify-end pb-16 max-w-xl mx-auto ">
        <button
          disabled={isBtnDisabled}
          onClick={submit}
          className="btn btn-primary px-16 mr-5 md:mr-0 dark:text-white"
        >
          Done
        </button>
      </div>
    </>
  );
};

export default MultipleOptionsViewer;
