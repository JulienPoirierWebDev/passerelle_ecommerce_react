import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Typography from "../../components/common/Typography";

import useCartContext from "../../hooks/useCartContext";

const ProductPage = () => {
  const { id } = useParams();

  const { dataFetched, loading, error } = useFetch({
    url: `https://passerelle-shop-api.julienpoirier-webdev.com/products/${id}`,
  });

  const { isProductInCart, getQuantityInCart, dispatch } = useCartContext();

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
                onClick={() =>
                  dispatch({
                    type: "addOneItem",
                    payload: { item: dataFetched },
                  })
                }
                className="bg-blue-500 text-white px-4 py-2 rounded-l-lg"
              >
                +
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300">
                Quantité dans le panier: {getQuantityInCart(id)}
              </div>
              <button
                onClick={() =>
                  dispatch({
                    type: "removeOneFromOneItem",
                    payload: { item: dataFetched },
                  })
                }
                className="bg-red-500 text-white px-4 py-2 rounded-r-lg"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "addOneItem",
                  payload: { item: dataFetched },
                });
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
