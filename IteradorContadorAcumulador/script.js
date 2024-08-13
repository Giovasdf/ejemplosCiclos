/*Elaborar un programa con JavaScript 
que permita sumar e indicar la cantidad
de números impares comprendidos entre el 
0 y el 50 (incluidos ambos)
implementando el ciclo for. Es decir, 
se deben sumar solamente los números
impares entre el 1 y el 50. Indicar 
cuánto fue la suma y a su vez cuántos
números se sumaron.*/

let contador = 0;
let acumulador = 0;

for (let i = 0; i <= 50; i++) {
    //comprobar que i es impar, a traves del resto
    if(i % 2 != 0){
        //contador = contador + 1
        contador++;

        //acumulador = acumulador + i
        acumulador += i;
    }
}
alert(`Hay ${contador} números impares entre el 1 y el 50 
    y la suma acumulada de ellos es: ${acumulador}`);
