import { mostrarinventario } from "./model.js";
function inventariodisponible() {
    let inventario = mostrarinventario();
    console.log("inventario:");
        for (let categoria in inventario) {
            console.log(`${categoria}:`);
            for (let producto in inventario[categoria]) {
            console.log(`${producto}: ${inventario[categoria][producto]}`);
             }
        }
}
export { inventariodisponible };