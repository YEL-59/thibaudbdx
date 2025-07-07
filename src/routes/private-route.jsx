import { useEffect } from "react";
import { useNavigate } from "react-router";

function PrivateRoute({ children, allowedRoles }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else if (allowedRoles && !allowedRoles.includes(role)) {
      navigate("/");
    }
  }, [token]);
  if (!token && allowedRoles && !allowedRoles.includes("role")) return null;
  return children;
}

export default PrivateRoute;
