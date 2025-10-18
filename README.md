# SIRHA_FRONTEND_REACT

**Integrantes:**
- Juan Pablo Caballero Castellanos
- Oscar Sanchez
- Robinson Steven Nuñez
- David Santiago Palacios
- Diego Chavarro

**Nombre De la Rama:**
`feature/proyecto_JuanCaballero_OscarSanchez_DiegoChavarro_RobinsonPortela_SantiagoPalacios_2025-2`

---

## Estrategia de Versionamiento y Ramas

**Template ramas**
`feature/Path-Tarea`

- **main**: Versión estable para PREPROD
- **develop**: Rama principal de desarrollo
- **bugfix/***: Manejo de errores
- **release/***: Manejo de versiones

**Template Commits**
`feature: Tarea - Acción Realizada`

---

## Tecnologías Utilizadas

- **React 18** - Biblioteca principal para construir la interfaz de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Build tool y servidor de desarrollo rápido
- **Refine** - Framework para construir aplicaciones internas y dashboards
- **Tailwind CSS** - Framework de CSS utility-first para estilos
- **React Router** - Manejo de rutas y navegación
- **REST API** - Comunicación con el backend mediante API REST

---

## Arquitectura del Frontend

El proyecto sigue una arquitectura basada en componentes con separación de responsabilidades:

### **Estructura de Carpetas**

```
sirha-frontend-react/
├─ public/                  # Archivos estáticos públicos
│  └─ favicon.ico
├─ src/
│  ├─ assets/              # Recursos estáticos (imágenes, iconos, etc.)
│  ├─ components/          # Componentes reutilizables de UI
│  ├─ contexts/            # Contextos de React para estado global
│  ├─ hooks/               # Custom hooks personalizados
│  ├─ pages/               # Páginas/vistas principales de la aplicación
│  ├─ routes/              # Configuración de rutas
│  ├─ providers/           # Proveedores de datos y servicios
│  │  └─ data/             # Data providers para API REST
│  ├─ authProvider.ts      # Proveedor de autenticación
│  ├─ App.tsx              # Componente raíz de la aplicación
│  ├─ main.tsx             # Punto de entrada de la aplicación
│  ├─ index.css            # Estilos globales
│  └─ vite-env.d.ts        # Tipos de TypeScript para Vite
├─ .eslintrc.cjs           # Configuración de ESLint
├─ .gitignore              # Archivos ignorados por Git
├─ index.html              # HTML principal
├─ package.json            # Dependencias y scripts
├─ postcss.config.js       # Configuración de PostCSS
├─ tailwind.config.js      # Configuración de Tailwind CSS
├─ tsconfig.json           # Configuración de TypeScript
└─ vite.config.ts          # Configuración de Vite
```

### **Capas de la Aplicación**

- **Pages (Vistas)**: Componentes principales que representan las diferentes páginas del sistema según el rol del usuario (Estudiante, Decanatura, Secretaría Académica, Docente).

- **Components (Componentes)**: Elementos reutilizables de UI como formularios, tablas, modales, botones, etc. que se componen para formar las páginas.

- **Providers (Proveedores)**: Capa de comunicación con el backend, maneja las peticiones HTTP a la API REST y transforma los datos para su uso en la UI.

- **Hooks (Custom Hooks)**: Lógica reutilizable encapsulada en hooks personalizados para manejo de estado, efectos secundarios y operaciones comunes.

- **Contexts (Contextos)**: Manejo de estado global de la aplicación usando React Context API para compartir datos entre componentes sin prop drilling.

- **Auth Provider**: Implementación del sistema de autenticación y autorización, controla el acceso según roles de usuario.

---

## Roles y Funcionalidades

El sistema SIRHA frontend soporta cuatro tipos de usuarios con diferentes interfaces y permisos:

### **Estudiante**
- Consultar horarios disponibles por semestre
- Crear solicitudes de cambio de grupo
- Consultar estado de solicitudes
- Ver horario actual inscrito
- Consultar capacidad de grupos

### **Decanatura**
- Consultar información de estudiantes
- Responder solicitudes según facultad
- Aprobar/rechazar solicitudes excepcionales
- Consultar alertas de grupos al límite de capacidad
- Asignar profesores a grupos
- Crear y consultar reportes de solicitudes

### **Secretaría Académica**
- Establecer periodos académicos
- Configurar fechas límite para solicitudes
- Consultar todas las solicitudes del sistema
- Filtrar solicitudes por estudiante, prioridad y estado
- Generar reportes generales

### **Docente**
- Consultar horarios asignados
- Ver grupos a cargo
- Consultar capacidad de grupos
- Verificar afectaciones por cambios de horario

---

## Scripts Disponibles

### **Desarrollo**
```bash
npm run dev
```
Inicia el servidor de desarrollo con hot-reload en modo watch.

### **Build para Producción**
```bash
npm run build
```
Compila y optimiza la aplicación para producción. Los archivos generados se ubicarán en la carpeta `dist/`.

### **Preview de Producción**
```bash
npm run preview
```
Previsualiza la build de producción localmente.

### **Linting**
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código.

---

## Configuración y Conexión con Backend

El frontend se comunica con el backend de SIRHA mediante API REST. La configuración de la URL base del API se encuentra en el data provider.

**Endpoint Base del Backend:**
```
http://localhost:8080/api
```

Para cambiar el endpoint en diferentes ambientes (desarrollo, staging, producción), modificar la configuración en `src/providers/data/`.

---

## Instalación y Configuración

### **Prerrequisitos**
- Node.js 18 o superior
- npm o yarn
- Backend de SIRHA corriendo (ver repositorio PAWPATROL_BACK)

### **Pasos de Instalación**

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd sirha-frontend-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno** (si aplica)
   Crear archivo `.env` con las configuraciones necesarias:
```env
VITE_API_URL=http://localhost:8080/api
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## Principios de Diseño

### **Component-Based Architecture**
La aplicación está construida con componentes modulares y reutilizables siguiendo las mejores prácticas de React.

### **Responsive Design**
Utilizando Tailwind CSS, todas las interfaces son responsivas y se adaptan a diferentes tamaños de pantalla (móvil, tablet, desktop).

### **Type Safety**
TypeScript proporciona seguridad de tipos en toda la aplicación, reduciendo errores en tiempo de ejecución.

### **Performance**
- Lazy loading de componentes
- Code splitting automático con Vite
- Optimización de re-renders con React.memo y useMemo

---

## Integración con Refine

Este proyecto utiliza [Refine](https://refine.dev/), un framework React que proporciona:

- **Data Provider**: Abstracción para comunicación con APIs REST
- **Auth Provider**: Sistema de autenticación integrado
- **Router Provider**: Integración con React Router
- **Hooks preconfigurados**: useTable, useForm, useShow, etc.
- **UI Components**: Componentes headless que funcionan con Tailwind CSS

### **Recursos Útiles de Refine**
- [Documentación oficial](https://refine.dev/docs)
- [Data Provider REST](https://refine.dev/docs/core/providers/data-provider/)
- [Auth Provider](https://refine.dev/docs/core/providers/auth-provider/)
- [Router Provider](https://refine.dev/docs/core/providers/router-provider/)

---

## Convenciones de Código

### **Nomenclatura**
- **Componentes**: PascalCase (ej: `StudentDashboard.tsx`)
- **Hooks**: camelCase con prefijo "use" (ej: `useAuth.ts`)
- **Utilities**: camelCase (ej: `formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `API_BASE_URL`)

### **Estructura de Componentes**
```tsx
// Imports
import React from 'react';

// Types/Interfaces
interface Props {
  // ...
}

// Component
export const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  // Hooks
  // State
  // Effects
  // Handlers
  
  return (
    // JSX
  );
};
```

---

## Testing

(Sección para configurar pruebas en el futuro)

```bash
npm run test        # Ejecutar pruebas
npm run test:watch  # Ejecutar pruebas en modo watch
npm run coverage    # Generar reporte de cobertura
```

---

## Despliegue

### **Build de Producción**

1. Generar build optimizado:
```bash
npm run build
```

2. Los archivos estáticos se generan en `dist/`

3. Desplegar en servidor web (Nginx, Apache, Azure Static Web Apps, Vercel, etc.)

### **Docker** (Configuración futura)

```dockerfile
# Dockerfile ejemplo para el frontend
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Troubleshooting

### **Problemas Comunes**

**Error de conexión con el backend:**
- Verificar que el backend esté corriendo en `http://localhost:8080`
- Revisar la configuración del data provider
- Verificar CORS en el backend

**Errores de compilación TypeScript:**
- Ejecutar `npm install` nuevamente
- Verificar versión de Node.js
- Revisar `tsconfig.json`

**Problemas con Tailwind CSS:**
- Verificar que `tailwind.config.js` esté correctamente configurado
- Asegurar que PostCSS esté instalado
- Revisar importación de estilos en `index.css`

---

## Contribución

Para contribuir al proyecto:

1. Crear una rama desde `develop` siguiendo el template: `feature/Path-Tarea`
2. Realizar los cambios necesarios
3. Hacer commits siguiendo el template: `feature: Tarea - Acción Realizada`
4. Crear Pull Request hacia `develop`
5. Esperar revisión y aprobación del equipo

---

## Licencia

MIT

---

## Contacto y Soporte

Para dudas o soporte técnico, contactar al equipo de desarrollo:
- Juan Pablo Caballero Castellanos
- Oscar Sanchez
- Robinson Steven Nuñez
- David Santiago Palacios
- Diego Chavarro