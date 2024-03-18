const Productos = [
        { nombre: "jabon", precio:1000, codigo: "1", categoria: "Aseo" },
        { nombre: "shampoo", precio:1500, codigo: "3", categoria: "Aseo" },
        { nombre: "cepillo de dientes", precio:500, codigo: "4", categoria: "Aseo" },
        { nombre: "jabón líquido", precio:1200, codigo: "9", categoria: "Aseo" },
        { nombre: "pasta de dientes", precio: 2000, codigo: "13", categoria: "Aseo" },
        { nombre: "papel higiénico", precio: 3000, codigo: "16", categoria: "Aseo" },
        { nombre: "manzana", precio:2000, codigo: "2", categoria: "Frutas" },
        { nombre: "plátano", precio:1000, codigo: "5", categoria: "Frutas" },
        { nombre: "sandía", precio:5000, codigo: "6", categoria: "Frutas" },
        { nombre: "naranja", precio:1500, codigo: "10", categoria: "Frutas" },
        { nombre: "pera", precio:2500, codigo: "17", categoria: "Frutas" },
        { nombre: "limón", precio:800, codigo: "20", categoria: "Frutas" },
        { nombre: "pan", precio:2000, codigo: "7", categoria: "Alimentos" },
        { nombre: "arroz", precio:3000, codigo: "8", categoria: "Alimentos" },
        { nombre: "Frijoles", precio:3000, codigo: "19", categoria: "Alimentos" },
        { nombre: "Avena", precio:2000, codigo: "20", categoria: "Alimentos" },
        { nombre: "leche", precio:2500, codigo: "11", categoria: "Lácteos" },
        { nombre: "yogur", precio:1800, codigo: "15", categoria: "Lácteos" },
        { nombre: "queso", precio:4000, codigo: "18", categoria: "Lácteos" },
]

localStorage.setItem('Products', JSON.stringify(Productos))
