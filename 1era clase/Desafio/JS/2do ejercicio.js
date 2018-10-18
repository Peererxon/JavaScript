//definicion de variables

var parcial1,parcial2,parcial3;

var evalcontinua;

var Tpractico;

var total100,total20,total4;

//asignandole valor a las variables

parcial1= 1+Math.round(Math.random()*27);

parcial2=1+Math.round(Math.random()*27);

parcial3=1+Math.round(Math.random()*27);

//solo a estas 2 variables e les asigna un valor fijo para obtener un indice medianamente alto

evalcontinua=9;

Tpractico=10;

//procesos

total100=parcial1+parcial2+parcial3+Tpractico;

total20=(parcial1+parcial2+parcial3+Tpractico)/5;

total4=(parcial1+parcial2+parcial3+Tpractico)/25;

//salidas

console.log("Estudiante sus notas de los parciales1, 2 y 3 fueron de: ");

console.log("parcial 1: " +parcial1);

console.log("parcial 2: " +parcial2);

console.log("parcial 3: " +parcial3);

console.log("Su evaluacion continua: " + evalcontinua);

console.log("y su trabajo practico: " + Tpractico);

console.log("su nota en escala de 100 es de: " + total100);

console.log("su nota en escala de 20 es de: " + total20);

console.log("su nota en escala de 4 es de: " + total4);

