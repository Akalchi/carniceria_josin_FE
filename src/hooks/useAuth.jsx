import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/authService";

export const useAuth = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    if (authenticateUser(username.value, password.value)) {
      setError("");
      navigate("/admin-dashboard"); // REVIEW THIS
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return { error, handleLogin };
};