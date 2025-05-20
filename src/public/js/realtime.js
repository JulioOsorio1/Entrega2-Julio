

const socket = io();

const form = document.getElementById('productForm');
const productList = document.getElementById('productList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value;

    const price = parseFloat(form.price.value);

    socket.emit('createProduct', { title, price });
});


socket.on('products', (products) => {
    productList.innerHTML = '';
    products.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `${p.title} - $${p.price} <button data-id="${p.id}"></button>`;
        productList.appendChild(li);
    });
});

productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.getAttribute('data-id');
        socket.emit('deleteProduct', id);
    }
});
