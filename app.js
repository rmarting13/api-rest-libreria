const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8090;
const app = express();
const { bookRouter } = require('./src/routes');
const { logging } = require('./src/middleware');

// Application Middlewares 
app.use(bodyParser.json());
app.use(logging);

// con esta instrucción indicamos que utilice un middleware, el cual es definido dentro de la misma función
app.use((req, res, next) => {
    console.log(`Call made to resource ${req.url} with method ${req.method}`);
    next();
})

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello World</h1>');
})

app.use('/book', bookRouter);
// ultima instrucción que corre el servidor para escuche las peticiones, en el puerto PORT = 8090, con
// una funcion callback adicional que nos permite imprimir contenido en la consola.
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})