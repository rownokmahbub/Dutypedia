import CheckBox from "@components/global/CheckBox";
import AuthContext from "@lib/authContext";
import { Truncate } from "@lib/utils";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsArrowLeftSquare } from "react-icons/bs";
import AboutView from "./AboutView";
import CalendarView from "./CalendarView";
import ProfileView from "./ProfileView";
import ServiceListView from "./ServiceListView";
const FinalReview = ({ goBack, data }) => {
  const { token, setToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [readAll, setReadAll] = useState(false);
  const [agree, setAgree] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [wallPhoto, setWallPhoto] = useState(null);
  const [file1Preview, setFile1Preview] = useState(null);
  const [file2Preview, setFile2Preview] = useState(null);
  const [file3Preview, setFile3Preview] = useState(null);
  const [file4Preview, setFile4Preview] = useState(null);

  console.log(data);
  const handleSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const formData = new FormData();
    formData.append(
      "image",
      data.uploadServiceData.file1,
      data.uploadServiceData.file1.name
    );
    formData.append(
      "image",
      data.uploadServiceData.file2,
      data.uploadServiceData.file2.name
    );
    formData.append(
      "image",
      data.uploadServiceData.file3,
      data.uploadServiceData.file3.name
    );
    formData.append(
      "image",
      data.uploadServiceData.file4,
      data.uploadServiceData.file4.name
    );
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    const myHeaders2 = new Headers();
    myHeaders2.append("Authorization", `Bearer ${token}`);
    const formData2 = new FormData();
    if (profilePhoto) {
      formData2.append("image", profilePhoto, profilePhoto?.name);
    }
    const requestOptions2 = {
      method: "POST",
      headers: myHeaders2,
      body: formData2,
      redirect: "follow",
    };

    const myHeaders3 = new Headers();
    myHeaders3.append("Authorization", `Bearer ${token}`);
    const formData3 = new FormData();
    if (wallPhoto) {
      formData3.append("image", wallPhoto, wallPhoto?.name);
    }
    const requestOptions3 = {
      method: "POST",
      headers: myHeaders3,
      body: formData3,
      redirect: "follow",
    };

    try {
      setIsLoading(true);
      const uploadServiceImages = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        requestOptions
      );

      const uploadServiceImagesJson = await uploadServiceImages.json();
      const serviceImages = uploadServiceImagesJson.urls;

      let profilePhotoUrl = null;
      let wallPhotoUrl = null;
      if (profilePhoto) {
        const uploadProfilePhoto = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/upload`,
          requestOptions2
        );
        const uploadProfilePhotoJson = await uploadProfilePhoto.json();
        profilePhotoUrl = uploadProfilePhotoJson.urls[0];
      }
      if (wallPhoto) {
        const uploadWallPhoto = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/upload`,
          requestOptions3
        );
        const uploadWallPhotoJson = await uploadWallPhoto.json();
        wallPhotoUrl = uploadWallPhotoJson.urls[0];
      }

      const { data: resp } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/services/create`,
        {
          data,
          serviceImages,
          profilePhotoUrl,
          wallPhotoUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { token: newToken } = resp;
      setToken(newToken);
      toast.success("Service created successful!");
      router.push("/dashboard/multiple/profile");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(data);
    const url1 = URL.createObjectURL(data.uploadServiceData.file1);
    setFile1Preview(url1);
    const url2 = URL.createObjectURL(data.uploadServiceData.file2);
    setFile2Preview(url2);
    const url3 = URL.createObjectURL(data.uploadServiceData.file3);
    setFile3Preview(url3);
    const url4 = URL.createObjectURL(data.uploadServiceData.file4);
    setFile4Preview(url4);
    return () => {
      URL.revokeObjectURL(url1);
      URL.revokeObjectURL(url2);
      URL.revokeObjectURL(url3);
      URL.revokeObjectURL(url4);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-screen-2xl py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="grid h-max gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 flex-shrink-0 w-full lg:w-96">
          <ProfileView
            profileData={data.selectServiceData}
            profilePhotoFile={(photo) => setProfilePhoto(photo)}
            wallPhotoFile={(photo) => setWallPhoto(photo)}
            speciality={data.uploadServiceData.speciality}
          />
          <AboutView
            about={data.uploadServiceData.about}
            address={data.serviceLocationData}
          />
          <CalendarView
            workingTime={data.selectServiceData.workingTime}
            t47={data.selectServiceData.t47}
          />
        </div>
        <div className="flex-1 bg-white shadow-3xl p-6 rounded-xl">
          <BsArrowLeftSquare
            onClick={() => goBack()}
            className="text-3xl cursor-pointer text-gray-400 mb-8"
          />
          <h1 className="text-2xl">Final review</h1>
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
              <div
                className={`relative rounded-xl overflow-hidden w-full aspect-video ${
                  readAll ? "xl:aspect-video" : "xl:aspect-square"
                }`}
              >
                {file1Preview && (
                  <Image src={file1Preview} layout="fill" objectFit="cover" />
                )}
              </div>
              <div
                className={`relative rounded-xl overflow-hidden w-full aspect-video ${
                  readAll ? "xl:aspect-video" : "xl:aspect-square"
                }`}
              >
                {file2Preview && (
                  <Image src={file2Preview} layout="fill" objectFit="cover" />
                )}
              </div>
              <div
                className={`relative rounded-xl overflow-hidden w-full aspect-video ${
                  readAll ? "xl:aspect-video" : "xl:aspect-square"
                }`}
              >
                {file3Preview && (
                  <Image src={file3Preview} layout="fill" objectFit="cover" />
                )}
              </div>
              <div
                className={`relative rounded-xl overflow-hidden w-full aspect-video ${
                  readAll ? "xl:aspect-video" : "xl:aspect-square"
                }`}
              >
                {file4Preview && (
                  <Image src={file4Preview} layout="fill" objectFit="cover" />
                )}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-2xl">{data.uploadServiceData.title}</h4>
              <div className=" leading-relaxed tracking-wide font-thin text-gray-600">
                <Truncate
                  str={data.uploadServiceData.description}
                  length={
                    readAll ? data.uploadServiceData.description.length : 550
                  }
                  ending={
                    <button
                      onClick={() => setReadAll(true)}
                      className="text-primary"
                    >
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
              <p className="text-primary underline decoration-gray-300 text-center text-xl mt-4">
                Starting Price {data.selectServiceData.startingPrice} ৳
              </p>
            </div>
          </div>

          <div className="mt-16">
            <ServiceListView
              data={data.optionsData}
              facilites={data.selectServiceData.facilites}
            />
          </div>

          <div className="pt-16 border-t mt-16 pb-8 space-y-4">
            <div className="">
              <CheckBox
                value={agree}
                onChange={() => setAgree(!agree)}
                title={
                  <span className="text-xs text-gray-500">
                    I agree with all the terms and conditions{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      className="link link-primary"
                    >
                      Read more
                    </a>
                  </span>
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="btn btn-wide bg-white text-black hover:bg-gray-200">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!agree || isLoading}
                className={`btn btn-primary btn-wide ${isLoading && "loading"}`}
              >
                Confirm to create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReview;
