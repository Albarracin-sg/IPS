import React, { useState } from "react";
import Button from "./button";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function Card({ modo, onSubmitSuccess }) {
    // Estados
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
   
    // Estado para el formulario
    const [form, setForm] = useState({
        NumberDocument: ""
    });
    
    // Simulamos que no encontramos el usuario en la base de datos
    // Esto normalmente vendría de una consulta a un backend
    const isUserRegistered = false;
    
    // Manejar cambios en el input
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    // Validar que el campo no esté vacío
    const validarCamposRequeridos = () => {
        return form.NumberDocument.trim() !== "";
    };
    
    // Abrir modal de consulta
    const handleConsultarCita = () => {
        if (!validarCamposRequeridos()) {
            alert("Por favor, ingresa un número de documento.");
            return;
        }
        
        // Aquí simularíamos una consulta al backend
        // Como no hay backend, siempre mostramos el modal de usuario no registrado
        setShowModal(true);
    };
    
    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    // Manejar consulta desde el modal
    const handleModalConsulta = () => {
        // Crear y mostrar el JSON con el número de documento
        const userData = {
            cedula: form.NumberDocument
        };
       
        console.log("Datos de consulta:", userData);
       
        // Cerrar modal después de procesar
        setShowModal(false);
       
        // Llamar callback si existe
        if (modo === "op" && onSubmitSuccess) {
            onSubmitSuccess("cargarRegistro", userData);
        }
    };
    
    // Manejar redirección a registro
    const handleRedirect = () => {
        setShowModal(false);
        
        const userData = {
            cedula: form.NumberDocument
        };
        console.log("Datos para registro:", userData);
       
        if (modo === "op") {
            if (onSubmitSuccess) {
                onSubmitSuccess("cargarRegistro", userData);
            }
        } else {
            navigate("/registro");
        }
    };
    
    // Determinar qué variante de modal mostrar
    const modalVariant = isUserRegistered ? "consulta" : "registro";
    
    return (
        <>
            <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] mx-auto flex justify-center items-center flex-col backdrop-blur-lg border border-gray-100">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">REGISTRO DE PACIENTES</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto"></div>
                </div>
                <div className="relative w-full mb-6">
                    <input
                        type="text"
                        name="NumberDocument"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-700"
                        placeholder="Numero de Documento"
                        value={form.NumberDocument}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <div className="absolute left-3 top-3.5 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <Button text="Consultar Cita" tipo="ConsultarCita" onClick={handleConsultarCita} />
                <Button text="Registrar" tipo="registro" onClick={handleRedirect} />
            </div>
           
            {showModal && (
                <Modal
                    onClose={handleCloseModal}
                    onRegister={handleRedirect}
                    onConsultar={handleModalConsulta}
                    variant={modalVariant}
                    userData={{
                        personalInfo: {
                            cedula: form.NumberDocument
                        }
                    }}
                />
            )}
        </>
    );
}