import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Customize() {
  const [form, setForm] = useState({
    bouquet: "",
    ribbon: "",
    chocolates: "",
    teddy: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const text = `🌸 *Custom Bouquet Request*

🌹 Bouquet Type: ${form.bouquet}

🎀 Ribbon Color: ${form.ribbon}

🍫 Chocolates: ${form.chocolates}

🧸 Teddy Bear: ${form.teddy}

💰 Budget: ₹${form.budget}

💌 Message:
${form.message}`;

    window.open(
      `https://wa.me/916289253711?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        <h1 className="text-5xl font-bold text-pink-600 text-center mb-8">
          Customize Your Bouquet 🌸
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-5">

          <input
            type="text"
            name="bouquet"
            placeholder="Bouquet Type (Rose, Chocolate, Memory...)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="ribbon"
            placeholder="Ribbon Color"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="chocolates"
            placeholder="Chocolate Type"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="teddy"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Add Teddy?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <input
            type="number"
            name="budget"
            placeholder="Budget (₹)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Special Instructions..."
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl text-lg font-bold"
          >
            💬 Send Custom Order
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Customize;