var products = JSON.parse(localStorage.getItem('Products'));
var tbody = document.querySelector('tbody')

for(let i = 0;i<products.length;i++){
    let product=products[i]
    let tr = document.createElement('tr')
    tr.innerHTML=`<td>${product.nombre}</td>
    <td>${product.codigo}</td>
    <td>${product.categoria}</td>
    <td>$${product.precio}</td>`
    tbody.appendChild(tr)
}
