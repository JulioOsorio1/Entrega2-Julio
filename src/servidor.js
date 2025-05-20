

const app = require('./app.js');
const http = require('http');
const { Server } = require('socket.io');
const ProductManager = require('./utils/productsManager'); 
const PORT = 3000;

const server = http.createServer(app);
const io = new Server(server);

app.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.emit('products', productManager.getProducts());

    socket.on('createProduct', (product) => {
        productManager.addProduct(product);
        io.emit('products', productManager.getProducts());
    });

    socket.on('deleteProduct', (id) => {
        productManager.deleteProduct(id);
        io.emit('products', productManager.getProducts());
    });
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
