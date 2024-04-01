"use client";
import React, { useState } from "react";
import Modal from "../components/ModalLogin";
import ModalSignUp from "../components/ModalSignUp";

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

  const abrirModals = () => {
    setModalAtivo(true);
  };

  const fecharModals = () => {
    setModalAtivo(false);
  };

  const cliqueForaModals = () => {
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
            {modalAtivo && <Modal cliqueForaModal={cliqueForaModal} />}
          </a>
          <button
            className="w-40 h-9 bg-[#EAE137] hover:bg-yellow-500 text-black font-medium rounded-tr-lg shadow-md"
            onClick={abrirModals}
          >
            Sign up
            {modalAtivo && <ModalSignUp fecharModals={fecharModals} />}
            {modalAtivo && <Modal cliqueForaModal={cliqueForaModals} />}
          </button>
        </nav>
      </header>
      {modalAtivo && <Modal fecharModal={fecharModal} />}
    </>
  );
};

export default Header;
