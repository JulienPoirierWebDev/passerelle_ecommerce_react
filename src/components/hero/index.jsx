import Button from "../common/Button"
import Typography from "../common/Typography"


function HeroBlock() {
  return (
    <div className="flex justify-between bg-dark-primary h-[584px] m-16">

    <div className="pt-12 pb-8 px-12 lg:p-16 flex flex-col justify-between">
      <div>
        <Typography customClasses="mb-12" variant="white" tag="h2">The furniture brand for the future, with timeless designs</Typography>
        <Button variant="primary" customClasses="hidden lg:block">View collection</Button>
      </div>
  
      <div className="w-11/12 xl:w-9/12">
          <Typography variant="white">A new era in eco friendly furniture with Avelon, the French luxury retail brand
        with nice fonts, tasteful colors and a beautiful way to display things digitally 
        using modern web technologies.</Typography>
      </div>

        <Button variant="primary" customClasses="lg:hidden block">View collection</Button>
    </div>

    <img className="hidden lg:block" src="/images/chair.png" alt="Une image de chaise" />


    </div>
  )
}

export default HeroBlock