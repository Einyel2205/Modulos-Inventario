import { inventariodisponible } from "./modules/disponibles.js";
import { ingresarproducto } from "./modules/ingresar.js";
import { eliminarproducto } from "./modules/eliminar.js";


function main() {
        let opciones=parseInt(prompt("Señor usuario, que desea: \n1. ver que hay en inventario \n2. Agregar algo al inventario \n3.Eliminar algo del inventario \n4. Salir"));
    
        switch (opciones) {
            case 1:
                inventariodisponible()
                break;
            case 2:
                ingresarproducto()
                break;
            case 3:
                eliminarproducto()
                break;
            case 4:
                console.log("gracias por utlizar el programa");
                break;
            default:
                console.log("Señor usuario, esa opción no está disponible");
                break;
        }

}
main()