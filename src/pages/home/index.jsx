import Features from "../../components/features"
import HeroBlock from "../../components/hero"
import Listings from "../../components/listings"

const HomePage = () => {
  return (
    <div className="m-16 mt-20 ">
      <Listings/>

      <HeroBlock />
      <Features/>

    </div>
  )
}

export default HomePage