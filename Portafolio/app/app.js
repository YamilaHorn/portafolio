const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/enviar', (req, res) => {
    const nombre = req.body.nombre;
    const correoUsuario = req.body.correo;
    const mensaje = req.body.mensaje;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: correoUsuario,
        to: 'hornmaca@gmail.com',
        subject: 'Mensaje desde el formulario de contacto',
        text: `Nombre: ${nombre}\nCorreo: ${correoUsuario}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Hubo un error al enviar el mensaje.');
        } else {
            console.log('Mensaje enviado: ' + info.response);
            res.send('Mensaje enviado con éxito.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
