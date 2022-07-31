import LoadingScreen from "@components/global/LoadingScreen";
import AboutView from "@components/service/AboutView";
import CalendarView from "@components/service/CalendarView";
import ServiceListView from "@components/service/ServiceListView";
import AuthContext from "@lib/authContext";
import axios from "axios";
import MultipleDashboardLayout from "layouts/MultipleLayout";
import { useContext, useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import ProfileRender from "@components/multiple_dashboard/Profile/ProfileRender";
import ServiceDesc from "@components/multiple_dashboard/Profile/ServiceDesc";
import Slider from "react-slick";
import ServiceTypeCard from "@components/multiple_dashboard/Profile/ServiceTypeCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import GigCard from "@components/multiple_dashboard/Profile/GigCard";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PricingCard from "@components/multiple_dashboard/Profile/PricingCard";

export const servicesType = [
  {
    id: "STARTING",
    title: "Starting",
    bgColor: "dark:bg-bg-300",
    image: "/Assets/images/dashboard/multiple/bargaining.svg",
  },
  {
    id: "ONETIME",
    title: "Fixed Price",
    bgColor: "dark:bg-bg-300",
    image: "/Assets/images/dashboard/multiple/fixed.svg",
  },
  {
    id: "PACKAGE",
    title: "Package",
    bgColor: "dark:bg-bg-300",
    image: "/Assets/images/dashboard/multiple/package.svg",
  },
  {
    id: "SUBS",
    title: "Subscription",
    bgColor: "dark:bg-bg-300",
    image: "/Assets/images/dashboard/multiple/subscribtion.svg",
  },
  {
    id: "INSTALLMENT",
    title: "Installment",
    bgColor: "dark:bg-bg-300",
    image: "/Assets/images/dashboard/multiple/bargaining.svg",
  },
];

export const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export const pricingSliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  customPaging: (i) => (
    <div className=" bg-gray-200 slik-custom-dot w-4 aspect-square rounded-full border-2 border-gray-100 mt-6"></div>
  ),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

const ProfilePage = () => {
  const { token, logOut } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [gigsIsLoading, setGigsLoading] = useState(true);
  const [serviceData, setServiceData] = useState(null);
  const [gigs, setGigs] = useState(null);
  const [selectedGig, setSelectedGig] = useState(null);
  const [gigData, setGigData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [serviceType, setServiceType] = useState("STARTING");
  const [doRefresh, setDoRefresh] = useState(false);
  const gigSlider = useRef();

  const handelDeleteGig = async (id) => {
    const userAction = confirm(`Are you sure you want to delete this service?`);
    if (userAction) {
      const Request = async () => {
        try {
          const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/services/delete/gig/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDoRefresh(!doRefresh);
          return "Service deleted successfully!";
        } catch (error) {
          throw new Error(error.response?.data?.msg);
        }
      };
      toast.promise(Request(), {
        loading: <b>Deleting... Please wait...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/services/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { service, location } = data;
        setServiceData(service);
        setLocationData(location);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.msg);
        logOut();
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;
      try {
        setGigsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/services/get/gigs/${serviceData?.id}/${serviceType}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { gigs } = data;
        setGigs(gigs);
        setGigData(gigs[0]);
      } catch (error) {
        setGigs(null);
        setGigData(null);
        console.log(error);
        toast.error(error.response?.data?.msg);
      } finally {
        setGigsLoading(false);
      }
    };
    fetchData();
  }, [serviceType, loading, doRefresh]);

  useEffect(() => {
    if (router.isReady) {
      const { type } = router.query;
      setServiceType(type || "STARTING");
    }
  }, [router]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-bg-200 min-h-screen">
        <LoadingScreen fullScreen={false} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1920px] md:p-8 sm:p-4 px-4">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
          <div className="grid h-max gap-2 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 flex-shrink-0 w-full lg:w-96">
            <ProfileRender
              profileData={serviceData.providerInfo}
              speciality={serviceData.speciality}
              serviceCenterName={serviceData.serviceCenterName}
              wallPhoto={serviceData.wallPhoto}
              profilePhoto={serviceData.profilePhoto}
              serviceId={serviceData.id}
              updatedService={(data) => setServiceData(data)}
            />
            <AboutView about={serviceData.about} address={locationData} />
            <CalendarView
              workingTime={serviceData.workingTime}
              t47={serviceData.t47}
            />
          </div>
          <div className="flex-1 space-y-2 md:space-y-6 overflow-hidden">
            <div className="overflow-hidden type-slider">
              <Slider {...sliderSettings}>
                {servicesType.map((item) => (
                  <ServiceTypeCard
                    key={item.id}
                    item={item}
                    isSelected={serviceType === item.id}
                    setServiceType={setServiceType}
                    isEnabled={
                      item.id === "STARTING"
                        ? true
                        : serviceData?.activeServiceTypes?.includes(item.id)
                    }
                    parentServiceId={serviceData?.id}
                  />
                ))}
              </Slider>
            </div>
            <div className="w-full bg-white dark:bg-bg-300  shadow-3xl p-6 rounded-xl mt-5 ">
              {gigsIsLoading ? (
                <LoadingScreen fullScreen={false} />
              ) : gigData ? (
                <>
                  {serviceType !== "STARTING" && (
                    <div className="type-slider pb-8">
                      <div className="md:flex hidden justify-end gap-4 pb-4">
                        <span
                          onClick={() => gigSlider.current.slickPrev()}
                          className="text-primary flex justify-center items-center w-7 aspect-square bg-white shadow-3xl rounded-full text-xl cursor-pointer"
                        >
                          <BiChevronLeft />
                        </span>
                        <span
                          onClick={() => gigSlider.current.slickNext()}
                          className="text-primary flex justify-center items-center w-7 aspect-square bg-white shadow-3xl rounded-full text-xl cursor-pointer"
                        >
                          <BiChevronRight />
                        </span>
                      </div>
                      <Slider ref={gigSlider} {...sliderSettings}>
                        {gigs.map((item) => (
                          <GigCard
                            key={item.id}
                            item={item}
                            isSelected={gigData?.id === item.id}
                            onClick={(data) => setGigData(data)}
                            serviceType={serviceType}
                          />
                        ))}
                        <Link
                          href={{
                            pathname:
                              "/dashboard/multiple/profile/create-service",
                            query: {
                              id: serviceData.id,
                              dashboard: serviceData.dashboard,
                              type: serviceType,
                            },
                          }}
                        >
                          <a className="flex h-full gap-2 shadow-3xl w-full aspect-[10.7/16] border rounded-xl p-4 justify-center items-center dark:text-white">
                            <AiOutlinePlusCircle className="text-xl dark:text-white" />
                            Create Service
                          </a>
                        </Link>
                      </Slider>
                    </div>
                  )}

                  {serviceType === "PACKAGE" && (
                    <div className="type-slider py-8">
                      <Slider {...pricingSliderSettings}>
                        {gigData?.packageData?.map((item, idx) => (
                          <PricingCard key={idx} index={idx} pkg={item} />
                        ))}
                      </Slider>
                    </div>
                  )}

                  <div className="">
                    <div className="flex justify-end gap-2 py-4">
                      <button>
                        <FiEdit className="text-xl text-gray-500 dark:text-white" />
                      </button>
                      {serviceType !== "STARTING" && (
                        <button onClick={() => handelDeleteGig(gigData?.id)}>
                          <RiDeleteBin6Line className="text-xl text-gray-500" />
                        </button>
                      )}
                    </div>
                    <ServiceDesc
                      images={gigData.images}
                      title={gigData.title}
                      description={gigData.description}
                      price={gigData.price}
                      serviceType={serviceType}
                      additionalData={
                        gigData.subsData ||
                        gigData.packageData ||
                        gigData.installmentData
                      }
                    />

                    <div className="mt-16">
                      <ServiceListView
                        data={gigData.services}
                        facilites={gigData.facilites}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white dark:bg-bg-300 w-full min-h-[384px]">
                  <p className="text-xl dark:text-white">No service found</p>
                  <div className="flex flex-col lg:flex-row gap-4 mt-8 justify-between items-center">
                    <img
                      className="max-w-sm"
                      src="/Assets/images/dashboard/multiple/no-service.svg"
                    />
                    <Link
                      href={{
                        pathname: "/dashboard/multiple/profile/create-service",
                        query: {
                          id: serviceData.id,
                          dashboard: serviceData.dashboard,
                          type: serviceType,
                        },
                      }}
                    >
                      <a className="btn btn-primary gap-2">
                        <AiOutlinePlusCircle className="text-xl" />
                        Create Service
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.layout = MultipleDashboardLayout;
export default ProfilePage;
