import React from "react";
import LogoInicio from "../../UsuarioQR/components/Logo";
import Card from "../../UsuarioQR/components/Principal/Card";

export default function PagUsuarioPrincipal() {
    return (
        <div className="relative min-h-screen w-screen bg-[#6ea3c7] flex justify-center items-center overflow-auto">
			<LogoInicio />
			<Card />
		</div>
    );
}