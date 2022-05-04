//EJERCICIO 1
/*Valor absoluto: Ingresar un número, mostrar el valor absoluto de ese número
 (si es positivo, mostrar ese número, si es negativo multiplicarlo por -1 y si es cero mostrar cero).*/

 /*
 let número = parseInt (prompt ("ingresa el número"));
 if (número == 0){
     document.write ("el valor real es 0 ");
 }
 else if (número >= 1) {
     document.write ("el valor real es " + número);
 }
 else if (número < 0)
     document.write ("el valor real es " + (número * -1));
 */

//EJERCICIO 2
/* El mayor: Ingresar dos números e imprimir en el html cuál es el mayor.*/
/*
let x = parseInt (prompt("ingresa el primer número"))
let y = parseInt (prompt("ingresa el segundo número"))
if (x>y) {
    document.write ("el número mayor es "+x)
}
else if (x<y) {
    document.write ("el número mayor es "+y)
}
*/

//EJERCICIO 3
/*Etapas de la vida: Al ingresar una edad se deberá mostrar en qué etapa de la vida se encuentra la persona:
Bebe: 0 - 2 años
Niño/Niña: 3-10
Preadolescente: 11- 14
Adolescente: 15-20
Joven adulto: 20-25
Adulto: 25-60
Jubilado: 60-75
Adulto mayor: 75 en adelante

 */
/*
let edad = parseInt (prompt("ingresa tu edad"))
if (edad < 3) {
    document.write ("Sos un bebé")
} 
else if (edad>2 && edad< 11) {
    document.write ("sos un/a niño/a")
}
else if (edad>11 && edad<15) {
    document.write ("sos un/a preadolescente")
}
else if (edad>15 && edad< 21) {
    document.write ("sos un/a adolescente")
}
else if (edad>20 && edad< 26) {
    document.write ("sos un/a jóven adulto/a")
}
else if (edad>25 && edad< 61) {
    document.write ("sos un/a adulto/a")
}
else if (edad>60 && edad< 76) {
    document.write ("sos un/a jubilado/a")
}
else  {
    document.write ("sos un/a adulto/a mayor")
}*/

//EJERCICIO 4
/*Socio del club: Al ingresar dos datos, la edad del socio y si tienen el carné de socio al día, se mostrará un mensaje 
que indique si puede votar.
 Solo pueden votar los mayores de 25 años y que tengan el carné de socio al día. 

 var edad = parseInt (prompt("ingresa tu edad"))
 var contraseña =  confirm("tenés el carnet al día?")
if (edad>25&&contraseña==true) {
  alert ("Podés votar a Damiani.")
}
else {
    alert ("faltan requisitos para votar")
}*/

//EJERCICIO 5
/*Múltiplo común: ingresar un número e imprimir en el html si es múltiplo de 7, si es múltiplo de 3 o de los dos
 a la vez. En el caso que no se cumpla ningún caso mostrar que no es múltiplo de ningún caso. 

 var numero=parseInt(prompt("ingresa tu número: "))
 if (numero%7==0){
     document.write (" tu número es múltiplo de 7")
 } 
 else if (numero%3==0){
     document.write (" tu número es múltiplo de 3")
 } 
 else if (numero%7==0&&numero%3==0){
     document.write ("tu número es múltiplo de 7 y de 3")
 } 
 else {
     document.write ("tu número no es múltiplo de 7 ni de 3")
 }*/
 
 //EJERCICIO 6
 /*Día de la semana: Ingresar un número del 1 al 7; imprimir en el html
  el día de la semana dependiendo del número ingresado (utilizar switch).  
1 - Lunes
2 - Martes
3 - Miércoles
etc.
 
let número=parseInt(prompt ("ingresa un número"));
switch (número) {
    case 1: document.write("Lunes");
    break;
    case 2: document.write("Martes");
    break;
    case 3: document.write("Miércoles");
    break;
    case 4: document.write("Jueves");
    break;
    case 5: document.write("Viernes");
    break;
    case 6: document.write("Sábado");
    break;
    case 7: document.write("Domingo");
    break;
    default: document.write("meh")
}*/

//EJERCICIO 7
/*Domingos y feriados: Ingresar la edad de una persona, imprimir en el html si esa persona debe pagar o 
no boleto de ómnibus el domingo (los menores de 12 años y los mayores de 70 años no pagan boleto los domingos).
let edad=parseInt(prompt("ingresa tu edad"))
if (edad>=70||edad<=12){
    document.write("no pagás boleto")
}
else {document.write("48$ por bocón")} */

//EJERCICIO 8
/*Calculadora: Realizar una calculadora para realizar las operaciones de adición, sustracción, multiplicación y división, y que además cumpla con.
El script debe estar asociado a un HTML en dónde se muestran las instrucciones que debe seguir el usuario.
El usuario debe ingresar los dos números a operar y también debe ingresar el tipo de operación
 (recomendación: usar +, - , * y / para la asignación de operaciones).
El programa debe realizar la operación indicada con los dos números ingresados.
En el caso de que ingrese una operación que no es ninguna de las operaciones ofrecidas
 se deberá mostrar el mensaje “Esa operación no  se puede realizar, ingrese nuevamente los datos”.
Al finalizar la operación se deberá mostrar el resultado en el html (es una calculadora especial 
    sería adecuado que en el resultado se explicara cuál fue la operación).
 
    function limpiar(){
        document.getElementById('calculadora').reset
    }
    function sumar(){
        var x=parseInt (document.getElementById('valor1').value);
        var y=parseInt (document.getElementById('valor2').value);
        document.getElementById('resultado').innerHTML=(x+y);   
    }
    function restar(){
        var x=parseInt (document.getElementById('valor1').value);
        var y=parseInt (document.getElementById('valor2').value);
        document.getElementById('resultado').innerHTML=(x-y);   
    }
    function multiplicar(){
        var x=parseInt (document.getElementById('valor1').value);
        var y=parseInt (document.getElementById('valor2').value);
        document.getElementById('resultado').innerHTML=(x*y);   
    }
    function dividir(){
        var x=parseInt (document.getElementById('valor1').value);
        var y=parseInt (document.getElementById('valor2').value);
        document.getElementById('resultado').innerHTML=(x/y);   
    }*/

    //EL 9 ESTÁ REPETIDO, YA LO HICE. 
