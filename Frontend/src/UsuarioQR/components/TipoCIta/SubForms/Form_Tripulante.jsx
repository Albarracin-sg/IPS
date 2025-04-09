import React, { useState, useEffect } from "react";
// Importación de íconos necesarios
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";

const Form_Tripulante = ({ onSubmit }) => {
  // Estados para manejar la selección de empresa y servicios
  const [selectedCompany, setSelectedCompany] = useState("");
  const [customCompany, setCustomCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [showCompanyOptions, setShowCompanyOptions] = useState(true);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showCustomCompanyInput, setShowCustomCompanyInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Lista de empresas disponibles
  const companies = ["Princess", "Carnival", "NCL", "Hotel Carnival", "Otra"];

  // Hook para la navegación
  const navigate = useNavigate();

  // Lista de servicios disponibles (condicional si es NCL)
  const getServices = (company) => {
    return [
      "Medicina General",
      "Laboratorios",
      "Rayos X",
      ...(company !== "NCL" ? ["Odontología"] : []),
    ];
  };

  // Efecto para preseleccionar todos los servicios cuando cambia la empresa seleccionada
  useEffect(() => {
    if (selectedCompany) {
      const services = getServices(selectedCompany);
      setSelectedServices(services); // Seleccionar todos los servicios por defecto
    }
  }, [selectedCompany]);

  // Maneja la selección de una empresa
  const handleCompanySelect = (company) => {
    setSelectedCompany(company);

    if (company === "Otra") {
      setShowCustomCompanyInput(true);
      // No ocultar opciones de empresa todavía
    } else {
      setShowCustomCompanyInput(false);
      setShowCompanyOptions(false);
      setShowServiceOptions(true);
    }
  };

  // Maneja el envío de una empresa personalizada
  const handleCustomCompanySubmit = () => {
    if (customCompany.trim()) {
      setShowCompanyOptions(false);
      setShowCustomCompanyInput(false);
      setShowServiceOptions(true);
    }
  };

  // Alterna la selección de servicios
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Funciones para manejo de navegación y modal
  const handleTurno = () => {
    console.log("Redireccionando a página tipo de cita");
    navigate("/turno");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleGenerarTurno = () => {
    handleTurno();
  };

  // Maneja el envío del formulario
  const handleSubmit = () => {
    if (selectedServices.length > 0) {
      setShowModal(true);
      // También se podría llamar directamente a onSubmit aquí
      // onSubmit({ company: selectedCompany === "Otra" ? customCompany : selectedCompany, services: selectedServices });
    }
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* Sección de selección de empresa */}
      <div
        className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => setShowCompanyOptions(!showCompanyOptions)}
      >
        <h3 className="text-xl font-medium text-blue-700">
          {selectedCompany
            ? `Empresa: ${selectedCompany === "Otra" ? customCompany || "Otra" : selectedCompany}`
            : "Seleccione Empresa"}
        </h3>
        {/* Ícono de expansión/colapso */}
        {showCompanyOptions ? (
          <ChevronUp className="text-blue-700" />
        ) : (
          <ChevronDown className="text-blue-700" />
        )}
      </div>

      {/* Lista de empresas disponibles */}
      {showCompanyOptions && (
        <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-3">
            {companies.map((company) => (
              <div
                key={company}
                className={`p-3 border rounded-lg cursor-pointer transition-all duration-300 transform hover:translate-y-[-5px] ${
                  selectedCompany === company
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
                onClick={() => handleCompanySelect(company)}
              >
                {company}
              </div>
            ))}
          </div>

          {showCustomCompanyInput && (
            <div className="mt-4 animate-fadeIn">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de la empresa
              </label>
              <input
                type="text"
                value={customCompany}
                onChange={(e) => setCustomCompany(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Ingrese nombre de la empresa"
                autoFocus
              />
              <button
                className="cursor-pointer mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                onClick={handleCustomCompanySubmit}
                disabled={!customCompany.trim()}
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sección de selección de servicios */}
      {showServiceOptions && (
        <div className="mt-4 w-full transition-all duration-500 ease-in-out animate-slideInFromRight">
          <div
            className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => setShowServiceOptions(!showServiceOptions)}
          >
            <h3 className="text-xl font-medium text-blue-700">
              Seleccione Servicios
            </h3>
            {showServiceOptions ? (
              <ChevronUp className="text-blue-700" />
            ) : (
              <ChevronDown className="text-blue-700" />
            )}
          </div>

          <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white shadow-lg animate-fadeIn">
            <div className="grid grid-cols-2 gap-3">
              {getServices(selectedCompany).map((service) => (
                <div
                  key={service}
                  className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  onClick={() => toggleService(service)}
                >
                  {selectedServices.includes(service) ? (
                    <CheckSquare className="h-5 w-5 text-blue-600 mr-2" />
                  ) : (
                    <Square className="h-5 w-5 text-gray-400 mr-2" />
                  )}
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <button
              className="cursor-pointer mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={handleSubmit}
              disabled={selectedServices.length === 0}
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación */}
      {showModal && (
        <Modal
          onClose={handleClose}
          onGenerarTurno={handleGenerarTurno}
          variant="generarTurno"
        />
      )}
    </div>
  );
};

export default Form_Tripulante;