import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Typography from "../../components/common/Typography";
import { useState } from "react";

const ProductPage = () => {
  // get product id from url
  // fetch product data
  // display product data

  const { id } = useParams();

  const { dataFetched, loading, error } = useFetch({
    url: `https://passerelle-shop-api.julienpoirier-webdev.com/products/${id}`,
  });

  const [panier, setPanier] = useState(null);

  // console.log(dataFetched, loading, error);

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
        {
          productId: item._id,
          quantity: 1,
        },
      ]);
    }
  };

  const removeOneToCart = (item) => {
    const isInCart = isProductInCart(item._id);
    if (isInCart) {
      const myItemInCart = panier.find(
        (oneItemInPanier) => oneItemInPanier.productId === item._id
      );

      if (myItemInCart.quantity === 1) {
        setPanier(panier.filter((item) => item.productId !== id));
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

  return (
    <div className="flex justify-center border-y">
      {dataFetched ? (
        <div className=" p-4 ">
          <div className="flex gap-12">
            <div className="flex flex-col justify-center">
              <Typography tag="h1">{dataFetched.name}</Typography>
              <Typography className="text-gray-600 mb-2">
                {dataFetched.description}
              </Typography>
              <Typography customClasses=" font-bold text-lg mb-2">
                {dataFetched.price} €
              </Typography>
              <Typography className="text-gray-700 mb-4">
                En stock : {dataFetched.stock}
              </Typography>
            </div>

            <div className="w-[400px]">
              <img
                src={dataFetched.mainImageURL}
                alt={dataFetched.name}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {isProductInCart(id) ? (
            <div className="flex items-center mt-4">
              <button
                onClick={() => addToCart(dataFetched)}
                className="bg-blue-500 text-white px-4 py-2 rounded-l-lg"
              >
                +
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300">
                Quantité dans le panier: {getQuantityInCart(id)}
              </div>
              <button
                onClick={() => removeOneToCart(dataFetched)}
                className="bg-red-500 text-white px-4 py-2 rounded-r-lg"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                addToCart(dataFetched);
              }}
              className="bg-dark-primary text-white px-4 py-2 rounded-lg mt-4 w-full"
            >
              Ajouter au panier
            </button>
          )}
        </div>
      ) : null}
      {loading ? <p>Chargement</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default ProductPage;
