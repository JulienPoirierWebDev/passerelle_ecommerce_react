import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const HeaderLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:px-6 md:m-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1 flex justify-center items-center">
            LOGO
          </div>
          <div className="col-span-1 md:col-span-2">
            <Navbar />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HeaderLayout;
