import OfflineTime from "@components/multiple_dashboard/Appointment/OfflineTime";
import OnlineTime from "@components/multiple_dashboard/Appointment/OnlineTime";
import Accepted from "@components/multiple_dashboard/Appointment/request/Accepted";
import AppoinmentEnd from "@components/multiple_dashboard/Appointment/request/AppoinmentEnd";
import Canceled from "@components/multiple_dashboard/Appointment/request/Canceled";
import CancelRequest from "@components/multiple_dashboard/Appointment/request/CancelRequest";
import Datetime from "@components/multiple_dashboard/Appointment/request/Datetime";
import SentCancel from "@components/multiple_dashboard/Appointment/request/SentCancel";

import MultipleDashboardLayout from "layouts/MultipleLayout";

import {
  OfflineSearch,
  OnlineSearch,
  Nofile,
} from "../../../../Components/multiple_dashboard/Appointment";
const Index = () => {
  return (
    <>
      <OnlineTime />
      <Nofile></Nofile>
      {/* <Accepted/>
        <AppoinmentEnd/>
        <Canceled/>
       <CancelRequest/>
       <Datetime/>
       <SentCancel/> */}
    </>
  );
};
Index.layout = MultipleDashboardLayout;
export default Index;
