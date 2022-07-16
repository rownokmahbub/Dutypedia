import Accordion from "@components/global/Accordion";
import MultipleDashboardLayout from "layouts/MultipleLayout";

const MultipleHomePage = () => {
  return (
    <div className="bg-white h-screen">
      <div className="max-w-sm flex">
        <Accordion noBorder title="Registration">
          <p className="py-2">Some content</p>
        </Accordion>
      </div>
    </div>
  );
};

MultipleHomePage.layout = MultipleDashboardLayout;
export default MultipleHomePage;
