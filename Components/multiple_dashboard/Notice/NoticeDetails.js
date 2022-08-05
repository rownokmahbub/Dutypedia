import { useContext, useRef, useState } from "react";
import Image from "next/image";
import printer from "/public/Assets/icon/printer.svg";
import path from "/public/Assets/icon/edit-new.svg";
import share from "/public/Assets/icon/delete.svg";
import axios from "axios";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import toast from "react-hot-toast";
import ReactToPrint from "react-to-print";
import EditNoticeModal from "./EditNoticeModal";

const NoticeDetails = ({ notice, goBack }) => {
  const { token } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);
  const componentRef = useRef();
  const [showEditNotice, setShowEditNotice] = useState(false);
  const [activeNotice, setActiveNotice] = useState(notice);

  const handelDelete = async (id) => {
    const userAction = confirm(`Are you sure you want to delete this?`);
    if (userAction) {
      const Request = async () => {
        try {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/notice/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          uiDispatch({ type: "DO_REFRESH" });
          goBack();
          return "Successfully done!";
        } catch (error) {
          console.log(error);
          throw new Error(error.response?.data?.msg);
        }
      };
      toast.promise(Request(), {
        loading: <b>Please wait...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  return (
    <>
      <div className="">
        <button onClick={goBack} className="btn btn-outline">
          Back
        </button>
        <div className="">
          <div className="flex justify-around items-center w-[117px] pt-10 absolute right-6 pb-20 mx-auto">
            <ReactToPrint
              trigger={() => (
                <button className="outline-none border-none bg-transparent cursor-pointer">
                  <Image src={printer} width={23} height={23} alt="printer" />
                </button>
              )}
              content={() => componentRef.current}
            />

            <button
              onClick={() => setShowEditNotice(true)}
              className="outline-none border-none bg-transparent cursor-pointer"
            >
              <Image src={path} width={23} height={23} alt="path" />
            </button>
            <button
              onClick={() => handelDelete(notice.id)}
              className="outline-none border-none bg-transparent cursor-pointer"
            >
              <Image src={share} width={23} height={23} alt="share" />
            </button>
          </div>
          <div ref={componentRef}>
            <h3
              className="mt-24 mb-2 text-[#666666] text-lg pt-24 text-center dark:text-white"
              htmlFor=""
            >
              {activeNotice.subject}
            </h3>
            <div className=" mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]"></div>
            <div className=" mt-1 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px] visible md:invisible"></div>

            <div className="flex justify-between items-center mx-auto w-[95%]">
              <div className="flex  flex-col ">
                <p className="mt-5 mb-2">Id/record number</p>
                <p className=" mb-2  text-[#666666] text-xs " htmlFor="">
                  {activeNotice.record}
                </p>
              </div>
              <div className="flex  flex-col  ">
                <p className="mt-5 mb-2 ">Date: {activeNotice.date}</p>
              </div>
            </div>

            <div className="flex items-center  w-full mx-auto  shadow-3xl  my-5">
              <h1 className=" mb-2 ml-4 text-xl text-start text-[#313131]">
                SUBJECT: {activeNotice.subject}
              </h1>
            </div>
            <div className="px-6">
              <p className="mt-5 mb-2  text-justify ">{activeNotice.message}</p>
              <div className="flex flex-col text-end">
                <p className="mt-10 mb-1" htmlFor="">
                  {activeNotice.authorName}
                </p>
                <p className="mb-2 text-sm text-[#666666]" htmlFor="">
                  {activeNotice.authorPosition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEditNotice && (
        <EditNoticeModal
          notice={activeNotice}
          isOpen={showEditNotice}
          onSuccess={goBack}
          closeModal={() => setShowEditNotice(false)}
        />
      )}
    </>
  );
};

export default NoticeDetails;
