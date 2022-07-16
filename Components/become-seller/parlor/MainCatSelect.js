import { sortBy } from "@lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import { FaCheckCircle } from "react-icons/fa";
import { ParlorOptions } from "@lib/data/options/parlor";
import toast from "react-hot-toast";
import AddNewCat from "../AddNewCat";
import { MdDelete } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";

const Categories = {
  Man: [
    {
      id: 1,
      title: "Hair Shaping & Styling",
      key: "Hair",
    },
    {
      id: 2,
      title: "Color/Texturizing",
      key: "Color",
    },
    {
      id: 3,
      title: "Waxing Service",
      key: "Waxing",
    },
    {
      id: 4,
      title: "Nails",
      key: "Nails",
    },
    {
      id: 5,
      title: "Facial",
      key: "Facial",
    },
    {
      id: 6,
      title: "Extra",
      key: "Extra",
    },
  ],
  Woman: [
    {
      id: 1,
      title: "Facial Treatment",
      key: "Facial",
    },
    {
      id: 2,
      title: "Manicure",
      key: "Manicure",
    },
    {
      id: 3,
      title: "Padicure",
      key: "Padicure",
    },
    {
      id: 4,
      title: "Hair Cut",
      key: "Hair",
    },
    {
      id: 5,
      title: "Hair Color",
      key: "HairColor",
    },
    {
      id: 6,
      title: "Hair Straightener",
      key: "HairStraightener",
    },
    {
      id: 7,
      title: "Hair Spa",
      key: "HairSpa",
    },
    {
      id: 8,
      title: "Head Massage & Body Polishing",
      key: "Head",
    },
    {
      id: 9,
      title: "Skin Treatment",
      key: "Skin",
    },
    {
      id: 10,
      title: "Threading",
      key: "Threading",
    },
    {
      id: 11,
      title: "Bleach & Datan",
      key: "Bleach",
    },
    {
      id: 12,
      title: "Cleanup",
      key: "Cleanup",
    },
    {
      id: 13,
      title: "Waxing",
      key: "Waxing",
    },
    {
      id: 14,
      title: "Make Up",
      key: "MakeUp",
    },
  ],
};
const ParlorMainCatSelect = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(
    savedData || {
      Man: [],
      Woman: [],
    }
  );
  const [customCat, setCustomCat] = useState({
    Man: [],
    Woman: [],
  });
  const [showCustomCatError, setShowCustomCatError] = useState(false);
  const [activeComponents, setActiveComponents] = useState(null);
  const [activeParentCat, setActiveParentCat] = useState(null);
  const getOptions = (title, cat) => {
    const data = completedSection[cat].find((d) => d.title == title);
    if (data) {
      return {
        selectedOptions: data.selectedOptions || [],
        customOptions: data.customOptions || [],
      };
    }
  };

  const reset = (cat) => {
    const confirm = window.confirm("Are you sure you want to reset?");
    if (confirm) {
      setCompletedSection({
        ...completedSection,
        [cat]: [],
      });
    }
  };

  const resetAll = () => {
    const confirm = window.confirm("Are you sure you want to reset?");
    if (confirm) {
      setCompletedSection({ Man: [], Woman: [] });
      setCustomCat({
        Man: [],
        Woman: [],
      });
    }
  };

  const addToCompletedSection = (data, cat) => {
    //Add if not exist
    if (!completedSection[cat].find((d) => d.title === data.title)) {
      setCompletedSection({
        ...completedSection,
        [cat]: [...completedSection[cat], data],
      });
    } else {
      setCompletedSection({
        ...completedSection,
        [cat]: completedSection[cat].map((d) => {
          if (d.title === data.title) {
            return data;
          }
          return d;
        }),
      });
    }
  };

  const addCustomCat = (data, parent) => {
    if (
      customCat[parent].find(
        (d) => d.title.toLowerCase() == data.title.toLowerCase()
      ) ||
      Categories[parent].find(
        (e) => e.title.toLowerCase() == data.title.toLowerCase()
      )
    ) {
      toast.error("Category already exists");
      return;
    }
    setCustomCat({ ...customCat, [parent]: [...customCat[parent], data] });
  };

  const removeCustomCat = (data, parent) => {
    setCustomCat({
      ...customCat,
      [parent]: customCat[parent].filter((d) => d.title !== data.title),
    });
    setCompletedSection({
      ...completedSection,
      [parent]: completedSection[parent].filter((d) => d.title !== data.title),
    });
  };

  const onClickDone = (parent) => {
    const emptyCat = customCat[parent].find(
      (d) => !completedSection[parent].find((e) => d.title === e.title)
    );
    if (emptyCat) {
      setShowCustomCatError(true);
      toast.error("Please select all categories");
      return;
    }
    setShowCustomCatError(false);
    setActiveParentCat(null);
  };
  function checkIfAllEmpty() {
    let empty = 0;
    Object.keys(completedSection).map((key) => {
      if (completedSection[key].length !== 0) {
        empty++;
      }
    });
    if (empty === 0) {
      return true;
    } else {
      return false;
    }
  }
  const isAllEmpty = checkIfAllEmpty();
  const goToNext = () => {
    if (isAllEmpty) {
      toast.error("Please select at least one category");
      return;
    }
    goNext(completedSection);
  };

  useEffect(() => {
    const filterCompletedSection = () => {
      Object.keys(completedSection).map((key) =>
        completedSection[key].map((d) => {
          if (d.selectedOptions.length === 0 && d.customOptions.length === 0) {
            setCompletedSection({
              ...completedSection,
              [key]: completedSection[key].filter((e) => e.title !== d.title),
            });
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
      <div className="w-full rounded-xl overflow-hidden bg-white">
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src="/Assets/images/lawyer/parlour.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {activeParentCat ? (
          <>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {sortBy(Categories[activeParentCat], "title").map(
                  (category, i) => (
                    <a
                      key={i}
                      onClick={() => {
                        setActiveComponents(
                          <OptionsViewer
                            defaultOptions={
                              ParlorOptions[activeParentCat][category.key] || []
                            }
                            title={category.title}
                            data={getOptions(category.title, activeParentCat)}
                            goBack={() => setActiveComponents(null)}
                            onSubmit={(data) => {
                              addToCompletedSection(data, activeParentCat);
                              setActiveComponents(null);
                            }}
                          />
                        );
                      }}
                      className="p-4 flex justify-between items-center gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50"
                    >
                      <div className="flex gap-2 items-center">
                        {completedSection[activeParentCat].some(
                          (d) => d.title === category.title
                        ) && (
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
                  )
                )}
                {customCat[activeParentCat].map((category, i) => (
                  <a
                    key={i}
                    className={`p-4 flex items-center justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 ${
                      showCustomCatError &&
                      !getOptions(category.title, activeParentCat) &&
                      "border-2 border-red-500"
                    }`}
                  >
                    <div
                      onClick={() => {
                        setActiveComponents(
                          <OptionsViewer
                            defaultOptions={[]}
                            title={category.title}
                            data={getOptions(category.title, activeParentCat)}
                            goBack={() => setActiveComponents(null)}
                            onSubmit={(data) => {
                              addToCompletedSection(data, activeParentCat);
                              setActiveComponents(null);
                            }}
                          />
                        );
                      }}
                      className="flex w-full items-center gap-2 flex-1"
                    >
                      {completedSection[activeParentCat].some(
                        (d) => d.title === category.title
                      ) && (
                        <span className="text-green-500">
                          <FaCheckCircle />
                        </span>
                      )}
                      <span>{category.title}</span>
                    </div>
                    <a
                      onClick={() => removeCustomCat(category, activeParentCat)}
                      className="text-red-500 flex-shrink-0 text-xl duration-200 hover:text-red-700 cursor-pointer"
                    >
                      <MdDelete />
                    </a>
                  </a>
                ))}
                <AddNewCat
                  onSubmit={(data) => addCustomCat(data, activeParentCat)}
                />
              </div>

              <div className="mt-4 flex justify-end gap-8 px-6 pb-8">
                <button
                  onClick={() => reset(activeParentCat)}
                  className={`btn px-16 ${
                    completedSection[activeParentCat].length < 1 &&
                    "opacity-30 saturate-0 pointer-events-none"
                  }`}
                >
                  Clear
                </button>
                <button
                  onClick={() => onClickDone(activeParentCat)}
                  className={`btn btn-primary px-16`}
                >
                  Done
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="pt-8 pb-2 text-center text-xl">
              Choose Your Service From Here
            </h1>
            <div className="grid grid-cols-2 gap-8 p-6">
              {Object.keys(Categories).map((category, i) => (
                <a
                  key={i}
                  onClick={() => {
                    setActiveParentCat(category);
                  }}
                  className="p-4 flex flex-col items-center justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50"
                >
                  <div className="w-full aspect-video relative">
                    <Image
                      src={`/Assets/images/lawyer/p-${category}.svg`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    {completedSection[category].length > 0 && (
                      <span className="text-green-500">
                        <FaCheckCircle />
                      </span>
                    )}
                    <span className="text-xl font-bold text-gray-600">
                      {category}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 flex justify-end gap-4 sm:gap-8 px-6 pb-8">
              <button
                onClick={resetAll}
                className={`btn px-8 sm:px-16 ${
                  isAllEmpty && "opacity-30 saturate-0 pointer-events-none"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={goToNext}
                className={`btn btn-primary px-8 sm:px-16 ${
                  isAllEmpty && "opacity-30 saturate-0 pointer-events-none"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParlorMainCatSelect;
