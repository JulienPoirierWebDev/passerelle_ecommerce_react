import CalculateWithUseReducer from "../../components/CalculateWithUseReducer";
import Features from "../../components/features";
import HeroBlock from "../../components/hero";
import Listings from "../../components/listings";

const HomePage = () => {
  return (
    <div className="m-16 mt-20 ">
      <CalculateWithUseReducer />
      <HeroBlock />
      <Features />
      <Listings />
    </div>
  );
};

export default HomePage;
