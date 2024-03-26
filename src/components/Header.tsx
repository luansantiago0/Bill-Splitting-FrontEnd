"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../components/ModalLogin";

const Header: React.FC = () => {
  const [modalAtivo, setModalAtivo] = useState(false);

  const abrirModal = () => {
    setModalAtivo(true);
  };

  const fecharModal = () => {
    setModalAtivo(false);
  };

  const cliqueForaModal = () => {
    setModalAtivo(false);
  };

  return (
    <>
      <header className="ml-24 mt-15 flex items-center justify-between p-5 px-20">
        <a
          className="text-black text-2xl font-bold font-RammettoOne hover:text-[#EAE137]"
          href="#"
        >
          Bill Splitting 🧾
        </a>
        <nav className="ml-40 mt-15 mr-20 flex gap-20 items-center justify-between text-center text-black text-base font-medium font-poppins">
          <a className="hover:text-[#EAE137]" href="#" onClick={abrirModal}>
            Login
          </a>
          <button className="w-40 h-9 bg-[#EAE137] hover:bg-yellow-500 text-black font-medium rounded-tr-lg shadow-md">
            Sign up
          </button>
        </nav>
      </header>
      {modalAtivo && <Modal fecharModal={fecharModal} />}
      {modalAtivo && <Modal cliqueForaModal={cliqueForaModal} />}
    </>
  );
};

export default Header;
