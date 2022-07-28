import AuthContext from "@lib/authContext";
import axios from "axios";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";

const ProfileRender = ({
  profileData,
  speciality,
  serviceCenterName,
  wallPhoto,
  profilePhoto,
  serviceId,
  updatedService,
  readOnly,
}) => {
  const { token, setToken } = useContext(AuthContext);
  const profilePhotoRef = useRef(null);
  const wallPhotoRef = useRef(null);
  const [wallPhotoUpdating, setWallPhotoUpdating] = useState(false);
  const [profilePhotoUpdating, setProfilePhotoUpdating] = useState(false);
  const changeWallPhoto = async (file) => {
    if (!file) {
      return;
    }
    if (file.size > 5242880) {
      toast.error("File size should be less than 5MB");
      wallPhotoRef.current.value = "";
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const formData = new FormData();
    formData.append("image", file, file.name);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    try {
      setWallPhotoUpdating(true);
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        requestOptions
      );
      const data = await resp.json();
      const { urls } = data;
      const url = urls[0];
      const { data: serviceData } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/services/update`,
        {
          wallPhotoUrl: url,
          serviceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { updatedService: newService } = serviceData;
      updatedService(newService);
      toast.success("Wall photo updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setWallPhotoUpdating(false);
    }
  };

  const changeProfilePhoto = async (file) => {
    if (!file) {
      return;
    }
    if (file.size > 5242880) {
      toast.error("File size should be less than 5MB");
      profilePhotoRef.current.value = "";
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const formData = new FormData();
    formData.append("image", file, file.name);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    try {
      setProfilePhotoUpdating(true);
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        requestOptions
      );
      const data = await resp.json();
      const { urls } = data;
      const url = urls[0];
      const { data: serviceData } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/services/update`,
        {
          profilePhotoUrl: url,
          serviceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { updatedService: newService } = serviceData;
      updatedService(newService);
      toast.success("Photo updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setProfilePhotoUpdating(false);
    }
  };

  return (
    <div className="shadow-3xl h-max bg-white dark:bg-[#2e2e2e] rounded-xl overflow-hidden ">
      <div className="bg-gradient-to-r from-[#d93baf] to-[#854a58] h-48 relative">
        {wallPhoto && <Image src={wallPhoto} layout="fill" objectFit="cover" />}
        {!readOnly && (
          <label className="flex justify-end pt-2 pr-2 cursor-pointer z-10 relative">
            <img
              className="w-10"
              src="/Assets/images/service/red_camera.svg"
              alt=""
            />
            <input
              onChange={(event) => {
                changeWallPhoto(event.target.files[0]);
              }}
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              ref={wallPhotoRef}
            />
          </label>
        )}
        {wallPhotoUpdating && (
          <div className="absolute bg-white/70 dark:bg-[#272727]/70 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="btn btn-link loading">Please wait...</div>
          </div>
        )}
      </div>
      <div className="flex relative justify-center bg-white dark:bg-bg-300 w-28 h-28 -mt-14 rounded-lg mx-auto shadow-3xl">
        {profilePhoto ? (
          <div className="w-full h-full relative rounded-lg overflow-hidden">
            <Image src={profilePhoto} layout="fill" objectFit="cover" />
          </div>
        ) : (
          <img className="w-16" src="/Assets/images/service/user.svg" alt="" />
        )}
        {!readOnly && (
          <label>
            <img
              className="w-10 absolute z-10 -right-5 top-9 cursor-pointer"
              src="/Assets/images/service/red_camera.svg"
              alt=""
            />
            <input
              onChange={(event) => {
                changeProfilePhoto(event.target.files[0]);
              }}
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              ref={profilePhotoRef}
            />
          </label>
        )}
        {profilePhotoUpdating && (
          <div className="absolute rounded-lg bg-white/70 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="btn btn-link loading"></div>
          </div>
        )}
      </div>
      <p className="flex justify-center float-right bg-[#d6d6d6]  w-24 mr-3 -mt-12 rounded-xl text-sm">
        New Seller
      </p>
      <div className="text-center py-8">
        <p className="text-xl dark:text-white">{serviceCenterName}</p>
        <p className="text-base dark:text-white">{speciality}</p>
        <p className="text-xl dark:text-white ">
          {profileData.name}{" "}
          <span className="text-sm text-gray-500 dark:text-white">
            ({profileData.gender})
          </span>{" "}
        </p>
        <p className="text-sm text-gray-500 dark:text-white">
          ({profileData.position})
        </p>
        <p className="text-sm text-gray-500 dark:text-white">
          {profileData.worker} worker & Team
        </p>
        <p className="text-xs text-gray-500 dark:text-white">Science 2022</p>
      </div>
    </div>
  );
};

export default ProfileRender;
