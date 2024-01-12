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
            return <ProductCard key={element.id} item={element} />;
          })}
        </>
      ) : null}
    </div>
  );
};

export default ProductsPage;
