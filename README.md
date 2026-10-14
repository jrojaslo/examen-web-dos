# 📋 Enunciado de la Actividad: Migración a React

## 🎯 Objetivo General

Tomar como base la aplicación actual desarrollada en Vanilla JavaScript, HTML5 y CSS (Librería Archivo) y realizar una **migración integral hacia React**, implementando una arquitectura moderna basada en componentes reutilizables, enrutamiento declarativo y gestión de estado local.

---

## ⚙️ Requerimientos Técnicos y de Arquitectura

El desarrollo de la actividad debe cumplir estrictamente con los siguientes lineamientos:

### 1. Enrutamiento (React Router DOM 6.4+)
- Se debe emplear exclusivamente la versión **React Router DOM 6.4 o superior**.
- La configuración del enrutador debe implementarse utilizando la API moderna basada en objetos.
- Debe existir una **ruta principal (Layout)** que comparta los elementos comunes de la interfaz y utilice **`<Outlet />`** para proyectar dinámicamente las páginas hijas.
- Deben existir las tres rutas correspondientes a las vistas de la aplicación:
  - Ruta de Inicio (`/`)
  - Ruta de Catálogo (`/catalogo`)
  - Ruta de Contacto (`/contacto`)

### 2. Componetización y Paso de Datos
- **Modularidad:** Identificar y extraer las piezas repetitivas del diseño en componentes reutilizables e independientes.
- **Paso de Datos por Props:** Toda la información que alimente a los componentes debe transmitirse mediante `props`.
- **Renderizado Dinámico:** La presentación de listados y colecciones (como las tarjetas de libros y las métricas) debe realizarse mediante iteraciones con `.map()` y filtrado correspondiente.

### 3. Captura y Manejo del Formulario (Contacto)
- La captura de datos de cada campo del formulario de contacto debe gestionarse **únicamente utilizando `useState` campo por campo** (un estado independiente por cada input/select/textarea).
- No se permite el uso del evento `submit` ni librerías de formularios de terceros.
- La acción de envío/limpieza debe desencadenarse a través del evento **`onClick`** del botón.
- No se deben incluir simulaciones falsas de envío, alertas ni temporizadores.

### 4. Mock de Datos
- El arreglo de datos original debe residir en un archivo independiente dentro del proyecto, desde el cual se exportará e importará en las vistas o componentes que lo requieran para su lectura.

### 5. Restricciones Estrictas y Alcance Máximo
- **Sanción por temas no contemplados:** El uso de temas o tecnologías no contemplados en esta rúbrica será **estrictamente sancionado**.
- **Tecnologías no permitidas:** Queda terminantemente prohibido el uso de:
  - Hooks avanzados como `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`, etc.
  - Consumo de APIs externas (`fetch`, `axios`).
  - Archivos `.json` externos (el mock de datos debe ser un arreglo nativo en JavaScript exportado e importado).
  - Librerías de validación o esquemas (`Zod`, `Yup`, etc.).
  - Gestores de estado global (`Redux`, `Zustand`, `Context API`, etc.).
- **Alcance Máximo Permitido:** Únicamente se permite el uso de lógica y tecnología que **no supere el alcance máximo permitido, el cual llega exclusivamente hasta un único hook llamado `useState`**.

---

## 📁 Arquitectura y Encarpetado Obligatorio

El proyecto en React debe organizar su código dentro de `src/` siguiendo estrictamente esta estructura de carpetas:

```text
src/
├── components/          # Componentes reutilizables comunes (Navbar, Footer, Layout, Cards, etc.)
├── pages/               # Componentes que representan las vistas principales (Inicio, Catálogo, Contacto)
├── routes/              # Definición y configuración del enrutador (createBrowserRouter)
├── data/                # Archivo independiente con el arreglo de datos (Mock de datos)
├── styles/              # Hojas de estilo
├── App.jsx              # Componente principal que provee el RouterProvider
└── main.jsx             # Punto de entrada de la aplicación React
```

---

