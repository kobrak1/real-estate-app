import { useState } from "react";
import { login } from "../services/authService";

export const useLogin = (navigate) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: false, password: false });

  const handleLogin = async (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;

    setError({
      email: !isEmailValid,
      password: !isPasswordValid,
    });

    if (!isEmailValid || !isPasswordValid) return;

    try {
      setLoading(true);
      const res = await login({ email, password });
      if (res?.status === 200) {
        navigate("/");
      } else {
        console.log("Login failed:", res?.data?.message || "Unexpected error!");
      }
    } catch (err) {
      console.error("Error logging in:", err);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};
