import React, { useState } from "react";
import Card from "../../../../UsuarioQR/components/Principal/Card";
import RegisterForm from "../../../../UsuarioQR/components/Register/registro";
import RegistroUsuario from "../../../../UsuarioQR/components/TipoCIta/Form_General";
import TicketCard from "../../../../UsuarioQR/components/Tunos/ticketCard";

export default function NewForm() {
    const [componente, setComponente] = useState("card");
   
    const handleSubmitSuccess = (accion) => {
        if (accion === "cargarRegistro") {
            setComponente("registro");
        } else if (accion === "datosRegistro") {
            setComponente("tiposCita");
        } else if (accion === "mostrarTicket") {
            setComponente("ticket");
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
            ) : componente === "tiposCita" ? (
                <RegistroUsuario 
                    modo="op"
                    onSubmitSuccess={handleSubmitSuccess}
                />
            ) : (
                <TicketCard />
            )}
        </div>
    );
}