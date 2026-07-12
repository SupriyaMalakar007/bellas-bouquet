import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProduct((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveProduct = async () => {
    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.description ||
      !product.image
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          price: Number(product.price),
          category: product.category,
          description: product.description,
          image: product.image,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Bouquet Added Successfully 🌸");
        navigate("/shop");
      } else {
        alert(data.message || "Failed to add bouquet.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Add Bouquet
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Bouquet Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="mb-6"
        />

        <button
          onClick={saveProduct}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Save Bouquet
        </button>

      </div>
    </div>
  );
}

export default AddProduct;