import { inventarioactualizado } from "./model.js";

function eliminarproducto() {
    let categoria=prompt("ingrese la categoria que quiere actualizar");
    let producto=prompt("ingrese el producto que desea actualizar");
    let cantidad=parseInt(prompt("ingrese la cantidad que desea eliminar"));

    inventarioactualizado(categoria, producto, cantidad);
    console.log(`se han eliminado: ${cantidad} de: ${producto}`);
}
export{eliminarproducto}