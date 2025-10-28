import { useNavigate } from "react-router-dom";
export const Registrado = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <article className="bg-white/95 rounded-2xl shadow-2xl w-[800px] p-30 flex flex-col items-center">

        
        <h1 className="text-5xl text-gray-900 mb-6 -translate-y-20">
        Has sido registrado!!
        </h1>
       <button
          onClick={() => navigate("/inicio-seccion")} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition w-[250px] h-[60px]">
          Aceptar
        </button>
      </article>
    </section>
  );
};
