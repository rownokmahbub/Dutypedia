import NoticeList from "@components/multiple_dashboard/Notice/NoticeList";
import MultipleDashboardLayout from "layouts/MultipleLayout";

const NoticeDashboard = () => {
  return (
    <>
      <div className="md:p-8 sm:p-4 p-0 mx-auto max-w-screen-2xl">
        <div className="shadow-4xl md:shadow-3xl bg-white dark:bg-bg-200 drop-shadow-md rounded-xl p-6">
          <NoticeList />
        </div>
      </div>
    </>
  );
};

NoticeDashboard.layout = MultipleDashboardLayout;
export default NoticeDashboard;
