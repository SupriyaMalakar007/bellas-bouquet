import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          Featured Bouquets 🌸
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Handcrafted bouquets for every special occasion.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;