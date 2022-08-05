import Image from "next/image";
import search from "/public/Assets/icon/search.svg";
import redplus from "/public/Assets/icon/red-plus.svg";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { GlobalContext } from "@lib/globalContext";
import LoadingScreen from "@components/global/LoadingScreen";
import toast from "react-hot-toast";
import NewNoticeModal from "./NewNoticeModal";
import NoticeDetails from "./NoticeDetails";

const NoticeList = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [showNewNotice, setShowNewNotice] = useState(false);
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { useUi, uiDispatch } = useContext(GlobalContext);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotice = noticeList.filter((notice) => {
    return (
      notice.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.date.toString().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/notice/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNoticeList(data.notices);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotice();
  }, [useUi.refresh]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  if (selectedNotice) {
    return (
      <NoticeDetails
        notice={selectedNotice}
        goBack={() => setSelectedNotice(null)}
      />
    );
  }

  return (
    <>
      {noticeList.length > 0 ? (
        <div className="py-8">
          <div className="flex justify-between mb-4">
            <div className="relative text-gray-600 md:w-96 w-full">
              <input
                className=" h-10 px-5 pl-4 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white dark:text-white dark:bg-bg-300 dark:border-[#515150]"
                type="search"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-2 top-3 cursor-pointer">
                <Image src={search} width={18} height={18} alt="search" />
              </div>
            </div>
            <div className="flex items-center justify-end cursor-pointer">
              <p
                onClick={() => {
                  setShowNewNotice(true);
                }}
                className="items-center -mr-2 dark:text-white dark:bg-bg-300 dark:border-[#515150]"
              >
                Add New
              </p>
              <div className="flex justify-center items-center w-14 h-14 ">
                <Image
                  src={redplus}
                  className=""
                  width={30}
                  height={30}
                  alt="calender"
                />
              </div>
            </div>
          </div>
          <div className="h-auto relative">
            <div className="flex capitalize justify-between text-center px-10 bg-primary py-3 text-white md:rounded-lg rounded-t-lg sticky top-0 ">
              <p className="flex-1">Id/Record </p>
              <p className="flex-1 text-left"> Date</p>
              <p className="flex-1">notice</p>
              <p className="flex-1"></p>
            </div>
            {filteredNotice.map((notice) => (
              <div className="flex divide-x-2 text-center capitalize justify-between px-10 bg-white dark:text-white dark:bg-bg-300 dark:border-[#515150] shadow-3xl mt-4 py-3 rounded-lg ">
                <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">
                  {notice.record}
                </p>
                <p className="flex-1 text-left -ml-11 md:ml-0 px-2">
                  {notice.date}
                </p>

                <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">
                  {notice.subject}
                </p>
                <div className="flex flex-1 justify-end items-center -mr-9 px-2">
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="bg-primary px-2 md:px-3 text-white rounded-md py-1 text-sm mr-1"
                  >
                    view
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-16">
          <a
            onClick={() => {
              setShowNewNotice(true);
            }}
            className="flex flex-col justify-center cursor-pointer"
          >
            <Image
              src="/Assets/icon/plus.svg"
              width={100}
              height={100}
              alt="calender"
            />
            <p className="text-center  md:text-2xl mt-5 ">Create New Notice</p>
          </a>
        </div>
      )}

      <NewNoticeModal
        isOpen={showNewNotice}
        closeModal={() => setShowNewNotice(false)}
      />
    </>
  );
};

export default NoticeList;
