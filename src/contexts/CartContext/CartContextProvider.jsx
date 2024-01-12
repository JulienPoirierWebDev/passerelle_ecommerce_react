import { useReducer } from "react";
import CartContext from "./CartContext";

const CART_TYPES = {
  ADD: "addOneItem",
  REMOVE_ONE_QUANTITY: "removeOneFromOneItem",
  REMOVE_ONE_ITEM: "removeOneItem",
  CLEAR: "removeAllItems",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CART_TYPES.ADD:
      if (
        state.panier.find((item) => item.productId === action.payload.item._id)
      ) {
        const nouveauPanier = state.panier.map((itemInPanier) => {
          if (itemInPanier.productId === action.payload.item._id) {
            return {
              productId: itemInPanier.productId,
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
            { productId: action.payload.item._id, quantity: 1 },
          ],
        };
      }
    case CART_TYPES.REMOVE_ONE_QUANTITY:
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
            if (testedItem.productId !== itemToUpdate._id) {
              return {
                productId: testedItem.productId,
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
  const [state, dispatch] = useReducer(reducer, { panier: [] });

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
      console.log(oneItemInPanier);
      return oneItemInPanier.productId === itemId;
    });

    console.log(myItem);

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
