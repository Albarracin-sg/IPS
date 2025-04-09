import React, { useState } from "react";
import Card from "../../../../UsuarioQR/components/Principal/Card";
import RegisterForm from "../../../../UsuarioQR/components/Register/registro";
import RegistroUsuario from "../../../../UsuarioQR/components/TipoCIta/Form_General";

{/* componentes hijos del tipo de cita */}

export default function NewForm() {
    const [componente, setComponente] = useState("card");
   
    const handleSubmitSuccess = (accion) => {
        if (accion === "cargarRegistro") {
            setComponente("registro");
        } else if (accion === "datosRegistro") {
            setComponente("tiposCita");
        }
    };
   
    return (
        <div className="flex justify-center items-center h-screen bg-blue-300">
            {componente === "card" ? (
                <Card
                    modo="op"
                    onSubmitSuccess={handleSubmitSuccess}
                />
            ) : componente === "registro" ? (
                <RegisterForm 
                    modo="op"
                    onSubmitSuccess={handleSubmitSuccess}
                />
            ) : (
                <RegistroUsuario />
            )}
        </div>
    );
}