import React, { useEffect, useState } from "react";
import Button from "./button";

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
                    <Button text="Regresar" tipo="regresar" onClick={handleClose} />                    
                    <Button text="Registrar" tipo="registro" onClick={onRegister} />
                </div>
            </div>
        </div>
    );
}