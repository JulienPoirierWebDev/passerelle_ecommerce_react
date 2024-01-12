import useCartContext from "../../hooks/useCartContext";
import Typography from "../../components/common/Typography";
import useFetch from "../../hooks/useFetch";

const CartPage = () => {
  const { panier } = useCartContext();

  const { dataFetched, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  const getTotalAndUpdateItemsInPanier = () => {
    if (!dataFetched) {
      return 0;
    }
    return panier?.reduce((acc, item) => {
      for (let i = 0; i < dataFetched.length; i++) {
        if (item.productId === dataFetched[i]._id) {
          item.price = dataFetched[i].price;
          item.name = dataFetched[i].name;
        }
      }

      return acc + item.price * item.quantity;
    }, 0);
  };

  console.log(panier);

  if (loading) return <p>Chargement</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Typography tag="h1">Cart</Typography>

      <div className="w-10/12">
        {panier?.length > 0
          ? panier.map((product) => (
              <div
                className="flex w-full justify-between m-20"
                key={product.productId}
              >
                <Typography>{product.name}</Typography>
                <div className="flex">
                  <div className="m-2">
                    <button className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
                      +
                    </button>
                  </div>
                  <Typography>{product.quantity}</Typography>
                  <button className="bg-red-500 text-white px-4 py-2 m-2 rounded">
                    -
                  </button>
                </div>
                <div>
                  <button className="bg-dark-primary text-white px-4 py-2 rounded-l-lg">
                    Supprimer tout
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>

      <div>
        <Typography tag="h2">
          Total : {getTotalAndUpdateItemsInPanier()}€
        </Typography>

        <Typography tag="h2">
          Total items : {panier?.reduce((acc, item) => acc + item.quantity, 0)}
        </Typography>
      </div>

      <div>
        <button>Vider le panier</button>

        <button>Commander</button>
      </div>
    </div>
  );
};

export default CartPage;
