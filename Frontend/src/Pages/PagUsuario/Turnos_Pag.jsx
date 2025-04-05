import LogoInicio from "../../UsuarioQR/components/Logo"
import TicketCard from "../../UsuarioQR/components/Tunos/ticketCard"

const Ticket = () => {
	return (

		<div className="relative min-h-screen w-screen bg-blue-300 flex justify-center items-center overflow-auto">
			<LogoInicio />
			<TicketCard />
		</div>
	)
}

export default Ticket