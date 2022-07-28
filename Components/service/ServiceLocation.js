import { DivisionList } from "@lib/data/location/division";
import { DistrictList } from "@lib/data/location/district";
import { AreaList } from "@lib/data/location/area";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
const ServiceLocation = ({ goNext, goBack, savedData }) => {
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [selectedCity, setSelectedCity] = useState(savedData.city || null);
  const [selectedArea, setSelectedArea] = useState(savedData.area || null);
  const [selectedState, setSelectedState] = useState(savedData.state || null);
  const [address, setAddress] = useState(savedData.address || "");
  const cityRef = useRef(null);
  const areaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    goNext({
      city: selectedCity,
      area: selectedArea,
      state: selectedState,
      address: address,
    });
  };

  useEffect(() => {
    if (savedData?.state) {
      setCity(DistrictList[savedData.state]);
    }
    if (savedData?.city) {
      setArea(AreaList[savedData.state][savedData.city]);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-lg mx-auto shadow-3xl mt-20 rounded-lg py-4 bg-white px-4 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
    >
      <BsArrowLeftSquare
        onClick={() => goBack()}
        className="text-3xl cursor-pointer text-gray-400 md:ml-20 mt-10"
      />
      <div className="max-w-xl mx-auto">
        <div className="">
          <p className="text-center text-xl">Service Center Location</p>
        </div>
        <div className="flex flex-col mt-8">
          <p className="mb-2">Select Your Region</p>
          <div className="mb-3">
            <select
              value={selectedState}
              required
              onChange={(event) => {
                setSelectedState(event.target.value);
                setSelectedCity(null);
                setSelectedArea(null);
                cityRef.current.value = "";
                areaRef.current.value = "";
                setArea([]);
                setCity(DistrictList[event.target.value]);
              }}
              className="select select-bordered w-full dark:bg-bg-300 dark:border-[#515150] dark:text-white"
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <p className="mb-2">Select District</p>
            <select
              required
              value={selectedCity}
              onChange={(event) => {
                setSelectedCity(event.target.value);
                setSelectedArea(null);
                areaRef.current.value = "";
                setArea(AreaList[selectedState][event.target.value]);
              }}
              ref={cityRef}
              className="select select-bordered w-full dark:bg-bg-300 dark:border-[#515150] dark:text-white"
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
          </div>
          <div className="">
            <p className="mb-2">Select Area</p>
            <select
              ref={areaRef}
              value={selectedArea}
              onChange={(event) => setSelectedArea(event.target.value)}
              className="select select-bordered w-full dark:bg-bg-300 dark:border-[#515150] dark:text-white"
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
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Address
          </label>
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="textarea textarea-bordered w-full dark:bg-bg-300 dark:border-[#515150] dark:text-white"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex justify-end mt-10 mb-10">
          <button
            type="submit"
            className="btn btn-primary w-[130px] min-h-0 h-9 font-normal text-sm capitalize"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceLocation;
