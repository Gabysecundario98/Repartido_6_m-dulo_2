//EJERCICIO 1
/*Adición: Obtener el resultado de sumar dos números ingresados por eL
 usuario. Una vez obtenida la suma mostrar el resultado a través de un mensaje.*/
/*alert("hagamos una suma")
let x = parseInt (prompt("ingresa el primer número"))
let y = parseInt (prompt("ingresa el segundo número"))
let resultado = x + y
alert("el resultado de la suma es " + resultado)*/

//EJERCICIO 2
/* Adición  y multiplicación: Obtener el valor de una suma y el valor de una
 multiplicación a partir de dos números ingresados por el usuario. Una vez obtenida la suma en una
  línea de texto y la multiplicación a la siguiente línea (salto de línea).*/ 
/*
let x = parseInt (prompt ("ingresa el perimer número"))
let y = parseInt (prompt("ingresa el segundo número"))
let suma = x + y
let multiplicación = x*y
document.write ("el resultado de la suma es "+ suma + "<br>") 
document.write ("el resultado de la multiplicación es "+multiplicación)
*/

//EJERCICIO 3
/*Promedio: Obtener el valor promedio a partir del ingreso de cinco números.
 Una vez obtenido el valor, mostrar el resultado a través de un mensaje.*/

/* let numero1 = parseInt (prompt ("ingresa el nro 1 de 5"))
 let numero2 = parseInt (prompt ("ingresa el nro 2 de 5"))
 let numero3 = parseInt (prompt ("ingresa el nro 3 de 5"))
 let numero4 = parseInt (prompt ("ingresa el nro 4 de 5"))
 let numero5 = parseInt (prompt ("ingresa el nro 5 de 5")) 
 let sumapromedio = parseInt(numero1+numero2+numero3+numero4+numero5) 
 let promedio = sumapromedio/5
alert ("el promedio es " +promedio)*/

//EJERCICIO 4
/*Perímetro: Pediremos al usuario que ingrese el valor de los lados de un rectángulo. A partir de esos valores,
 calcularemos su perímetro. Por último, mostraremos su resultado al usuario.

 let x = parseInt (prompt ("ingresa las medidas de x"))
 let y = parseInt (prompt ("ingresa las medidas de y"))
 let g = (x+y) *2
 document.write (`el perímetro de tu rectángulo es ` + g);*/

//EJERCICIO 5
 /*Área: Pediremos al usuario que ingrese el valor de la base y de la altura de un triángulo.
  A partir de esos valores, calcularemos el área. Por último, mostraremos su resultado al usuario.*/
 
 /* let base = parseInt (prompt ("ingresa la medida de base"))
  let altura = parseInt (prompt ("ingresa la medida de altura"))
  let g = (base*altura) /2
  document.write (`el área de tu triángulo es ` + g);*/

//EJERCICIO 6
/*Datos completos: Pediremos al usuario que ingrese su nombre, su apellido y su edad.
 Mostraremos su nombre en minúscula, su apellido en mayúscula y su edad de la siguiente manera:  

let nombre = prompt("ingresa tu nombre") ; 
let apellido = prompt("ingresa tu apellido");
let edad = prompt("ingresa tu edad");
document.write(`Nombre: ` + nombre.toLowerCase() + "<br>");
document.write(`Apellido: ` + apellido.toUpperCase() + "<br>");
document.write(`Edad: ` + edad)

//EJERCICIO 7
/*Conversión de moneda: Obtener la cantidad de dinero en pesos uruguayos
 ingresados por el usuario y calcular su valor en dólares a la fecha.
  Una vez obtenida la conversión mostrar el resultado a través de un mensaje.
 
var pesos = parseInt (prompt ("cantidad en pesos: "))
var dolares = parseInt (pesos/41)
alert(pesos + " pesos son: "+ dolares+ "dolares")*/

//EJERCICIO 8
/*Número Par o Impar: El usuario ingresará un número y 
se mostrará un mensaje explicando si el número ingresado es par o impar. 
var numero = parseInt (prompt("ingresa un número"))
if (numero%2==0) {
  alert (numero + " es par")
}
else {
  alert (numero + " es impar")
}*/

//EJERCICIO 9 
/*Votantes: Pediremos al usuario que ingrese el año de su nacimiento y 
se le mostrará un mensaje que le indicará si puede votar o no (mayor de 18 años pueden votar). 
var edad = parseInt (prompt("ingresa un número"))
if (edad>=18) {
  alert ("podes votar")
}
else {
  alert ("no podes votar aún")
}*/

//EJERCICIO 10 
/*Contraseña: Pediremos al usuario 
ingresar usuario y contraseña para ingresar a nuestro sistema. Definiremos una contraseña preestablecida.
 Mostrar mensaje con la explicación de si ha ingresado correctamente la contraseña o no.
 var usuario = parseInt (prompt("ingresa tu usuario"))
 var contraseña = parseInt (prompt("ingresa la contraseña"))
if (contraseña==1234) {
  alert ("la contraseña es correcta")
}
else {
  alert ("contraseña incorrecta")} */