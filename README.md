# AA_ENTORNOSDESARROLLO_NEREATOMAS API

Este proyecto es una API construida con Node.js y Express para gestionar empleados y departamentos. 
Utiliza SQLite como base de datos y un frontend en HTML, JavaScript y Bootstrap para interactuar con la API.

## Estructura del Proyecto

```bash
AA_ENTORNOSDESARROLLO_NEREATOMAS/
├── app.js
├── bd/
│   ├── bd.js
├── rutas/
│   ├── empleados.js
│   ├── departamentos.js
│   ├── login.js
│   ├── rutas.js
├── web/
│   ├── index.html
│   ├── modificar_empleado.html
│   ├── modificar_departamento.html
│   ├── empleado.html
│   ├── departamento.html
│   ├── script_empleados.js
│   ├── script_departamentos.js
│   ├── script_login.js
├── AABaseDatos_Entornos.db
├── package.json
└── package-lock.json
```
## Descripción
Este proyecto tiene como objetivo proporcionar a una API, un CRUD para gestionar dos entidades principales:

1. **Empleados**: Podemos crear, leer, actualizar y eliminar empleados.
2. **Departamentos**: Podemos crear, leer, actualizar y eliminar departamentos.

## Tecnologías utilizadas
-   **Node.js**: Versión de JavaScript.
-   **Express.js**: Libreria para crear la API.
-   **SQLite**: Base de datos.
-   **Bootstrap**: CSS.
-   **JavaScript**: Lógica para interactuar con la API desde el frontend.

## Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local: git clone <url-del-repositorio>
2. Accede al directorio del proyecto: cd AA_ENTORNOSDESARROLLO_NEREATOMAS
3. Instala las dependencias: npm install
4. Inicia el servidor: node app.js

## Rutas de la API
**/empleados**
- GET: Obtener los empleados.
- POST: Crear un nuevo empleado.
- PUT: Modificar un empleado existente.
- DELETE: Eliminar un empleado.

**/departamentos**
- GET: Obtener los departamentos.
- POST: Crear un nuevo departamento.
- PUT: Modificar un departamento existente.
- DELETE: Eliminar un departamento.

**/login**
- POST: Autenticación de usuarios (Login).

**/WEB**
1. index.html: Página principal que muestra una lista de empleados y departamentos.
2. empleado.html: Página para mostrar detalles de un empleado.
3. departamento.html: Página para mostrar detalles de un departamento.
4. modificar_empleado.html: Página para modificar los detalles de un empleado.
5. modificar_departamento.html: Página para modificar los detalles de un departamento.

Este es un archivo README básico que explica la estructura, instalación y uso de la API. Puedes guardarlo como `README.md` en el directorio raíz de tu proyecto.
