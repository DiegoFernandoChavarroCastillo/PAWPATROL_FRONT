import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Grupo {
  asignatura: string;
  profesor: string;
  horario: string;
  cupos: string;
  estado: "Disponible" | "Lleno" | "Cerrado";
}

export default function GestionarAsignaturasYGrupos() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const grupos: Grupo[] = [
    {
      asignatura: "QDSC-3",
      profesor: "Gerardo Ocampo G.",
      horario: "Martes y Jueves",
      cupos: "10/40",
      estado: "Disponible",
    },
    {
      asignatura: "DOSW-1",
      profesor: "Andrés Cantor U.",
      horario: "Martes",
      cupos: "20/20",
      estado: "Lleno",
    },
    {
      asignatura: "QDSC-3L",
      profesor: "Nelson Bonilla R.",
      horario: "Jueves",
      cupos: "15/40",
      estado: "Disponible",
    },
  ];

  const filteredGrupos = grupos.filter((g) =>
    [g.asignatura, g.profesor, g.horario].some((campo) =>
      campo.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-6">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-[1600px] p-10 flex flex-col relative">
        {/* Título principal */}
        <h1 className="text-2xl font-semibold text-center mb-10">
          Gestionar asignaturas y grupos
        </h1>

        <div className="flex gap-10">
          {/* Panel lateral */}
          <aside className="w-1/4 bg-gray-50 rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">
              Gestionar asignaturas y grupos
            </h2>
            <nav className="flex flex-col space-y-3">
              <button className="bg-blue-100 text-blue-800 font-medium py-2 px-3 rounded-md text-left hover:bg-blue-200 transition">
                Modificar materias y grupos
              </button>
              <button className="text-gray-700 py-2 px-3 text-left hover:text-blue-600">
                Ver Horario Actual
              </button>
              <button className="text-gray-700 py-2 px-3 text-left hover:text-blue-600">
                Historial Académico
              </button>
            </nav>
          </aside>

          {/* Sección principal */}
          <main className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            {/* Encabezado de búsqueda */}
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="🔍 Buscar por materia, grupo o profesor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-2/3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition text-sm">
                Filtros
              </button>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm text-left rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">Asignatura y grupo</th>
                    <th className="px-4 py-2 border">Profesor</th>
                    <th className="px-4 py-2 border">Horario</th>
                    <th className="px-4 py-2 border">Cupos</th>
                    <th className="px-4 py-2 border">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGrupos.map((g, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{g.asignatura}</td>
                      <td className="px-4 py-2 border">{g.profesor}</td>
                      <td className="px-4 py-2 border">{g.horario}</td>
                      <td className="px-4 py-2 border">{g.cupos}</td>
                      <td className="px-4 py-2 border">
                        {g.estado === "Disponible" ? (
                          <span className="text-green-600 font-semibold">
                            Disponible
                          </span>
                        ) : g.estado === "Lleno" ? (
                          <span className="text-red-600 font-semibold">
                            Lleno
                          </span>
                        ) : (
                          <span className="text-gray-500 font-semibold">
                            Cerrado
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Botón inferior */}
            <div className="flex justify-center mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition">
                Lista de espera
              </button>
            </div>
          </main>
        </div>

        {/* Pie de página */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigate("/menu-inicial")}
            className="text-black text-sm hover:underline transition"
          >
            ↳ Volver al inicio
          </button>
          <img
            src="/IconoEscuela.svg"
            alt="Logo Universidad"
            className="w-44 opacity-90"
          />
        </div>
      </article>
    </section>
  );
}
