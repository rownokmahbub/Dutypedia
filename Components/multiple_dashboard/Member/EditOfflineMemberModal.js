import { Dialog, Transition } from "@headlessui/react";
import AuthContext from "@lib/authContext";
import Image from "next/image";
import { Fragment, useContext, useEffect, useState, useRef } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { Input } from "@components/global/Input";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import { DivisionList } from "@lib/data/location/division";
import { DistrictList } from "@lib/data/location/district";
import { AreaList } from "@lib/data/location/area";
import toast from "react-hot-toast";
import { uploadImage } from "@lib/utils";
import axios from "axios";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const Schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  phone: Yup.string()
    .required("Phone is required")
    .min(10, "Phone must be at least 10 characters")
    .max(16, "Phone must be less than 16 characters")
    .matches(phoneRegExp, "Phone must be a valid phone number"),
  gender: Yup.string().required("Gender is required"),
});

const EditOfflineMemberModal = ({ data, isOpen, closeModal, onSuccess }) => {
  const { token } = useContext(AuthContext);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(
    data.profilePhoto || null
  );
  const [wallPhoto, setWallPhoto] = useState(null);
  const [wallPhotoPreview, setWallPhotoPreview] = useState(
    data.wallPhoto || null
  );
  const profilePhotoRef = useRef(null);
  const wallPhotoRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [selectedCity, setSelectedCity] = useState(data.city || null);
  const [selectedArea, setSelectedArea] = useState(data.area || null);
  const [selectedState, setSelectedState] = useState(data.region || null);
  const [address, setAddress] = useState(data.address || "");
  const cityRef = useRef(null);
  const areaRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: data.name || "",
      phone: data.phone || "",
      gender: data.gender || "",
    },
    validationSchema: Schema,
    onSubmit: async ({ name, phone, gender }) => {
      if (
        name === data.name &&
        phone === data.phone &&
        gender === data.gender &&
        selectedCity === data.city &&
        selectedArea === data.area &&
        selectedState === data.region &&
        address === data.address &&
        !profilePhoto &&
        !wallPhoto
      ) {
        return toast.error("Nothing to update!");
      }

      try {
        let profilePhotoUrl = data.profilePhoto || null;
        let wallPhotoUrl = data.wallPhoto || null;
        if (profilePhoto) {
          profilePhotoUrl = await uploadImage(profilePhoto, token);
        }
        if (wallPhoto) {
          wallPhotoUrl = await uploadImage(wallPhoto, token);
        }
        const { data: updatedMember } = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/members/offline/update/${data.id}`,
          {
            name,
            phone,
            gender,
            region: selectedState,
            city: selectedCity,
            area: selectedArea,
            address,
            profilePhoto: profilePhotoUrl,
            wallPhoto: wallPhotoUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Member updated successfully!");
        onSuccess();
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.msg);
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  useEffect(() => {
    if (!profilePhoto) {
      return;
    }
    if (profilePhoto.size > 5242880) {
      toast.error("File size should be less than 5MB");
      profilePhotoRef.current.value = "";
      setProfilePhoto(null);
      return;
    }
    const objectUrl = URL.createObjectURL(profilePhoto);
    setProfilePhotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [profilePhoto]);

  useEffect(() => {
    if (!wallPhoto) {
      return;
    }
    if (wallPhoto.size > 5242880) {
      toast.error("File size should be less than 5MB");
      wallPhotoRef.current.value = "";
      setWallPhoto(null);
      return;
    }
    const objectUrl = URL.createObjectURL(wallPhoto);
    setWallPhotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [wallPhoto]);

  useEffect(() => {
    if (data?.region) {
      setCity(DistrictList[data.region]);
    }
    if (data?.city && data?.region) {
      setArea(AreaList[data.region][data.city]);
    }
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={() => {}} as="div" className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-saturate-200" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <div>
                      <div className="bg-gradient-to-r from-[#d93baf] to-[#854a58] h-48 relative">
                        {wallPhotoPreview && (
                          <Image
                            src={wallPhotoPreview}
                            layout="fill"
                            objectFit="cover"
                          />
                        )}
                        <label className="flex justify-end pt-2 pr-2 cursor-pointer z-10 relative">
                          <img
                            className="w-10"
                            src="/Assets/images/service/red_camera.svg"
                            alt=""
                          />
                          <input
                            onChange={(event) => {
                              setWallPhoto(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={wallPhotoRef}
                          />
                        </label>
                      </div>
                      <div className="flex relative justify-center bg-white w-28 h-28 -mt-14 rounded-lg mx-auto shadow-3xl">
                        {profilePhotoPreview ? (
                          <div className="w-full h-full relative rounded-lg overflow-hidden">
                            <Image
                              src={profilePhotoPreview}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        ) : (
                          <img
                            className="w-16"
                            src="/Assets/images/service/user.svg"
                            alt=""
                          />
                        )}

                        <label>
                          <img
                            className="w-10 absolute z-10 -right-5 top-9 cursor-pointer"
                            src="/Assets/images/service/red_camera.svg"
                            alt=""
                          />
                          <input
                            onChange={(event) => {
                              setProfilePhoto(event.target.files[0]);
                            }}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            ref={profilePhotoRef}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="p-6">
                      <FormikProvider value={formik}>
                        <Form
                          autoComplete="off"
                          noValidate
                          onSubmit={handleSubmit}
                        >
                          <p>Member Information</p>
                          <div className="mt-2 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                            <Input
                              name="name"
                              className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                              type="text"
                              placeholder="Member Name"
                            />
                            <Input
                              name="gender"
                              as="select"
                              className="w-full h-[42px] py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                            >
                              <option disabled value="">
                                Gender...
                              </option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Input>
                            <Input
                              name="phone"
                              className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                              type="tel"
                              placeholder="Phone Number"
                            />
                          </div>

                          <div className="mt-4">
                            <div
                              className={`flex gap-2 items-center cursor-pointer`}
                              onClick={() => setShowMore(!showMore)}
                            >
                              More
                              <HiOutlineChevronDown
                                className={`duration-200 ${
                                  showMore ? "rotate-180" : ""
                                }`}
                              />
                            </div>

                            <motion.div
                              initial={false}
                              key="content"
                              className={`overflow-hidden mt-4`}
                              animate={{ height: showMore ? "auto" : "0" }}
                              transition={{
                                duration: 0.3,
                                ease: [0.6, 0.05, -0.01, 0.9],
                              }}
                            >
                              <p>Address</p>
                              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                <select
                                  value={selectedState}
                                  onChange={(event) => {
                                    setSelectedState(event.target.value);
                                    setSelectedCity(null);
                                    setSelectedArea(null);
                                    cityRef.current.value = "";
                                    areaRef.current.value = "";
                                    setArea([]);
                                    setCity(DistrictList[event.target.value]);
                                  }}
                                  className="w-full h-[42px] py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 sm:col-span-2"
                                >
                                  <option value="" disabled selected>
                                    Division...
                                  </option>
                                  {DivisionList.map((item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>

                                <select
                                  required
                                  value={selectedCity}
                                  onChange={(event) => {
                                    setSelectedCity(event.target.value);
                                    setSelectedArea(null);
                                    areaRef.current.value = "";
                                    setArea(
                                      AreaList[selectedState][
                                        event.target.value
                                      ]
                                    );
                                  }}
                                  ref={cityRef}
                                  className="w-full h-[42px] py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                                >
                                  <option value="" disabled selected>
                                    District...
                                  </option>
                                  {city.map((item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>

                                <select
                                  ref={areaRef}
                                  value={selectedArea}
                                  onChange={(event) =>
                                    setSelectedArea(event.target.value)
                                  }
                                  className="w-full h-[42px] py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                                >
                                  <option value="" disabled selected>
                                    Area...
                                  </option>
                                  {area.map((item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>

                                <textarea
                                  value={address}
                                  onChange={(event) =>
                                    setAddress(event.target.value)
                                  }
                                  className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 sm:col-span-2"
                                  rows="3"
                                  placeholder="Your Address"
                                />
                              </div>
                            </motion.div>
                          </div>

                          <div className="flex justify-end mt-4 gap-4">
                            <button
                              className={`btn btn-primary capitalize font-medium ${
                                isSubmitting && "loading"
                              }`}
                              type="submit"
                            >
                              Update Member
                            </button>
                            <a
                              onClick={closeModal}
                              className="btn btn-outline btn-primary px-8"
                            >
                              Cancel
                            </a>
                          </div>
                        </Form>
                      </FormikProvider>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditOfflineMemberModal;
