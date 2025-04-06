import React, { useEffect, useState } from "react";
import Button from "./button";

export default function Modal({ onClose, onRegister, onConsultar, variant = "registro" }) {
    const [isVisible, setIsVisible] = useState(false);
   
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleModalClick = (e) => e.stopPropagation();
    
    const handleClose = (e) => {
        setIsVisible(false);
        setTimeout(() => onClose(e), 100);
    };

    // Función para obtener el título apropiado según la variante
    const getTitle = () => {
        if (variant === "registro") {
            return "Usuario no registrado";
        } else if (variant === "consulta") {
            return "Generar cita";
        }
        return "Usuario no registrado"; // Título por defecto
    };

    const renderButtons = () => {
        if (variant === "registro") {
            return (
                <>
                    <Button text="Regresar" tipo="regresar" onClick={handleClose} />
                    <Button text="Registrar" tipo="registro" onClick={onRegister} />
                </>
            );
        } else if (variant === "consulta") {
            return (
                <>
                    <Button text="Regresar" tipo="regresar" onClick={handleClose} />
                    <Button text="Tipo de cita" tipo="ConsultarCita" onClick={onConsultar} />
                </>
            );
        }
        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`fixed inset-0 bg-[#000c] p-4 transition-opacity duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                onClick={handleClose}
            />
            <div
                className={`bg-white rounded-xl shadow-2xl p-6 z-10 w-full max-w-sm relative transition-all duration-300 transform ${
                    isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                onClick={handleModalClick}
            >
                <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{getTitle()}</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto"></div>
                </div>
                <div className="flex gap-3">
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
}