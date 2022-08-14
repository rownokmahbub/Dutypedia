import { useState } from "react";

const ServiceSelectType3 = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addToSelectedOptions = (id, title) => {
    setSelectedOptions([...selectedOptions, { id, title }]);
  };
  const removeFromSelectedOptions = (id, title) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  };
  const toggleSelectedOptions = (id, title) => {
    if (selectedOptions.find((item) => item.id === id)) {
      removeFromSelectedOptions(id, title);
    } else {
      addToSelectedOptions(id, title);
    }
  };
  return (
    <>
      {Object.keys(data.options).map(
        (title) =>
          data.options[title].length > 0 && (
            <>
              <div className="text-center mb-4">
                <span className="border-b border-b-primary-500 font-semibold text-primary text-xl border-dashed capitalize px-8 pb-2">
                  {title}
                </span>
              </div>
              {data.options[title].map((rootItem, index) => (
                <>
                  <div className="text-center mb-4">
                    <span className="border-b font-semibold text-gray-600 border-dashed capitalize px-8 pb-2">
                      {rootItem.title}
                    </span>
                  </div>
                  {rootItem.multiple ? (
                    rootItem.multiFormData.map(
                      (multipleItem, index) =>
                        multipleItem.selectedOptions?.length > 0 && (
                          <div>
                            <span className="text-gray-500 text-sm">
                              {multipleItem.title} :{" "}
                            </span>
                            <div className="flex flex-wrap gap-4 mb-8 mt-2">
                              {multipleItem.selectedOptions?.map(
                                (item, index) => (
                                  <span
                                    onClick={() =>
                                      toggleSelectedOptions(item.id, item.title)
                                    }
                                    className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] cursor-pointer`}
                                  >
                                    # {item.title}
                                  </span>
                                )
                              )}

                              {multipleItem.customOptions?.map(
                                (item, index) => (
                                  <span
                                    className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] cursor-pointer`}
                                  >
                                    # {item.title}
                                    {data.category}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )
                    )
                  ) : (
                    <div className="flex flex-wrap gap-4 mb-8">
                      {rootItem.selectedOptions?.map((item, index) => (
                        <span
                          className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] cursor-pointer`}
                        >
                          # {item.title}
                        </span>
                      ))}

                      {rootItem.customOptions?.map((item, index) => (
                        <span
                          className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] cursor-pointer`}
                        >
                          # {item.title}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </>
          )
      )}
    </>
  );
};

export default ServiceSelectType3;
