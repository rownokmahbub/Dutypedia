import { useEffect, useState } from "react";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Options = [
  {
    id: 1,
    title: "Paint-Interior And Exterior",
  },
  {
    id: 2,
    title: "Wall Repair",
  },
  {
    id: 3,
    title: "Drywall Install,Patch Or Replace",
  },
  {
    id: 4,
    title: "Wall And Ceiling Text",
  },
  {
    id: 5,
    title: "Bathroom And Kitchen Remodeling",
  },
  {
    id: 6,
    title: "Attic And Garage Finishing",
  },
  {
    id: 7,
    title: "Cabinet Refinishing",
  },
  {
    id: 8,
    title: "Lead Removal",
  },
  {
    id: 9,
    title: "Deck Refinishing",
  },
  {
    id: 10,
    title: "Hardwood Floor Refinishing",
  },
  {
    id: 11,
    title: "Commercial Service",
  },
];
const MainPainter = ({ goNext, savedData }) => {
  const [completedSection, setCompletedSection] = useState(savedData || []);
  const router = useRouter();
  return (
    <div className="">
      <OptionsViewer
        defaultOptions={Options || []}
        title="Painter"
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

export default MainPainter;
