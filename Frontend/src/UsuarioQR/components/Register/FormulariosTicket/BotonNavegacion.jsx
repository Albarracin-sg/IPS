import React from "react";

export default function BotonNavegacion({ texto, tipo, onClick }) {
    const estilo = tipo === "consultar"
    ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-300/50"
    : "bg-blue-600 hover:bg-blue-700 shadow-blue-400/50";
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300"
    >
      {texto}
    </button>
  );
}
