import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-pink-50">

      {/* Header */}
      <div className="bg-pink-600 text-white p-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Bella's Bouquet Admin 🌸
        </h1>

        <button
          onClick={logout}
          className="bg-white text-pink-600 px-5 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Dashboard */}
      <div className="max-w-6xl mx-auto py-10 px-6">

        <h2 className="text-4xl font-bold mb-8">
          Welcome, Indrani 👋
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Add Product */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold text-pink-600">
              ➕ Add Bouquet
            </h3>

            <p className="mt-4 text-gray-600">
              Add a new bouquet to the website.
            </p>

            <button
              onClick={() => navigate("/admin/add")}
              className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg"
            >
              Add
            </button>

          </div>

          {/* Manage Products */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold text-pink-600">
              ✏️ Manage Bouquets
            </h3>

            <p className="mt-4 text-gray-600">
              Edit or delete existing bouquets.
            </p>

            <button
              onClick={() => navigate("/admin/manage")}
              className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg"
            >
              Manage
            </button>

          </div>


        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;