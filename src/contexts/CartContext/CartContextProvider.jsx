import { useState } from "react";
import CartContext from "./CartContext";

export const useContextValue = (initialValue) => {
  const [panier, setPanier] = useState(initialValue || []);

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

  const addToCart = (item) => {
    const isInCart = isProductInCart(item._id);
    if (isInCart) {
      setPanier(
        panier.map((itemInPanier) => {
          if (itemInPanier.productId === item._id) {
            return {
              productId: itemInPanier.productId,
              quantity: itemInPanier.quantity + 1,
            };
          }
          return itemInPanier;
        })
      );
    } else {
      setPanier([
        ...panier,
        {
          productId: item._id,
          quantity: 1,
        },
      ]);
    }
  };

  const removeOneToCart = (item) => {
    const isInCart = isProductInCart(item._id);
    console.log(isInCart);
    if (isInCart) {
      const myItemInCart = panier.find(
        (oneItemInPanier) => oneItemInPanier.productId === item._id
      );
      console.log(myItemInCart);
      if (myItemInCart.quantity === 1) {
        setPanier(panier.filter((oneItem) => oneItem.productId !== item._id));
        return;
      } else {
        setPanier(
          panier.map((oneItemInPanier) => {
            if (oneItemInPanier.productId === item._id) {
              return {
                productId: oneItemInPanier.productId,
                quantity: oneItemInPanier.quantity - 1,
              };
            }
            return oneItemInPanier;
          })
        );
      }
    }
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

  return {
    panier,
    setPanier,
    isProductInCart,
    getQuantityInCart,
    addToCart,
    removeOneToCart,
    getTotalNumberOfItemsInCart,
  };
};

const CartContextProvider = ({ children }) => {
  const {
    panier,
    setPanier,
    isProductInCart,
    getQuantityInCart,
    addToCart,
    removeOneToCart,
    getTotalNumberOfItemsInCart,
  } = useContextValue();
  return (
    <CartContext.Provider
      value={{
        isProductInCart,
        getQuantityInCart,
        addToCart,
        removeOneToCart,
        getTotalNumberOfItemsInCart,
        panier,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
