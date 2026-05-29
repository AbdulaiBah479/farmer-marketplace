type ProductProps = {
    name: string;
    price: string;
    farmer: string;
    image: string;
  };
  
  export default function ProductCard({
    name,
    price,
    farmer,
    image,
  }: ProductProps) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:scale-105">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover"
        />
  
        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold">{name}</h3>
  
          <p className="mb-2 text-lg text-green-700">{price}</p>
  
          <p className="mb-4 text-gray-500">
            Farmer: {farmer}
          </p>
  
          <button className="w-full rounded-xl bg-green-700 py-3 text-white hover:bg-green-800">
            Buy Now
          </button>
        </div>
      </div>
    );
  }