import ipsLogo from "../../assets/ips.png";
import { Link } from "react-router-dom"; 

function LogoInicio() {
    return (
        <div className="absolute top-0 left-0 m-4">
            {/* Imagen de la IPS con redirección */}
            <Link to="/">
                <img
                    src={ipsLogo}
                    alt="IPS Logo"
                    className="w-20 h-10 md:w-30 md:h-15 cursor-pointer" 
                />
            </Link>
        </div>
    );
}

export default LogoInicio;