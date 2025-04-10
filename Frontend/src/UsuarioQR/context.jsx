import React, { createContext, useState, useContext } from 'react';

// Creación del contexto
const FormContext = createContext();

// Proveedor del contexto que contiene la lógica de estado
export const FormProvider = ({ children }) => {
  // Estado para los datos de registro
  const [registroData, setRegistroData] = useState(null);
  // Estado para los datos de cita
  const [citaData, setCitaData] = useState(null);
  
  // Función para combinar datos y enviar al backend
  const enviarDatosCompletos = () => {
    // Comprobamos que ambos datos existen
    if (!registroData || !citaData) {
      console.error("Faltan datos necesarios para el envío");
      return null;
    }
    
    // Creamos un objeto combinado con ambos conjuntos de datos
    const datosCompletos = {
      datosRegistro: registroData,
      datosCita: citaData
    };
    
    // Log para desarrollo
    console.log("Datos completos a enviar:", JSON.stringify(datosCompletos, null, 2));
    
    // Aquí se implementaría la lógica de envío al backend
    // fetch('/api/enviar-datos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(datosCompletos),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
    
    return datosCompletos;
  };
  
  // Proporcionamos los estados y funciones a través del contexto
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

// Hook personalizado para acceder fácilmente al contexto
export const useFormData = () => useContext(FormContext);