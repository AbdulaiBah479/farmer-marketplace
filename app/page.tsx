import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "Le 250",
    farmer: "Abdul Farm",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Organic Carrots",
    price: "Le 180",
    farmer: "Green Valley Farm",
    image:
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Fresh Peppers",
    price: "Le 300",
    farmer: "Mama Agro",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <Hero />

      <section className="px-10 pb-20">
        <h2 className="mb-10 text-4xl font-bold text-gray-800">
          Featured Products
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              farmer={product.farmer}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}