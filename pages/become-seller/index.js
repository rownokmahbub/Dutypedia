import Mainservices from "@components/services/Mainservices";
import FeedLayout from "layouts/FeedLayout";
import React from "react";

const service = () => {
  return (
    <>
      <Mainservices />
    </>
  );
};

service.layout = FeedLayout;
export default service;
