import useFetch from "../../hooks/useFetch";

const ProductsPage = () => {
  const { dataFetched, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  return (
    <div>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}

      {dataFetched && dataFetched.length > 0 ? (
        <>
          {dataFetched.map((element) => {
            return <p key={element.name}>{element.name}</p>;
          })}
        </>
      ) : null}
    </div>
  );
};

export default ProductsPage;
