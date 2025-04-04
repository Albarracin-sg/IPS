import React from "react";
import ipsLogo from "../../assets/ips.png";
import Card from "../../UsuarioQR/components/Principal/Card";

export default function PagUsuarioPrincipal() {
    return (
        <div className="relative min-h-screen w-screen bg-blue-400 flex justify-center items-center overflow-auto">
			<div className="absolute top-0 left-0 m-4">
				{/* Imagen de la IPS */}
				<img
					src={ipsLogo}
					alt="IPS Logo"
					className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
				/>
			</div>
			<Card />
		</div>
    );
}