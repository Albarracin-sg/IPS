import React from "react";

export default function Button({ text, tipo }) {
    const estilo = tipo === "consultar" 
        ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-300/50" 
        : "bg-blue-600 hover:bg-blue-700 shadow-blue-400/50";
    
    return (
        <button
            className={`${estilo} text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-2 flex items-center justify-center`}
        >
            {tipo === "consultar" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            )}
            {text}
        </button>
    );
}