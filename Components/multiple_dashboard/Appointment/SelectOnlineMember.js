import { IoSearchSharp } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import axios from "axios";
import CreateAppoinmentOnline from "./CreateAppoinmentOnline";

const SelectOnlineMember = ({ closeModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const filteredMembers = members.filter((member) =>
    member.user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  }, []);

  if (isLoading) return <LoadingScreen fullScreen={false} />;

  if (selectedMember) {
    return (
      <CreateAppoinmentOnline member={selectedMember} closeModal={closeModal} />
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-end md:items-center">
        <div className="relative text-gray-600 w-full md:max-w-xs">
          <input
            className="px-4 w-full py-2 pr-8 rounded-lg text-sm focus:outline-none outline-none border-2 border-solid border-[#ECECEC] dark:border-[#515050] dark:bg-bg-200"
            type="search"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearchSharp className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
        </div>
      </div>

      <div className="mt-8">
        {filteredMembers.length > 0 ? (
          <div className="grid gap-4 mt-4">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="shadow-3xl rounded-md px-4 py-3 flex items-center"
              >
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
                    <p className="md:text-lg dark:text-white">
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
                  <button
                    onClick={() => setSelectedMember(member.user)}
                    className="btn btn-outline btn-primary"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">No Member Found</div>
        )}
      </div>
    </div>
  );
};

export default SelectOnlineMember;
