import React from "react";

export default function BotonNavegacion({ tipo = "siguiente", onClick }) {
  const estiloBase =
    "text-white font-medium p-10 px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-2 flex items-center justify-center";

  const estilos = {
    siguiente: " cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-blue-400/50",
    volver: " cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-blue-400/50",
  };

  const iconos = {
    siguiente: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    volver: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    ),
  };

  return (
    <button
      className={`${estiloBase} ${estilos[tipo]}`}
      onClick={onClick}
    >
      {tipo === "volver" && iconos.volver}
      {tipo === "siguiente" ? "Siguiente" : "Volver"}
      {tipo === "siguiente" && iconos.siguiente}
    </button>
  );
}
