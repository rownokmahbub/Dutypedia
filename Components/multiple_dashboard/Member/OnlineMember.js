import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import AddOnlineMemberModal from "./AddOnlineMemberModal";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { GrRefresh } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";

const OnlineMember = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [doRefresh, setDoRefresh] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const filteredMembers = members.filter((member) =>
    member.user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handelDeleteMember = async (id) => {
    const userAction = confirm(`Are you sure you want to delete this member?`);
    if (userAction) {
      const Request = async () => {
        try {
          const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/members/online/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDoRefresh(!doRefresh);
          return "Member deleted successfully!";
        } catch (error) {
          throw new Error(error.response?.data?.msg);
        }
      };
      toast.promise(Request(), {
        loading: <b>Deleting... Please wait...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/members/online`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMembers(data.members);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMembers();
  }, [doRefresh]);

  if (isLoading) return <LoadingScreen fullScreen={false} />;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-end md:items-center">
        <div className="relative text-gray-600 w-full md:max-w-xs">
          <input
            className="px-4 w-full py-2 pr-8 rounded-lg text-sm focus:outline-none outline-none border-2 border-solid border-[#ECECEC]"
            type="search"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearchSharp className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
        </div>

        <div className="flex gap-2 items-center">
          <a
            onClick={() => setShowAddMember(true)}
            className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-black duration-200"
          >
            <span className="capitalize text-lg">Add Member</span>
            <AiOutlinePlusCircle className="text-3xl text-primary" />
          </a>

          <button
            onClick={() => setDoRefresh(!doRefresh)}
            className="btn btn-circle btn-primary btn-sm text-xl text-white"
          >
            <IoMdRefresh />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex bg-primary rounded-md px-4 py-2 sticky -top-5 z-10">
          <span className="font-medium w-12 md:w-24 flex-shrink-0 text-white text-lg">
            S/N
          </span>
          <span className="font-medium flex-1 text-white text-lg">Member</span>
        </div>
        {filteredMembers.length > 0 ? (
          <div className="grid gap-4 mt-4">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="shadow-3xl rounded-md px-4 py-3 flex items-center"
              >
                <span className="w-12 md:w-24 flex-shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="flex-1 flex items-center gap-4">
                  <span className="relative">
                    <img
                      src={
                        member.user.profilePicture ||
                        "/Assets/images/service/user.svg"
                      }
                      className="w-12 h-12 rounded-md"
                    />
                    <img
                      src="/Assets/icon/online.svg"
                      className="absolute w-6 right-0 bottom-0 translate-x-1/2 translate-y-1/3"
                    />
                  </span>
                  <div>
                    <p className="md:text-lg">
                      {member.user.firstName} {member.user.lastName}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">
                      @{member.user.username}
                    </p>
                    <div className="gap-2 md:gap-4 flex sm:hidden mt-2">
                      <span className="w-8 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                        <img className="w-6" src="/Assets/icon/shild.svg" />
                      </span>
                      <span className="w-8 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                        <img className="w-6" src="/Assets/icon/send.svg" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 gap-2 md:gap-4 hidden sm:flex">
                  <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                    <img className="w-8" src="/Assets/icon/shild.svg" />
                  </span>
                  <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                    <img className="w-8" src="/Assets/icon/send.svg" />
                  </span>
                  <span
                    onClick={() => handelDeleteMember(member.id)}
                    className="w-10 cursor-pointer aspect-square rounded-full flex items-center justify-center shadow-3xl"
                  >
                    <FaRegTrashAlt className="text-red-500" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">No Member Found</div>
        )}
      </div>

      {showAddMember && (
        <AddOnlineMemberModal
          isOpen={showAddMember}
          closeModal={() => setShowAddMember(false)}
          onSuccess={() => {
            setDoRefresh(!doRefresh);
            setShowAddMember(false);
          }}
        />
      )}
    </div>
  );
};

export default OnlineMember;
