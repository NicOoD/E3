const pizzas = [
    {id: 1, nombre: "Margarita", precio: 250},
    {id: 2, nombre: "Zanella", precio: 192400},
    {id: 3, nombre: "Pepperoni", precio: 500}
]

let boton = document.querySelector("#boton");
let h2 = document.querySelector("#nombrePizza");
let h4 = document.querySelector("#precioPizza");

const obtenerValorInput = () => {
    const inputValue = document.querySelector("#input").value;
    const pizza = pizzas.find(pizza => pizza.id == inputValue);
    if (pizza?.id ) {
        h2.textContent = pizza.nombre;
        h4.textContent = pizza.precio;
    } else {
        h2.textContent = "No Existe";
        h4.textContent = "Sin precio";
        alert("El número de Pizza no existe");
    }
}

boton.addEventListener("click", obtenerValorInput);


/*<body>
    <h2 id="nombrePizza">H2</h2>
    <h4 id="precioPizza">H4</h4>
    <input type="number" name="" id="input">
    <button id="boton">Click here</button>
    <script src="main.js"></script>
</body>*/