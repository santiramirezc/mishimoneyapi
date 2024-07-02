const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mishimoneyRoutes = require("./routes/mishimoney");

// Cargar variables de entorno
dotenv.config();

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Hello Mishi Money World! <br> 
           <a href='/mishimoney'>Mishi Money</a>`);
});

// Rutas
app.get("/mishimoney", (req, res) => {
  res.json({ message: "Bienvenido a la ruta de Mishi Money!" });
});

// Usar las rutas de mishimoney
app.use("/mishimoney", mishimoneyRoutes);

// TODO: Importar y usar otras rutas aquí
// Ejemplo: app.use('/api/users', require('./src/routes/userRoutes'));

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

module.exports = app;
