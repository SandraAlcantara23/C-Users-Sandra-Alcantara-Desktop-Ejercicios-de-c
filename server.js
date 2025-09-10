
const express = require('express');
const cors = require('cors');
const app = express();
const ventasRoutes = require('./routes/ventas');

app.use(cors());
app.use(express.json());
app.use('/api/ventas', ventasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
