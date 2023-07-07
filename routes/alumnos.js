// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Ruta para obtener todos los alumnos
router.get('/', (req, res) => {
  connection.query('SELECT * FROM alumnos', (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(results);
  });
});

// Ruta para insertar alumnos 
router.post('/', (req, res) => {
  const alumno = req.body; // Obtener el objeto alumno desde el body de la solicitud

  connection.query('INSERT INTO alumnos SET ?', alumno, (error, results) => {
    if (error) {
      console.error('Error al insertar el alumno: ' + error.stack);
      res.status(500).json({ error: 'Error al insertar el alumno' });
      return;
    }
    res.json(results);
  });
});

// Ruta para eliminar alumnos 

router.delete('/:id', (req, res) => {
  const alumnoId = req.params.id; // Obtener el ID del alumno desde los parámetros de la URL

  connection.query('DELETE FROM alumnos WHERE id = ?', alumnoId, (error, results) => {
    if (error) {
      console.error('Error al eliminar el alumno: ' + error.stack);
      res.status(500).json({ error: 'Error al eliminar el alumno' });
      return;
    }
    res.json(results);
  });
});




// Ruta para obtener un alumno por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM alumnos WHERE id_alumnos = ?', [id], (error, results) => {
    if (error) {
      console.error('Error al obtener el usuario: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener el usuario' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// ... Agrega más rutas para los demás endpoints y tablas ...

module.exports = router;
