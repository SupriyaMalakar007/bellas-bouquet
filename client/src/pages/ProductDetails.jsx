import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API_URL from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-500">
            Product Not Found
          </h1>

          <Link
            to="/shop"
            className="text-pink-600 underline mt-5 inline-block"
          >
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert("Added to Cart 🌸");
  };

  const whatsappOrder = () => {
    const message = `
🌸 Bella's Bouquet

I'm interested in this bouquet.

💐 ${product.name}

💰 Price: ₹${product.price}

Please provide more details.
`;

    window.open(
      `https://wa.me/916289253711?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">

          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl shadow-xl w-full"
          />

          <div>
            <h1 className="text-5xl font-bold text-pink-600">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              {product.description}
            </p>

            <h2 className="text-4xl font-bold mt-8">
              ₹{product.price}
            </h2>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={handleAddToCart}
                className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={whatsappOrder}
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600"
              >
                💬 Order on WhatsApp
              </button>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;