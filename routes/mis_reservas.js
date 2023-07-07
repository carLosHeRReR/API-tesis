// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Ruta para obtener todos las reservas disponibles
router.get('/', (req, res) => {
  connection.query('CALL ObtenerDetalleReserva(1);', (error, results) => {
    if (error) {
      console.error('Error al obtener mis reservas: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener mis reservas' });
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
