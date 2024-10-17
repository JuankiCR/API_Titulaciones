const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const modalityRoutes = require('./routes/modalityRoutes');
const sinodalRoutes = require('./routes/sinodalRoutes');
const recordRoutes = require('./routes/recordRoutes');

app.use(express.json());

// Rutas
app.use('/students', studentRoutes);
app.use('/modalities', modalityRoutes);
app.use('/sinodals', sinodalRoutes);
app.use('/titling-records', recordRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
