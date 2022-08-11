import { useState, useEffect } from "react";
import OptionItem from "./OptionItem";

const ServiceSelectType3 = ({ data, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addToSelectedOptions = (id, title) => {
    setSelectedOptions([...selectedOptions, { id, title }]);
  };
  const removeFromSelectedOptions = (id) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  };
  const toggleSelectedOptions = (id, title) => {
    if (selectedOptions.find((item) => item.id === id)) {
      removeFromSelectedOptions(id);
    } else {
      addToSelectedOptions(id, title);
    }
  };

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);
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
                                  <OptionItem
                                    key={item.id}
                                    item={item}
                                    onClick={(data) =>
                                      toggleSelectedOptions(data.id, data.title)
                                    }
                                    selected={selectedOptions.find(
                                      (data) => data.id === item.id
                                    )}
                                  />
                                )
                              )}

                              {multipleItem.customOptions?.map(
                                (item, index) => (
                                  <OptionItem
                                    key={item.id}
                                    item={item}
                                    onClick={(data) =>
                                      toggleSelectedOptions(data.id, data.title)
                                    }
                                    selected={selectedOptions.find(
                                      (data) => data.id === item.id
                                    )}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )
                    )
                  ) : (
                    <div className="flex flex-wrap gap-4 mb-8">
                      {rootItem.selectedOptions?.map((item, index) => (
                        <OptionItem
                          key={item.id}
                          item={item}
                          onClick={(data) =>
                            toggleSelectedOptions(data.id, data.title)
                          }
                          selected={selectedOptions.find(
                            (data) => data.id === item.id
                          )}
                        />
                      ))}

                      {rootItem.customOptions?.map((item, index) => (
                        <OptionItem
                          key={item.id}
                          item={item}
                          onClick={(data) =>
                            toggleSelectedOptions(data.id, data.title)
                          }
                          selected={selectedOptions.find(
                            (data) => data.id === item.id
                          )}
                        />
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
