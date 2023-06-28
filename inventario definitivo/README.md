# EJERCICIO PREVIO A EXAMEN DE MODULOS Y FUNCIONES

Se requiere un porgrama utlizando 5 modulos: main, disponibles, ingresar, eliminar, model.

Este programa se va a utilizar como inventario de una tienda. En la misma se ofreceran productos de granos (arroz, frijoles, lentejas) aseo (jabón, límpido, champú) carnes (pescado, res, cerdo) y lácteos(yogurt, leche, kumis). El programa debera premitir que se actualice el inventario cuando un porducto se vende (es decir, que disminuya el numero de porductos cuando se haga una venta) o cunando un porducto ingresa (es decir, el numero aumenta la cantidad que se ingresó). El porgrama debe mostrar las siguientes opciones:

## QUE DESEA HACER EN EL INVENTARIO:

1. Mostrar cantidad de productos disponibles
(debe mostrar todos los productos disponibles de todas las categorias con sus cantidades, por ejemplo:
--- Estos son todos los productos que tiene la tienda:---
granos:
arroz 30....
aseo:
limpido 50....
carnes:
pescado 10....
lácteos
kumis 250....)

2. Ingresar nuevas existencias de producto
(debe preguntar la categoria del producto, su nombre, la cantidad de existencias a ingresar y hacer el aumento correspondiente de existencias, por ejemplo,
limpido 51)

3. Eliminar exixstencias de producto
(debe preguntar la categoria del producto, su nombre, la cantidad de existencias a eliminar y hacer la disminución correspondiente de existencias, por ejemplo,
limpido 49).


### SE PLANTEA DE LA SIGUIENTE FORMA:

* En el modulo "disponibles" se creará una función que tendrá guardado los productos disponibles en el inventario. Estos productos serán guardados en el localStorage(almacenamiento local) y se les asignará su respectivo valor.
