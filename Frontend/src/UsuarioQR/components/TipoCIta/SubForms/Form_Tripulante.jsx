// Importación de React y hooks necesarios
import React, { useState } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";

// Componente de formulario para tripulantes
const Form_Tripulante = ({ onSubmit }) => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    email: "",
    naviera: "",
  });

  // Estado para manejar errores de validación
  const [errors, setErrors] = useState({});

  // Función para validar el formulario
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.nombre) tempErrors.nombre = "El nombre es requerido";
    if (!formData.cedula) {
      tempErrors.cedula = "La cédula es requerida";
    } else if (!/^[0-9]+$/.test(formData.cedula)) {
      tempErrors.cedula = "Solo se permiten números";
    }
    if (!formData.email) {
      tempErrors.email = "El correo es requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      tempErrors.email = "Correo electrónico inválido";
    }
    if (!formData.naviera) tempErrors.naviera = "La naviera es requerida";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const [selectedCompany, setSelectedCompany] = useState("");
  const [customCompany, setCustomCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [showCompanyOptions, setShowCompanyOptions] = useState(true);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showCustomCompanyInput, setShowCustomCompanyInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const companies = ["Princess", "Carnival", "NCL", "Hotel Carnival", "Otra"];

  const navigate = useNavigate();

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

  const handleCustomCompanySubmit = () => {
    if (customCompany.trim()) {
      setShowCompanyOptions(false);
      setShowCustomCompanyInput(false);
      setShowServiceOptions(true);
    }
  };

  const services = [
    "Medicina General",
    "Laboratorios",
    "Rayos X",
    ...(selectedCompany !== "NCL" ? ["Odontología"] : []),
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleTurno = () => {
    console.log("Redireccionando a página tipo de cita");
    navigate("/turno");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleGenerarTurno = () => {
    handleTurno(); // Utiliza la función de navegación existente
  };

  const handleServiceSubmit = () => {
    if (selectedServices.length > 0) {
      setShowModal(true);
      // Alternativamente, puedes llamar directamente a onSubmit aquí en lugar de mostrar el modal
      // onSubmit({ company: selectedCompany === "Otra" ? customCompany : selectedCompany, services: selectedServices });
    }
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* Formulario de datos personales */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo de Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.nombre && (
            <span className="text-red-500 text-sm">{errors.nombre}</span>
          )}
        </div>

        {/* Campo de Cédula */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cédula
          </label>
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.cedula && (
            <span className="text-red-500 text-sm">{errors.cedula}</span>
          )}
        </div>

        {/* Campo de Correo Electrónico */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Campo de Naviera */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Naviera
          </label>
          <input
            type="text"
            name="naviera"
            value={formData.naviera}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.naviera && (
            <span className="text-red-500 text-sm">{errors.naviera}</span>
          )}
        </div>

        {/* Botón de envío del formulario */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>

      {/* Selección de Empresa */}
      <div
        className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => setShowCompanyOptions(!showCompanyOptions)}
      >
        <h3 className="text-xl font-medium text-blue-700">
          {selectedCompany
            ? `Empresa: ${selectedCompany === "Otra" ? customCompany || "Otra" : selectedCompany}`
            : "Seleccione Empresa"}
        </h3>
        {showCompanyOptions ? (
          <ChevronUp className="text-blue-700" />
        ) : (
          <ChevronDown className="text-blue-700" />
        )}
      </div>

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

      {/* Selección de Servicios */}
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
              {services.map((service) => (
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
              onClick={handleServiceSubmit}
              disabled={selectedServices.length === 0}
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
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

// Exportación del componente
export default Form_Tripulante;
