import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const HeaderLayout = () => {
  return (
    <>
      <div className="md:px-6 md:m-6 flex flex-col md:flex-row md:justify-between">
        <div className="flex mt-6 md:mt-0 justify-center">LOGO</div>
        
      <Navbar />
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default HeaderLayout