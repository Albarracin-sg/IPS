import React from "react";

const TicketCard = () => {
  // Sample data for demonstration
  const currentPatient = {
    name: "Juan Pérez",
    turn: "A45",
    time: "10:30",
    module: "3"
  };
  
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md md:max-w-4xl overflow-hidden border border-blue-100">
        {/* Desktop layout (horizontal) */}
        <div className="hidden md:flex flex-row w-full">
          {/* Left side - Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-8 rounded-r-3xl w-1/3 flex flex-col justify-center">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-1">
              TURNO GENERADO
            </h1>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">¡Gracias por tu paciencia!</p>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center h-full">
              {/* Patient Name with icon */}
              <div className="text-center px-4">
                <p className="text-sm text-gray-500 mb-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Nombre
                </p>
                <h2 className="text-2xl font-bold text-gray-800">{currentPatient.name}</h2>
              </div>
              
              {/* Time with icon */}
              <div className="text-center px-4">
                <p className="text-sm text-gray-500 mb-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Hora
                </p>
                <h3 className="text-xl text-gray-700">{currentPatient.time}</h3>
              </div>
              
              {/* Ticket Number */}
              <div className="text-center bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-xl w-40 shadow-md transform transition-transform hover:scale-105">
                <p className="text-xs text-white mb-1">NÚMERO</p>
                <h1 className="text-5xl font-bold text-white">{currentPatient.turn}</h1>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center py-4 px-2 mt-6 bg-blue-50 rounded-xl">
              <p className="text-sm font-medium tracking-wide text-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                ESPERA AL LLAMADO DEL NÚMERO
              </p>
            </div>
          </div>
        </div>

        {/* Mobile layout (vertical - original design) */}
        <div className="md:hidden">
          {/* Soft curved header with warm greeting */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-b-3xl">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-1">
              TURNO GENERADO
            </h1>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">¡Gracias por tu paciencia!</p>
          </div>
          {/* Content container with softer spacing */}
          <div className="p-6">
            {/* Ticket content */}
            <div className="flex flex-col items-center justify-center space-y-8 py-6">
              {/* Patient Name with icon */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Nombre
                </p>
                <h2 className="text-2xl font-bold text-gray-800">{currentPatient.name}</h2>
              </div>
             
              {/* Time with icon */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Hora
                </p>
                <h3 className="text-xl text-gray-700">{currentPatient.time}</h3>
              </div>
             
              {/* Ticket Number - Softened gradient */}
              <div className="text-center bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-xl w-40 shadow-md transform transition-transform hover:scale-105">
                <p className="text-xs text-white mb-1">NÚMERO</p>
                <h1 className="text-5xl font-bold text-white">{currentPatient.turn}</h1>
              </div>
            </div>
           
            {/* Footer */}
            <div className="text-center py-4 px-2 mt-2 bg-blue-50 rounded-xl">
              <p className="text-sm font-medium tracking-wide text-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                ESPERA AL LLAMADO DEL NÚMERO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;