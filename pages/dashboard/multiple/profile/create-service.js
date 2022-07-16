import MianBuilder from "@components/become-seller/builder/MainBuilder";
import MainBusiness from "@components/become-seller/business/MainBusiness";
import MainCooker from "@components/become-seller/cooker/MainCooker";
import MainElectrician from "@components/become-seller/electrician/MainElectrician";
import MainEntertainment from "@components/become-seller/entertainment/MainEntertainment";
import MainHouseKeeper from "@components/become-seller/housekeeper/MainHouseKeeper";
import MainIt from "@components/become-seller/it/MainIt";
import MainLabor from "@components/become-seller/labor/MainLabor";
import LawyerMainCatSelect from "@components/become-seller/lawyer/MainCatSelect";
import MainLifeStyle from "@components/become-seller/lifestyle/MainLifeStyle";
import MainMusic from "@components/become-seller/musicandaudio/MainMusic";
import MainOnlineTution from "@components/become-seller/online_tution/MainOnlineTution";
import MainPainter from "@components/become-seller/painter/MainPainter";
import ParlorMainCatSelect from "@components/become-seller/parlor/MainCatSelect";
import LoadingScreen from "@components/global/LoadingScreen";
import Stepper from "@components/global/Stepper";
import AddGigFixed from "@components/multiple_dashboard/Profile/AddGigFixed";
import AddGigInstallment from "@components/multiple_dashboard/Profile/AddGigInstallment";
import AddGigPackage from "@components/multiple_dashboard/Profile/AddGigPackage";
import AddGigSubs from "@components/multiple_dashboard/Profile/AddGigSubs";
import MultipleDashboardLayout from "layouts/MultipleLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ValidTypes = ["ONETIME", "PACKAGE", "SUBS", "INSTALLMENT"];
const CreateSetvice = () => {
  const router = useRouter();
  const { type, id, dashboard } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [optionsData, setOptionsData] = useState(null);
  const [savedData, setSavedData] = useState(null);

  const Steps = [
    {
      label: "Choose Service",
    },
    {
      label: "Pricing & Info",
    },
  ];
  const OptionsComponent = () => {
    switch (dashboard) {
      case "BUIDLER":
        return (
          <MianBuilder
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "builder",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "BUSINESS":
        return (
          <MainBusiness
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "business",
                type: 3,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "COOKER":
        return (
          <MainCooker
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "cooker",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "ELECTRICIAN":
        return (
          <MainElectrician
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "electrician",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "ENTERTAINMENT":
        return (
          <MainEntertainment
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "entertainment",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "HOUSEKEEPER":
        return (
          <MainHouseKeeper
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "house keeper",
                type: 1,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "IT":
        return (
          <MainIt
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "it",
                type: 3,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "LABOR":
        return (
          <MainLabor
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "labor",
                type: 1,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "LAWYER":
        return (
          <LawyerMainCatSelect
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "lawyer",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "LIFESTYLE":
        return (
          <MainLifeStyle
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "lifestyle",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "MUSIC":
        return (
          <MainMusic
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "music and audio",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "ONLINETUTION":
        return (
          <MainOnlineTution
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "online tution",
                type: 2,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "PAINTER":
        return (
          <MainPainter
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "painter",
                type: 1,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      case "PARLOUR":
        return (
          <ParlorMainCatSelect
            savedData={savedData}
            goNext={(data) => {
              setOptionsData({
                category: "parlour",
                type: 3,
                options: data,
              });
              setSavedData(data);
              setStep(2);
            }}
          />
        );
      default:
        return <p>Invalid dashboard</p>;
    }
  };

  const AddComponent = () => {
    switch (type) {
      case "ONETIME":
        return (
          <AddGigFixed
            data={{
              serviceId: id,
              type,
              optionsData,
            }}
            goBack={() => setStep(1)}
          />
        );

      case "PACKAGE":
        return (
          <AddGigPackage
            data={{
              serviceId: id,
              type,
              optionsData,
            }}
            goBack={() => setStep(1)}
          />
        );

      case "SUBS":
        return (
          <AddGigSubs
            data={{
              serviceId: id,
              type,
              optionsData,
            }}
            goBack={() => setStep(1)}
          />
        );

      case "INSTALLMENT":
        return (
          <AddGigInstallment
            data={{
              serviceId: id,
              type,
              optionsData,
            }}
            goBack={() => setStep(1)}
          />
        );

      default:
        return <p>Invalid dashboard</p>;
    }
  };

  useEffect(() => {
    const redirect = () => {
      if (router.isReady) {
        if (!ValidTypes.includes(type) || !id) {
          toast.error("Invalid id or service type!");
          router.replace("/dashboard/multiple/profile");
        } else {
          setOptionsData(
            dashboard == "IT" || dashboard == "PARLOUR" ? null : []
          );
          setSavedData(dashboard == "IT" || dashboard == "PARLOUR" ? null : []);
          setIsLoading(false);
        }
      }
    };
    redirect();
  }, [router]);

  if (!router.isReady || isLoading) return <LoadingScreen />;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 px-8">
        <Stepper activeStep={step} stepsArray={Steps} />
      </div>
      {step === 1 && <OptionsComponent />}
      {step === 2 && <AddComponent />}
    </div>
  );
};

CreateSetvice.layout = MultipleDashboardLayout;
export default CreateSetvice;
