import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    message: "",
  });

  // Total with quantity
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const orderNow = () => {
    if (!form.name || !form.phone || !form.address || !form.date) {
      alert("Please fill all required fields.");
      return;
    }

    const items = cart
      .map(
        (item) =>
          `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join("\n");

    const message = `🌸 *Bella's Bouquet - New Order*

👤 Name: ${form.name}

📞 Phone: ${form.phone}

📍 Address:
${form.address}

📅 Delivery Date:
${form.date}

🛍 Items:
${items}

💰 Total: ₹${total}

💌 Gift Message:
${form.message || "None"}`;

    window.open(
      `https://wa.me/916289253711?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-4xl font-bold text-pink-600 text-center mb-2">
          Checkout 🌸
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Fill in your details to place your bouquet order.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* Full Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name *
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number *
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Address */}
          <div className="mb-5">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Delivery Address *
            </label>

            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="Enter complete delivery address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Delivery Date */}
          <div className="mb-5">
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Delivery Date *
            </label>

            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <p className="text-sm text-gray-500 mt-2">
              Please choose the date you would like your bouquet delivered.
            </p>
          </div>

          {/* Gift Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Gift Message (Optional)
            </label>

            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Write your personal message..."
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-pink-50 rounded-xl p-5 mb-8">

            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-2 border-b"
                >
                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <span className="font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))
            )}

            <div className="flex justify-between mt-5 text-2xl font-bold text-pink-600">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          {/* WhatsApp Button */}
          <button
            onClick={orderNow}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-4 rounded-xl transition duration-300"
          >
            💬 Order on WhatsApp
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;