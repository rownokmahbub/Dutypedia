import OrderList from "@components/multiple_dashboard/Orders/OrderList";
import MultipleDashboardLayout from "layouts/MultipleLayout";

const OrdersDashboard = () => {
  return (
    <>
      <div className="md:p-8 sm:p-4 p-0 mx-auto max-w-screen-2xl">
        <div className="shadow-4xl md:shadow-3xl bg-white dark:bg-bg-200 drop-shadow-md rounded-xl p-6">
          <OrderList />
        </div>
      </div>
    </>
  );
};

OrdersDashboard.layout = MultipleDashboardLayout;
export default OrdersDashboard;
