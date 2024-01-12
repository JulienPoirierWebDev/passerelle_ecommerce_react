import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import useUserContext from "../../hooks/useUserContext";

export const CART_TYPES = {
  ADD: "addOneItem",
  REMOVE_ONE_QUANTITY: "removeOneFromOneItem",
  REMOVE_ONE_ITEM: "removeOneItem",
  CLEAR: "removeAllItems",
  CHANGE_PANIER: "changePanier",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CART_TYPES.CHANGE_PANIER:
      return { ...state, panier: action.payload.panier };

    case CART_TYPES.CLEAR:
      return { ...state, panier: [] };
    case CART_TYPES.REMOVE_ONE_ITEM:
      return {
        ...state,
        panier: state.panier.filter(
          (item) => item.productId !== action.payload.item._id
        ),
      };
    case CART_TYPES.ADD:
      if (
        state.panier.find((item) => item.productId === action.payload.item._id)
      ) {
        const nouveauPanier = state.panier.map((itemInPanier) => {
          if (itemInPanier.productId === action.payload.item._id) {
            return {
              ...itemInPanier,
              quantity: itemInPanier.quantity + 1,
            };
          }
          return itemInPanier;
        });

        return { ...state, panier: nouveauPanier };
      } else {
        return {
          ...state,
          panier: [
            ...state.panier,
            {
              ...action.payload.item,
              productId: action.payload.item._id,
              quantity: 1,
            },
          ],
        };
      }
    case CART_TYPES.REMOVE_ONE_QUANTITY:
      console.log(action.payload.item);
      if (
        state.panier.find((item) => item.productId === action.payload.item._id)
      ) {
        const itemToUpdate = state.panier.find(
          (item) => item.productId === action.payload.item._id
        );

        if (itemToUpdate.quantity === 1) {
          const newPanier = state.panier.filter(
            (testedItem) => testedItem.productId !== itemToUpdate.productId
          );

          return { ...state, panier: newPanier };
        } else {
          const newPanier = state.panier.map((testedItem) => {
            console.log(testedItem.productId, itemToUpdate._id);
            if (testedItem.productId === itemToUpdate._id) {
              return {
                ...testedItem,
                quantity: testedItem.quantity - 1,
              };
            } else {
              return testedItem;
            }
          });

          return { ...state, panier: newPanier };
        }
      } else {
        throw new Error("Le produit ciblé n'est pas dans le panier");
      }
    default:
      break;
  }
};

const CartContextProvider = ({ children }) => {
  // checkif panier is in local storage
  const panierFromStorage = localStorage.getItem("panier");
  const initialPanier = panierFromStorage ? JSON.parse(panierFromStorage) : [];

  const [state, dispatch] = useReducer(reducer, { panier: initialPanier });

  const { user } = useUserContext();

  const { panier } = state;

  const isProductInCart = (itemId) => {
    if (panier === null) {
      return false;
    }
    const isInCart = panier.find((item) => item.productId === itemId);

    return Boolean(isInCart);
  };

  const getQuantityInCart = (itemId) => {
    const myItem = panier.find((oneItemInPanier) => {
      return oneItemInPanier.productId === itemId;
    });

    if (myItem) {
      return myItem.quantity;
    }

    return 0;
  };

  const getTotalNumberOfItemsInCart = () => {
    let total = 0;
    if (panier) {
      total = panier.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
    return total;
  };

  // remove all items

  // remove all quantity of one item

  useEffect(() => {
    const sendPanierToServer = async () => {
      const request = await fetch(
        `http://passerelle-shop-api.julienpoirier-webdev.com/carts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.jwt}`,
          },
          body: JSON.stringify({
            products: panier,
          }),
        }
      );

      const response = await request.json();

      console.log(response);
    };
    if (user) {
      // sendPanierToServer();
    } else {
      localStorage.setItem("panier", JSON.stringify(panier));
    }
  }, [panier, user]);

  return (
    <CartContext.Provider
      value={{
        isProductInCart,
        getQuantityInCart,
        dispatch,
        getTotalNumberOfItemsInCart,
        panier,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
