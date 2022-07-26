import Category from "@components/feed/Category";
import Cta from "@components/feed/Cta";
import LoadMore from "@components/feed/LoadMore";
import RecentView from "@components/feed/RecentView";
import SubHeader from "@components/feed/SubHeader";
import Welcome from "@components/feed/Welcome";
import Footer from "@components/global/Footer";
import CreateAccount from "@components/home/CreateAccount";
import PopularCategory from "@components/home/PopularCategory";
import FeedLayout from "layouts/FeedLayout";
const FeedPage = () => {
  return (
    <>
      <Category />
      <div className="container mx-auto max-w-screen-2xl pb-16">
        <div className="bg-[#fafafa] dark:bg-black py-8 px-4 sm:px-6 rounded-lg shadow-md">
          <Welcome />
          <div className="sticky top-12 z-10 py-5 bg-[#fafafa]  dark:bg-black w-full">
            <SubHeader />
          </div>
          
          <RecentView title="Checkout some of our recent view" />
          <Cta />
          <RecentView title="Recent view" />
          <PopularCategory container={false} />
          <RecentView title="Recent view" />
          <LoadMore />
          <CreateAccount />
          <Footer />
          </div>
      </div>
    </>
  );
};

FeedPage.layout = FeedLayout;
export default FeedPage;
