import React from "react";

interface ModalProps {
  cliqueForaModals?: () => void;
  abrirModals?: () => void;
  fecharModals?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  cliqueForaModals,
  abrirModals,
  fecharModals,
}) => {
  return (
    <section
      className="modal-container modal-overlay"
      data-modal="container"
      onClick={cliqueForaModals}
    >
      <div className="modal">
        <button data-modal="fechar" className="fechar" onClick={fecharModals}>
          X
        </button>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="border border-black rounded-md p-2"
          />
          <label htmlFor="senha">Password</label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="border border-black rounded-md p-2"
          />
          <button
            className="block bg-[#EAE137] border-none rounded-md py-2 px-8 text-white font-mono mt-4 font-semibold"
            type="submit"
            onClick={abrirModals}
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
