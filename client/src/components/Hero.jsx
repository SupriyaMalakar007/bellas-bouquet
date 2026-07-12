import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        height: "90vh",
        background:
          "linear-gradient(to right,#ffe4ec,#fff7f9)"
      }}
      className="flex flex-col justify-center items-center text-center px-5"
    >
      <h1 className="text-6xl font-bold text-pink-600 mb-6">
        Bella's Bouquet 🌸
      </h1>

      <p className="text-2xl text-gray-700 max-w-2xl">
        Handmade bouquets made with love for birthdays,
        anniversaries, proposals and every special moment.
      </p>

      <div className="mt-10">
        <Link
          to="/shop"
          className="bg-pink-600 text-white px-8 py-4 rounded-full text-xl hover:bg-pink-700 transition"
        >
          Shop Now
        </Link>
      </div>

    </section>
  );
}

export default Hero;