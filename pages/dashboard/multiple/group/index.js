import AcptCancelTest from "@components/multiple_dashboard/Group/Routine/classtest/AcptCancelTest";
import AddTest from "@components/multiple_dashboard/Group/Routine/classtest/AddTest";
import AllCtTest from "@components/multiple_dashboard/Group/Routine/classtest/AllCtTest";
import CreateClassTest from "@components/multiple_dashboard/Group/Routine/classtest/CreateClassTest";
import Selectclasstest from "@components/multiple_dashboard/Group/Routine/classtest/Selectclasstest";
import UpcomingTest from "@components/multiple_dashboard/Group/Routine/classtest/UpcomingTest";

function index() {
  return (
    <div>
      <Selectclasstest/>
      <CreateClassTest />
      <AllCtTest/>
         <UpcomingTest/>
         <AcptCancelTest></AcptCancelTest>
         <AddTest></AddTest>
    </div>
  );
}

export default index;
