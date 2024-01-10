import useFetch from "../../hooks/useFetch";

const ProductsPage = () => {
  const { items, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  return (
    <div>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}

      {items.length > 0 ? (
        <>
          {items.map((element) => {
            return <p key={element.name}>{element.name}</p>;
          })}
        </>
      ) : null}
    </div>
  );
};

export default ProductsPage;
