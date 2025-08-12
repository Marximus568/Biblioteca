*TITTLE*
PROJECT: 

*DESCRIPTION*
This is project, it was makes, its purpose can support to the programmers for upload information of the format csv to database.

*Tecnologies*
FRONTEND:
 -CSS
-TAILWIND
-HTML
-JAVASCRIPT
-VITE

BACKEND:-MYSQL

*PROGRAM STRUCTRE*
📦 Proyecto
│
├── 📂 doc
│   └── 📄 codigo.sql                    # Script SQL con estructura y datos de la base de datos
│
├── 📂 node_modules                      # Dependencias instaladas con npm (autogenerado)
│
├── 📂 src                                # Código fuente principal
│   │
│   ├── 📂 css
│   │   └── 🎨 style.css                  # Estilos generales de la aplicación
│   │
│   ├── 📂 js                             # Scripts principales del cliente
│   │   ├── 📄 admin.js                   # Lógica para vista de administrador
│   │   ├── 📄 login.js                   # Lógica para inicio de sesión
│   │   └── 📄 main.js                    # Archivo JS principal
│   │
│   ├── 📂 router
│   │   └── 📄 router.js                  # Configuración de rutas
│   │
│   ├── 📂 services
│   │   │
│   │   ├── 📂 data                       # Archivos de datos en formato CSV
│   │   │   ├── 📄 Biblioteca_db.csv
│   │   │   ├── 📄 Biblioteca_db2.csv
│   │   │   ├── 📄 Biblioteca_db3.csv
│   │   │   ├── 📄 Biblioteca_db4.csv
│   │   │   └── 📄 Biblioteca_db5.csv
│   │   │
│   │   ├── 📂 seeders                    # Scripts para carga inicial de datos en la base
│   │   │   ├── 📄 load_autor.js
│   │   │   ├── 📄 load_books.js
│   │   │   ├── 📄 load_loans.js
│   │   │   ├── 📄 load_status.js
│   │   │   ├── 📄 load_user.js
│   │   │   └── 📄 run_seeders.js
│   │   │
│   │   ├── 📄 conexion_db.js             # Conexión a la base de datos
│   │   └── 📄 index.js                    # Punto de entrada de los servicios
│   │
│   └── 📂 views                          # Controladores para vistas
│       ├── 📄 adminviews.js
│       ├── 📄 customerviews.js
│       ├── 📄 home.js
│       ├── 📄 login.js
│       ├── 📄 notFound.js
│       └── 📄 register.js
│
├── 📄 .gitignore                         # Archivos y carpetas ignorados por Git
├── 📄 index.html                         # Página principal HTML
├── 📄 package-lock.json                  # Bloqueo de versiones de dependencias
├── 📄 package.json                       # Configuración del proyecto y dependencias
├── 📄 readme.md                          # Documentación del proyecto
└── 📄 vite.config.ts                     # Configuración de Vite

*What's purpose?*


*How to install it*
1-step:
Clone this repository to your local machine:

*Configuration of environment variables*
-PORT: 3000
-DB_USER:
-DB_PASSWORD:
