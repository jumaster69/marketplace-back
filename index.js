const express = require('express');
require('dotenv').config();

/* Importar rutas y conexión a la DB*/
const connectDB = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* localhost://3006/api/auth/signup */
app.use('/api', routes);


/* Config del servidor */

  app.set("port", process.env.PORT_CONNECTION || 3005);
  app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
/* Conexión a la base de datos */
connectDB();
module.exports = app