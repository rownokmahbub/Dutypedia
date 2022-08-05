import { useContext } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { Input } from "@components/global/Input";
import * as Yup from "yup";
import {
  menuStyle,
  positionAutocomplete,
} from "@components/service/SelectService";
import Autocomplete from "react-autocomplete";
import FocusError from "@components/global/FocusError";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import toast from "react-hot-toast";

const EditNotice = ({ closeModal, notice, onSuccess }) => {
  const { token } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);

  const validate = Yup.object({
    date: Yup.string().required("Required"),
    recordno: Yup.string().min(3).max(20).required("Required"),
    subject: Yup.string().min(0).max(200).required("Required"),
    message: Yup.string().min(5).max(2000).required("Required"),
    authorName: Yup.string().min(0).max(100).required("Required"),
    position: Yup.string().min(0).max(100).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      date: notice.date || "",
      recordno: notice.record || "",
      subject: notice.subject || "",
      message: notice.message || "",
      authorName: notice.authorName || "",
      position: notice.authorPosition || "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/notice/update/${notice.id}`,
          {
            date: values.date,
            record: values.recordno,
            subject: values.subject,
            message: values.message,
            authorName: values.authorName,
            authorPosition: values.position,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Notice updated successfully!");
        uiDispatch({ type: "DO_REFRESH" });
        onSuccess(data.notice);
        closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const {
    errors,
    setFieldValue,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;
  return (
    <div className="container max-w-screen-xl mt-16 mx-auto relative">
      <div className=" relative w-full h-[1200px] rounded-2xl shadow-4xl md:shadow-3xl mb-10 mx-auto bg-white dark:bg-bg-200">
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex  flex-col absolute right-7 flex-shrink pb-40 dark:text-white">
              <label className="mt-10 mb-2 " htmlFor="">
                Select date
              </label>
              <div className="flex flex-row ">
                <div className="w-40 relative">
                  <Input
                    className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:text-white dark:bg-bg-200"
                    type="date"
                    name="date"
                  />
                  <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                    <img
                      className=" scale-90"
                      src="/Assets/icon/calendar.svg"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex  flex-col flex-shrink  w-[95%] mx-auto pt-40 dark:text-white">
              <div className="  w-full mx-auto bg-[#CCCCCC] h-[1px] "></div>
              <label className="mt-10 mb-2" htmlFor="">
                Id/record number
              </label>
              <Input
                type="text"
                className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[290px] outline-none pl-3 dark:text-white dark:bg-bg-300 dark:border-[#515150]"
                placeholder="985699...|"
                name="recordno"
              />
            </div>
            <div className=" mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]"></div>
            <div className="flex  flex-col flex-shrink  w-[95%] mx-auto">
              <label className="mt-7 mb-2 dark:text-white" htmlFor="">
                Subject
              </label>
              <Input
                name="subject"
                type="text"
                className="border-none bg-[#F5F5F5] rounded-md  h-[38px]  outline-none pl-3 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
              />
            </div>
            <div className=" mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]"></div>
            <div className="flex  flex-col flex-shrink  w-[95%] mx-auto dark:text-white">
              <label className="mt-10 mb-2" htmlFor="">
                Describe Your Notice
              </label>
              <Input
                as="textarea"
                name="message"
                id=""
                className=" h-[280px] border-none bg-[#F5F5F5] rounded-lg outline-none pl-8 pt-8 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                placeholder="Type Your Notice..."
              ></Input>
            </div>
            <div className="relative">
              <div className="flex  flex-col absolute right-5">
                <label className="mt-10 mb-2 dark:text-white" htmlFor="">
                  Enter Your Name
                </label>
                <Input
                  name="authorName"
                  type="text"
                  className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 dark:bg-bg-300 dark:border-[#515150] "
                  placeholder="Type Name"
                />
              </div>
              <div className="flex  flex-col absolute right-5 flex-shrink-0 mt-36 dark:text-white">
                <Autocomplete
                  getItemValue={(item) => item.value}
                  menuStyle={menuStyle}
                  items={positionAutocomplete}
                  inputProps={{
                    placeholder: "Position",
                    className:
                      "w-full py-2 px-2 dark:text-white rounded bg-[#f8fafb]  dark:bg-bg-200 dark:border-[#515150] border border-solid focus:outline-none border-gray-300",
                    ...getFieldProps("position"),
                  }}
                  value={values.position}
                  onChange={(e) => {
                    setFieldValue("position", e.target.value);
                  }}
                  onSelect={(value) => {
                    setFieldValue("position", value);
                  }}
                  renderItem={(item, isHighlighted) => (
                    <div
                      className={`cursor-pointer border-b p-1 ${
                        isHighlighted
                          ? "bg-gray-200 dark:text-white"
                          : "bg-white dark:bg-bg-200"
                      }`}
                    >
                      {item.label}
                    </div>
                  )}
                />
                {errors.position && touched.position && (
                  <p className="text-red-500 text-sm">{errors.position}</p>
                )}
              </div>
            </div>

            <div className="flex  flex-row absolute right-12 flex-shrink mt-60">
              <button
                type="submit"
                className={`btn btn-primary w-[100px] lg:w-[130px] h-[45px] bg-[#E22424] text-white cursor-pointer outline-none border-none rounded-lg mr-5 ${
                  isSubmitting && "loading"
                }`}
              >
                Update
              </button>
              <button
                onClick={closeModal}
                className="w-[100px] lg:w-[130px] h-[45px] border-[#E22424] text-[#E22424] bg-transparent cursor-pointer outline-none border-2 rounded-lg "
              >
                Cancel
              </button>
            </div>
          </Form>
          <FocusError />
        </FormikProvider>
      </div>
    </div>
  );
};

export default EditNotice;
