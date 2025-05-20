
const socket = app(); 

socket.on('products', (products) => {
    console.log(products);
});
function createProduct(product) {
    socket.emit('createProduct', product);
}

function deleteProduct(id) {
    socket.emit('deleteProduct', id);
}
