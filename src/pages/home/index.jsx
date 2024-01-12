import { useEffect } from "react";
import CalculateWithUseReducer from "../../components/CalculateWithUseReducer";
import Features from "../../components/features";
import HeroBlock from "../../components/hero";
import Listings from "../../components/listings";
import useFetch from "../../hooks/useFetch";
import useUserContext from "../../hooks/useUserContext";
import { CART_TYPES } from "../../contexts/CartContext/CartContextProvider";
import useCartContext from "../../hooks/useCartContext";

const useConnecterUserPanier = () => {
  const { user } = useUserContext();
  const { dispatch } = useCartContext();

  useEffect(() => {
    const fetchPanier = async () => {
      const request = await fetch(
        `http://passerelle-shop-api.julienpoirier-webdev.com/carts/users/${user._id}`,
        {
          headers: { Authorization: `Bearer ${user?.jwt}` },
        }
      );
      const response = await request.json();
      console.log(response);
      if (response && response.products) {
        dispatch({
          type: CART_TYPES.CHANGE_PANIER,
          payload: { panier: response.products },
        });
      }
    };

    if (user) {
      fetchPanier();
    }
  }, [user, dispatch]);
};
const HomePage = () => {
  // useConnecterUserPanier();
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
