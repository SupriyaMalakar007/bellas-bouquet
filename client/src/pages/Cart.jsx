import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl mb-5">
              Your cart is empty.
            </h2>

            <Link
              to="/shop"
              className="bg-pink-600 text-white px-6 py-3 rounded-full"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center bg-white shadow rounded-xl p-5 mb-5"
              >
                {/* Product */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div>
                    <h2 className="font-bold text-xl text-pink-600">
                      {item.name}
                    </h2>

                    <p className="text-gray-600">
                      ₹{item.price} each
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 my-4 md:my-0">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-xl"
                  >
                    −
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-xl"
                  >
                    +
                  </button>

                </div>

                {/* Price & Remove */}
                <div className="text-center">

                  <h2 className="text-2xl font-bold mb-3">
                    ₹{item.price * item.quantity}
                  </h2>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full"
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}

            <div className="text-right mt-8">

              <h2 className="text-3xl font-bold text-pink-600">
                Total: ₹{total}
              </h2>

              <Link
                to="/checkout"
                className="inline-block mt-5 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full"
              >
                Proceed to Checkout →
              </Link>

            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;