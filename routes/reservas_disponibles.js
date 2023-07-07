// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Ruta para obtener todos las reservas disponibles
router.get('/', (req, res) => {
  connection.query('SELECT r.id_reservas_dispo, d.nombre AS dia, c.nombre AS campo, h.h_inicio AS inicio, h.h_fin AS fin, r2.id_mis_reservas, r2.id_alumnos, a.nombre, r2.fecha_solicitud, r2.fecha_reservada FROM reservas_disponibles r LEFT JOIN mis_reservas r2 ON r.id_reservas_dispo = r2.id_reservas_dispo INNER JOIN dias d ON r.dia = d.id_dias INNER JOIN campos c ON r.campo = c.id_campos INNER JOIN horarios h ON r.horario = h.id_horarios LEFT JOIN alumnos a ON r2.id_alumnos = a.id_alumnos order by r.id_reservas_dispo asc;', (error, results) => {
    if (error) {
      console.error('Error al obtener las reservas disponibles: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener las reservas disponibles ' });
      return;
    }
    res.json(results);
  });
});

// Ruta para insertar horarios
router.post('/', (req, res) => {
    const horario = req.body; // Obtener el objeto campo desde el body de la solicitud
  
    connection.query('INSERT INTO horarios SET ?', horario, (error, results) => {
      if (error) {
        console.error('Error al insertar el horario: ' + error.stack);
        res.status(500).json({ error: 'Error al insertar el horario' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para eliminar los horarios

  router.delete('/:id', (req, res) => {
    const horarioId = req.params.id; // Obtener el ID del campo desde los parámetros de la URL
  
    connection.query('DELETE FROM horarios WHERE id_horarios = ?', horarioId, (error, results) => {
      if (error) {
        console.error('Error al eliminar el horario: ' + error.stack);
        res.status(500).json({ error: 'Error al eliminar el horario' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para obtener un horario por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM horarios WHERE id_horarios = ?', [id], (error, results) => {
      if (error) {
        console.error('Error al obtener el horario: ' + error.stack);
        res.status(500).json({ error: 'Error al obtener el horario' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Horario no encontrado' });
        return;
      }
      res.json(results[0]);
    });
  });



module.exports = router;
