//import { BrowserRouter } from "react-router-dom";
//import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    /*<BrowserRouter>
      <AppRoutes />
    </BrowserRouter>*/

    //font-nunito es una clase de tailwind que se usa para cambiar la fuente a nunito
    <div className="font-nunito bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-900">
        Bienvenido a nuestra IPS
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Brindamos seguridad y confianza en cada consulta.
      </p>
  </div>
  );
}

export default App;
