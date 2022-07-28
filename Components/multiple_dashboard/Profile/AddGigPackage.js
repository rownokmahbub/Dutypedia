import { useContext, useEffect, useRef, useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@components/global/Input";
import FocusError from "@components/global/FocusError";
import { FiEdit, FiPlus, FiPlusCircle } from "react-icons/fi";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import { defaultFacilites } from "@components/service/SelectService";
import { uploadMultipleImages } from "@lib/utils";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import AddNewPackage from "./AddNewPackage";
import { FaTrash } from "react-icons/fa";
import EditPackage from "./EditPackage";

const validate = Yup.object({
  title: Yup.string().min(3).max(50).required("Title is required"),
  description: Yup.string()
    .min(3)
    .max(2000)
    .required("Description is required"),
});

export const Colors = {
  Gradients: [
    "bg-gradient-to-r from-[#2BC0E4] to-[#C7CC74]",
    "bg-gradient-to-r from-[#E65C00] to-[#F9D423]",
    "bg-gradient-to-r from-[#FC354C] to-[#0ABFBC]",
    "bg-gradient-to-r from-[#1488CC] to-[#2B32B2]",
    "bg-gradient-to-r from-[#536976] to-[#292E49]",
  ],
  Shadows: [
    "shadow-[#2BC0E4]/30",
    "shadow-[#E65C00]/30",
    "shadow-[#FC354C]/30",
    "shadow-[#1488CC]/30",
    "shadow-[#536976]/30",
  ],
};

const AddGigPackage = ({ goBack, data }) => {
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
  const [packages, setPackages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const addPackage = (pkg) => {
    if (packages.length >= 5) {
      toast.error("You can only add 5 packages");
      return;
    }
    setPackages([...packages, pkg]);
  };
  const editPackage = (pkg) => {
    setPackages(packages.map((p) => (p.id === pkg.id ? pkg : p)));
  };
  const removePackage = (pkg) => {
    setPackages(packages.filter((p) => p.id !== pkg.id));
  };

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
      }}
      validationSchema={validate}
      onSubmit={async (values, onSubmitProps) => {
        if (!file1 || !file2 || !file3 || !file4) {
          toast.error("You must upload all the images");
          return;
        }
        if (packages.length === 0) {
          toast.error("You must add at least one package!");
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
            ...values,
            price: 0,
            facilites,
            images: serviceImages,
            serviceId: data.serviceId,
            services: data.optionsData,
            type: data.type,
            packageData: packages,
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
            <div className="max-w-screen-lg container mx-auto shadow-3xl rounded-lg py-8  bg-white dark:bg-bg-200">
              <BsArrowLeftSquare
                onClick={() => goBack()}
                className="text-3xl cursor-pointer text-gray-400"
              />
              <div className="max-w-xl mx-auto dark:text-white">
                <div className="mt-4">
                  <div className="flex justify-between items-center dark:text-white">
                    <p className="mb-2 flex text-lg items-center dark:text-white">
                      Service Title
                    </p>

                    <p className="mb-2 text-[12px]">Max 50 character</p>
                  </div>

                  <div className="flex">
                    <div className="mb-3 w-full">
                      <Input
                        name="title"
                        className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 dark:text-white dark:bg-bg-300 dark:border-[#515150]"
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
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none dark:text-white dark:bg-bg-300 dark:border-[#515150]"
                    rows="5"
                    placeholder="Write Something About Your Service...…."
                  />
                </div>
                <div className="my-8 shadow-3xl p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packages.map((pkg, index) => (
                      <div
                        className={`w-full p-4 shadow-lg rounded-md relative ${
                          Colors.Shadows[index % Colors.Shadows.length]
                        }`}
                      >
                        <FaTrash
                          onClick={() => removePackage(pkg)}
                          className="text-red-500 absolute right-2 bottom-2 cursor-pointer"
                        />

                        <span className=" absolute left-2 bottom-2">
                          <a
                            onClick={() => {
                              setSelectedPkg(pkg);
                              setIsOpenEdit(true);
                            }}
                            className="text-xl text-yellow-500 cursor-pointer"
                          >
                            <FiEdit />
                          </a>
                        </span>
                        <div
                          className={`${
                            Colors.Gradients[index % Colors.Gradients.length]
                          } text-white text-center px-4 py-2 rounded-md`}
                        >
                          {pkg.name}
                        </div>
                        <h1 className="py-8 text-4xl font-medium text-center">
                          {pkg.price}
                          <span className="text-base">৳</span>
                        </h1>
                        <div className="text-center space-y-2">
                          {pkg.features.map((feature, index) => (
                            <p
                              className={`text-sm ${
                                feature.isAvailable
                                  ? ""
                                  : "line-through text-gray-400"
                              }`}
                            >
                              {feature.title}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="p-4 text-2xl w-full flex items-center justify-center gap-2 cursor-pointer text-gray-700 shadow text-center rounded-md bg-gray-50 dark:bg-bg-300 dark:border-[#515150]"
                      >
                        <FiPlusCircle className="text-primary" />
                        <p className="text-primary text-base">Add Package</p>
                      </a>
                    </div>
                    {isOpen && (
                      <AddNewPackage
                        isOpen={isOpen}
                        closeModal={() => setIsOpen(false)}
                        onSubmit={(pkg) => addPackage(pkg)}
                      />
                    )}
                    {isOpenEdit && selectedPkg && (
                      <EditPackage
                        onSubmit={(pkg) => editPackage(pkg)}
                        data={selectedPkg}
                        isOpen={isOpenEdit}
                        closeModal={() => setIsOpenEdit(false)}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-lg mb-2 dark:text-white">Upload Of Your Service Photo</p>
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
                  <p className="mt-5 text-sm text-[#313131] dark:text-white">
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

export default AddGigPackage;
