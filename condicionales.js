/*Los condicionales permiten evaluar condiciones y tealizar diferentes acciones de acuerdo al resultado de la evaluación */

/*Condicional simple 
if (condicion){
    codigo a ejecutar si la condición es verdadera
} */

/*condicional con bloque else
if (condicion) {
    ejecuta un codigo si se cumple la condición
} else {
    ejecuta otro codigo si no se cumple la condicion
}
*/

/*condicional con bloques ELSE IF 
if (condicion) {
    ejecuta un codigo si condicion verdadera
} else if (condicion2) {
    ejecuta otro codigo si la segunda condicion es verdadera
} else {
    ejecuta otro codigo si las condiciones son falsas
}
*/


let edad = 15;
let acceso = '';

if (edad < 16) {
    acceso= 'prohibido';
} else if (edad >= 16 && edad <=18) {
    acceso = 'permitido solo acompañado de un mayor';
} else {
    acceso = 'permitido';
}


console.log (acceso)



