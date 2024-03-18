var products = JSON.parse(localStorage.getItem('Products'));
var windows = document.querySelectorAll('.window');
var IVA = 0.19;
var HISTORY = {
    box1: [],
    box2: [],
    box3: [],
};
var closeBtns = document.querySelectorAll('.close')
var closeReport = document.querySelector('#closereport')
var report = document.getElementById('report')

function Rand(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function Discount() {
    let random = Rand(0, products.length)
    let discount = Rand(1, 100);
    products[random].precio -= ((products[random].precio * discount) / 100)
}
Discount()

function Client() {
    let box = Rand(0, windows.length - 1);
    let selProd = [];
    let cantProd = Rand(1, products.length);
    for (let i = 0; i < cantProd; i++) {
        let product = products[Rand(0, products.length - 1)];
        selProd.push(product);
    }

    let output = '';
    selProd.forEach(product => {
        output += product.nombre + ', ';
    });
    let prices = 0
    for (let i = 0; i < selProd.length; i++) {
        prices += selProd[i].precio - (selProd[i].precio)
    }
    prices-=(prices*IVA)
    HISTORY[('box' + (box + 1))].push(prices)
    windows[box].innerHTML = output + '<strong> El cliente debe cancelar $' + prices + '</strong>';
}

let clientInt;
var click = false
var btnAuto = document.querySelector('#auto')

btnAuto.onclick = () => {
    if (!click) {
        clientInt = setInterval(() => {
            Client()
        }, 10000);
        click = true;
        btnAuto.style.background = 'blue';
        btnAuto.innerHTML = 'Terminar Dia'
    } else {
        clearInterval(clientInt);
        click = false;
        btnAuto.style.display = 'none';
        CloseBox()
    }
}

function ReduceBox(box) {
    return box.reduce((long, item) => {
        return long += parseInt(item)
    }, 0)

}

function Reporte() {
    let total = ReduceBox(HISTORY.box1) + ReduceBox(HISTORY.box2) + ReduceBox(HISTORY.box3)
    let content = `Caja 1 : $` + ReduceBox(HISTORY.box1) + '<br>Caja 2 : $' + ReduceBox(HISTORY.box2) +
        '<br>Caja 3 : $' + ReduceBox(HISTORY.box3) + '<br>Total de Ventas Hoy es : $' + total
    let message = document.getElementById('message')
    message.innerHTML = content
}

let countBoxOff = 0
function CloseBox() {
    closeBtns.forEach(item => {
        item.style.display = 'block'
        item.onclick = () => {
            countBoxOff += 1
            item.innerHTML = 'Closed'
            console.log(countBoxOff);
            if (countBoxOff == 3) {
                Reporte()
                report.style.display = 'grid'
            }
        }

    })
}


closeReport.onclick = () => {
    location.reload()
}

