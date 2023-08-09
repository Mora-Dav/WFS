/*Una función es un bloque de código que podemos invocar cada vez que la necesitemos.
Sirven para realizar tareas específicas y retornar valores.
Agrupan código que se puede reutilizar */


function sumar (a,b) {
    return a + b;
}

console.log(sumar(17,3));

function hacerHelado (cantidad) {
    return 'Helado'.repeat(cantidad)
}

console.log (hacerHelado(28));

let miNombre = function(cantidad = 1) {
    return 'David, '.repeat(cantidad)
}

console.log (miNombre());

console.log ('---------------')
console.log (miNombre(5))



