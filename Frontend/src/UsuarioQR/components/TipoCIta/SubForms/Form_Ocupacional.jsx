import React, { useState } from 'react';
import { ChevronUp, ChevronDown, CheckSquare, Square } from 'lucide-react';

// Specialized Component for Occupational Patient
const PatienteOcupacional = ({ onSubmit }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);
    
    const options = [
      "Laboratorio",
      "Medicina General"
    ];
    
    const toggleOption = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(item => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
    
    return (
      <div className="w-full transition-all duration-500 ease-in-out">
        <div 
          className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-xl font-medium text-blue-700">Seleccione Servicios Ocupacionales</h3>
          {isExpanded ? <ChevronUp className="text-blue-700" /> : <ChevronDown className="text-blue-700" />}
        </div>
        
        {isExpanded && (
          <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white shadow-lg animate-fadeIn">
            <div className="grid grid-cols-2 gap-3">
              {options.map((option) => (
                <div 
                  key={option}
                  className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  onClick={() => toggleOption(option)}
                >
                  {selectedOptions.includes(option) ? 
                    <CheckSquare className="h-5 w-5 text-blue-600 mr-2" /> :
                    <Square className="h-5 w-5 text-gray-400 mr-2" />
                  }
                  <span>{option}</span>
                </div>
              ))}
            </div>
            
            <button
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => onSubmit(selectedOptions)}
              disabled={selectedOptions.length === 0}
            >
              Enviar Solicitud
            </button>
          </div>
        )}
      </div>
    );
  };

  export default PatienteOcupacional;