import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

export default function SolicitudesPorFacultad() {
  const navigate = useNavigate();

  const data = [
    { facultad: "Ing. de Inteligencia Artificial", solicitudes: 130 },
    { facultad: "Ing. de Sistemas", solicitudes: 120 },
    { facultad: "Ing. Industrial", solicitudes: 110 },
    { facultad: "Administración de Empresas", solicitudes: 100 },
    { facultad: "Economía", solicitudes: 95 },
    { facultad: "Ing. Electrónica", solicitudes: 90 },
    { facultad: "Ing. Civil", solicitudes: 85 },
    { facultad: "Ing. Mecánica", solicitudes: 70 },
    { facultad: "Ing. Eléctrica", solicitudes: 60 },
    { facultad: "Ing. Estadística", solicitudes: 55 },
    { facultad: "Ing. de Ciberseguridad", solicitudes: 50 },
    { facultad: "Matemáticas", solicitudes: 45 },
    { facultad: "Ing. Biomédica", solicitudes: 40 },
    { facultad: "Ing. Ambiental", solicitudes: 25 },
    { facultad: "Ing. en Biotecnología", solicitudes: 20 },
  ];

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-6">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-[1850px] p-16 flex flex-col text-center relative">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Solicitudes por Facultad
        </h1>

        {/* Contenedor del gráfico */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl bg-gray-100 rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-medium mb-6 text-gray-700">
              Consulta global por facultad
            </h2>

            <div className="w-full h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
              <ResponsiveContainer width="95%" height="90%">
                <BarChart
                  layout="vertical"
                  data={data}
                  margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="facultad" width={230} />
                  <Tooltip />
                  <Bar
                    dataKey="solicitudes"
                    fill="#2563eb"
                    radius={[0, 8, 8, 0]}
                  >
                    <LabelList dataKey="solicitudes" position="right" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sección inferior con botón y logo */}
          <div className="w-full max-w-6xl flex justify-between mt-8 items-center">
            <button
              onClick={() => navigate("/menu-inicial")}
              className="text-gray-800 text-lg hover:underline transition flex items-center gap-2"
            >
              ← Volver al inicio
            </button>

            <img
              src="/IconoEscuela.svg"
              alt="Logo Universidad"
              className="w-40 opacity-90"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
