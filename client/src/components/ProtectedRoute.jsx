import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("admin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default ProtectedRoute;