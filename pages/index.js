import RandomMessage from "@components/global/RandomMessage";
import AppSection from "@components/home/AppSection";
import BackToTop from "@components/home/BackToTop";
import BuyerFeedback from "@components/home/BuyerFeedback";
import CreateAccount from "@components/home/CreateAccount";
import Features from "@components/home/Features";
import Feedback from "@components/home/Feedback";
import Hero from "@components/home/Hero";
import PopularCategory from "@components/home/PopularCategory";
import State from "@components/home/State";

const HomePage = () => {
  return (
    <>
      <RandomMessage />
      <Hero />
      <State />
      <Features />
      <PopularCategory />
      <BuyerFeedback />
      <AppSection />
      <CreateAccount />
      <Feedback />
      <BackToTop/>
    </>
  );
};

export default HomePage;
