const server = require('../src/server')
require('dotenv').config();

const { PORT } = process.env.PORT || 3000.

conexion()
server.listen(PORT, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})