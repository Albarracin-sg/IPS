import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../SubmitButton";
import { useFormData } from "../../../context"; // Importar el hook personalizado

const Form_Tripulante = ({ modo = "normal", onSubmitSuccess }) => {
  // Obtener datos y funciones del contexto
  const { registroData, setCitaData } = useFormData();
  // No usamos enviarDatosCompletos para evitar la duplicación de JSON

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

  // Comprobar si los datos de registro están disponibles
  useEffect(() => {
    if (!registroData && modo === "op") {
      console.warn("No hay datos de registro disponibles en el contexto");
    }
  }, [registroData, modo]);

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
        fecha: fechaActual,
        hora: horaActual
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
    setShowModal(false);
    if (modo === "op") {
      // Solo pasamos los datos ya formateados al callback
      onSubmitSuccess("mostrarTicket", formattedData);
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
      // Extrae los datos de registro
      const registroInfo = registroData || {};
      
      // Obtener fecha y hora actual
      const fechaActual = new Date().toISOString().split('T')[0];
      const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
      
      // Crea un objeto con la estructura deseada (como en tu primer JSON)
      const datosCompletos = {
        // Datos personales del formulario
        primerNombre: registroInfo.primerNombre,
        segundoNombre: registroInfo.segundoNombre,
        primerApellido: registroInfo.primerApellido,
        segundoApellido: registroInfo.segundoApellido,
        fechaNacimiento: registroInfo.fechaNacimiento,
        localidad: registroInfo.localidad,
        numeroTelefono: registroInfo.numeroTelefono,
        tipoDocumento: registroInfo.tipoDocumento,
        numeroDocumento: registroInfo.numeroDocumento,
        email: registroInfo.email,
        
        // Datos de la cita
        citas: {
          tipoCita: "tripulante",
          nombreNaviera: selectedCompany,
          citas: selectedServices,
          fecha: fechaActual,
          hora: horaActual
        }
      };
      
      // Envía SOLO los datos del componente
      console.log(JSON.stringify(datosCompletos, null, 2));
      
      // Actualiza el estado de la cita en el contexto
      setCitaData({
        tipoCita: "tripulante",
        nombreNaviera: selectedCompany,
        citas: selectedServices,
        fecha: fechaActual,
        hora: horaActual
      });
      
      // Guardamos los datos formateados para pasarlos al modal y al callback
      setFormattedData(datosCompletos);
      setShowModal(true);
    }
  };

  // Verificar datos de registro al inicio
  useEffect(() => {
    if (!registroData) {
      console.log("Datos de registro encontrados:", registroData);
    }
  }, [registroData, navigate, modo]);

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* Mostrar resumen de datos de registro si están disponibles */}
      {registroData && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Datos de Registro</h3>
          <p className="text-gray-700">
            <strong>Nombre:</strong> {registroData.primerNombre} {registroData.segundoNombre} {registroData.primerApellido} {registroData.segundoApellido}
          </p>
          <p className="text-gray-700">
            <strong>Documento:</strong> {registroData.tipoDocumento} {registroData.numeroDocumento}
          </p>
        </div>
      )}
      
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