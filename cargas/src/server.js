import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// --- API: aquí llega el formulario ---
app.post("/api/registro", (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  console.log("Nuevo usuario:", nombre, correo);
  res.json({ mensaje: "Usuario registrado correctamente" });
});

// --- Servir los archivos del frontend ---
app.use(express.static(path.join(__dirname, "../public")));

// --- Capturar cualquier otra ruta (Express 5 compatible) ---
app.all(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
