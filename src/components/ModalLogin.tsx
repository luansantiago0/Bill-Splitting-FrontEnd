"use client";
import React, { useState } from "react";
import useAuthStore from "../store/authStore";
import axios from "axios";

interface ModalProps {
  cliqueForaModal?: () => void;
  abrirModal?: () => void;
  fecharModal?: () => void;
}

const ModalLogin: React.FC<ModalProps> = ({
  cliqueForaModal,
  abrirModal,
  fecharModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useAuthStore();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      const token = response.data.access_token;
      setToken(token);
      if (fecharModal) {
        fecharModal();
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <section
      className="modal-container modal-overlay"
      data-modal="container"
      onClick={cliqueForaModal}
    >
      <div className="modal">
        <button data-modal="fechar" className="fechar" onClick={fecharModal}>
          X
        </button>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md p-2"
          />
          <label htmlFor="senha">Password</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-md p-2"
          />
          <button
            className="block bg-[#EAE137] border-none rounded-md py-2 px-8 text-white font-mono mt-4 font-semibold"
            type="submit"
          >
            Log In
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ModalLogin;
