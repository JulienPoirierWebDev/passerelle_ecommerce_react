const ProductPage = () => {
  // get product id from url
  // fetch product data
  // display product data

  const product = {
    _id: "659a7479aead0016927ff203",
    name: "Figurine Super Mario Classique",
    description:
      "Réplique détaillée de Mario, le célèbre plombier de Nintendo.",
    price: 35,
    category: "659a7435aead0016927ff200",
    stock: 150,
    mainImageURL: "https://image.smythstoys.com/original/desktop/139239.jpg",
    additionalImages: [],
    __v: 0,
  };

  const isProductInCart = () => {
    return false;
  };

  const getQuantityInCart = () => console.log("la quantité est de 0 ");

  const addToCart = () => console.log("Ajout au panier");

  const removeOneToCart = () => console.log("Moins 1 au panier");

  return (
    <div className="flex justify-center border-y">
      <div className=" p-4 ">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-green-600 font-bold text-lg mb-2">
          {product.price} €
        </p>
        <p className="text-gray-700 mb-4">En stock : {product.stock}</p>
        <div className="w-[400px]">
          <img
            src={product.mainImageURL}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        {isProductInCart() ? (
          <div className="flex items-center mt-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-l-lg"
            >
              +
            </button>
            <div className="px-4 py-2 border-t border-b border-gray-300">
              Quantité dans le panier: {getQuantityInCart(product)}
            </div>
            <button
              onClick={() => removeOneToCart(product)}
              className="bg-red-500 text-white px-4 py-2 rounded-r-lg"
            >
              -
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Ajouter au panier
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
