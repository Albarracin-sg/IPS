export default function Screen({ initialPatient, remainingPatients, onReturn, onNuevoTurno }) {
    return (
        <div className="w-screen h-screen bg-blue-50 overflow-hidden flex flex-col">
            <header className="w-full bg-white shadow-md flex justify-between items-center px-10 py-2">
                <h1 className="text-3xl font-bold text-blue-500">Sistema de Turnos</h1>
            </header>
            
            <div className="flex px-10 py-4 gap-6 h-full">
                <div className="w-3/4 flex flex-col space-y-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-blue-500 text-white py-3">
                            <h2 className="text-2xl font-bold tracking-wide text-center">TURNO ACTUAL</h2>
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <div className="mb-2 text-center">
                                <p className="text-gray-600 text-lg">Paciente</p>
                                <h3 className="text-3xl font-bold text-gray-800">Nombre del Paciente</h3>
                            </div>
                            <div className="flex items-center justify-center gap-32 w-full mt-4">
                                <div className="text-center">
                                    <p className="text-gray-600 text-lg">Turno</p>
                                    <h3 className="text-7xl font-bold text-red-700">A01</h3>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-600 text-lg">Módulo</p>
                                    <h3 className="text-7xl font-bold text-blue-500">05</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-grow">
                        <div className="bg-blue-500 text-white py-3">
                            <h2 className="text-2xl font-bold tracking-wide text-center">TURNOS ACTUALES</h2>
                        </div>
                        <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 48px)" }}>
                            <table className="w-full text-left">
                                <thead className="bg-blue-100 text-blue-500 sticky top-0">
                                    <tr>
                                        <th className="py-3 px-6 text-center w-1/6">Módulo</th>
                                        <th className="py-3 px-6 w-3/6">Nombre</th>
                                        <th className="py-3 px-6 text-center w-2/6">Turno</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-blue-50 border-b border-gray-200">
                                        <td className="py-4 px-6 text-center font-medium text-lg">01</td>
                                        <td className="py-4 px-6 font-medium text-lg">Juan Pérez</td>
                                        <td className="py-4 px-6 text-center font-medium text-lg">A02</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <td className="py-4 px-6 text-center font-medium text-lg">03</td>
                                        <td className="py-4 px-6 font-medium text-lg">María González</td>
                                        <td className="py-4 px-6 text-center font-medium text-lg">B15</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 flex flex-col space-y-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <p className="text-gray-600 mb-1">Hora actual</p>
                        <div className="text-6xl font-bold text-gray-800">
                            10:30
                        </div>
                        <div className="mt-3 text-lg text-gray-600">
                            Martes, 8 de abril de 2025
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 flex-grow">
                        <h3 className="text-xl font-bold text-blue-500 mb-5">Publicidad</h3>
                    </div>
                </div>
            </div>

            <footer className="w-full bg-blue-500 text-white py-3 px-10 flex justify-between items-center mt-auto">
                <div>IPS Universitaria de Colombia</div>
                <div>Atención al paciente: (60) 123-456-7890</div>
            </footer>
        </div>
    )
}