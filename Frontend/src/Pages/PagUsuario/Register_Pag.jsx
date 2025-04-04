
import LogoInicio from "../../UsuarioQR/components/Logo"
import RegisterForm from "../../UsuarioQR/components/Register/registro"

const Form = () => {
	return (
<<<<<<< HEAD
		<div className="relative min-h-screen w-screen bg-blue-400 flex justify-center items-center overflow-auto">
			<div className="absolute top-0 left-0 m-4">
				{/* Imagen de la IPS */}
				<img
					src={ipsLogo}
					alt="IPS Logo"
					className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
				/>
			</div>
=======
		<div className="relative min-h-screen w-screen bg-[#6ea3c7] flex justify-center items-center overflow-auto">
			<LogoInicio />
>>>>>>> 884a55729c17edd53d1d2ce65586301795c8c5ea
			<RegisterForm />
		</div>
	)
}

export default Form
