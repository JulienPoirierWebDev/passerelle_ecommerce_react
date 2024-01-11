import { useLocation, Link } from "react-router-dom";
import Typography from "../common/Typography";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import useCartContext from "../../hooks/useCartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUserContext();

  const { getTotalNumberOfItemsInCart } = useCartContext();

  let location = useLocation();

  console.log(location.pathname);

  const paths = [
    {
      path: "/",
      name: "Accueil",
      isAuthenticated: false,
    },
    {
      path: "/nos-produits",
      name: "Nos produits",
    },
  ];

  const disconnectedPaths = [
    {
      path: "/connexion",
      name: "Connexion",
    },
    {
      path: "/inscription",
      name: "Inscription",
    },
  ];

  return (
    <>
      <div>
        <ul className="hidden md:flex flex-row gap-6 justify-center align-center">
          {paths.map((element) => {
            return (
              <Link to={element.path} key={element.path}>
                <Typography
                  customClasses={
                    element.path === location.pathname ? "underline" : null
                  }
                  tag="li"
                >
                  {element.name}
                </Typography>
              </Link>
            );
          })}

          {!user
            ? disconnectedPaths.map((element) => {
                return (
                  <Link to={element.path} key={element.path}>
                    <Typography
                      customClasses={
                        element.path === location.pathname ? "underline" : null
                      }
                      tag="li"
                    >
                      {element.name}
                    </Typography>
                  </Link>
                );
              })
            : null}

          {user ? (
            <>
              <Link to="/mon-compte" className="flex align-center">
                <img src={profileIcon} alt="Voir mon profil" />
              </Link>
            </>
          ) : null}
          <Link to="/panier" className="flex align-center ">
            <img src={cartIcon} alt="Se rendre au panier" />
            {getTotalNumberOfItemsInCart()}
          </Link>
        </ul>

        <div className="md:hidden flex justify-center p-6">
          <Hamburger onToggle={() => setIsOpen(!isOpen)} />
        </div>

        <div className="md:hidden flex justify-center">
          {isOpen ? (
            <div className=" w-screen text-center flex flex-col list-none w-48">
              <Link to="/">
                <Typography tag="li">Accueil</Typography>
              </Link>
              <Link to="/nos-produits">
                <Typography tag="li">Nos produits</Typography>
              </Link>
              <Link to="/connexion">
                <Typography tag="li">Connexion</Typography>
              </Link>
              <Link to="/inscription">
                <Typography tag="li">Inscription</Typography>
              </Link>
              <Link to="/mon-compte">
                <Typography tag="li">Mon compte</Typography>
              </Link>
              <Link to="/panier">
                <Typography tag="li">Mon panier</Typography>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
