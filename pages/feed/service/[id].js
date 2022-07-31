import LoadingScreen from "@components/global/LoadingScreen";
import ProfileRender from "@components/multiple_dashboard/Profile/ProfileRender";
import ServiceDesc from "@components/multiple_dashboard/Profile/ServiceDesc";
import ServiceTypeCard from "@components/multiple_dashboard/Profile/ServiceTypeCard";
import AboutView from "@components/service/AboutView";
import CalendarView from "@components/service/CalendarView";
import AuthContext from "@lib/authContext";
import axios from "axios";
import FeedLayout from "layouts/FeedLayout";
import { useRouter } from "next/router";
import {
  pricingSliderSettings,
  servicesType,
  sliderSettings,
} from "pages/dashboard/multiple/profile";
import { useContext, useState, useEffect, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import Link from "next/link";
import ServiceListView from "@components/service/ServiceListView";
import GigCard from "@components/multiple_dashboard/Profile/GigCard";
import AppointmentView from "@components/service/AppointmentView";
import toast from "react-hot-toast";

const ServiceView = () => {
  const [serviceData, setServiceData] = useState(null);
  const router = useRouter();
  const gigSlider = useRef();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const { user, token } = useContext(AuthContext);
  const [serviceType, setServiceType] = useState("STARTING");
  const [gigs, setGigs] = useState([]);
  let gigData = gigs.find((gig) => gig.type === serviceType);

  useEffect(() => {
    if (router.isReady) {
      const { type } = router.query;
      setServiceType(type || "STARTING");
    }
  }, [router]);

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/services/get-service-by-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setServiceData(data.service);
        setGigs(data.service.gigs);
      } catch (error) {
        console.log(error);
        toast.error("Service not found!");
        router.push("/feed");
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1920px] md:p-8 sm:p-4 px-4">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
          <div className="grid h-max gap-2 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 flex-shrink-0 w-full lg:w-96">
            <ProfileRender
              readOnly
              profileData={serviceData.providerInfo}
              speciality={serviceData.speciality}
              serviceCenterName={serviceData.serviceCenterName}
              wallPhoto={serviceData.wallPhoto}
              profilePhoto={serviceData.profilePhoto}
              serviceId={serviceData.id}
              updatedService={(data) => setServiceData(data)}
            />
            <AboutView
              about={serviceData.about}
              address={serviceData.location}
            />
            <AppointmentView serviceId={serviceData.id} />
            <CalendarView
              workingTime={serviceData.workingTime}
              t47={serviceData.t47}
            />
          </div>
          <div className="flex-1 grid gap-2 md:gap-6 overflow-hidden">
            <div className="overflow-hidden type-slider">
              <Slider {...sliderSettings}>
                {servicesType.map((item) => (
                  <ServiceTypeCard
                    readOnly
                    key={item.id}
                    item={item}
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
            <div className="w-full bg-white dark:bg-bg-300  shadow-3xl p-6 rounded-xl">
              {gigData ? (
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

ServiceView.layout = FeedLayout;
export default ServiceView;
