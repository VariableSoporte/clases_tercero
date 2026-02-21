# 📦 Backend de Gestión de Archivos con AWS S3

Este proyecto es un **backend construido con Node.js y Express** que permite gestionar archivos PDF en la nube usando **AWS S3**. También incluye CRUD de usuarios y seguros conectados a una base de datos MySQL.

---

## 🚀 Funcionalidades

- Subir archivos PDF a AWS S3
- Listar archivos almacenados en S3
- Descargar archivos mediante URL firmada
- Eliminar archivos desde S3
- CRUD básico de usuarios y seguros con MySQL

---

## 🧰 Tecnologías

- Node.js
- Express
- MySQL
- AWS S3 (`@aws-sdk/client-s3`)
- Multer (para manejo de uploads)
- dotenv (variables de entorno)
- cors

---

## ⚙️ Instalación y Ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
```

2. Instalar dependencias

```bash
npm install
```
3. Crear archivo .env

```bash
AWS_ACCESS_KEY_ID=TU_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=TU_SECRET_KEY
AWS_REGION=TU_REGION
S3_BUCKET=TU_BUCKET
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=nombre_db
PORT=3030
```
4. Ejecutar el servidor

```bash
npm start
```

## 📡 Endpoints Disponibles
### Archivos (S3)
| Método | Ruta                        | Descripción               |
| ------ | --------------------------- | ------------------------- |
| POST   | `/archivo/`                 | Subir un archivo PDF a S3 |
| GET    | `/archivo/lista`            | Listar archivos en S3     |
| GET    | `/archivo/descarga/:nombre` | Obtener URL de descarga   |
| DELETE | `/archivo/eliminar/:nombre` | Eliminar archivo de S3    |


### Usuarios (MySQL)
| Método | Ruta                | Descripción               |
| ------ | ------------------- | ------------------------- |
| GET    | `/usuario/`         | Listar todos los usuarios |
| POST   | `/usuario/agregar`  | Agregar un usuario        |
| DELETE | `/usuario/eliminar` | Eliminar un usuario       |

### Seguros y Bodega (MySQL)
| Método | Ruta       | Descripción                 |
| ------ | ---------- | --------------------------- |
| GET    | `/seguro/` | Listar todos los seguros    |
| GET    | `/bodega/` | Listar inventario de bodega |
