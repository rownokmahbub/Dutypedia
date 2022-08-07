import OfferButton from "@components/service/OfferButton";
import useMediaQuery from "@lib/hooks/useMediaQuery";
import { Truncate } from "@lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

export const calculateInstallment = (
  totalAmount,
  installmentCount,
  advancedPayment,
  advancedPaymentAmount
) => {
  if (advancedPaymentAmount >= totalAmount) {
    return 0;
  }
  if (!advancedPayment) {
    return (totalAmount / installmentCount).toFixed(2);
  }
  return (
    (totalAmount - (advancedPaymentAmount || 0)) /
    installmentCount
  ).toFixed(2);
};

const ServiceDesc = ({
  images,
  title,
  description,
  price,
  serviceType,
  additionalData,
  viewAs,
  services,
}) => {
  const [readAll, setReadAll] = useState(false);
  const [limit, setLimit] = useState(450);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2Xl = useMediaQuery("(min-width: 1536px)");
  const is3Xl = useMediaQuery("(min-width: 1800px)");

  const displayPrice = () => {
    switch (serviceType) {
      case "ONETIME":
        return (
          <p className="text-primary underline decoration-gray-300 text-center text-xl mt-4 dark:text-white">
            Price {price} ৳
          </p>
        );
      case "PACKAGE":
        return null;
      case "SUBS":
        return (
          <div>
            <div className="flex gap-4 mt-4">
              <div className=" font-medium">
                <p>{additionalData?.subscriptionType}</p>
                {additionalData?.payAsYouGo ? (
                  <p>Pay as you go</p>
                ) : (
                  <p>Total duration</p>
                )}
              </div>
              <div className="text-gray-500">
                <p>{additionalData?.amount}৳</p>

                <p>
                  {additionalData?.payAsYouGo
                    ? "True"
                    : `${
                        additionalData?.totalDuration
                      } ${additionalData?.subscriptionType?.substring(
                        0,
                        additionalData?.subscriptionType?.length - 2
                      )}`}
                </p>
              </div>
            </div>
          </div>
        );
      case "INSTALLMENT":
        return (
          <div>
            <div className="flex gap-4 mt-4">
              <div className=" font-medium dark:text-white">
                <p>Total Amount</p>
                {additionalData?.advancedPayment && <p>Advanced Payment</p>}
                <p>
                  Per{" "}
                  {additionalData?.installmentType?.substring(
                    0,
                    additionalData?.installmentType?.length - 2
                  )}
                </p>
                <p>Total Installment</p>
              </div>
              <div className="text-gray-500 dark:text-white">
                <p>{additionalData?.totalAmount}৳</p>
                {additionalData?.advancedPayment &&
                  additionalData?.advancedPaymentAmount}
                <p>
                  {calculateInstallment(
                    additionalData?.totalAmount,
                    additionalData?.installmentCount,
                    additionalData?.advancedPayment,
                    additionalData?.advancedPaymentAmount
                  )}
                  ৳
                </p>
                <p>{additionalData?.installmentCount}</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <p className="text-primary underline decoration-gray-300 text-center text-xl mt-4 ">
            Starting Price {price} ৳
          </p>
        );
    }
  };

  useEffect(() => {
    if (isLg) {
      setLimit(550);
    }
    if (isXl) {
      setLimit(150);
    }
    if (is2Xl) {
      setLimit(450);
    }
    if (is3Xl) {
      setLimit(750);
    }
  }, [isXl, isLg, is2Xl, is3Xl]);

  return (
    <div
      className={`mt-8 grid grid-cols-1 gap-8 ${
        readAll ? "xl:grid-cols-1" : "xl:grid-cols-2"
      }`}
    >
      <div
        className={`grid grid-cols-2 gap-4 w-full h-max ${
          readAll && "float-left pb-4"
        }`}
      >
        {images.map((image) => (
          <div
            className={`relative rounded-xl overflow-hidden w-full aspect-video ${
              readAll ? "xl:aspect-video" : "xl:aspect-square"
            }`}
          >
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div>
        <h4 className="mb-4 text-2xl dark:text-white">{title}</h4>
        <div className="leading-relaxed tracking-wide font-thin text-gray-600 dark:text-white">
          <Truncate
            str={description}
            length={readAll ? description.length : limit}
            color="text-red-500"
            ending={
              <button onClick={() => setReadAll(true)} className="text-primary">
                ...Read more....
              </button>
            }
          />
          {readAll && (
            <a
              onClick={() => {
                setReadAll(false);
                window?.scrollTo(0, 0);
              }}
              className="text-primary cursor-pointer"
            >
              ...Read less...
            </a>
          )}
        </div>
        <div>{displayPrice()}</div>
        {viewAs == "USER" && (
          <OfferButton
            serviceType={serviceType}
            services={services}
            price={price}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceDesc;
