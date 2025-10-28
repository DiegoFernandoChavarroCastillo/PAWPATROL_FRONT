import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Registro {
  estado: string;
  id: string;
  nombre: string;
  facultad: string;
}

type Tabs = "Decanatura" | "Secretaria" | "Profesores" | "Estudiante";

export default function Decanatura() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tabs>("Decanatura");
  const [search, setSearch] = useState("");

  const data: Record<Tabs, Registro[]> = {
    Decanatura: [
      {
        estado: "Activo",
        id: "1000000451",
        nombre: "Claudia Patricia Santiago Coly",
        facultad: "Decanatura Ingeniería de Sistemas",
      },
      {
        estado: "Inactivo",
        id: "1000000453",
        nombre: "Oswaldo Castillo Nevetty",
        facultad: "Decanatura Ingeniería de Sistemas",
      },
      {
        estado: "Activo",
        id: "1000000455",
        nombre: "Nancy Torres Castellanos",
        facultad: "Decanatura Ingeniería Civil",
      },
    ],
    Secretaria: [
      {
        estado: "Activo",
        id: "2000000111",
        nombre: "Laura Gómez Serrano",
        facultad: "Secretaría Ingeniería Industrial",
      },
    ],
    Profesores: [
      {
        estado: "Activo",
        id: "3000000222",
        nombre: "Carlos Pérez Méndez",
        facultad: "Profesor Ingeniería Electrónica",
      },
    ],
    Estudiante: [
      {
        estado: "Activo",
        id: "4000000333",
        nombre: "Andrea López Rojas",
        facultad: "Estudiante Ingeniería Ambiental",
      },
    ],
  };

  const filteredData = data[activeTab].filter((item: Registro) =>
    [item.nombre, item.facultad, item.id].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center px-6">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-[1850px] p-12 flex flex-col relative">
        <h1 className="text-2xl font-semibold mb-8">Gestión Académica</h1>

        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <div className="flex space-x-8 text-lg">
            {(["Decanatura", "Secretaria", "Profesores", "Estudiante"] as Tabs[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-600 hover:text-blue-500"
                  } transition-all pb-1`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">Estado</th>
                <th className="px-4 py-2 border">
                  ID del {activeTab === "Estudiante" ? "estudiante" : activeTab.toLowerCase()}
                </th>
                <th className="px-4 py-2 border">
                  Nombre del {activeTab === "Estudiante" ? "estudiante" : activeTab.toLowerCase()}
                </th>
                <th className="px-4 py-2 border">
                  {activeTab === "Estudiante"
                    ? "Programa"
                    : "Facultad del " + activeTab.toLowerCase()}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item: Registro, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{item.estado}</td>
                  <td className="px-4 py-2 border">{item.id}</td>
                  <td className="px-4 py-2 border">{item.nombre}</td>
                  <td className="px-4 py-2 border">{item.facultad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigate("/menu-inicial")}
            className="text-black text-sm hover:underline transition"
          >
            ← Volver
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
