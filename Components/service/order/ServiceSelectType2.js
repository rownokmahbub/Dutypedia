import { useEffect, useState } from "react";
import OptionItem from "./OptionItem";

const ServiceSelectType2 = ({ data, onChange }) => {
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
      {data.options.map((rootItem, index) => (
        <>
          <div className="text-center mb-4">
            <span className="border-b font-semibold text-gray-600 border-dashed capitalize px-8 pb-2">
              {rootItem.title}
            </span>
          </div>
          {rootItem.multiple ? (
            rootItem.multiFormData.map((multipleItem, index) => (
              <div>
                <span className="text-gray-500 text-sm">
                  {multipleItem.title} :{" "}
                </span>
                <div className="flex flex-wrap gap-4 mb-8 mt-2">
                  {multipleItem.selectedOptions?.map((item, index) => (
                    <OptionItem
                      key={item.id}
                      item={item}
                      parent={rootItem.title}
                      onClick={(data) =>
                        toggleSelectedOptions(data.id, data.title)
                      }
                      selected={selectedOptions.find(
                        (data) => data.id === item.id
                      )}
                    />
                  ))}

                  {multipleItem.customOptions?.map((item, index) => (
                    <OptionItem
                      key={item.id}
                      item={item}
                      parent={rootItem.title}
                      onClick={(data) =>
                        toggleSelectedOptions(data.id, data.title)
                      }
                      selected={selectedOptions.find(
                        (data) => data.id === item.id
                      )}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-wrap gap-4 mb-8">
              {rootItem.selectedOptions?.map((item, index) => (
                <OptionItem
                  key={item.id}
                  item={item}
                  parent={rootItem.title}
                  onClick={(data) => toggleSelectedOptions(data.id, data.title)}
                  selected={selectedOptions.find((data) => data.id === item.id)}
                />
              ))}

              {rootItem.customOptions?.map((item, index) => (
                <OptionItem
                  key={item.id}
                  item={item}
                  parent={rootItem.title}
                  onClick={(data) => toggleSelectedOptions(data.id, data.title)}
                  selected={selectedOptions.find((data) => data.id === item.id)}
                />
              ))}
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default ServiceSelectType2;
