import OptionItem from "./OptionItem";
import { useState, useEffect } from "react";

const ServiceSelectType1 = ({ data, onChange }) => {
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
      <div className="text-center mb-8">
        <span className="border-b border-dashed capitalize px-8 pb-2">
          {data.category}
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {data.options?.selectedOptions?.map((item, index) => (
          <OptionItem
            key={item.id}
            item={item}
            onClick={(data) => toggleSelectedOptions(data.id, data.title)}
            selected={selectedOptions.find((data) => data.id === item.id)}
          />
        ))}

        {data.options?.customOptions?.map((item, index) => (
          <OptionItem
            key={item.id}
            item={item}
            onClick={(data) => toggleSelectedOptions(data.id, data.title)}
            selected={selectedOptions.find((data) => data.id === item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceSelectType1;
