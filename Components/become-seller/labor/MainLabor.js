import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Options = [
  {
    id: 1,
    title: "Construction Work",
  },
  {
    id: 2,
    title: "House Cleaning",
  },
  {
    id: 3,
    title: "Road Cleaning",
  },
  {
    id: 4,
    title: "Bus/Truck Helper",
  },
  {
    id: 5,
    title: "Security Guard",
  },
  {
    id: 6,
    title: "Cloth Washing",
  },
  {
    id: 7,
    title: "Laundry",
  },
  {
    id: 8,
    title: "Volunteer",
  },
  {
    id: 9,
    title: "Hotel/Resturant/Party Waiter",
  },
];
const MainLabor = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(savedData || []);
  const router = useRouter();
  return (
    <div className="">
      <OptionsViewer
        defaultOptions={Options || []}
        title="Labor"
        data={completedSection || []}
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

export default MainLabor;
