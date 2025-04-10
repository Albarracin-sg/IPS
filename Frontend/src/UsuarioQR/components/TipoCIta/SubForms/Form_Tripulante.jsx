import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../SubmitButton";

const Form_Tripulante = ({ modo = "normal", onSubmitSuccess }) => {
  // Empresa seleccionada por el usuario
  const [selectedCompany, setSelectedCompany] = useState("");

  // Servicios médicos seleccionados
  const [selectedServices, setSelectedServices] = useState([]);

  // Visibilidad del bloque de empresas
  const [showCompanyOptions, setShowCompanyOptions] = useState(true);

  // Visibilidad del bloque de servicios
  const [showServiceOptions, setShowServiceOptions] = useState(false);

  // Visibilidad del modal de confirmación
  const [showModal, setShowModal] = useState(false);

  // Datos crudos del formulario para enviar al modal
  const [formData, setFormData] = useState({
    type: "tripulante-naviera",
    selectedOptions: [],
    company: ""
  });

  // Datos formateados en estructura final
  const [formattedData, setFormattedData] = useState(null);

  // Lista fija de empresas/navieras disponibles
  const companies = ["Princess", "Carnival", "NCL", "Hotel Carnival", "Otra"];

  // Hook para redireccionar páginas
  const navigate = useNavigate();

  // Retorna los servicios disponibles según la empresa seleccionada
  const getServices = (company) => {
    return [
      "Medicina General",
      "Laboratorios",
      "Rayos X",
      ...(company !== "NCL" ? ["Odontología"] : []),
    ];
  };

  // Si cambia la empresa, se seleccionan todos los servicios automáticamente
  useEffect(() => {
    if (selectedCompany) {
      const services = getServices(selectedCompany);
      setSelectedServices(services);
      setFormData({
        ...formData,
        company: selectedCompany,
        selectedOptions: services
      });
      updateFormattedData(selectedCompany, services);
    }
  }, [selectedCompany]);

  // Actualiza el objeto formateado con estructura final de envío
  // Incluye fecha y hora automáticamente sin mostrar campos en el formulario
  const updateFormattedData = (company, services) => {
    // Obtener fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];
    
    // Obtener hora actual en formato HH:MM
    const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
    
    setFormattedData({
      citas: {
        tipoCita: "tripulante",
        nombreNaviera: company,
        citas: services,
        fecha: fechaActual,  // Agregar fecha actual al JSON
        hora: horaActual     // Agregar hora actual al JSON
      }
    });
  };

  // Al seleccionar una empresa, se oculta su lista y se muestra servicios
  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setShowCompanyOptions(false);
    setShowServiceOptions(true);
  };

  // Al hacer clic en un servicio, lo añade o lo elimina del estado
  const toggleService = (service) => {
    let updatedServices;
    if (selectedServices.includes(service)) {
      // Si ya está seleccionado, lo quitamos de la lista
      updatedServices = selectedServices.filter((item) => item !== service);
    } else {
      // Si no está seleccionado, lo añadimos a la lista
      updatedServices = [...selectedServices, service];
    }
    setSelectedServices(updatedServices);
    setFormData({
      ...formData,
      selectedOptions: updatedServices
    });
    updateFormattedData(selectedCompany, updatedServices);
  };

  // Acción del botón "Generar Turno" en el modal
  const handleGenerarTurno = () => {
    // Mostramos por consola los datos que se enviarán
    console.log(JSON.stringify(formattedData, null, 2));
    setShowModal(false);
    if (modo === "op") {
      onSubmitSuccess("mostrarTicket");
    } else {
      navigate("/Turno");
    }
  };

  // Cierre del modal manualmente
  const handleClose = () => {
    setShowModal(false);
  };

  // Acción al hacer clic en "Enviar Solicitud"
  const handleSubmit = () => {
    if (selectedServices.length > 0) {
      // Obtener fecha y hora actual para incluir en el envío
      const fechaActual = new Date().toISOString().split('T')[0];
      const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
      
      // Preparar datos formateados para mostrar en el modal
      const dataToLog = {
        citas: {
          tipoCita: "tripulante",
          nombreNaviera: selectedCompany,
          citas: selectedServices,
          fecha: fechaActual,  // Incluir fecha en el modal
          hora: horaActual     // Incluir hora en el modal
        }
      };
      setFormattedData(dataToLog);
      setShowModal(true);
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
            ? `Empresa: ${selectedCompany}`
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

            <SubmitButton
              onClick={handleSubmit}
              disabled={selectedServices.length === 0}
              text="Enviar Solicitud"
            />
          </div>
        </div>
      )}

      {/* Modal de confirmación con datos formateados */}
      {showModal && (
        <Modal
          onClose={handleClose}
          onGenerarTurno={handleGenerarTurno}
          variant="generarTurno"
          userData={formData}
          formattedData={formattedData}
        />
      )}
    </div>
  );
};

export default Form_Tripulante;