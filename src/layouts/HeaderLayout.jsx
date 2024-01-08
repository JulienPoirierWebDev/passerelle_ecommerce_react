import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const HeaderLayout = () => {
  return (
    <>
      <div>
        <div>LOGO</div>
        
      <Navbar />
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default HeaderLayout