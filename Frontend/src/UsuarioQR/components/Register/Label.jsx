export default function Label({ text, tipo }) {
    const estilo = tipo === "titulo" 
        ? "text-2xl font-bold text-gray-800 mb-1"
        : tipo === "subtitulo" 
        ? "block text-sm font-medium text-gray-700 mb-1"
        : tipo === "texto" 
        ? "text-base text-gray-600 mb-1"
        : "text-sm text-gray-500 mb-1";

    return (
        <label className={estilo}>
            {text}
        </label>
    );
}