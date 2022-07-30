import AppointmentsTab from "@components/multiple_dashboard/Appointment/AppointmentsTab";
import NewAppoModalDashboard from "@components/multiple_dashboard/Appointment/NewAppoinmentModal";
import MultipleDashboardLayout from "layouts/MultipleLayout";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const AppoinmentPageMultiple = () => {
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  return (
    <>
      <div className="md:p-8 sm:p-4 p-0 mx-auto max-w-screen-2xl">
        <div className="shadow-4xl md:shadow-3xl bg-white dark:bg-bg-200 drop-shadow-md rounded-xl p-6">
          <AppointmentsTab />
        </div>
        <button
          onClick={() => setShowNewAppointment(true)}
          className="btn btn-circle btn-primary fixed right-8 bottom-4"
        >
          <BiPlus className="text-4xl" />
        </button>
      </div>
      <NewAppoModalDashboard
        isOpen={showNewAppointment}
        closeModal={() => setShowNewAppointment(false)}
      />
    </>
  );
};

AppoinmentPageMultiple.layout = MultipleDashboardLayout;
export default AppoinmentPageMultiple;
