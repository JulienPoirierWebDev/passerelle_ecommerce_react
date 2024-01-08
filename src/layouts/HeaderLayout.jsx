import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const HeaderLayout = () => {
  return (
    <>
      <div className="md:px-6 md:m-6 flex justify-between">
        <div>LOGO</div>
        
      <Navbar />
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default HeaderLayout