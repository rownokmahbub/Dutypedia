import ListView from "@components/feed/ListView";
import RecentView, { Views } from "@components/feed/RecentView";
import PopularCategory from "@components/home/PopularCategory";
import SearchSidebar from "@components/search/Sidebar";
import FeedLayout from "layouts/FeedLayout";
import { FaSearch } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";

const Search = () => {
  return (
    <div className="container mx-auto max-w-[1920px] pb-16 pt-20">
      <div className="bg-white py-8 px-8 lg:px-16 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="input-group border items-center px-6 rounded-md shadow-md">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search…"
              className="input focus:ring-0 focus:border-0 active:border-0 active:ring-0 focus:outline-none w-full"
            />
          </div>
          <div className="px-6 rounded-md shadow-md h-full border flex items-center justify-between gap-6">
            <p>Found 350 Reasult</p>
            <div className="flex gap-4">
              <span className="flex w-8 aspect-square justify-center items-center bg-gray-200 rounded">
                <RiMenu5Line />
              </span>
              <span className="flex w-8 aspect-square justify-center items-center bg-primary text-white rounded">
                <RiMenu5Line className=" rotate-90" />
              </span>
            </div>
            <div>
              <select className="select w-full rounded-none text-gray-500 focus:outline-none">
                <option value="" disabled selected>
                  Short by
                </option>
                {/* <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mt-8">
          <SearchSidebar />
          <div>
            <ListView
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8"
              views={Views}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Search.layout = FeedLayout;
export default Search;
