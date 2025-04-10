import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [registroData, setRegistroData] = useState(null);
    const [citaData, setCitaData] = useState(null);
    
    // Función para combinar datos y enviar
    const enviarDatosCompletos = () => {
        // Combina los datos de registro y cita
        const datosCompletos = {
        datosRegistro: registroData,
        datosCita: citaData
        };
        
        // Envía a la API
        console.log("Enviando datos completos:", JSON.stringify(datosCompletos, null, 2));
        
        // Aquí iría tu lógica de fetch/axios
        return datosCompletos;
    };
    
    return (
        <FormContext.Provider value={{ 
        registroData, 
        setRegistroData, 
        citaData, 
        setCitaData,
        enviarDatosCompletos 
        }}>
        {children}
        </FormContext.Provider>
    );
};

export const useFormData = () => useContext(FormContext);