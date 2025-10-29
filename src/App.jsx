import React, { useState } from "react";
import LogoSena from "./assets/img/LogoSena.png";
import {
  Home,
  Database,
  Film,
  Truck,
  ShoppingCart,
  Settings,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

export default function SenaContacto() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    mensaje: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const secciones = [
    { id: "adso", nombre: "ADSO", icono: Home, color: "bg-blue-500" },
    { id: "redes", nombre: "REDES DE DATOS", icono: Database, color: "bg-green-500" },
    { id: "animacion", nombre: "ANIMACIÓN 3D", icono: Film, color: "bg-purple-500" },
    { id: "logistica", nombre: "LOGÍSTICA", icono: Truck, color: "bg-orange-500" },
    { id: "mercadeo", nombre: "MERCADEO", icono: ShoppingCart, color: "bg-pink-500" },
    { id: "sistemas", nombre: "SISTEMAS", icono: Settings, color: "bg-indigo-500" },
  ];

  const contenidoSecciones = {
    inicio: {
      titulo: "Bienvenido al SENA CGMLTI",
      descripcion:
        "Servicio Nacional de Aprendizaje - Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Bogotá",
      contenido:
        "Selecciona un programa para conocer más información sobre nuestras ofertas educativas.",
    },
    adso: {
      titulo: "Análisis y Desarrollo de Software (ADSO)",
      descripcion: "Formación técnica y tecnológica en desarrollo de aplicaciones",
      contenido:
        "El programa ADSO te prepara para diseñar, desarrollar e implementar soluciones de software siguiendo estándares de calidad y buenas prácticas de programación.",
    },
    redes: {
      titulo: "Redes de Datos",
      descripcion: "Especialización en infraestructura de redes y telecomunicaciones",
      contenido:
        "Aprende a diseñar, implementar y administrar redes de datos, garantizando la seguridad y el rendimiento óptimo de la infraestructura tecnológica.",
    },
    animacion: {
      titulo: "Animación 3D",
      descripcion: "Creación de contenido audiovisual y animación digital",
      contenido:
        "Desarrolla habilidades en modelado 3D, animación, rendering y efectos visuales para la industria del entretenimiento y la publicidad.",
    },
    logistica: {
      titulo: "Logística",
      descripcion: "Gestión de la cadena de suministro y operaciones",
      contenido:
        "Formación integral en planificación, ejecución y control de operaciones logísticas, desde el almacenamiento hasta la distribución.",
    },
    mercadeo: {
      titulo: "Mercadeo",
      descripcion: "Estrategias comerciales y gestión de marca",
      contenido:
        "Aprende a desarrollar estrategias de marketing, investigación de mercados, gestión de productos y comunicación comercial efectiva.",
    },
    sistemas: {
      titulo: "Sistemas",
      descripcion: "Administración y soporte de sistemas informáticos",
      contenido:
        "Capacítate en la instalación, configuración, mantenimiento y soporte de sistemas informáticos y servicios tecnológicos empresariales.",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombres && formData.apellidos && formData.mensaje) {
      console.log("Datos del formulario:", formData);
      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
        setFormData({ nombres: "", apellidos: "", mensaje: "" });
      }, 3000);
    }
  };

  const contenido = contenidoSecciones[seccionActiva] || contenidoSecciones.inicio;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src={LogoSena} alt="Logo SENA" className="w-10 h-10 object-contain" />
            </div>
            <h1 className="text-3xl font-bold">INICIO PROGRAMAS CONTACTO</h1>
          </div>
          <p className="text-green-100 text-sm">Servicio Nacional de Aprendizaje</p>
          <p className="text-green-100 text-sm font-semibold">CGMLTI - BOGOTÁ</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Grid de Programas */}
        <section className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Nuestros Programas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {secciones.map((seccion) => {
              const Icono = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    seccionActiva === seccion.id
                      ? `${seccion.color} text-white border-transparent shadow-lg`
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Icono className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">{seccion.nombre}</span>
                </button>
              );
            })}
          </div>

          {/* Contenido dinámico */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{contenido.titulo}</h3>
            <p className="text-green-600 font-semibold mb-3">{contenido.descripcion}</p>
            <p className="text-gray-700">{contenido.contenido}</p>
          </div>
        </section>

        {/* Formulario */}
        <section className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
            <Mail className="w-6 h-6 text-green-600" />
            CONTACTO
          </h2>

          {mensajeEnviado && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center animate-fade">
              ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                NOMBRES
              </label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition"
                placeholder="Ingresa tus nombres"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                APELLIDOS
              </label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition"
                placeholder="Ingresa tus apellidos"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                MENSAJE
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition resize-none"
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              ENVIAR
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 SENA CGMLTI Bogotá - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
