import { ButtonPrimary } from "../../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";
export const RecuperarCorreo = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('/Fondo.svg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <article className="bg-white/95 rounded-2xl shadow-2xl w-[800px] p-30 flex flex-col items-center">
        
        <h1 className="text-4xl  text-gray-900 mb-6, -translate-y-20">Recuperar contraseña</h1>

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

        <ButtonPrimary text="INICIAR SESIÓN" onClick={() => navigate("/confirmar-correo")}  />

      </article>
    </section>
  );
};
