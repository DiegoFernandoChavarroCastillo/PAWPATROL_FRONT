// src/pages/ReporteAsignatura.jsx
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export const ReportGrupo = () => {
  const navigate = useNavigate();

  // Datos del gráfico de barras
  const dataBarras = [
    { name: "Aprobadas", cantidad: 120, color: "#28a745" },
    { name: "Reprobadas", cantidad: 50, color: "#dc3545" },
    { name: "Pendientes", cantidad: 30, color: "#007bff" },
  ];

  // Datos del gráfico circular
  const dataTorta = [
    { name: "Aprobadas", value: 60, color: "#28a745" },
    { name: "Reprobadas", value: 25, color: "#dc3545" },
    { name: "Pendientes", value: 15, color: "#007bff" },
  ];

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-6">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-[1850px] p-12 flex flex-col text-left relative">
        {/* Título */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-10">Reporte grupo</h1>

        {/* Contenedor principal de los gráficos */}
        <div className="bg-gray-50 rounded-xl shadow-inner p-10 flex flex-col lg:flex-row justify-around items-center gap-10">
          {/* Gráfico de Barras */}
          <div className="flex flex-col items-center w-full lg:w-2/3">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Estadísticas de DOSW
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBarras}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {dataBarras.map((entry, index) => (
                  <Bar
                    key={index}
                    dataKey="cantidad"
                    fill={entry.color}
                    name={entry.name}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>

            <h3 className="text-md text-gray-600 mt-6">Tasa de Aprobación</h3>
            <div className="flex justify-center items-center mt-2">
              <div className="flex gap-4 text-sm">
                <span className="text-green-600 font-semibold">76.6%</span>
                <span className="text-red-600 font-semibold">24.0%</span>
              </div>
            </div>
          </div>

          {/* Gráfico Circular */}
          <div className="flex flex-col items-center w-full lg:w-1/3">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Tasa de Aprobación
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataTorta}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  label
                >
                  {dataTorta.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie de página */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => navigate("/Reporte")}
            className="text-gray-800 text-lg hover:underline flex items-center gap-2"
          >
            ↲ Volver
          </button>

          <img
            src="/IconoEscuela.svg"
            alt="Logo Universidad"
            className="w-40 opacity-90"
          />
        </div>
      </article>
    </section>
  );
};
