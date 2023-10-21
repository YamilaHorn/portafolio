const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('app')); 

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
