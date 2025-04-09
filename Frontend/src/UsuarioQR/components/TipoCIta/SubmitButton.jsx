import React from "react";

/**
 * Componente de botón de envío reutilizable
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onClick - Función a ejecutar al hacer clic
 * @param {boolean} props.disabled - Estado de deshabilitado del botón
 * @param {string} props.text - Texto a mostrar en el botón
 * @param {string} props.className - Clases adicionales para personalización
 * @returns {JSX.Element} - Botón de envío
 */
const SubmitButton = ({ 
  onClick, 
  disabled = false, 
  text = "Enviar Solicitud",
  className = "" 
}) => {
  return (
    <button
      className={`cursor-pointer mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium 
        hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 
        shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SubmitButton;