// index.js
const express = require('express');
const bodyParser = require('body-parser');
const alumnosRouter = require('./routes/alumnos.js');
const camposRouter = require('./routes/campos.js');
const diasRouter = require('./routes/dias.js');
const horariosRouter = require('./routes/horarios.js');
const reservasRouter = require('./routes/reservas_disponibles.js');
const mis_reservasRouter = require('./routes/mis_reservas.js')
/* const mis_reservasRouter = require('./routes/mis_reservas.js');
const reservas_disponiblesRouter = require('./routes/reservas_disponibles.js'); */
// Importa los demás archivos de rutas para las demás tablas

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
app.use('/alumnos', alumnosRouter);
app.use('/campos', camposRouter);
app.use('/dias', diasRouter); 
app.use('/horarios', horariosRouter);
app.use('/reservas', reservasRouter);
app.use('/mis_reservas' , mis_reservasRouter);
/* app.use('/reservas_disponibles', reservas_disponiblesRouter);
app.use('/mis_reservas', mis_reservasRouter); */
// Usa las rutas para las demás tablas

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
