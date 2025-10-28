// src/pages/GestionAlertas.jsx
import { useNavigate } from "react-router-dom";

export const Alert = () => {
  const navigate = useNavigate();

  // Datos fijos de ejemplo (puedes conectarlos luego a tu backend)
  const alertas = [
    {
      codigo: "DOSW",
      nombre: "Desarrollo de operaciones de software",
      capacidad: "20/20",
    },
    {
      codigo: "TPYC",
      nombre: "Teoría de la programación y computación",
      capacidad: "19/20",
    },
    {
      codigo: "ODSC",
      nombre: "Organización de sistemas de cómputo",
      capacidad: "18/20",
    },
    {
      codigo: "DOPO",
      nombre: "Desarrollo orientado a objetos",
      capacidad: "22/23",
    },
  ];

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-4">
      <article className="bg-principal rounded-2xl shadow-2xl w-full max-w-[1850px] p-16 flex flex-col text-left relative">
        {/* Título */}
        <h1 className="text-3xl lg:text-5xl text-gray-900 font-semibold mb-10">
          Alertas
        </h1>

        {/* Contenedor principal dividido en dos columnas */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 border-r border-gray-300 pr-6">
            {alertas.slice(0, 3).map((alerta) => (
              <div
                key={alerta.codigo}
                className="bg-white shadow rounded-xl p-4 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {alerta.codigo}
                  </h2>
                  <span className="text-red-600 text-sm font-semibold flex items-center gap-1">
                    ⚠️ Capacity is at limit!
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{alerta.nombre}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <img src="/P.svg" alt="icon users" className="w-4 h-4" />
                    <span>{alerta.capacidad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Columna derecha */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 pl-6">
            {alertas.slice(3).map((alerta) => (
              <div
                key={alerta.codigo}
                className="bg-white shadow rounded-xl p-4 flex flex-col justify-between w-full lg:w-3/4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {alerta.codigo}
                  </h2>
                  <span className="text-red-600 text-sm font-semibold flex items-center gap-1">
                    ⚠️ Capacity is at limit!
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{alerta.nombre}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <img src="/P.svg" alt="icon users" className="w-4 h-4" />
                    <span>{alerta.capacidad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón volver al inicio */}
        <button
          onClick={() => navigate("/menu-inicial")}
          className="mt-12 text-left text-gray-800 text-lg hover:underline flex items-center gap-2"
        >
          ↲ Volver al inicio
        </button>


      </article>
    </section>
  );
};
