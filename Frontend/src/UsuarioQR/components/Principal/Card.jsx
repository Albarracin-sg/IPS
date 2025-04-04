import React from "react";
import Button from "./button";

export default function Card() {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] mx-auto flex justify-center items-center flex-col backdrop-blur-lg bg-white/90 border border-gray-100">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">REGISTRO DE PACIENTES</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="relative w-full mb-6">
                <input 
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                    placeholder="Buscar paciente..."
                />
                <div className="absolute left-3 top-3.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            
            <Button text="Consultar" tipo="consultar" />
            <Button text="Registrar" tipo="registro" />
        </div>
    );
}