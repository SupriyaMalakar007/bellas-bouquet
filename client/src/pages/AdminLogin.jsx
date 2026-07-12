import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === "Indrani" &&
      password === "Bella@2026"
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-50">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Admin Login 🌸
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;