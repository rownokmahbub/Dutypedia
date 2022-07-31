import { sortBy } from "@lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import { BuilderOptions } from "@lib/data/options/builder";
import { FaCheckCircle } from "react-icons/fa";
import AddNewCat from "../AddNewCat";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import MultipleOptionsViewer from "../MultipleOptionsViewer";
import Link from "next/link";
const Categories = [
  {
    id: 1,
    title: "House Builder",
    key: "housebuilder",
  },
  {
    id: 2,
    title: "Office Builder",
    key: "officebuilder",
  },
  {
    id: 3,
    title: "Carpenter",
    key: "carpenter",
  },
  {
    id: 4,
    title: "Road Construction",
    key: "roadconstruction",
  },
  {
    id: 5,
    title: "Bridge Builder",
    key: "bridgebuilder",
  },
  {
    id: 6,
    title: "Tailor Service",
    key: "tailorservice",
    multiple: true,
  },

  {
    id: 7,
    title: "Jewellary Items",
    key: "jewellaryitems",
    multiple: true,
  },
];
const MianBuilder = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(savedData || []);
  const [activeComponents, setActiveComponents] = useState(null);
  const [customCat, setCustomCat] = useState([]);
  const [showCustomCatError, setShowCustomCatError] = useState(false);
  const getOptions = (title, multiple = false) => {
    const data = completedSection.find((d) => d.title == title);
    if (!multiple) {
      return {
        selectedOptions: data?.selectedOptions || [],
        customOptions: data?.customOptions || [],
      };
    } else {
      return data?.multiFormData || [];
    }
  };

  const reset = () => {
    const confirm = window.confirm("Are you sure you want to reset?");
    if (confirm) {
      setCompletedSection([]);
      setCustomCat([]);
    }
  };

  const addToCompletedSection = (data) => {
    //Add if not exist
    if (!completedSection.find((d) => d.title === data.title)) {
      setCompletedSection([...completedSection, data]);
    } else {
      setCompletedSection(
        completedSection.map((d) => {
          if (d.title === data.title) {
            return data;
          }
          return d;
        })
      );
    }
  };
  const addCustomCat = (data) => {
    //Add if not exist
    if (
      customCat.find(
        (d) => d.title.toLowerCase() == data.title.toLowerCase()
      ) ||
      Categories.find((e) => e.title.toLowerCase() == data.title.toLowerCase())
    ) {
      toast.error("Category already exists");
      return;
    }
    setCustomCat([...customCat, data]);
  };
  const removeCustomCat = (cat) => {
    setCustomCat(customCat.filter((d) => d.id !== cat.id));
    setCompletedSection(completedSection.filter((d) => d.title !== cat.title));
  };
  const goToNext = () => {
    console.log(completedSection);
    const emptyCat = customCat.find(
      (d) => !completedSection.find((e) => d.title === e.title)
    );
    if (emptyCat) {
      setShowCustomCatError(true);
      toast.error("Please select all categories");
      return;
    }
    goNext(completedSection);
  };
  const sortCat = sortBy(Categories, "title");

  useEffect(() => {
    const filterCompletedSection = () => {
      setCompletedSection(
        completedSection.filter((item) => {
          if (!item.multiple) {
            return (
              item.selectedOptions.length > 0 || item.customOptions.length > 0
            );
          } else {
            return item;
          }
        })
      );
    };
    filterCompletedSection();
  }, [completedSection]);

  if (activeComponents) {
    return activeComponents;
  }

  return (
    <div className="container max-w-4xl mx-auto">
         <Link href='/become-seller'>
     <img className="pt-2 cursor-pointer pb-4 w-[30px]" src="/Assets/icon/arrowleft.svg" alt="" />
     </Link>
      <div className="w-full rounded-xl overflow-hidden bg-white dark:bg-bg-200">
    
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src="/Assets/images/service/builder.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          {sortCat.map((category, i) => (
            <a
              key={i}
              onClick={() => {
                category.multiple
                  ? setActiveComponents(
                      <MultipleOptionsViewer
                        defaultOptions={BuilderOptions[category.key] || []}
                        title={category.title}
                        data={getOptions(category.title, true)}
                        goBack={() => setActiveComponents(null)}
                        onSubmit={(data) => {
                          addToCompletedSection(data);
                          setActiveComponents(null);
                        }}
                      />
                    )
                  : setActiveComponents(
                      <OptionsViewer
                        defaultOptions={BuilderOptions[category.key] || []}
                        title={category.title}
                        data={getOptions(category.title)}
                        onSubmit={(data) => {
                          addToCompletedSection(data);
                          setActiveComponents(null);
                        }}
                        goBack={() => setActiveComponents(null)}
                      />
                    );
              }}
              className="p-4 flex items-center dark:bg-bg-300 justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 dark:text-white"
            >
              <div className="flex items-center gap-2">
                {completedSection.some((d) => d.title === category.title) && (
                  <span className="text-green-500">
                    <FaCheckCircle />
                  </span>
                )}
                <span>{category.title}</span>
              </div>
              <span className="text-2xl text-gray-400">
                <BiChevronRight />
              </span>
            </a>
          ))}
          {customCat.map((category, i) => (
            <a
              key={i}
              className={`p-4 flex items-center justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 ${
                showCustomCatError &&
                !getOptions(category.title) &&
                "border-2 border-red-500"
              }`}
            >
              <div
                onClick={() => {
                  setActiveComponents(
                    <OptionsViewer
                      defaultOptions={[]}
                      title={category.title}
                      data={getOptions(category.title)}
                      goBack={() => setActiveComponents(null)}
                      onSubmit={(data) => {
                        addToCompletedSection(data);
                        setActiveComponents(null);
                      }}
                    />
                  );
                }}
                className="flex w-full items-center gap-2 flex-1"
              >
                {completedSection.some((d) => d.title === category.title) && (
                  <span className="text-green-500">
                    <FaCheckCircle />
                  </span>
                )}
                <span>{category.title}</span>
              </div>
              <a
                onClick={() => removeCustomCat(category)}
                className="text-red-500 flex-shrink-0 text-xl duration-200 hover:text-red-700 cursor-pointer"
              >
                <MdDelete />
              </a>
            </a>
          ))}
          <AddNewCat onSubmit={(data) => addCustomCat(data)} />
        </div>
        <div className="mt-4 flex justify-end gap-4 sm:gap-8 px-6 pb-8">
          <button
            onClick={reset}
            className={`btn px-8 sm:px-16 w-28 ${
              completedSection.length < 1 &&
              "opacity-30 saturate-0 pointer-events-none"
            }`}
          >
            Cancel
          </button>
          <button
            onClick={goToNext}
            className={`btn btn-primary px-8 sm:px-16 w-28 ${
              completedSection.length < 1 &&
              "opacity-30 saturate-0 pointer-events-none"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MianBuilder;
