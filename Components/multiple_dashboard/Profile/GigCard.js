import Image from "next/image";
import { BsFillEyeFill } from "react-icons/bs";
import { calculateInstallment } from "./ServiceDesc";

const GigCard = ({ item, isSelected, onClick, serviceType }) => {
  console.log(item);
  const displayPrice = () => {
    switch (serviceType) {
      case "ONETIME":
        return `Price : ${item.price}৳`;
      case "PACKAGE":
        return `Price : ${item.price}৳`;
      case "SUBS":
        return `${item.subsData?.subscriptionType} : ${item.subsData?.amount}৳`;
      case "INSTALLMENT":
        return `${
          item.installmentData?.installmentType
        } : ${calculateInstallment(
          item.installmentData?.totalAmount,
          item.installmentData?.installmentCount,
          item.installmentData?.advancedPayment,
          item.installmentData?.advancedPaymentAmount
        )}৳`;
      default:
        return `Starting Price : ${price}৳`;
    }
  };
  return (
    <div
      onClick={() => onClick(item)}
      className={`overflow-hidden box-border w-ful w-full cursor-pointer rounded-xl relative shadow-3xl bg-[#F8F8F8] dark:bg-[#272727] ${
        isSelected
          ? "border border-primary"
          : "saturate-0 border-2 border-white"
      }`}
    >
      <div className="w-full aspect-square relative ">
        {item.images.length > 0 && (
          <Image layout="fill" objectFit="cover" src={item.images[0]} />
        )}
      </div>
      <div className="p-4">
        <p className="text-sm line-clamp-1 ">{item.title}</p>
        <p className="text-sm text-gray-500 dark:text-white">{displayPrice()}</p>
        <div className="flex gap-2 items-center text-xs text-gray-500 pt-1">
          <BsFillEyeFill />
          <span>100K+</span>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
