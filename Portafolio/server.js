const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('app')); // Reemplaza 'public' con la ruta a tu carpeta de archivos estáticos

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
