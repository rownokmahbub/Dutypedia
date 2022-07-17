import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { useContext, useState, useEffect } from "react";
import AddOfflineMemberModal from "./AddOfflineMemberModal";
import AuthContext from "@lib/authContext";
import axios from "axios";
import LoadingScreen from "@components/global/LoadingScreen";
import { Menu } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import toast from "react-hot-toast";
import EditOfflineMemberModal from "./EditOfflineMemberModal";

const OfflineMember = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddMember, setShowAddMember] = useState(false);
  const [doRefresh, setDoRefresh] = useState(false);
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showEditMember, setShowEditMember] = useState(false);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handelDeleteMember = async (id) => {
    const userAction = confirm(`Are you sure you want to delete this member?`);
    if (userAction) {
      const Request = async () => {
        try {
          const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/members/offline/delete/${id}`,
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
          `${process.env.NEXT_PUBLIC_API_URL}/members/offline`,
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

        <a
          onClick={() => setShowAddMember(true)}
          className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-black duration-200"
        >
          <span className="capitalize text-lg">Add Member</span>
          <AiOutlinePlusCircle className="text-3xl text-primary" />
        </a>
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
                      src={member.profilePhoto}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </span>
                  <div>
                    <p className="md:text-lg">{member.name}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                    <img className="w-8" src="/Assets/icon/shild.svg" />
                  </span>

                  <Menu as="div" className=" relative">
                    <Menu.Button>
                      <HiDotsVertical className="text-xl" />
                    </Menu.Button>
                    <Menu.Items className="flex flex-col items-center absolute -ml-20 bg-white shadow-3xl  rounded-md px-3 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              setSelectedMember(member);
                              setShowEditMember(true);
                            }}
                            className={`${
                              active
                                ? "bg-gray-200 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                          >
                            <p className="text-sm">Edit</p>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handelDeleteMember(member.id)}
                            className={`${
                              active
                                ? "bg-primary-300 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                          >
                            <p className="text-sm">Delete</p>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">No Member Found</div>
        )}
      </div>
      {showAddMember && (
        <AddOfflineMemberModal
          isOpen={showAddMember}
          closeModal={() => setShowAddMember(false)}
          onSuccess={() => {
            setDoRefresh(!doRefresh);
            setShowAddMember(false);
          }}
        />
      )}
      {showEditMember && selectedMember && (
        <EditOfflineMemberModal
          data={selectedMember}
          isOpen={showEditMember}
          closeModal={() => setShowEditMember(false)}
          onSuccess={() => {
            setDoRefresh(!doRefresh);
            setShowEditMember(false);
          }}
        />
      )}
    </div>
  );
};

export default OfflineMember;
