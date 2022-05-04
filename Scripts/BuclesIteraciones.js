//EJERCICIO 1
/* 
Números pares entre 0 y un máximo:
Dados dos números, se deberá mostrar la cantidad de pares que hay entre esos números (el primer número es 0). */
/*
let rango = parseInt (prompt("ingresa el tope"))
document.write (parseInt(rango/2))*/

//EJERCICIO 2
/*Edades: Ingresar n cantidad de edades mediante prompt hasta que se ingrese un cero.
 Al finalizar mostrar cuántos son mayores de edad (Mostra en document.write).

edades=[];
contador=0
do {
    x = parseInt (prompt('ingresa tu edad'))
    edades.push(x)
}while (x!==0)

for (var i = 0; i< edades.length; i++) {
    if (edades[i] >= 18)
    contador++
}
document.write(`entre las edades que ingresaste hay: ${contador} mayores de edad`)*/

//EJERCICIO 3
/*Crear un script que devuelva que dado un string imprima cada una de sus letras con salto de línea.
 
var palabras = prompt("ingresa tu nombre")
for (letras of palabras){
    document.write (`<li> ${letras} <li>`)
}*/

//EJERCICIO 4
/*Potencias de 2: Imprimir todas las potencias de dos desde 2 hasta 10000; 
i=2
 do {
    document.write(2**i+ "<br>")
    i++
}
while(2**i<=10000)*/
//EJERCICIO 5
/*Mostrar hasta el 5: Realizar un bucle en dónde se muestre los números del 1 hasta 10, pero en el 5 se debe terminar el bucle.
var x =0
for (x==1; x<=10; x++){
    document.write(`<li> ${x} <li>`) 
    if(x==5) {
      break;}
} */

//EJERCICIO 6
/*Saltarse el 5: Realizar un bucle que muestre los números del 1 hasta el 10 pero que se saltee el número 5 en ese bucle. 

var x =0
for (x==1; x<=10; x++){
    if (x==5) {
      continue;}
    document.write(`<li> ${x} <li>`)}*/
    

//EJERCICIO 7
/*Nombres famosos: Crear un array con los nombres de personajes famosos, recorrer ese array e imprimir todos los
 personajes con un salto entre línea los nombres. (al menos 5 personajes famosos (crear un bucle). 

 let nombres= [`wolverine`, `superman`, `batman`, `talaman`, `Ravenna`]
for  (var i=0; i<=4; i++){
 document.write (`${nombres[i]} <br>`)
}*/
//EJERCICIO 8
/*Múltiplos de 3: Crear un array con los números del  1 al 10. imprimir los múltiplos de 3 de todos los números (crear un bucle).
let numeros= [1,2,3,4,5,6,7,8,9,10]
for(var i=0; i<=9; i++) {
    if (numeros[i] %3==0) {
    document.write(numeros[i] + "<br>")
    }
} */

//EJERCICIO 9
/*Múltiplos de dos (pares) entre dos números: Dados dos números, se deberá mostrar la cantidad de pares que hay entre esos números. 
let numero1= parseInt(prompt(`ingresa un número`))
let numero2= parseInt(prompt(`ingresa otro número`))
for (var i=numero1; i<=numero2; i++) {
    if (i %2==0) {
    document.write(i + "<br>")
    }
}*/

//EJERCICIO 10 
/* Potencias de 2: Imprimir todas las potencias de dos desde 2 hasta 10000.*/