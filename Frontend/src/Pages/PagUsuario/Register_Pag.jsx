
import LogoInicio from "../../UsuarioQR/components/Logo"
import RegisterForm from "../../UsuarioQR/components/Register/registro"

const Form = () => {
	return (

		<div className="relative min-h-screen w-screen bg-[#6ea3c7] flex justify-center items-center overflow-auto">
			<LogoInicio />
			<RegisterForm />
		</div>
	)
}

export default Form
