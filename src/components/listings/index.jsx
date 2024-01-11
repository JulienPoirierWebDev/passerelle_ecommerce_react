import Typography from "../common/Typography";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../common/ProductCard";
import { Link } from "react-router-dom";

function Listings() {
  const { dataFetched, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  let figurines = [];
  let voitures = [];

  if (dataFetched && dataFetched.length > 0) {
    figurines = dataFetched.filter((item) => {
      if (item.category.name === "Figurines et Collectibles") {
        return item;
      }
    });
  }

  if (dataFetched && dataFetched.length > 0) {
    voitures = dataFetched.filter((item) => {
      if (item.category.name === "Voitures miniatures") {
        return item;
      }
    });
  }

  return (
    <div>
      {loading ? <p>Chargement</p> : null}
      {error ? <p>{error}</p> : null}

      {voitures.length > 0 ? (
        <>
          <Typography tag="h3" customClasses={"text-center"}>
            Voiture
          </Typography>

          <div className="flex flex-row flex-wrap justify-center">
            {voitures.map((item) => {
              return (
                <Link key={item.name} to={`/produit/${item._id}`}>
                  <ProductCard item={item} />
                </Link>
              );
            })}
          </div>
        </>
      ) : null}

      {figurines.length > 0 ? (
        <>
          <Typography customClasses={"text-center"} tag="h3">
            Figurines
          </Typography>

          <div className="flex flex-row flex-wrap justify-center">
            {figurines.map((item) => {
              return (
                <Link key={item.name} to={`/produit/${item._id}`}>
                  <ProductCard item={item} />
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Listings;
