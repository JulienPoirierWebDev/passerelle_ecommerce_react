import { useLocation } from "react-router-dom";

const Navbar = () =>{

  let location = useLocation();

  console.log(location);

  return (<>
   {location.pathname}
    
    </>)
}

export default Navbar;