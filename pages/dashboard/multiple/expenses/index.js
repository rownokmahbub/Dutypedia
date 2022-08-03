import ExpensesList from "@components/multiple_dashboard/Expenses/ExpensesList";
import MultipleDashboardLayout from "layouts/MultipleLayout";

const ExpensesDashboard = () => {
  return (
    <>
      <div className="md:p-8 sm:p-4 p-0 mx-auto max-w-screen-2xl">
        <div className="shadow-4xl md:shadow-3xl bg-white dark:bg-bg-200 drop-shadow-md rounded-xl p-6">
          <ExpensesList />
        </div>
      </div>
    </>
  );
};

ExpensesDashboard.layout = MultipleDashboardLayout;
export default ExpensesDashboard;
