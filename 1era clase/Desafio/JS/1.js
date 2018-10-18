//definiendo variables
var nombre; 
var base;
var comision;
var cantidad;
var valor_total;
var sueldo;


//asignandole valor a las variables

nombre="Anderson";

base=500000;

cantidad=1+Math.round(Math.random()*10)

comision=200000*cantidad;

valor_total=345000;

sueldo=base+comision+valor_total*0.10;

//salidas


console.log("hola "+nombre);

console.log("usted tiene un sueldo base de "+ base) ;

console.log("Usted vendio una cantidad de " +cantidad+ " vehiculos"); 

console.log("obtendra una comision de 200000 multiplicado por la cantidad de vehiculos que vendio:"+ comision);

console.log("El valor total de sus ventas es de "+ valor_total);

console.log("por lo que su sueldo total sera de "+sueldo);