## 📬 Modalidad de Entrega y Control de Versiones (Git)

1. **Nomenclatura Obligatoria de la Solución (Nombre del Proyecto):**
   - El proyecto que van a crear en React debe nombrarse obligatoriamente con el **nombre completo del estudiante**: todos sus nombres y todos sus apellidos, y este proyecto debe estar dentro de esta carpeta
   - Debe escribirse estrictamente en convención **kebab-case** y **todo en minúscula** (palabras separadas por guiones medios).
   - *Ejemplo de formato:* `primer-nombre-segundo-nombre-primer-apellido-segundo-apellido`
   - *Ejemplos válidos:* `juan-carlos-perez-gomez`, `maria-fernanda-restrepo-zapata`.

2. **Entrega mediante Fork:**
   - La entrega del proyecto debe realizarse **únicamente** a través de un **Fork** de este repositorio.

3. **Rama de Trabajo:**
   - Todo el avance y la versión final deben residir en la rama **`develop`**.

4. **Historial de Commits:**
   - Se exige un **mínimo de 10 commits característicos y progresivos**.
   - Cada commit debe reflejar un hito real del avance (por ejemplo: inicialización del proyecto, estructuración de carpetas, creación de componentes específicos, configuración de rutas, implementación de estados, migración de estilos, etc.).
   - Las entregas con pocos commits o monoliticos tendran una sanción respectiva.

---

## 📊 Rúbrica de Evaluación

La calificación final se evaluará sobre una escala de **100% (o 5.0 puntos)**, donde cada uno de los 4 criterios tiene **el mismo peso ponderado (25% cada uno / 1.25 puntos)**:

| Criterio de Evaluación | Ponderación | Excelente (100% — 1.25 pts) | Aceptable (60% — 0.75 pts) | Insuficiente (0% — 0.0 pts) |
| :--- | :---: | :--- | :--- | :--- |
| **1. Proyecto finalizado** | **25%** | Las 3 vistas funcionan al 100% sin errores en consola, navegación reactiva con React Router DOM 6.4+, filtros de catálogo operativos y formulario controlado. | La aplicación funciona parcialmente, presenta errores menores en consola o faltan filtros/enlaces. | El proyecto no compila, faltan vistas principales o se encuentra inconcluso. |
| **2. Encarpetado y Nomenclatura** | **25%** | Respeta rigurosamente la estructura modular exigida (`components/`, `pages/`, `routes/`, `data/`, `styles/`) y nombra la solución con el nombre y apellidos completos en formato `kebab-case` y minúsculas. | Existe organización pero faltan carpetas requeridas, se mezclan archivos o el proyecto no cumple estrictamente la convención de nombres. | Estructura desordenada, sin separación de carpetas ni cumplimiento de nomenclatura. |
| **3. Componetización** | **25%** | Correcta modularización con Layout y `<Outlet />`, componentes reutilizables bien definidos, paso estricto de `props`, uso de `.map()` y `useState` campo por campo. | Modularización parcial, props incompletos o manejo inadecuado de estados en el formulario. | No se modulariza, código duplicado, no se utiliza `<Outlet />` o no se pasan props. |
| **4. Seguimiento y control de versiones** | **25%** | Entregado **exclusivamente por Fork** en la rama **`develop`**, con **mínimo 10 commits característicos**, descriptivos y secuenciales acorde al avance del proyecto. | Entregado en la rama correcta pero con menos de 10 commits, o mensajes de commit genéricos y poco descriptivos. | No se entregó por Fork a `develop`, o se subió todo el proyecto en un único commit final. |

> ⚠️ **PENALIZACIÓN DIRECTA:** El uso de herramientas o conceptos no contemplados en esta rúbrica y que superen el alcance máximo establecido (tales como `useEffect`, `useContext`, APIs, archivos JSON, Zod, etc.) **será penalizado con una sanción directa sobre la calificación final**. Toda la lógica reactiva debe resolverse exclusivamente con el hook `useState`.

