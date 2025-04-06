import React from "react";
export default function Button({ text, tipo, onClick }) {
    const estilo = tipo === "ConsultarCita"
            ? " text-white bg-emerald-500 hover:bg-emerald-600 shadow-emerald-300/50"
            : tipo === "registro"
            ? " text-white bg-blue-600 hover:bg-blue-700 shadow-blue-400/50"
            : tipo === "generarTurno"
            ? " text-white bg-cyan-500 hover:bg-cyan-600 shadow-cyan-300/50"
            : "text-gray-700 bg-gray-300 hover:bg-gray-300 shadow-gray-300/50";
   
    return (
        <button
            className={`${estilo}  font-medium px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-2 flex items-center justify-center`}
            onClick={onClick}
        >
            {tipo === "ConsultarCita" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 mr-2 " >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
            ) : tipo === "registro" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ) : tipo === "generarTurno" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            )}
           
            {text}
        </button>
    );
}