import React, { useEffect, useState } from "react";
import Button from "./button";

export default function Modal({ 
  onClose, 
  onRegister, 
  onConsultar, 
  onGenerarTurno, 
  variant = "registro",
  userData = {} // Agregamos una prop para recibir los datos seleccionados
}) {
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

  // Función para manejar la generación del turno y mostrar datos en consola
  const handleGenerarTurno = () => {
    // Mostrar en consola los datos del tipo de cita y citas seleccionadas
    console.log("Form data submitted: {");
    console.log(`  "tipoCita": "${userData.type || ''}",`);
    console.log(`  "citas": ${JSON.stringify(userData.selectedOptions || [])},`);
    
    // Si hay otros datos de usuario disponibles, también mostrarlos
    if (userData.personalInfo) {
      Object.entries(userData.personalInfo).forEach(([key, value]) => {
        console.log(`  "${key}": "${value}",`);
      });
    }
    console.log("}");
    
    // Llamar a la función original para generar el turno
    if (onGenerarTurno) {
      onGenerarTurno();
    }
  };

  // Función para obtener el título apropiado según la variante
  const getTitle = () => {
    if (variant === "registro") {
      return "Usuario no registrado";
    } else if (variant === "consulta") {
      return "Generar cita";
    } else if (variant === "generarTurno") {
      return "Generar turno";
    }
    return "Usuario no registrado"; // Título por defecto
  };
    
  // Función para obtener la descripción apropiada según la variante
  const getDescription = () => {
    if (variant === "registro") {
      return "Para continuar, necesitas registrarte en el sistema.";
    } else if (variant === "consulta") {
      return "Selecciona el tipo de cita que deseas agendar.";
    } else if (variant === "generarTurno") {
      return "Genera un nuevo turno para ser atendido.";
    }
    return ""; // Descripción por defecto vacía
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
    } else if (variant === "generarTurno") {
      return (
        <>
          <Button text="Regresar" tipo="regresar" onClick={handleClose} />
          <Button text="Generar turno" tipo="generarTurno" onClick={handleGenerarTurno} />
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
          <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">{getDescription()}</p>
        </div>
        <div className="flex gap-3">
          {renderButtons()}
        </div>
      </div>
    </div>
  );
}