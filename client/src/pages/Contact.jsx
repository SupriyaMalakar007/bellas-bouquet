import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-4">
          Contact Us 🌸
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We'd love to create the perfect bouquet for your special occasion.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-pink-50 rounded-2xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Bella's Bouquet
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-pink-600 text-xl" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+916289253711" className="text-gray-700">
                    +91 6289253711
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-pink-600 text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:indranidas032898@gmail.com"
                    className="text-gray-700"
                  >
                    indranidas032898@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-pink-600 text-xl" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Naihati, West Bengal</p>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/916289253711"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Bella's Bouquet Location"
              src="https://www.google.com/maps?q=Naihati,West+Bengal&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;