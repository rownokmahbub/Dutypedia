import React from 'react'
import FeedLayout from "layouts/FeedLayout";
import MainCategoty from '@components/feed/MainCategoty';
const Services = () => {
  return (
    <div>
        <MainCategoty/>
    </div>
  )
}
Services.layout = FeedLayout;
export default Services;