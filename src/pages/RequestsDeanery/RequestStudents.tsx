import { useNavigate } from "react-router-dom";

export const RequestStudents = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center py-8">
      <article className="bg-white/95 rounded-2xl shadow-2xl w-[90%] max-w-4xl p-8 flex flex-col relative min-h-[600px]">
        
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Solicitudes estudiantes
        </h1>

        {/* Tabla de solicitudes - Con scroll para muchas filas */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-200">
          <div className="overflow-y-auto max-h-96"> 
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300 sticky top-0"> 
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700 bg-gray-100">Fecha</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700 bg-gray-100">Hora</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700 bg-gray-100">Nombre</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700 bg-gray-100">Estado</th>
                </tr>
              </thead>
              <tbody>
                {/*datos del backend */}
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                      <p>Cargando datos del servidor...</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sección inferior con botones alineados */}
        <div className="mt-auto pt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition w-full sm:w-32 h-12 text-lg">
              Estado
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition w-full sm:w-32 h-12 text-lg">
              Filtros
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition w-full sm:w-32 h-12 text-lg">
              Reportes
            </button>
          </div>

          {/* Fila inferior: Volver al inicio izquierda, Icono derecha */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/menu-inicial")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition w-48 h-12 text-lg"
            >
              Volver al inicio
            </button>

            <img 
              src="/IconoEscuela.svg" 
              alt="Logo universidad" 
              className="w-32 h-auto" 
            />
          </div>
        </div>

      </article>
    </section>
  );
};