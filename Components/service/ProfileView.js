import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

const ProfileView = ({
  profileData,
  speciality,
  profilePhotoFile,
  wallPhotoFile,
}) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [wallPhoto, setWallPhoto] = useState(null);
  const [wallPhotoPreview, setWallPhotoPreview] = useState(null);
  const profilePhotoRef = useRef(null);
  const wallPhotoRef = useRef(null);
  useEffect(() => {
    if (!profilePhoto) {
      return;
    }
    if (profilePhoto.size > 5242880) {
      toast.error("File size should be less than 5MB");
      profilePhotoRef.current.value = "";
      setProfilePhoto(null);
      profilePhotoFile(null);
      return;
    }
    profilePhotoFile(profilePhoto);
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
      wallPhotoFile(null);
      return;
    }
    wallPhotoFile(wallPhoto);
    const objectUrl = URL.createObjectURL(wallPhoto);
    setWallPhotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [wallPhoto]);

  return (
    <div className="shadow-3xl h-max bg-white dark:bg-bg-300 dark:border-[#515150] dark:text-white rounded-xl overflow-hidden ">
      <div className="bg-gradient-to-r from-[#d93baf] to-[#854a58] h-48 relative">
        {wallPhotoPreview && (
          <Image src={wallPhotoPreview} layout="fill" objectFit="cover" />
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
            <Image src={profilePhotoPreview} layout="fill" objectFit="cover" />
          </div>
        ) : (
          <img className="w-16" src="/Assets/images/service/user.svg" alt="" />
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
      <p className="flex justify-center float-right bg-[#d6d6d6] w-24 mr-3 -mt-12 rounded-xl text-sm">
        New Seller
      </p>
      <div className="text-center py-8">
        <p className="text-xl">{profileData.serviceName}</p>
        <p className="text-base">{speciality}</p>
        <p className="text-xl">
          {profileData.providerName}{" "}
          <span className="text-sm text-gray-500">({profileData.gender})</span>{" "}
        </p>
        <p className="text-sm text-gray-500">({profileData.position})</p>
        <p className="text-sm text-gray-500">
          {profileData.worker} worker & Team
        </p>
        <p className="text-xs text-gray-500">Science 2022</p>
      </div>
    </div>
  );
};

export default ProfileView;
