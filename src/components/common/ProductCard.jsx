import Typography from "./Typography";

function ProductCard({ item }) {
  return (
    <div
      key={item.name}
      className="max-w-sm rounded overflow-hidden shadow-lg m-20 border-2"
    >
      <div className="h-[400px] overflow-hidden">
        <img src={item.mainImageURL} alt={item.name} className="w-full" />
      </div>
      <div className="px-6 py-4">
        <Typography tag="h3" className="font-bold text-xl mb-2">
          {item.name}
        </Typography>
        <Typography className="text-gray-700 text-base">
          {item.description}
        </Typography>
      </div>
    </div>
  );
}

export default ProductCard;
