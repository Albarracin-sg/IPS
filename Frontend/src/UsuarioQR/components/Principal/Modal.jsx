import React, { useEffect, useState } from "react";

export default function Modal({ onClose, onRegister }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Pequeño retraso para activar la animación después de montar el componente
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    // Esta función evita que los clics dentro de la modal
    // se propaguen al overlay y cierren la modal
    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    
    // Para cerrar con animación
    const handleClose = (e) => {
        setIsVisible(false);
        setTimeout(() => onClose(e), 100); // Esperar a que termine la animación
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay oscuro - cierra al hacer clic */}
            <div 
                className={`fixed inset-0 flex items-center justify-center bg-[#000c] p-4 transition-opacity duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                onClick={handleClose}
            ></div>
           
            {/* Modal - detiene propagación de eventos */}
            <div
                className={`bg-white rounded-xl shadow-2xl p-6 z-10 w-full max-w-sm relative transition-all duration-300 transform ${
                    isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                onClick={handleModalClick}
            >
                <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Usuario no registrado</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto"></div>
                </div>
               
                <div className="flex gap-3">
                    <button
                        onClick={handleClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Regresar
                    </button>
                   
                    <button
                        onClick={onRegister}
                        className="bg-blue-600 hover:bg-blue-700 shadow-blue-400/50 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    );
}