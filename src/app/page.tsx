"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Home from "./(home)";
import Modal from "../components/ModalLogin";
import Apps from "./app";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para simular o login do usuário
  const handleLogin = () => {
    // Lógica para verificar o login do usuário
    setIsLoggedIn(true);
  };

  return (
    <div className="App bg-[#FFFFFF]">
      <Header />
      <Home />
      {/* <Modal onLogin={handleLogin} />
      {isLoggedIn && <Apps />} */}
      <Apps />
    </div>
  );
};

export default App;
