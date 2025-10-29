import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  const { token } = useAuth();

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-gray-700">
          This is your new React + TypeScript + Tailwind project 🚀
        </p>
      </main>
    </div>
  );
}

export default App;
