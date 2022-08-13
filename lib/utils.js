import toast from "react-hot-toast";
import moment from "moment";

export const isBefore = (startTime, endTime) => {
  const start = moment(startTime, "HH:mm");
  const end = moment(endTime, "HH:mm");
  return start.isBefore(end);
};

export async function fetchPostJSON(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data || {}),
    });
    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export const sortBy = (data = [], key, order = "asc") => {
  return data.sort((a, b) => {
    if (order === "asc") {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return b[key] > a[key] ? 1 : -1;
    }
  });
};

//get random number between range
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Truncate = ({
  str,
  length = 100,
  ending = "...",
  color = "text-gray-600",
}) => {
  if (str.length > length) {
    return (
      <div>
        <p className={`${color}`}>
          {str.substring(0, length)} {ending}
        </p>
      </div>
    );
  } else {
    return str;
  }
};

export const uploadImage = async (file, token) => {
  if (!file || !token) {
    return false;
  }
  if (file.size > 5242880) {
    toast.error("File size should be less than 5MB!");
    return false;
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
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      requestOptions
    );
    const data = await resp.json();
    const { urls } = data;
    const url = urls[0];
    return url;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
    return false;
  }
};

export const uploadMultipleImages = async (files, token) => {
  if (!files || !token) {
    return false;
  }
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("image", file, file.name);
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      requestOptions
    );
    const data = await resp.json();
    const { urls } = data;
    return urls;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
    return false;
  }
};
