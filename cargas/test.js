import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  stages: [
    { duration: '10s', target: 100 },     // sube a 100 usuarios
    { duration: '10s', target: 1000 },    // sube a 1000
    { duration: '10s', target: 5000 },    // sube a 5000
    { duration: '10s', target: 20000 },   // llega a 20000
    { duration: '10s', target: 50000 },       // baja a 0
  ],
};

// --- Escenario de prueba ---
export default function () {
  const url = 'http://localhost:5173/api/registro';
  const payload = JSON.stringify({
    nombre: 'UsuarioPrueba',
    correo: 'prueba@example.com',
    contraseña: '123456',
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post(url, payload, params);

  // Verificamos que la respuesta sea correcta
  check(res, {
    'status es 200': (r) => r.status === 200,
    'mensaje recibido': (r) => r.body.includes('Usuario registrado correctamente'),
  });

  sleep(1); // espera 1 segundo entre peticiones por usuario virtual
}
