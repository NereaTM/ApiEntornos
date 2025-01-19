# Gestión de Empleados y Departamentos

Este proyecto es una aplicación web para la gestión de empleados y departamentos. Permite la creación, modificación y eliminación de departamentos y empleados, así como la asignación de empleados a departamentos. Además, tiene un sistema de autenticación para usuarios.

## Tecnologías Utilizadas

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Fetch API para interactuar con el backend.
  - Bootstrap (opcional) para el diseño de la interfaz.

- **Backend** (asumido):
  - Node.js con Express para gestionar las rutas.
  - Base de datos para almacenar empleados, departamentos y usuarios.

## Estructura de Archivos

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


## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/NereaTM/ApiEntornos.git
    ```

2. **Instalar dependencias**:
    Si estás trabajando en el frontend, no hay dependencias, pero si tienes un servidor backend:
    ```bash
    cd ApiEntornos
    npm install express sqlite3
    ```

3. **Ejecutar la aplicación**:
    Para iniciar el servidor backend:
    ```bash
    node app.js
    ```

4. **Acceder a la aplicación**:
    Abre el navegador y visita `http://localhost:3000`.

## Uso

1. **Login**:
   - Accede al sistema con un usuario y contraseña válidos. Si no tienes cuenta, crea un nuevo usuario.

2. **Gestión de Departamentos**:
   - Desde la página de **Departamentos**, puedes ver, agregar, modificar o eliminar departamentos.

3. **Gestión de Empleados**:
   - Desde la página de **Empleados**, puedes ver, agregar, modificar o eliminar empleados. Puedes asignar empleados a un departamento específico.

4. **Gestión de Usuarios**:
   - Desde la página de **Usuarios**, puedes crear nuevos usuarios para gestionar el sistema.

## Características

- **Gestión de Departamentos**
  - Crear, modificar y eliminar departamentos.
  - Asignar empleados a departamentos.  
    ![Departamentos](/imagenes%20web/departamentos.png)
    ![ModificarDepartamentos](/imagenes%20web/modificar%20departementos.png)
    
- **Gestión de Empleados**
  - Crear, modificar y eliminar empleados.
  - Visualizar empleados asignados a departamentos.  
    ![Departamentos](/imagenes%20web/empleados.png)
    ![ModificarDepartamentos](/imagenes%20web/modificar%20empleados.png)

- **Gestión de Usuarios**
  - Creación de usuarios con acceso al sistema.  
    ![Login](/imagenes%20web/usuarios.png)

- **Autenticación**
  - Login de usuarios con autenticación mediante nombre de usuario y contraseña.  
    ![Usuarios](/imagenes%20web/login.png)