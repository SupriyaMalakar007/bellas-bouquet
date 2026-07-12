import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  // Load product from MySQL
  useEffect(() => {
    fetch("https://bellas-bouquet.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));

        if (found) {
          setProduct(found);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

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

  const updateProduct = async () => {
    try {
      const response = await fetch(
        `https://bellas-bouquet.onrender.com/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Bouquet Updated Successfully 🌸");
        navigate("/admin/manage");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-pink-600 mb-8">
          Edit Bouquet
        </h1>

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        >
          <option>Rose Bouquet</option>
          <option>Chocolate Bouquet</option>
          <option>Memory Bouquet</option>
          <option>Ribbon Bouquet</option>
          <option>Snack Bouquet</option>
          <option>Kids Bouquet</option>
          <option>Luxury Bouquet</option>
        </select>

        <textarea
          rows="4"
          name="description"
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
          onClick={updateProduct}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Update Bouquet
        </button>

      </div>

    </div>
  );
}

export default EditProduct;