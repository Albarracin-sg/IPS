import React, { useState } from "react";
import Inicio from "./Inicio";
import Turnos from "./Turnos";
import NewTurn from "./NewTurn/NewForm";

const BarraLateral = () => {
  const [componenteActual, setComponenteActual] = useState(<Inicio />);
  const [activeItem, setActiveItem] = useState("inicio"); 
  
  const handleNavClick = (component, itemName) => {
    setComponenteActual(component);
    setActiveItem(itemName);
  };
  
  return (
    <div className="flex h-screen">
      {/* Barra lateral con sombra y bordes refinados */}
      <aside className="w-48 bg-gray-800 text-white flex flex-col shadow-lg">
        {/* Encabezado de la barra lateral */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold text-center text-blue-300">IPS</h1>
        </div>
        
        {/* Navegación con indicador de selección */}
        <nav className="flex-1 py-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(<Inicio />, "inicio");
            }}
            className={`block py-3 px-6 mb-1 transition-all duration-200 ${
              activeItem === "inicio" 
                ? "bg-gray-700 text-white border-l-4 border-blue-500" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white hover:border-l-4 hover:border-blue-400"
            }`}
          >
            Inicio
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(<Turnos setComponenteActual={setComponenteActual} />, "turnos");
            }}
            className={`block py-3 px-6 mb-1 transition-all duration-200 ${
              activeItem === "turnos" 
                ? "bg-gray-700 text-white border-l-4 border-blue-500" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white hover:border-l-4 hover:border-blue-400"
            }`}
          >
            Turnos
          </a>
        </nav>
        
        {/* Divider */}
        <div className="mx-4 my-2 border-t border-gray-700"></div>
        
        {/* Botón Nuevo Turno en la parte inferior */}
        <div className="p-4">
          <button
            onClick={() => handleNavClick(<NewTurn />, "nuevo")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded transition-colors flex items-center justify-center shadow-md"
          >
            <span className="mr-2 text-lg font-bold">+</span>
            <span>Nuevo Turno</span>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-blue-100 overflow-auto">
        {componenteActual}
      </main>
    </div>
  );
};

export default BarraLateral;