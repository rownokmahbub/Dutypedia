import { sortBy } from "@lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import { ItOptions } from "@lib/data/options/it";
import { FaCheckCircle } from "react-icons/fa";
import AddNewCat from "../AddNewCat";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import MultipleOptionsViewer from "../MultipleOptionsViewer";
const Categories = {
  Data: [
    {
      id: 1,
      title: "Databases",
      key: "Databases",
      multiple: true,
    },
    {
      id: 2,
      title: "Data Processing",
      key: "DataProcessing",
      multiple: true,
    },
    {
      id: 3,
      title: "Data Analytics",
      key: "DataAnalytics",
      multiple: true,
    },
    {
      id: 4,
      title: "Data Visualization",
      key: "DataVisualization",
      multiple: true,
    },
    {
      id: 5,
      title: "Data Science",
      key: "DataScience",
      multiple: true,
    },
    {
      id: 6,
      title: "Data Entry",
      key: "DataEntry",
      multiple: true,
    },
  ],
  "Digital Marketing": [
    {
      id: 1,
      title: "Social Media Marketing",
      key: "SocialMediaMarketing",
      multiple: true,
    },
    {
      id: 2,
      title: "Podcast Marketing",
      key: "PodcastMarketing",
      multiple: true,
    },
    {
      id: 3,
      title: "Social Media Advertising",
      key: "SOCIALMEDIAADVERTISING",
      multiple: true,
    },
    {
      id: 4,
      title: "Seo",
      key: "Seo",
      multiple: true,
    },
    {
      id: 5,
      title: "Email Marketing",
      key: "EmailMarketing",
      multiple: true,
    },
    {
      id: 6,
      title: "Text Message Marketing",
      key: "TextMessageMarketing",
      multiple: true,
    },
    {
      id: 7,
      title: "Sem",
      key: "Sem",
      multiple: true,
    },
    {
      id: 8,
      title: "Crowdfunding",
      key: "Crowdfunding",
      multiple: true,
    },
    {
      id: 9,
      title: "Display Advertising",
      key: "DisplayAdvertising",
      multiple: true,
    },
    {
      id: 10,
      title: "Surveys",
      key: "Surveys",
      multiple: true,
    },
    {
      id: 11,
      title: "Marketing Strategy",
      key: "MarketingStrategy",
      multiple: true,
    },
    {
      id: 12,
      title: "E-Commerce Marketing",
      key: "ECommerceMarketing",
      multiple: true,
    },
    {
      id: 13,
      title: "Influencer Marketing",
      key: "InfluencerMarketing",
      multiple: true,
    },
    {
      id: 14,
      title: "Community Management",
      key: "CommunityManagement",
      multiple: true,
    },
    {
      id: 15,
      title: "Affiliate Marketing",
      key: "AffilateMarkting",
      multiple: true,
    },
    {
      id: 16,
      title: "Mobile App Marketing",
      key: "MobileAppMarketing",
      multiple: true,
    },
    {
      id: 17,
      title: "Music Promotion",
      key: "MusicPromotion",
      multiple: true,
    },
    {
      id: 18,
      title: "Domain Research",
      key: "DomainResearch",
    },
    {
      id: 19,
      title: "Local Seo",
      key: "LocalSeo",
    },
    {
      id: 20,
      title: "Video Marketing",
      key: "VideoMarketing",
    },
    {
      id: 21,
      title: "Web Analytics",
      key: "WebAnalytics",
    },
  ],
  "Programing & Teach": [
    {
      id: 1,
      title: "Website Builders & Cms",
      key: "WebsiteBuildersCms",
      multiple: true,
    },
    {
      id: 2,
      title: "Wordpress",
      key: "Wordpress",
      multiple: true,
    },
    {
      id: 3,
      title: "Game Development",
      key: "GameDevelopment",
      multiple: true,
    },
    {
      id: 4,
      title: "Development For Streamers",
      key: "DevelopmentForStreamers",
      multiple: true,
    },
    {
      id: 5,
      title: "Online Coding Lessons",
      key: "OnlineCodingLessons",
      multiple: true,
    },
    {
      id: 6,
      title: "Support It",
      key: "SupportIt",
      multiple: true,
    },
    {
      id: 7,
      title: "Chat Bots",
      key: "Chatbots",
      multiple: true,
    },
    {
      id: 8,
      title: "Data Analysis Reports",
      key: "DataAnalysisReports",
      multiple: true,
    },
    {
      id: 9,
      title: "Convert Files",
      key: "ConvertFiles",
      multiple: true,
    },
    {
      id: 10,
      title: "Databases",
      key: "Databases",
      multiple: true,
    },
    {
      id: 11,
      title: "Qa & Review",
      key: "QaReview",
      multiple: true,
    },
    {
      id: 12,
      title: "User Testing",
      key: "UserTesting",
      multiple: true,
    },
    {
      id: 13,
      title: "Web Programming",
      key: "WebProgramming",
      multiple: true,
    },
    {
      id: 14,
      title: "Desktop Applications",
      key: "DesktopApplications",
      multiple: true,
    },
    {
      id: 15,
      title: "E-Commerce Development",
      key: "ECommerceDevelopment",
      multiple: true,
    },
    {
      id: 16,
      title: "Mobile Apps",
      key: "MobileApps",
      multiple: true,
    },
  ],
  "Video & Animation": [
    {
      id: 1,
      title: "Whiteboard Animated Explainers",
      key: "WhiteboardanimatedExplainers",
      multiple: true,
    },
    {
      id: 2,
      title: "Animated Gifs",
      key: "AnimatedGifs",
      multiple: true,
    },
    {
      id: 3,
      title: "Intros Outros",
      key: "IntrosOutros",
      multiple: true,
    },
    {
      id: 4,
      title: "Short Video Ads",
      key: "ShortVideoAds",
      multiple: true,
    },
    {
      id: 5,
      title: "Character Animation",
      key: "CharacterAnimation",
      multiple: true,
    },
    {
      id: 6,
      title: "3d Product Animation",
      key: "dProductAnimation",
      multiple: true,
    },
    {
      id: 7,
      title: "Lyric & Music Videos",
      key: "LyricMusicVideos",
      multiple: true,
    },
    {
      id: 8,
      title: "Animation For Kids",
      key: "AnimationForKids",
      multiple: true,
    },
    {
      id: 9,
      title: "Animation For Streamers",
      key: "AnimationForStreamers",
      multiple: true,
    },
    {
      id: 10,
      title: "Live Action Explainers",
      key: "LiveActionExplainers",
      multiple: true,
    },
    {
      id: 11,
      title: "Unboxing Videos",
      key: "UnboxingVideos",
      multiple: true,
    },
    {
      id: 12,
      title: "Drone Videography",
      key: "DroneVideography",
      multiple: true,
    },
    {
      id: 13,
      title: "Product Photography",
      key: "productPhotography",
      multiple: true,
    },
    {
      id: 14,
      title: "App Website Previews",
      key: "AppWebsitePreviews",
    },
    {
      id: 15,
      title: "Elearing VideoProduction",
      key: "ElearingVideoProduction",
    },
    {
      id: 16,
      title: "Lottie Website Animation",
      key: "LottieWebsiteAnimation",
    },
    {
      id: 17,
      title: "Screencasting Videos",
      key: "ScreencastingVideos",
    },
    {
      id: 18,
      title: "SlideShow Videos",
      key: "SlideShowVideos",
    },
    {
      id: 19,
      title: "Subtitle & Captions",
      key: "SubtitleCaptions",
    },
    {
      id: 20,
      title: "Video Editing",
      key: "VideoEditing",
    },
    {
      id: 21,
      title: "Visual Effect",
      key: "VisualEffect",
    },
  ],
  Graphic: [
    {
      id: 1,
      title: "Graphics For Streamers",
      multiple: true,
      key: "GraphicsForStreamers",
    },
    {
      id: 2,
      title: "Business Cards & Stationery",
      multiple: true,
      key: "BusinessCards",
    },
    {
      id: 3,
      title: "Illustration",
      multiple: true,
      key: "Illustration",
    },
    {
      id: 4,
      title: "Pattern Design",
      multiple: true,
      key: "PatternDesign",
    },
    {
      id: 5,
      title: "Flyer Design",
      multiple: true,
      key: "FlyerDesign",
    },
    {
      id: 6,
      title: "Book Design",
      multiple: true,
      key: "BookDesign",
    },
    {
      id: 7,
      title: "Album Cover Design",
      multiple: true,
      key: "AlbumCoverDesign",
    },
    {
      id: 8,
      title: "Packaging Design",
      multiple: true,
      key: "PackagingDesign",
    },
    {
      id: 9,
      title: "Ar Filters & Lenses",
      multiple: true,
      key: "ArFiltersLenses",
    },
    {
      id: 10,
      title: "Web & Mobile Design",
      multiple: true,
      key: "WebMobileDesign",
    },
    {
      id: 11,
      title: "Social Media Design",
      multiple: true,
      key: "SocialMediaDesign",
    },
    {
      id: 12,
      title: "Menu Design",
      multiple: true,
      key: "MenuDesign",
    },
    {
      id: 13,
      title: "Invitation Design",
      multiple: true,
      key: "InvitationDesign",
    },
    {
      id: 14,
      title: "Portraits & Caricatures",
      multiple: true,
      key: "PortraitsCaricatures",
    },
    {
      id: 15,
      title: "Cartoons & Comics",
      multiple: true,
      key: "CartoonsComics",
    },
    {
      id: 16,
      title: "WebBanners",
      multiple: true,
      key: "WebBanners",
    },
    {
      id: 17,
      title: "Photoshop & Editing",
      multiple: true,
      key: "PhotoshopEditing",
    },
    {
      id: 18,
      title: "Architecture &Interior Design",
      multiple: true,
      key: "ArchitectureInteriorDesign",
    },
    {
      id: 19,
      title: "Landscape Design",
      multiple: true,
      key: "LandscapeDesign",
    },
    {
      id: 20,
      title: "Character Modeling",
      multiple: true,
      key: "CharacterModeling",
    },
    {
      id: 21,
      title: "Industrial productDesign",
      multiple: true,
      key: "IndustrialproductDesign",
    },
    {
      id: 22,
      title: "Trade Booth Trade",
      multiple: true,
      key: "TradeBoothTrade",
    },
    {
      id: 23,
      title: "Fashion & Design",
      multiple: true,
      key: "FashionDesign",
    },
    {
      id: 24,
      title: "Jewelry Design",
      multiple: true,
      key: "JewelryDesign",
    },
    {
      id: 25,
      title: "Presentation Design",
      multiple: true,
      key: "ResentationDesign",
    },
    {
      id: 26,
      title: "Car Wraps",
      multiple: true,
      key: "CarWraps",
    },
    {
      id: 27,
      title: "Tattoo Design",
      multiple: true,
      key: "TattooDesign",
    },
    {
      id: 28,
      title: "Brand Style Guide",

      key: "BrandStyleGuide",
    },
    {
      id: 29,
      title: "Catalog Design",

      key: "FormatType",
    },
    {
      id: 30,
      title: "Game Art",
      key: "GameCategory",
    },
    {
      id: 31,
      title: "Infographic Design",

      key: "Infographic",
    },
    {
      id: 32,
      title: "Logo Design",

      key: "LogoDesign",
    },
    {
      id: 33,
      title: "Podcast Design",

      key: "PodcastDesign",
    },
    {
      id: 34,
      title: "Postcard Design",

      key: "PostcardDesign",
    },
    {
      id: 35,
      title: "Story Boards",

      key: "StoryBoards",
    },
    {
      id: 36,
      title: "Signage Design",

      key: "SignageDesign",
    },
    {
      id: 37,
      title: "Tshirt & Merchandise ",

      key: "Tshirt",
    },
  ],
};
const MainIt = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(
    savedData || {
      Data: [],
      "Digital Marketing": [],
      Graphic: [],
      "Programing & Teach": [],
      "Video & Animation": [],
    }
  );
  const [customCat, setCustomCat] = useState({
    Data: [],
    "Digital Marketing": [],
    Graphic: [],
    "Programing & Teach": [],
    "Video & Animation": [],
  });
  const [showCustomCatError, setShowCustomCatError] = useState(false);
  const [activeComponents, setActiveComponents] = useState(null);
  const [activeParentCat, setActiveParentCat] = useState(null);
  const getOptions = (title, cat, multiple = false) => {
    const data = completedSection[cat].find((d) => d.title == title);
    if (!multiple) {
      return {
        selectedOptions: data?.selectedOptions || [],
        customOptions: data?.customOptions || [],
      };
    } else {
      return data?.multiFormData || [];
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
      setCompletedSection({
        Data: [],
        "Digital Marketing": [],
        Graphic: [],
        "Programing & Teach": [],
        "Video & Animation": [],
      });
      setCustomCat({
        Data: [],
        "Digital Marketing": [],
        Graphic: [],
        "Programing & Teach": [],
        "Video & Animation ": [],
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
          if (!d.multiple) {
            if (
              d.selectedOptions.length === 0 &&
              d.customOptions.length === 0
            ) {
              setCompletedSection({
                ...completedSection,
                [key]: completedSection[key].filter((e) => e.title !== d.title),
              });
            }
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
      <div className="w-full rounded-xl overflow-hidden bg-white dark:bg-bg-200">
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src="/Assets/images/service/it.jpg"
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
                        category.multiple
                          ? setActiveComponents(
                              <MultipleOptionsViewer
                                defaultOptions={
                                  ItOptions[activeParentCat][category.key] || []
                                }
                                title={category.title}
                                data={getOptions(
                                  category.title,
                                  activeParentCat,
                                  true
                                )}
                                goBack={() => setActiveComponents(null)}
                                onSubmit={(data) => {
                                  addToCompletedSection(data, activeParentCat);
                                  setActiveComponents(null);
                                }}
                              />
                            )
                          : setActiveComponents(
                              <OptionsViewer
                                defaultOptions={
                                  ItOptions[activeParentCat][category.key] || []
                                }
                                title={category.title}
                                data={getOptions(
                                  category.title,
                                  activeParentCat
                                )}
                                goBack={() => setActiveComponents(null)}
                                onSubmit={(data) => {
                                  addToCompletedSection(data, activeParentCat);
                                  setActiveComponents(null);
                                }}
                              />
                            );
                      }}
                      className="p-4 flex items-center dark:bg-bg-300 justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 dark:text-white"
                    >
                      <div className="flex gap-2 items-center ">
                        {completedSection[activeParentCat].some(
                          (d) => d.title === category.title
                        ) && (
                          <span className="text-green-500">
                            <FaCheckCircle />
                          </span>
                        )}
                        <span className="dark:text-white">{category.title}</span>
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

              <div className="mt-4 flex justify-end gap-4 sm:gap-8 px-6 pb-8">
                <button
                  onClick={() => reset(activeParentCat)}
                  className={`btn px-8 sm:px-16 ${
                    completedSection[activeParentCat].length < 1 &&
                    "opacity-30 saturate-0 pointer-events-none"
                  }`}
                >
                  Clear
                </button>
                <button
                  onClick={() => onClickDone(activeParentCat)}
                  className={`btn btn-primary px-8 sm:px-16`}
                >
                  Done
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="pt-8 pb-2 text-center text-xl dark:text-white">
              Choose Your Service From Here
            </h1>
            <div className="grid grid-cols-2 gap-8 p-6">
              {Object.keys(Categories).map((category, i) => (
                <a
                  key={i}
                  onClick={() => {
                    setActiveParentCat(category);
                  }}
                  className="p-4 flex flex-col items-center justify-between gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 dark:bg-bg-300"
                >
                  <div className="w-full aspect-video relative">
                    <Image
                      src={`/Assets/images/it/p-${category}.svg`}
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
                    <span className="text-sm sm:text-xl font-bold text-gray-600 dark:text-white">
                      {category}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 flex justify-end gap-4 sm:gap-8 px-6 pb-8">
              <button
                onClick={resetAll}
                className={`btn px-8 sm:px-16 w-28  ${
                  isAllEmpty && "opacity-30 saturate-0 pointer-events-none"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={goToNext}
                className={`btn-primary btn px-8 sm:px-16 w-28 ${
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

export default MainIt;
