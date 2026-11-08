# Aplicación Web Full-Stack (Node.js / MongoDB Atlas / Render)

Este proyecto corresponde a una aplicación web full-stack desarrollada con **Node.js, Express, MongoDB Atlas y JavaScript Vanilla**, implementando un modelo de arquitectura modular y un sistema seguro de autenticación mediante tokens JWT. El sistema se encuentra completamente optimizado y desplegado en la plataforma de servicios en la nube **Render**.

---

## 📋 Características Principales

* **Arquitectura Desacoplada y Modular:** Separación clara entre el servidor backend, las rutas de la API, los middlewares de seguridad y los archivos estáticos del frontend.
* **Autenticación Segura (JWT):** Control de acceso mediante JSON Web Tokens, contraseñas cifradas con `bcrypt` y protección de rutas en el servidor y cliente.
* **Operaciones CRUD Completas:** Creación, lectura, actualización y eliminación de registros de manera asíncrona mediante peticiones HTTP `fetch`.
* **Diseño UI/UX Moderno:** Interfaz estilizada con variables CSS, animaciones fluidas (`@keyframes`) y diseño responsivo adaptado para dispositivos móviles y de escritorio.
* **Despliegue en la Nube (Render):** Configurado con puertos dinámicos y variables de entorno seguras para garantizar estabilidad operativa 24/7.

---

## 🛠️ Pila Tecnológica (Tech Stack)

* **Backend:** Node.js, Express.js.
* **Base de Datos:** MongoDB Atlas (NoSQL), Mongoose ODM.
* **Autenticación:** `jsonwebtoken`, `bcryptjs`.
* **Frontend:** HTML5, CSS3, JavaScript Vanilla (DOM API, `fetch`).
* **Control de Versiones y Despliegue:** Git, GitHub, Render PaaS.

---

## 📂 Estructura del Proyecto

```text
Proyecto_Fullstack/
├── public/                 # Archivos estáticos del Frontend
│   ├── login.html          # Vista de inicio de sesión
│   ├── register.html       # Vista de registro de usuarios
│   ├── dashboard.html      # Panel principal protegido (CRUD)
│   └── style.css           # Estilos globales y diseño UI/UX
├── routes/                 # Endpoints de la API
│   ├── authRoutes.js       # Rutas de autenticación y registro
│   └── itemRoutes.js       # Rutas CRUD protegidas
├── middleware/
│   └── auth.js             # Validador de tokens JWT
├── .env                    # Variables de entorno locales (Privado)
├── .gitignore              # Archivos excluidos del control de versiones
├── package.json            # Metadatos y dependencias del proyecto
└── server.js               # Punto de entrada principal del servidor
```

---

## ⚙️ Configuración y Ejecución Local

Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd Proyecto_Fullstack
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:
   ```env
   PORT=3000
   MONGODB_URI=tu_cadena_de_conexion_de_mongodb_atlas
   JWT_SECRET=tu_llave_secreta_para_jwt
   ```

4. **Ejecutar el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```
   *Abre tu navegador e ingresa a `http://localhost:3000`.*

---

## ☁️ Despliegue en Producción (Render)

La aplicación está configurada para desplegarse automáticamente en Render vinculando el repositorio de GitHub:
* **Build Command:** `npm install`
* **Start Command:** `node server.js`
* **Environment Variables:** Configurar `MONGODB_URI` y `JWT_SECRET` directamente en el panel de control de Render.

---

## 🌐 Enlace del Proyecto en Vivo
Puedes acceder a la versión desplegada en producción a través del siguiente enlace:
🔗 [https://proyecto-fullstack-app.onrender.com](https://proyecto-fullstack-app.onrender.com)
