import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Options = [
  {
    id: 1,
    title: "Sweep",
  },
  {
    id: 2,
    title: "Dirt Cleaning",
  },
  {
    id: 3,
    title: "Toilet Cleaning",
  },
  {
    id: 4,
    title: "Bathroom Cleaning",
  },
  {
    id: 5,
    title: "Making Tea/Coffee",
  },
  {
    id: 6,
    title: "Cook",
  },
  {
    id: 7,
    title: "Wash Clothes",
  },
  {
    id: 8,
    title: "Baby Care",
  },
  {
    id: 9,
    title: "Family House",
  },
  {
    id: 10,
    title: "Bachelor House",
  },
];
const MainHouseKeeper = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(savedData || []);
  const router = useRouter();
  return (
    <div className="">
      <OptionsViewer
        defaultOptions={Options || []}
        title="House Keeper"
        data={[]}
        actionButtonTitle="Next"
        goBack={() => router.back()}
        onSubmit={(data) => {
          if (
            data.selectedOptions.length < 1 &&
            data.customOptions.length < 1
          ) {
            toast.error("Plaese choose at least one option!");
          } else {
            setCompletedSection(data);
            goNext(data);
          }
        }}
      />
    </div>
  );
};

export default MainHouseKeeper;
