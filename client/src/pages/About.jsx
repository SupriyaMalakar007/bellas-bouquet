import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpeg";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-4">
          About Bella's Bouquet 🌸
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Every bouquet is handmade with love to make your special moments unforgettable.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Bella's Bouquet"
              className="w-80 h-80 rounded-3xl shadow-xl object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Bella's Bouquet was created with a simple goal—to make every celebration
              more beautiful through handcrafted bouquets. Whether it's a birthday,
              anniversary, proposal, graduation, or any special occasion, we design
              each bouquet with creativity, care, and attention to detail.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              We offer customized bouquets featuring flowers, chocolates, ribbons,
              photos, teddy bears, snacks, and many more unique combinations to match
              your style and budget.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-pink-50 rounded-xl p-5 text-center">
                <h3 className="text-3xl">🌸</h3>
                <p className="font-semibold mt-2">Handmade</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-5 text-center">
                <h3 className="text-3xl">🎁</h3>
                <p className="font-semibold mt-2">Custom Orders</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-5 text-center">
                <h3 className="text-3xl">💖</h3>
                <p className="font-semibold mt-2">Made with Love</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-5 text-center">
                <h3 className="text-3xl">🚚</h3>
                <p className="font-semibold mt-2">Fast Delivery</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;