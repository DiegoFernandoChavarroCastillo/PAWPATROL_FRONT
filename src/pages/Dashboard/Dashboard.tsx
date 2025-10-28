import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-4">
      <article className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-[1850px] p-20 lg:p-30 flex flex-col items-center text-center">
      <img src="/IconoEscuela.svg" alt="Logo universidad" className="w-32 mb-4 -translate-y-25 -translate-x-200" />
        <h1 className="text-3xl lg:text-5xl text-gray-900 mb-12 -translate-y-50">
          Sistema de Reasignación de Horarios Académicos
          <br />
          SIRHA
        </h1>
        <div className="flex flex-col items-center gap-30 -translate-y-50">
        <div className="flex flex-col lg:flex-row w-full justify-around gap-10">
        <h2 className="text-3xl lg:text-5xl text-gray-900 mb-12, -translate-x-50">
          SOLICITUDES
        </h2>
        <h2 className="text-3xl lg:text-5xl text-gray-900 mb-12 translate-x-50">
          ACADÉMICO
        </h2>
        </div>
        </div>
      
        <div className="flex flex-col lg:flex-row w-full justify-around gap-10">

          
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => navigate("/reportes")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2">
              <img src="/Reportes.svg" alt="Icono" className="w-40 h-40" />
            </button>

            <button
              onClick={() => navigate("/gestionar-solicitudes")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2">
              <img src="/GestionarSolicitudes.svg" alt="Icono" className="w-50 h-50" />
            </button>

            <button
              onClick={() => navigate("/estadisticas-solicitudes")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2">
              <img src="/Estadisticas.svg" alt="Icono" className="w-50 h-50" />
            </button>
          </div>

      
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => navigate("/gestion-alertas")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2">
              <img src="/alertas.svg" alt="Icono" className="w-50 h-50" />
            </button>

            <button
              onClick={() => navigate("/consultar")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2"
            >
              <img src="/Consultas.svg" alt="Icono" className="w-50 h-50" />
            </button>

            <button
              onClick={() => navigate("/gestion-grupos-materias")}
              className="bg-white/90 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow w-64 h-16 text-lg flex items-center justify-center gap-2"
            >
              <img src="/GruposAsignaturas.svg" alt="Icono" className="w-40 h-40" />
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/inicio-seccion")}
          className="mt-12 text-gray-600 hover:underline"
        >
          Cerrar sesión
        </button>
      </article>
    </section>
  );
};
