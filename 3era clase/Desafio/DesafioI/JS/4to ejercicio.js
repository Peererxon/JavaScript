console.log("")

console.log("Cuarto problema")
//definicion de variables

var nombre_local;

var Desayuno;

var cantidadD;

var totalD;

var Almuerzo;

var totalA;

var cantidadA;

var Cena;

var totalC;

var cantidadC;

var totaldel_dia;

var promedio;

//asignacion de variables

nombre_local="Empanadas la 28";

Desayuno=3800;

cantidadD=1+Math.round(Math.random()*30);

totalD=Desayuno*cantidadD;

Almuerzo=5000;

cantidadA=1+Math.round(Math.random()*50);

totalA=Almuerzo*cantidadA;

Cena=4200;

cantidadC=1+Math.round(Math.random()*39);

totalC=Cena*cantidadC;

totaldel_dia=totalD+totalA+totalC;

promedio=(Desayuno+Almuerzo+Cena)/3 ;

//salidas

console.log("Hola "+nombre_local);

console.log("El precio del Desayuno es de: "+ Desayuno+ "Bss");

console.log("Hoy se vendieron "+cantidadD+" desayunos");

console.log("Por lo que el total del dia por desayunos es de: "+ totalD+"Bss");

console.log("")

console.log("El precio del Almuerzo es de: "+ Almuerzo+ "Bss");

console.log("Hoy se vendieron "+cantidadA+" almuerzos");

console.log("Por lo que el total del dia por almuerzos es de: "+ totalA+"Bss");

console.log("")

console.log("El precio de la Cena es de: "+ Cena+ "Bss");

console.log("Hoy se vendieron "+cantidadC+" cenas");

console.log("Por lo que el total del dia por desayunos es de: "+ totalC+"Bss");

console.log("")

console.log("El ingreso total del dia de hoy en "+ nombre_local+ " es de: "+ totaldel_dia+ "Bss");

console.log("En general la comida en "+nombre_local +" tienen un precio de: "+promedio)
