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
import { Registrarse } from "./pages/loginDeanery/registrarse"; 
import { Registrado } from "./pages/loginDeanery/Registrado"; 
import { RecuperarCorreo} from "./pages/forgotPassword/RecuperarCorreo"; 
import { Confirmacion} from "./pages/forgotPassword/Confirmacion"; 
import { Dashboard} from "./pages/Dashboard/Dashboard"; 


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
              <Route path="/inicio-seccion" element={<Hero />} />
              <Route path="/inicio-registro" element={<Registrarse />} />
              <Route path="/fin-registro" element={<Registrado/>} />
              <Route path="/recuperar-correo" element={<RecuperarCorreo />} />
              <Route path="/confirmar-correo" element={<Confirmacion />} />
              <Route path="/menu-inicial" element={<Dashboard/>} />
              
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
