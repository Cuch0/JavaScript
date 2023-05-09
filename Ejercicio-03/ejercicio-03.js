class Carrito {
    montoTotal;
    productos;
    unidades;

    constructor(productos, montoTotal, unidades){
        this.productos = productos;
        this.montoTotal = montoTotal;
        this.unidades = unidades;
    }

    agregarProducto(nombre, precio, unidades) {

        for(let i = 0 ; i < this.productos.length ; i++){
            if(nombre == this.productos[i]) {
                console.log(`Ya existe ${this.productos[i]} con ${this.unidades[i]} unidades`);
                return
            }
        }
        
        this.productos.push(nombre);
        this.montoTotal += precio * unidades;
        this.unidades.push(unidades)
    }
}

let cliente = new Carrito(["Leche"], 10, [1])
cliente.agregarProducto("Yerba", 500, 2)
cliente.agregarProducto("Azucar", 250, 3)
cliente.agregarProducto("Azucar", 250, 3)
cliente.agregarProducto("Yerba", 500, 2)
console.log(cliente);