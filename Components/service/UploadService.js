import React, { useEffect, useRef } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@components/global/Input";
import FocusError from "@components/global/FocusError";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

const validate = Yup.object({
  title: Yup.string().min(3).max(50).required("Title is required"),
  speciality: Yup.string().min(3).max(100).required("Speciality is required"),
  description: Yup.string()
    .min(3)
    .max(2000)
    .required("Description is required"),
  about: Yup.string().min(3).max(2000).required("About is required"),
});
const UploadService = ({ goNext, goBack, savedData }) => {
  const file1Ref = useRef(null);
  const file2Ref = useRef(null);
  const file3Ref = useRef(null);
  const file4Ref = useRef(null);
  const [file1, setFile1] = React.useState(savedData.file1 || null);
  const [file2, setFile2] = React.useState(savedData.file2 || null);
  const [file3, setFile3] = React.useState(savedData.file3 || null);
  const [file4, setFile4] = React.useState(savedData.file4 || null);

  const [file1Preview, setFile1Preview] = React.useState(
    savedData.setFile1Preview || null
  );
  const [file2Preview, setFile2Preview] = React.useState(
    savedData.setFile2Preview || null
  );
  const [file3Preview, setFile3Preview] = React.useState(
    savedData.setFile3Preview || null
  );
  const [file4Preview, setFile4Preview] = React.useState(
    savedData.setFile4Preview || null
  );

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
        title: savedData.title || "",
        speciality: savedData.speciality || "",
        description: savedData.description || "",
        about: savedData.about || "",
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

        const data = {
          ...values,
          file1,
          file2,
          file3,
          file4,
          file1Preview,
          file2Preview,
          file3Preview,
          file4Preview,
        };
        goNext(data);
      }}
    >
      {(formik) => (
        <>
          <form className="pb-8" onSubmit={formik.handleSubmit}>
            <div className="max-w-screen-lg container mx-auto shadow-3xl rounded-lg py-8  bg-white  dark:bg-bg-300 dark:border-[#515150] dark:text-white">
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
                        className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                        type="text"
                        placeholder="I will give you the best law service."
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 w-full">
                  <div className="flex justify-between items-center">
                    <p className="mb-2 flex text-lg items-center">Speciality</p>

                    <p className="mb-2 text-[12px]">Max 100 character</p>
                  </div>
                  <Input
                    name="speciality"
                    type="text"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                    placeholder="Ex: Graphic Designer, Web Developer, Lawyer, etc."
                  />
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
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                    rows="5"
                    placeholder="Write Something About Your Service...…."
                  />
                </div>

                <div className="mb-3 w-full">
                  <div className="flex justify-between items-center">
                    <p className="mb-2 flex text-lg items-center">
                      About Company{" "}
                    </p>

                    <p className="mb-2 text-[12px]">Max 2000 character</p>
                  </div>
                  <Input
                    name="about"
                    as="textarea"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f8fafb] bg-clip-padding border border-solid border-gray-300 rounded-md m-0 focus:outline-none dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                    rows="5"
                    placeholder="Write Something About Your Service...…."
                  />
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

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary w-[130px] min-h-0 h-9 font-normal text-sm capitalize"
                  >
                    Continue
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

export default UploadService;
