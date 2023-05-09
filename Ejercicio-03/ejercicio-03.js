class Carrito {
    montoTotal;
    productos;

    constructor(montoTotal,productos){
        this.montoTotal = montoTotal;
        this.productos = productos;
    }

    agregarProducto(nombre, precio, unidades) {

        if (this.productos.includes(nombre)) {
            console.log(`Ya existe "${nombre}" con ${unidades} unidades`);
            return
        } 
        
        this.productos.push(nombre);    

        this.montoTotal += precio * unidades;
    }
}

let cliente = new Carrito(10, ["Leche"])
cliente.agregarProducto("Yerba", 500, 2)
cliente.agregarProducto("Leche", 500, 10)
cliente.agregarProducto("Azucar", 500, 10)
cliente.agregarProducto("Yerba", 500, 2)
console.log(cliente);