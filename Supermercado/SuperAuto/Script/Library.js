var products = JSON.parse(localStorage.getItem('Products'));
var main = document.querySelector('main')

for(let i = 0;i<products.length;i++){
    let product=products[i]
    let div = document.createElement('div')
    div.classList.add('product')
    div.innerHTML=`<p>${product.nombre}</p>
    <p> Categoria : ${product.categoria}</p>
    <p> Codigo : ${product.codigo}</p>
    <p>$${product.precio}</p>`
    main.appendChild(div)
}
