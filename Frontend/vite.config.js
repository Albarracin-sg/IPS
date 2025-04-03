import { defineConfig } from 'vite' // Importa la función defineConfig de Vite para definir la configuración
import tailwindcss from '@tailwindcss/vite' // Importa el plugin de Tailwind CSS para Vite
import react from '@vitejs/plugin-react' // Importa el plugin de React para Vite

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(), // Usa el plugin de React
		tailwindcss(), // Usa el plugin de Tailwind CSS
	],
})
