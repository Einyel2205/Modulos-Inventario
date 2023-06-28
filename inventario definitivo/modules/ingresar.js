import { inventarioactualizado } from "./model.js";
function ingresarproducto() {
    let categoria=prompt("ingrese la categoria que quiere actualizar");
    let producto=prompt("ingrese el producto que desea actualizar");
    let cantidad=parseInt(prompt("ingrese la cantidad que quiere actualizar"));

    inventarioactualizado(categoria, producto, cantidad);
    console.log(`se han agregado: ${cantidad} a: ${producto}`);
}
export{ingresarproducto}