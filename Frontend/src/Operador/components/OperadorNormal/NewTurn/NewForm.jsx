import React, { useState } from "react";
import Card from "../../../../UsuarioQR/components/Principal/Card";
import RegisterForm from "../../../../UsuarioQR/components/Register/registro";
import RegistroUsuario from "../../../../UsuarioQR/components/TipoCIta/Form_General";
import TicketCard from "../../../../UsuarioQR/components/Tunos/ticketCard";
// componentes hijos del tipo de cita
import Form_Tripulante from "../../../../UsuarioQR/components/TipoCIta/SubForms/Form_Tripulante";

export default function NewForm() {
    const [componente, setComponente] = useState("card");
    
    const handleSubmitSuccess = (accion) => {
        if (accion === "cargarRegistro") {
            setComponente("registro");
        } else if (accion === "datosRegistro") {
            setComponente("tiposCita");
        } else if (accion === "cargarNaviera") {
            setComponente("ticket");
        }
    };
    
    return (
        <div className="container mx-auto p-4">
            {componente === "card" ? (
                <Card modo="op" onSubmitSuccess={handleSubmitSuccess} />
            ) : componente === "registro" ? (
                <RegisterForm modo="op" onSubmitSuccess={handleSubmitSuccess} />
            ) : componente === "tiposCita" ? (
                <RegistroUsuario onSubmitSuccess={handleSubmitSuccess} />
            ) : componente === "ticket" ? (
                <TicketCard />
            ) : (
                <Form_Tripulante 
                    modo="op" 
                    onSubmit={(data) => console.log("Form data:", data)} 
                    onSubmitSuccess={handleSubmitSuccess} 
                />
            )}
        </div>
    );
}