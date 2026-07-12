import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUserShield,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Bella's Bouquet"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-pink-600">
              Bella's Bouquet
            </h1>

            <p className="text-xs text-gray-500">
              Handmade with ❤️
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/" className="hover:text-pink-500 transition">
            Home
          </Link>

          <Link to="/shop" className="hover:text-pink-500 transition">
            Shop
          </Link>

          <Link to="/customize" className="hover:text-pink-500 transition">
            Customize
          </Link>

          <Link to="/about" className="hover:text-pink-500 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-pink-500 transition">
            Contact
          </Link>

          <Link
            to="/admin"
            className="flex items-center gap-2 hover:text-pink-500 transition"
          >
            <FaUserShield />
            Admin Login
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart
              size={24}
              className="text-pink-600"
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-5">

          <Link to="/cart" className="relative">
            <FaShoppingCart
              size={24}
              className="text-pink-600"
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600"
          >
            {menuOpen ? (
              <FaTimes size={26} />
            ) : (
              <FaBars size={26} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            Shop
          </Link>

          <Link
            to="/customize"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            Customize
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            Contact
          </Link>

          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-pink-50"
          >
            <div className="flex items-center gap-2">
              <FaUserShield />
              Admin Login
            </div>
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;