let inventario={
    granos:{
        arroz:20,
        frijoles:20,
        lentejas:20
    },
    aseo:{
        jabon:20,
        limpido:20,
        shampoo:20
    },
    carnes:{
        pescado:20,
        res:20,
        cerdo:20
    },
    lacteos:{
        yogurt:20,
        leche:20,
        kumis:20
    }
}
function inventarioactualizado(categoria, producto, cantidad) {
    inventario[categoria][producto]+=cantidad;
}
function mostrarinventario() {
    return inventario;
}
export{inventarioactualizado, mostrarinventario}