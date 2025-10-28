// src/pages/Reportes.jsx
import { useNavigate } from "react-router-dom";

export const Report = () => {
  const navigate = useNavigate();

  const reportes = [
    { nombre: "Estadísticas por asignatura", ruta: "/Reporte-Asignatura" },
    { nombre: "Estadísticas por grupo", ruta: "/Reporte-Grupo" },
    { nombre: "Estadísticas por decanería", ruta: "/Reporte-Decanatura" },
    { nombre: "Estadísticas por globales", ruta: "/Reporte-Global" },
  ];

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-6">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-[1850px] p-16 flex flex-col text-center relative">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-start">
            <img src="/IconoEscuela.svg" alt="Logo Universidad" className="w-40 mb-4" />
            <h2 className="text-lg text-gray-600 font-medium translate-y-10">Reportes</h2>
          </div>

          <div>
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">
              Sistema de Reasignación de Horarios Académicos
            </h1>
            <h2 className="text-xl text-gray-600 mt-2">SIRHA</h2>
          </div>

          <div className="w-40" /> {/* espacio vacío para balance visual */}
        </div>

        {/* Contenedor principal con división vertical */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-t border-gray-300 pt-10">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2 pr-6">
            {reportes.slice(0, 2).map((r) => (
              <button
                key={r.nombre}
                onClick={() => navigate(r.ruta)}
                className="bg-gray-100 hover:bg-blue-100 transition-all shadow-md rounded-xl p-6 flex items-center gap-4 text-left"
              >
                <img src="/icon-estadistica.svg" alt="icono" className="w-8 h-8" />
                <span className="text-lg font-semibold text-gray-800">
                  {r.nombre}
                </span>
              </button>
            ))}
          </div>

          {/* Línea divisoria */}
          <div className="hidden lg:block border-l border-gray-300" />

          {/* Columna derecha */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2 pl-6">
            {reportes.slice(2).map((r) => (
              <button
                key={r.nombre}
                onClick={() => navigate(r.ruta)}
                className="bg-gray-100 hover:bg-blue-100 transition-all shadow-md rounded-xl p-6 flex items-center gap-4 text-left"
              >
                <img src="/icon-estadistica.svg" alt="icono" className="w-8 h-8" />
                <span className="text-lg font-semibold text-gray-800">
                  {r.nombre}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Botón volver */}
        <button
          onClick={() => navigate("/menu-inicial")}
          className="mt-12 text-left text-gray-800 text-lg hover:underline flex items-center gap-2 w-25 h-10">
          ↲ Volver
        </button>
      </article>
    </section>
  );
};
