import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-pink-600">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <h3 className="text-2xl font-bold mt-4 text-gray-800">
          ₹{product.price}
        </h3>

        <div className="flex gap-3 mt-5">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-full font-semibold transition"
          >
            🛒 Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-5 py-3 rounded-full font-semibold transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;