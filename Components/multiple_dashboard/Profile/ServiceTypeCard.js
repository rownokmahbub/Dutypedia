import Toggle from "@components/global/Toggle";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import toast from "react-hot-toast";

const ServiceTypeCard = ({ item, isSelected, isEnabled, parentServiceId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const [enabled, setEnabled] = useState(isEnabled);

  const toggleServiceType = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/services/toggle-active-service`,
        {
          serviceType: item.id,
          parentServiceId: parentServiceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Updated successfully!");
      setEnabled(!enabled);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {item.id !== "STARTING" && (
        <span className=" absolute right-2 top-4 z-10">
          <Toggle
            onChange={toggleServiceType}
            isLoading={isLoading}
            enabled={enabled}
            size={40}
          />
        </span>
      )}
      <div
        onClick={() =>
          router.push({
            pathname: "/dashboard/multiple/profile",
            query: {
              type: item.id,
            },
            shallow: true,
          })
        }
        className={`w-full flex-shrink-0 cursor-pointer aspect-[16/12] shadow-3xl rounded-lg overflow-hidden relative p-4 ${
          enabled ? "saturate-100 opacity-100" : "saturate-0 opacity-50"
        } ${item.bgColor}`}
      >
        <div className="flex !h-max relative z-10 justify-between items-center">
          <p className="text-sm">{item.title}</p>
        </div>
        <img className="z-0 absolute right-1 bottom-1 w-32" src={item.image} />
      </div>
    </div>
  );
};

export default ServiceTypeCard;
