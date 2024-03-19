var products = JSON.parse(localStorage.getItem('Products'));
var IVA = 0.19;
var HISTORY = {
    box1: [],
    box2: [],
    box3: [],
};
let selectedProducts = [];
let messageContainer = document.querySelector('.container-message');
let btnMessage = document.querySelector('.container-message button');
let message = document.getElementById('message');
let pago = document.getElementById('pago');
let boxes = document.getElementById('boxes');

//inputs
let cant = document.getElementById('cant');
let selProd = document.getElementById('product');
let box = document.getElementById('box');
let submit = document.getElementById('submit');

//listos
function Discount() {
    let random = Rand(0, products.length - 1);
    let discount = Rand(1, 100);
    products[random].precio -= ((products[random].precio * discount) / 100);
    products[random]['descuento'] = ' - ' + discount + '%'
}
Discount();

function AddProductForm() {
    for (let i = 0; i < products.length; i++) {
        let = descuento = products[i].descuento || ''
        let option = `<option value="${products[i].nombre}">${products[i].nombre}  $${products[i].precio}${descuento}</option>`;
        selProd.innerHTML += option;
    }
}
AddProductForm();

function Rand(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

submit.onclick = () => {
    if (selProd.value === '' || cant.value === '' || box.value === '') {
        return;
    } else {
        AddProducts();
    }
};

pago.onclick = () => {
    if (selectedProducts.length !== 0) {
        Pago();
    }
};

btnMessage.onclick = () => {
    messageContainer.style.display = 'none'
};

function AddProducts() {
    let product = products.find((item) => item.nombre === selProd.value);
    for (let i = 0; i < parseInt(cant.value); i++) {
        selectedProducts.push(product);
    }
    let priceProd = (parseInt(cant.value) * product.precio);
    pago.style.display = 'inline-block'
}

function Pago() {
    let report = `
    <table>
        <thead>
            <tr>
                <th>
                    Nombre
                </th>
                <th>
                    Codigo
                </th>
                <th>
                    Categoria
                </th>
                <th>
                    Precio
                </th>
            </tr>
        </thead>
        <tbody>`;
    selectedProducts.forEach(item => {
        report += `<tr>
        <td>${item.nombre} </td>
        <td>${item.codigo}</td>
        <td>${item.categoria}</td>
        <td>${item.precio}</td>
        </tr>`;
    });
    let total = 0
    for (let i = 0; i < selectedProducts.length; i++) {
        total += selectedProducts[i].precio;
    }
    HISTORY[box.value].push(total + (total * IVA));
    report += `</tbody></table>`;
    report += `<p>El cliente debe cancelar : $${total + (total * IVA)} </p>`
    message.innerHTML = report;
    messageContainer.style.display = 'flex'
    pago.style.display = 'none'
    selectedProducts = []
}

boxes.onclick = () => {
    Reporte()
}

function ReduceBox(box) {
    return box.reduce((long, item) => {
        return long += parseInt(item)
    }, 0)
}

//Desarrollo
function Reporte() {
    let total = ReduceBox(HISTORY.box1) + ReduceBox(HISTORY.box2) + ReduceBox(HISTORY.box3)
    let content = `Caja 1 : $` + ReduceBox(HISTORY.box1) + '<br>Caja 2 : $' + ReduceBox(HISTORY.box2) +
        '<br>Caja 3 : $' + ReduceBox(HISTORY.box3) + '<br>Total de Ventas Hoy es : $' + total
    message.innerHTML = content
    messageContainer.style.display = 'flex'
    btnMessage.onclick = () => {
        location.reload()
    }
}