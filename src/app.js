const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8090;
const app = express();

const { bookRouter, userRouter, libraryRouter, authRouter} = require('./routes');


const { logging } = require('./middleware');
const { initializeDB } = require('./config/dbConfig');
const authentication = require('./middleware/authentication');

// Application Middlewares 
app.use(bodyParser.json());
app.use(logging);

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello World</h1>');
})

app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/library', libraryRouter);
app.use('/login', authRouter);

// ultima instrucción que corre el servidor para escuche las peticiones, en el puerto PORT = 8090, con
// una funcion callback adicional que nos permite imprimir contenido en la consola.
app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Server running in ${PORT}`);
})