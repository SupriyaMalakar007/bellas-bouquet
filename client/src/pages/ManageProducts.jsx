import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Load products from MySQL
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://bellas-bouquet.onrender.com/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bouquet?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://bellas-bouquet.onrender.com/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      alert(data.message);

      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">

      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        Manage Bouquets 🌸
      </h1>

      {products.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          No bouquets found.
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold text-pink-600">
                  {product.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {product.category}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    to={`/admin/edit/${product.id}`}
                    className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default ManageProducts;