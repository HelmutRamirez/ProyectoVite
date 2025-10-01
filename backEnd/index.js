const express = require("express"); //usamos codigo expres para recibir los datos del fron con vanilla
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// aca resivimos los datos que se enviaron desde el fomulario 
app.post("/registro", (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  console.log("Nuevo usuario:", nombre, correo);
  res.json({ mensaje: "Usuario registrado correctamente" });
});

// Servidor en puerto 3001
app.listen(3001, () => {
  console.log("puerto de api http://localhost:3001");
});
