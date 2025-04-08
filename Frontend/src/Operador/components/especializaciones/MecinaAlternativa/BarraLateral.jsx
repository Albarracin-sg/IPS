import React, { useState } from "react";
import Inicio from "./Inicio";
import Turno from "./Turnos";
import NewTurn from "./NewForm";

const BarraLateral = () => {
	const [componenteActual, setComponenteActual] = useState(<Inicio />);

	return (
		<div className="flex">
			{/* Barra lateral responsiva */}
			<aside className="w-64 sm:w-52 h-screen bg-gray-800 text-white flex flex-col p-4">
				{/* Navegación */}
				<nav className="flex-1 space-y-2">
					<a
						href="#"
						onClick={() => setComponenteActual(<Inicio />)}
						className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer"
					>
						Inicio
					</a>
					<a
						href="#"
						onClick={() =>
							setComponenteActual(<Turno setComponenteActual={setComponenteActual} />)
						}
						className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer"
					>
						Turnos
					</a>
				</nav>

				{/* Botón "Nuevo Turno" abajo */}
				<button
					onClick={() => setComponenteActual(<NewTurn />)}
					className="mt-auto py-3 px-6 w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white rounded transition-colors"
				>
					Nuevo Turno
				</button>
			</aside>

			{/* Contenido principal dinámico */}
			<main className="flex-1 ">{componenteActual}</main>
		</div>
	);
};

export default BarraLateral;
