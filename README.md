# Prueba Técnica Backend (3 Capas, Multitenant)

Este proyecto es un mini-backend usando Node.js, Express y MongoDB, siguiendo el modelo de 3 capas y arquitectura multitenant. Permite gestionar pedidos y productos para múltiples empresas (tenants), como se muestra en la vista de referencia.

## Repositorio
[https://github.com/Andress232a/pruebatecnica](https://github.com/Andress232a/pruebatecnica)

## Tecnologías usadas
- Node.js
- Express
- MongoDB + Mongoose

## Estructura del proyecto
- `src/` Código fuente  
  - `models/` Modelos de datos (Mongoose)  
  - `controllers/` Controladores (capa de presentación)  
  - `services/` Lógica de negocio  
  - `routes/` Definición de rutas  
  - `middlewares/` (para lógica adicional, si se requiere)  
  - `app.js` Configuración principal de Express
- `config/` Configuración de base de datos
- `.gitignore` Archivos y carpetas ignorados
- `README.md` Este archivo

## Instalación y ejecución

1. **Clona el repositorio:**  
   ```bash
   git clone https://github.com/Andress232a/pruebatecnica.git
   cd pruebatecnica
   ```
2. **Instala las dependencias:**  
   ```bash
   npm install
   ```
3. **Configura el archivo `.env`:**  
   Crea un archivo `.env` en la raíz con el siguiente contenido:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pruebatecnica
   PORT=3000
   ```
4. **Inicia el servidor:**  
   ```bash
   npm run dev
   ```
   El backend estará disponible en `http://localhost:3000/`

## Uso de la API

### Endpoints principales

#### Productos
- **Crear producto**
  - `POST /api/productos`
  - Body (JSON):
    ```json
    {
      "nombre": "Café Americano",
      "precio": 25,
      "tenantId": "<ID_DEL_TENANT>"
    }
    ```
- **Listar productos por tenant**
  - `GET /api/productos?tenantId=<ID_DEL_TENANT>`

#### Pedidos
- **Crear pedido**
  - `POST /api/pedidos`
  - Body (JSON):
    ```json
    {
      "productos": [
        {
          "producto": "<ID_DEL_PRODUCTO>",
          "cantidad": 2,
          "precio": 25
        }
      ],
      "total": 50,
      "cliente": "Juan",
      "tenantId": "<ID_DEL_TENANT>"
    }
    ```
- **Listar pedidos en curso**
  - `GET /api/pedidos/en-curso?tenantId=<ID_DEL_TENANT>`
- **Listar últimos pedidos cerrados**
  - `GET /api/pedidos/cerrados?tenantId=<ID_DEL_TENANT>`
- **Cerrar pedido**
  - `PUT /api/pedidos/:id/cerrar`
  - Body (JSON):
    ```json
    {
      "tenantId": "<ID_DEL_TENANT>"
    }
    ```

### Tenants
- Para crear un tenant, puedes insertar manualmente en MongoDB Compass:
  ```json
  {
    "name": "Mi Empresa"
  }
  ```
  Luego usa el campo `_id` generado como `tenantId` en los demás endpoints.

## Autor
Andres suarez soto
