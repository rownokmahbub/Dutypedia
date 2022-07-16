import { useContext, useEffect, useRef, useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@components/global/Input";
import FocusError from "@components/global/FocusError";
import { FiChevronDown, FiChevronUp, FiPlus } from "react-icons/fi";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import { defaultFacilites } from "@components/service/SelectService";
import { uploadMultipleImages } from "@lib/utils";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import CheckBox from "@components/global/CheckBox";

const validate = Yup.object({
  title: Yup.string().min(3).max(50).required("Title is required"),
  description: Yup.string()
    .min(3)
    .max(2000)
    .required("Description is required"),
  totlaAmount: Yup.number()
    .min(1)
    .max(1000000)
    .required("This field is required"),
  subscriptionType: Yup.string().required("This field is required"),
  totalDuration: Yup.number(),
});
const AddGigSubs = ({ goBack, data }) => {
  const file1Ref = useRef(null);
  const file2Ref = useRef(null);
  const file3Ref = useRef(null);
  const file4Ref = useRef(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const [file1Preview, setFile1Preview] = useState(null);
  const [file2Preview, setFile2Preview] = useState(null);
  const [file3Preview, setFile3Preview] = useState(null);
  const [file4Preview, setFile4Preview] = useState(null);

  const [facilites, setFacilites] = useState([]);
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const [payAsYouGo, setPayAsYouGo] = useState(false);

  useEffect(() => {
    if (!file1) {
      return;
    }
    if (file1.size > 5242880) {
      toast.error("File size should be less than 5MB");
      file1Ref.current.value = "";
      setFile1(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file1);
    setFile1Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file1]);

  useEffect(() => {
    if (!file2) {
      return;
    }
    if (file2.size > 5242880) {
      toast.error("File size should be less than 5MB");
      file2Ref.current.value = "";
      setFile2(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file2);
    setFile2Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file2]);

  useEffect(() => {
    if (!file3) {
      return;
    }
    if (file3.size > 5242880) {
      toast.error("File size should be less than 5MB");
      file3Ref.current.value = "";
      setFile3(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file3);
    setFile3Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file3]);

  useEffect(() => {
    if (!file4) {
      return;
    }
    if (file4.size > 5242880) {
      toast.error("File size should be less than 5MB");
      file4Ref.current.value = "";
      setFile4(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file4);
    setFile4Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file4]);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        totlaAmount: "",
        subscriptionType: "",
        totalDuration: "",
      }}
      validationSchema={validate}
      onSubmit={async (values, onSubmitProps) => {
        if (!file1 || !file2 || !file3 || !file4) {
          toast.error("You must upload all the images");
          return;
        }

        if (
          file1.size > 5242880 ||
          file2.size > 5242880 ||
          file3.size > 5242880 ||
          file4.size > 5242880
        ) {
          toast.error("File size must be less than 5MB");
          return;
        }

        try {
          const serviceImages = await uploadMultipleImages(
            [file1, file2, file3, file4],
            token
          );
          if (!serviceImages) {
            toast.error("Something went wrong");
            return;
          }
          const gigData = {
            title: values.title,
            description: values.description,
            price: values.totlaAmount,
            subsData: {
              subscriptionType: values.subscriptionType,
              amount: values.totlaAmount,
              totalDuration: values.totalDuration,
              payAsYouGo: payAsYouGo,
            },
            facilites,
            images: serviceImages,
            serviceId: data.serviceId,
            services: data.optionsData,
            type: data.type,
          };

          const { data: resp } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/services/create/gig`,
            {
              ...gigData,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("Service created successfully!");
          router.replace({
            pathname: "/dashboard/multiple/profile",
            query: {
              type: data.type,
            },
          });
        } catch (error) {
          console.log(error);
          toast.error(error.response?.data?.msg);
        }
      }}
    >
      {(formik) => (
        <>
          <form className="pb-8" onSubmit={formik.handleSubmit}>
            <div className="max-w-screen-lg container mx-auto shadow-3xl rounded-lg py-8  bg-white">
              <BsArrowLeftSquare
                onClick={() => goBack()}
                className="text-3xl cursor-pointer text-gray-400"
              />
              <div className="max-w-xl mx-auto">
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="mb-2 flex text-lg items-center">
                      Service Title
                    </p>

                    <p className="mb-2 text-[12px]">Max 50 character</p>
                  </div>

                  <div className="flex">
                    <div className="mb-3 w-full">
                      <Input
                        name="title"
                        className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                        type="text"
                        placeholder="I will give you the best law service."
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 w-full">
                  <div className="flex justify-between items-center">
                    <p className="mb-2 flex text-lg items-center">
                      Service Description
                    </p>

                    <p className="mb-2 text-[12px]">Max 2000 character</p>
                  </div>
                  <Input
                    name="description"
                    as="textarea"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none "
                    rows="5"
                    placeholder="Write Something About Your Service...…."
                  />
                </div>

                <div className="py-8">
                  <div className="mb-3 w-full shadow-3xl rounded-xl overflow-hidden">
                    <div className="px-4 py-3 bg-primary">
                      <p className="text-white">Select Payment</p>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex gap-4">
                        <div className=" space-y-2 flex-1">
                          <p>Subscription Type</p>

                          <div className="relative">
                            <Input
                              name="subscriptionType"
                              as="select"
                              className="h-[42px] form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none "
                            >
                              <option disabled value="">
                                Select...
                              </option>
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Input>
                            <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-center items-center cursor-pointer py-1 rounded-r">
                              <FiChevronDown className="text-white" />
                            </div>
                          </div>
                        </div>
                        <div className=" space-y-2 flex-1">
                          <p>
                            Amount{" "}
                            {formik.values.subscriptionType && (
                              <span className="text-xs italic text-gray-500">
                                /{" "}
                                {formik.values.subscriptionType.substring(
                                  0,
                                  formik.values.subscriptionType.length - 2
                                )}
                              </span>
                            )}
                          </p>

                          <div className="relative">
                            <Input
                              name="totlaAmount"
                              type="number"
                              placeholder="0.00৳"
                              className=" form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none "
                            />
                            <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1 rounded-r">
                              <FiChevronUp className="text-white cursor-pointer" />
                              <span className="w-4 h-[1px] bg-white" />
                              <FiChevronDown className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {formik.values.subscriptionType && (
                        <div className="">
                          <div className=" space-y-2">
                            <p>Total Duration</p>
                            <div className="grid gap-4 grid-cols-1">
                              {!payAsYouGo && (
                                <div className="flex">
                                  <div className="relative">
                                    <Input
                                      name="totalDuration"
                                      type="number"
                                      placeholder="Ex. 12"
                                      className=" form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none "
                                    />
                                    <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1">
                                      <FiChevronUp className="text-white cursor-pointer" />
                                      <span className="w-4 h-[1px] bg-white" />
                                      <FiChevronDown className="text-white" />
                                    </div>
                                  </div>

                                  <div className="border px-4 flex justify-center items-center h-[42px] rounded-r-md text-gray-700 bg-[#f8fafb]">
                                    {formik.values.subscriptionType.substring(
                                      0,
                                      formik.values.subscriptionType.length - 2
                                    )}
                                  </div>
                                </div>
                              )}

                              {!payAsYouGo && (
                                <div className="grid grid-cols-2 -mb-2">
                                  <div className="flex items-center">
                                    <hr className="w-full border-gray-300" />
                                    <span className="px-2 italic text-sm text-gray-400">
                                      Or
                                    </span>
                                    <hr className="w-full border-gray-300" />
                                  </div>
                                </div>
                              )}
                              <div className="flex gap-4 items-center mb-4">
                                <CheckBox
                                  value={payAsYouGo}
                                  onChange={() => setPayAsYouGo(!payAsYouGo)}
                                  title="Pay as you go"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-lg mb-2">Upload Of Your Service Photo</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <label className="w-full overflow-hidden aspect-video sm:aspect-square flex justify-center items-center flex-col border-2 border-dashed gap-1 hover:border-gray-700 duration-200 cursor-pointer rounded-md relative">
                      {file1Preview ? (
                        <>
                          <a
                            className="absolute top-2 right-2 z-10 flex justify-center items-center w-5 aspect-square bg-white rounded-full"
                            onClick={() => {
                              setFile1Preview(null);
                              setFile1(null);
                            }}
                          >
                            <MdClose className="text-primary" />
                          </a>
                          <Image
                            src={file1Preview}
                            objectFit="cover"
                            layout="fill"
                          />
                        </>
                      ) : (
                        <>
                          <span className="text-3xl text-gray-400">
                            <FiPlus />
                          </span>
                          <p className="text-sm text-gray-700">Add Photo</p>
                          <input
                            onChange={(event) => {
                              setFile1(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={file1Ref}
                          />
                        </>
                      )}
                    </label>
                    <label className="w-full overflow-hidden aspect-video sm:aspect-square flex justify-center items-center flex-col border-2 border-dashed gap-1 hover:border-gray-700 duration-200 cursor-pointer rounded-md relative">
                      {file2Preview ? (
                        <>
                          <a
                            className="absolute top-2 right-2 z-10 flex justify-center items-center w-5 aspect-square bg-white rounded-full"
                            onClick={() => {
                              setFile2Preview(null);
                              setFile2(null);
                            }}
                          >
                            <MdClose className="text-primary" />
                          </a>
                          <Image
                            src={file2Preview}
                            objectFit="cover"
                            layout="fill"
                          />
                        </>
                      ) : (
                        <>
                          <span className="text-3xl text-gray-400">
                            <FiPlus />
                          </span>
                          <p className="text-sm text-gray-700">Add Photo</p>
                          <input
                            onChange={(event) => {
                              setFile2(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={file2Ref}
                          />
                        </>
                      )}
                    </label>
                    <label className="w-full overflow-hidden aspect-video sm:aspect-square flex justify-center items-center flex-col border-2 border-dashed gap-1 hover:border-gray-700 duration-200 cursor-pointer rounded-md relative">
                      {file3Preview ? (
                        <>
                          <a
                            className="absolute top-2 right-2 z-10 flex justify-center items-center w-5 aspect-square bg-white rounded-full"
                            onClick={() => {
                              setFile3Preview(null);
                              setFile3(null);
                            }}
                          >
                            <MdClose className="text-primary" />
                          </a>
                          <Image
                            src={file3Preview}
                            objectFit="cover"
                            layout="fill"
                          />
                        </>
                      ) : (
                        <>
                          <span className="text-3xl text-gray-400">
                            <FiPlus />
                          </span>
                          <p className="text-sm text-gray-700">Add Photo</p>
                          <input
                            onChange={(event) => {
                              setFile3(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={file3Ref}
                          />
                        </>
                      )}
                    </label>
                    <label className="w-full overflow-hidden aspect-video sm:aspect-square flex justify-center items-center flex-col border-2 border-dashed gap-1 hover:border-gray-700 duration-200 cursor-pointer rounded-md relative">
                      {file4Preview ? (
                        <>
                          <a
                            className="absolute top-2 right-2 z-10 flex justify-center items-center w-5 aspect-square bg-white rounded-full"
                            onClick={() => {
                              setFile4Preview(null);
                              setFile4(null);
                            }}
                          >
                            <MdClose className="text-primary" />
                          </a>
                          <Image
                            src={file4Preview}
                            objectFit="cover"
                            layout="fill"
                          />
                        </>
                      ) : (
                        <>
                          <span className="text-3xl text-gray-400">
                            <FiPlus />
                          </span>
                          <p className="text-sm text-gray-700">Add Photo</p>
                          <input
                            onChange={(event) => {
                              setFile4(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={file4Ref}
                          />
                        </>
                      )}
                    </label>
                  </div>
                  <p className="mt-5 text-sm text-[#313131]">
                    Please uploads at least 5 MB per image.
                  </p>
                </div>

                <div>
                  <OptionsViewer
                    noHeader
                    defaultOptions={defaultFacilites}
                    data={facilites}
                    title="Choose Your Facilites"
                    onSubmit={(data) => {
                      setFacilites(data);
                    }}
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-wide ${
                      formik.isSubmitting && "loading"
                    }`}
                  >
                    Create Service
                  </button>
                </div>
              </div>
            </div>
          </form>
          <FocusError />
        </>
      )}
    </Formik>
  );
};

export default AddGigSubs;
