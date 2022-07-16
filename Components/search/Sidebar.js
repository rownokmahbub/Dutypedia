import AccordionFilter from "@components/global/AccordionFilter";

const SearchSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="flex justify-between items-center border px-4 rounded-md shadow-md py-3">
        <span className="text-gray-600">Search Filter</span>
        <a className="text-primary text-xs">Clear</a>
      </div>
      <div className="mt-6 px-4 rounded-md shadow-md py-4 border">
        <p className="text-gray-600">Search by Categories</p>

        <div className="max-h-96 overflow-y-auto flex flex-col">
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="allergy"
              value=""
              className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor="allergy"
              className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
            >
              Allergy & Immunology
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="anesthesilogy"
              value=""
              className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor="anesthesilogy"
              className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
            >
              Anesthesilogy
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="dermatology"
              value=""
              className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor="dermatology"
              className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
            >
              Dermatology
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="diagnostic"
              value=""
              className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor="diagnostic"
              className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
            >
              Diagnostic Radiology
            </label>
          </div>
        </div>

        <div className="mt-4">
          <AccordionFilter title="Price">
            <div className="mt-2 space-y-2">
              <input
                className="px-2 bg-gray-100 py-2 w-32 rounded"
                type="number"
                placeholder="min"
              />
              <input
                className="px-2 bg-gray-100 py-2 w-32 rounded"
                type="number"
                placeholder="max"
              />
            </div>
          </AccordionFilter>
        </div>
        <div className="mt-4">
          <AccordionFilter title="Status">
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="online"
                value=""
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="online"
                className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
              >
                Online
              </label>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="offline"
                value=""
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="offline"
                className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
              >
                Offline
              </label>
            </div>
          </AccordionFilter>
        </div>

        <div className="mt-4">
          <AccordionFilter title="Location">
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="dhaka"
                value=""
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="dhaka"
                className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
              >
                Dhaka
              </label>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="rajbari"
                value=""
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="rajbari"
                className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
              >
                Rajbari
              </label>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="sylhet"
                value=""
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="sylhet"
                className="ml-2 font-medium text-gray-700 text-xs cursor-pointer"
              >
                Sylhet
              </label>
            </div>
          </AccordionFilter>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary btn-block">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
