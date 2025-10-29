import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const { setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    console.log("🔍 INICIANDO LOGIN...");

    try {
      // INTENTO 1: Headers más completos
      const requestOptions: RequestInit = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ 
          email: email.trim(), 
          password: password 
        }),
      };

      console.log("📡 Enviando request...");

      const response = await fetch(
        "https://pawpatrol-back-preprod-bvhubpaxgda3frfy.brazilsouth-01.azurewebsites.net/api/auth/login",
        requestOptions
      );

      console.log("📊 Status:", response.status, response.statusText);

      if (response.status === 403) {
        // Error 403 específico - probamos diferentes enfoques
        await handle403Error(email, password);
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText || "Error del servidor"}`);
      }

      const data = await response.json();
      console.log("✅ Login exitoso!");
      
      setToken(data.token);
      alert("Sesión iniciada correctamente");
      
    } catch (err: any) {
      console.error("💥 Error:", err);
      setError(err.message || "Error en el inicio de sesión");
    } finally {
      setIsLoading(false);
    }
  };

  // Manejo específico para error 403
  const handle403Error = async (email: string, password: string) => {
    console.log("🛡️ Probando alternativas para error 403...");
    
    // INTENTO 2: Sin headers de Origin (puede causar CORS)
    try {
      const response = await fetch(
        "https://pawpatrol-back-preprod-bvhubpaxgda3frfy.brazilsouth-01.azurewebsites.net/api/auth/login",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        alert("Sesión iniciada correctamente");
        return;
      }
    } catch (err) {
      console.log("❌ Intento 2 falló");
    }

    // INTENTO 3: Con modo 'cors' explícito
    try {
      const response = await fetch(
        "https://pawpatrol-back-preprod-bvhubpaxgda3frfy.brazilsouth-01.azurewebsites.net/api/auth/login",
        {
          method: "POST",
          mode: 'cors',
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        alert("Sesión iniciada correctamente");
        return;
      }
    } catch (err) {
      console.log("❌ Intento 3 falló");
    }

    throw new Error("Error 403: Acceso denegado. El servidor rechaza la conexión desde este dominio.");
  };

  // Función para probar con el backend local o alternativo
  const testLocalBackend = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      // Probamos con un backend local temporal
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        alert("Login exitoso con backend local");
      } else {
        setError("Backend local no disponible");
      }
    } catch (err) {
      setError("No se pudo conectar al backend local");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/Fondo.svg')" }}
    >
      <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
        <img
          src="/IconoEscuela.svg"
          alt="Icono Escuela"
          className="absolute top-4 left-4 h-8 sm:h-10"
        />

        <div className="flex justify-center mb-4 mt-8 sm:mt-10">
          <img src="/Logo.svg" alt="Logo SIRHA" className="h-12 sm:h-16" />
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-800">SIRHA</h2>

        {/* Información del error */}
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-700 text-sm text-center">
            <strong>Error 403 Detectado:</strong> Problema de conexión con el servidor
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 sm:gap-5">
          <label className="text-gray-700 font-semibold text-sm">
            CORREO INSTITUCIONAL:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="usuario@mail.exceedings.edu.co"
              required
            />
          </label>

          <label className="text-gray-700 font-semibold text-sm">
            CONTRASEÑA:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ingresa tu contraseña"
              required
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium mt-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "CONECTANDO..." : "INICIAR SESIÓN"}
          </button>
        </form>

        {/* Botón de prueba alternativo */}
        <button
          onClick={testLocalBackend}
          className="w-full mt-4 p-2 bg-green-600 text-white rounded-md text-sm"
        >
          🔄 PROBAR CON BACKEND ALTERNATIVO
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-center text-sm font-medium">{error}</p>
            <p className="text-red-500 text-center text-xs mt-2">
              El servidor rechaza conexiones desde localhost. Contacta al administrador.
            </p>
          </div>
        )}

        <p className="text-center text-sm mt-6 text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
          ¿OLVIDASTE TU CONTRASEÑA?
        </p>
      </div>
    </div>
  );
};

export default Login;