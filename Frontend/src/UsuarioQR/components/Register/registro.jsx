import React, { useState } from "react";
import Label from "./Label";
import Modal from "../Principal/Modal";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../context"; // Importar el hook personalizado

const RegisterForm = ({ modo, onSubmitSuccess }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    localidad: "",
    numeroTelefono: "",
    tipoDocumento: "",
    numeroDocumento: "",
    email: "",
  });
  
  // Obtener la función para guardar datos del registro del contexto
  const { setRegistroData } = useFormData();
  
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ahora mostrar el modal
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
  };
  
  // Función para manejar el registro
  const handleRegister = () => {
    // Esta función no debería usarse en esta variante
    console.log(
      "Función de registro llamada pero no se usa en variante consulta"
    );
  };
  
  // envía los datos y redirecciona según el modo
  const handleTipoDeCita = () => {    
    
    // Guardar datos en el contexto global inmediatamente, no esperar al modal
    setRegistroData(formData);
    
    console.log("Datos de registro guardados en contexto:", formData);
    
    // Guardar datos en el contexto global
    setRegistroData(formData);
    
    setShowModal(false); // Cierra el modal
    
    if (modo === "op") {
      // En modo "op", llama a la función callback en lugar de redireccionar
      if (onSubmitSuccess) {
        onSubmitSuccess("datosRegistro"); // Cambiado de "cargarRegistro" a "datosRegistro"
      }
    } else {
      navigate("/TipoCita");
    }
  };

  return (
    <>
      {/* Contenedor principal con fondo degradado y sombra */}
      <div className="bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-3xl p-6 w-full max-w-6xl mx-auto border border-gray-100 ">
        {/* Encabezado con diseño curvo y línea decorativa */}
        <div className="mb-6 text-center">
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              FORMULARIO DE REGISTRO
            </h2>
            {/* Línea decorativa con gradiente */}
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Formulario con layout flexible: vertical en móvil, horizontal en desktop */}
        <form
          id="registrationForm"
          className="w-full flex flex-col md:flex-row gap-6"
          onSubmit={handleSubmit}
        >
          {/* Columna izquierda (datos personales) - ocupa todo el ancho en móvil, mitad en desktop */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Datos Personales
            </h3>

            {/* Sección de nombres con distribución en dos columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Campo para primer nombre */}
              <div>
                <Label
                  htmlFor="primerNombre"
                  text="Primer Nombre"
                  tipo="subtitulo"
                />
                <input
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  type="text"
                  name="primerNombre"
                  placeholder="Primer Nombre"
                  autoComplete="off"
                  required
                  value={formData.primerNombre}
                  onChange={handleInputChange}
                />
              </div>

              {/* Campo para segundo nombre (opcional) */}
              <div>
                <Label
                  htmlFor="segundoNombre"
                  text="Segundo Nombre"
                  tipo="subtitulo"
                />

                <input
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  type="text"
                  name="segundoNombre"
                  placeholder="Segundo Nombre"
                  autoComplete="off"
                  value={formData.segundoNombre}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Sección de apellidos con distribución en dos columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Campo para primer apellido */}
              <div>
                <Label
                  htmlFor="primerApellido"
                  text="Primer Apellido"
                  tipo="subtitulo"
                />
                <input
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  type="text"
                  name="primerApellido"
                  placeholder="Primer Apellido"
                  autoComplete="off"
                  required
                  value={formData.primerApellido}
                  onChange={handleInputChange}
                />
              </div>

              {/* Campo para segundo apellido (opcional) */}
              <div>
                <Label
                  htmlFor="segundoApellido"
                  text="Segundo Apellido"
                  tipo="subtitulo"
                />
                <input
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  type="text"
                  name="segundoApellido"
                  placeholder="Segundo Apellido"
                  autoComplete="off"
                  value={formData.segundoApellido}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Campo para fecha de nacimiento con ícono de calendario */}
            <div>
              <Label
                htmlFor="fechaNacimiento"
                text="Fecha de Nacimiento"
                tipo="subtitulo"
              />
              <div className="relative">
                {/* Input de tipo date para seleccionar fecha */}
                <input
                  type="date"
                  name="fechaNacimiento"
                  className="w-full pl-5 pr-5 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  required
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Columna derecha (información de contacto) - ocupa todo el ancho en móvil, mitad en desktop */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Información de Contacto e Identificación
            </h3>

            {/* Sección de localidad y teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Campo para selección de localidad con menú desplegable */}
              <div>
                <Label htmlFor="localidad" text="Localidad" tipo="subtitulo" />
                <div className="relative">
                  {/* Select personalizado con apariencia redondeada */}
                  <select
                    name="localidad"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700 appearance-none"
                    required
                    value={formData.localidad}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione localidad</option>
                    <option value="usaquen">Usaquén</option>
                    <option value="chapinero">Chapinero</option>
                    <option value="santa_fe">Santa Fe</option>
                    <option value="san_cristobal">San Cristóbal</option>
                    <option value="usme">Usme</option>
                    <option value="tunjuelito">Tunjuelito</option>
                    <option value="bosa">Bosa</option>
                    <option value="kennedy">Kennedy</option>
                    <option value="fontibon">Fontibón</option>
                    <option value="engativa">Engativá</option>
                    <option value="suba">Suba</option>
                    <option value="barrios_unidos">Barrios Unidos</option>
                    <option value="teusaquillo">Teusaquillo</option>
                    <option value="los_martires">Los Mártires</option>
                    <option value="antonio_nariño">Antonio Nariño</option>
                    <option value="puente_aranda">Puente Aranda</option>
                    <option value="la_candelaria">La Candelaria</option>
                    <option value="rafael_uribe_uribe">
                      Rafael Uribe Uribe
                    </option>
                    <option value="ciudad_bolivar">Ciudad Bolívar</option>
                    <option value="sumapaz">Sumapaz</option>
                    <option value="soacha">Soacha</option>
                  </select>
                  {/* Ícono de flecha personalizado para el select */}
                  <div className="absolute right-4 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 -3.5 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Campo para número de teléfono con ícono */}
              <div>
                <Label
                  htmlFor="numeroTelefono"
                  text="Número de Teléfono"
                  tipo="subtitulo"
                />
                <div className="relative">
                  {/* Input para teléfono con validación de formato */}
                  <input
                    type="tel"
                    name="numeroTelefono"
                    placeholder="Número de Teléfono"
                    pattern="[0-9]{10}" // Validación: solo 10 dígitos
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                    required
                    value={formData.numeroTelefono}
                    onChange={handleInputChange}
                  />
                  {/* Ícono de teléfono posicionado a la izquierda */}
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 -3.5 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de tipo documento y número */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sección tipo de documento con menú desplegable */}
              <div>
                <Label
                  htmlFor="tipoDocumento"
                  text="Tipo de Documento"
                  tipo="subtitulo"
                />
                <div className="relative">
                  {/* Select personalizado para tipos de documento */}
                  <select
                    name="tipoDocumento"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700 appearance-none"
                    required
                    value={formData.tipoDocumento}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="Cédula de ciudadanía">
                      Cédula de ciudadanía
                    </option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Tarjeta de identidad">
                      Tarjeta de identidad
                    </option>
                    <option value="Cédula de extranjería">
                      Cédula de extranjería
                    </option>
                    <option value="Registro civil">Registro civil</option>
                    <option value="Permiso especial de permanencia">
                      Permiso especial de permanencia
                    </option>
                  </select>
                  {/* Ícono de flecha personalizado para el select */}
                  <div className="absolute right-4 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 -3.5 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Campo para número de documento con ícono */}
              <div>
                <Label
                  htmlFor="numeroDocumento"
                  text="Número de Documento"
                  tipo="subtitulo"
                />
                <div className="relative">
                  {/* Input para número de documento con ícono */}
                  <input
                    type="number"
                    name="numeroDocumento"
                    placeholder="Numero de Documento"
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                    required
                    value={formData.numeroDocumento}
                    onChange={handleInputChange}
                  />
                  {/* Ícono de documento de identidad */}
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 -3.5 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Campo para correo con ícono */}
            <div>
              <Label
                htmlFor="email"
                text="Correo Electrónico"
                tipo="subtitulo"
              />
              <div className="relative">
                {/* Input para correo electrónico con ícono */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  autoComplete="off"
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {/* Ícono de correo electrónico */}
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 -3.5 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Botón de envío centrado */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            form="registrationForm"
            className="cursor-pointer w-64 py-3 px-4 bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:opacity-50 shadow-lg"
          >
            ENVIAR
          </button>
        </div>
      </div>

      {/* Modal correctamente configurado para la variante "consulta" */}
      {showModal && (
        <Modal
          onClose={handleClose}
          onRegister={handleRegister}
          onConsultar={handleTipoDeCita}
          variant="consulta"
        />
      )}
    </>
  );
};

export default RegisterForm;