import { ButtonPrimary } from "../../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";
export const Registrarse = () => {
  const navigate = useNavigate();
  return (
  <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <article className="bg-white/95 rounded-2xl shadow-2xl w-[500px] p-30 flex flex-col items-center">
        
        <img src="/IconoEscuela.svg" alt="Logo universidad" className="w-32 mb-4 -translate-y-25 -translate-x-40" />
        <img src="/Logo.svg" alt="Calendario" className="w-22 mb-1 -translate-y-20" />
        <h1 className="text-4xl  text-gray-900 mb-6, -translate-y-20">SIRHA</h1>

        <div className="w-full mb-4, -translate-y-10">
          <label className="block text-gray-700 text-sm mb-1">
            CORREO INSTITUCIONAL:
          </label>
          <input
            type="email"
            placeholder="ejemplo@universidad.edu"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="w-full mb-6, -translate-y-8">
          <label className="block text-gray-700 text-sm mb-1,">
            CONTRASEÑA:
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="w-full mb-6, -translate-y-6">
          <label className="block text-gray-700 text-sm mb-1,">
            CONFIRMAR CONTRASEÑA:
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

       <ButtonPrimary text="INICIAR SESIÓN" onClick={() => navigate("/fin-registro")}  />
        
        
      </article>
    </section>
  );
};