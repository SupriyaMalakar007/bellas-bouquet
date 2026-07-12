import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customize from "./pages/Customize";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import ProtectedRoute from "./components/ProtectedRoute";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/add" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path="/admin/manage" element={<ProtectedRoute><ManageProducts /></ProtectedRoute>} />
        <Route path="/admin/edit/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
      </Routes>
  );
}

export default App;