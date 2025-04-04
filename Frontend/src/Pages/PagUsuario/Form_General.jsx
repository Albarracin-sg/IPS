import React from "react";

import Button from "../../UsuarioQR/components/Principal/button";
const FormularioGeneral = () => {
    return (
        <div className="relative min-h-screen w-screen bg-[#6ea3c7] flex justify-center items-center overflow-auto">
            <div className="absolute top-0 left-0 m-4">
                {/* Imagen de la IPS */}
                <img
                    src={ipsLogo}
                    alt="IPS Logo"
                    className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
                />
            </div>
            <div className=" md:flex-row items-center w-full max-w-5xl p-6 rounded-lg bg-white shadow-xl">
                <h2 className="text-center text-3xl font-semibold text-black-700 mb-6">Registro de Usuario</h2>
                <form className="text-gray-700 flex flex-col space-y-4 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium text-black-700" htmlFor="nombre">
                            Nombres Completos
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            className="p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 placeholder-gray-400"
                            placeholder="Ingresa tus nombres completos"
                        />
                    </div>
                    <div className="flex justify-between">

                    </div>
                </form>
            </div>

        </div>

    );
};

export default FormularioGeneral;
