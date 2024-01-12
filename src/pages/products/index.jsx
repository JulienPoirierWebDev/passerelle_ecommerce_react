import { Link } from "react-router-dom";
import ProductCard from "../../components/common/ProductCard";
import useFetch from "../../hooks/useFetch";

const ProductsPage = () => {
  const { dataFetched, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}

      {dataFetched && dataFetched.length > 0 ? (
        <>
          {dataFetched.map((element) => {
            return (
              <Link key={element._id} to={`/produit/${element._id}`}>
                <ProductCard item={element} />
              </Link>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default ProductsPage;
