import {Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { authProvider } from "./authProvider";
import { Hero } from "./pages/loginDeanery/Hero"; 
import { Registrarse } from "./pages/loginDeanery/Registrarse"; 
import { Registrado } from "./pages/loginDeanery/Registrado"; 
import { RecuperarCorreo} from "./pages/forgotPassword/RecuperarCorreo"; 
import { Confirmacion} from "./pages/forgotPassword/Confirmacion"; 
import { Dashboard} from "./pages/Dashboard/Dashboard"; 
import { Alert } from "./pages/Alert/Alert";
import { Report} from "./pages/Report/Report";
import { ReportAsignatura} from "./pages/Report/ReportAsignatura";
import { RequestStudents} from "./pages/RequestsDeanery/RequestStudents"; 
import { ReportDecano} from "./pages/Report/ReportDecano";
import { ReportGlobal} from "./pages/Report/ReportGlobal";
import { ReportGrupo} from "./pages/Report/ReportGrupo";
import SolicitudesPorFacultad from "./pages/statistics/Statiscs";
import Decanatura from "./pages/consult/consulta";

function App() {
  return (
    <BrowserRouter>
     
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            routerProvider={routerProvider}
            authProvider={authProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "92BBVY-o0W5T8-JwQpqE",
            }}
          >
            <Routes>
              <Route index element={<Hero />} />
              <Route path="/inicio-sesion" element={<Hero />} />
              <Route path="/inicio-registro" element={<Registrarse />} />
              <Route path="/fin-registro" element={<Registrado/>} />
              <Route path="/recuperar-correo" element={<RecuperarCorreo />} />
              <Route path="/confirmar-correo" element={<Confirmacion />} />
              <Route path="/menu-inicial" element={<Dashboard/>} />
              <Route path="/Alertas" element={<Alert/>} />
              <Route path="/Reporte" element={<Report/>} />
              <Route path="/Reporte-Asignatura" element={<ReportAsignatura/>} />
              <Route path="/Reporte-Decanatura" element={<ReportDecano/>} />
              <Route path="/Reporte-Global" element={<ReportGlobal/>} />
              <Route path="/Reporte-Grupo" element={<ReportGrupo/>} />
              <Route path="/solicitudes-estudiante" element={<RequestStudents/>} />
              <Route path="/solicitudes-facultad" element={<SolicitudesPorFacultad />} />
              <Route path="/consultas" element={< Decanatura />} />
              
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
