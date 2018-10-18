/*//Definicion de variables
//tipos de camisas
const tipo;
//costos iniciales de las camisas
const costoA;
const costoB;
const costoC;
var unidades;
var tipo_valido;
//variable segun el lugar de origen
var adicional;
//Segun la cantidad de camisas
var descuento;
//asignacion de variables


*/

//asignacion de constantes
var costo = 0;
const costoA=25000;
const costoB=50000;
const costoC=68900;


var nombre=prompt("Escriba su nombre");
	if (nombre==null ||nombre=="") 
	{
		alert("Debe escribir su nombre y aceptar"); 
	} 
	else 
	{ 
		var tipo=prompt("Indiquenos el tipo de camisa que llevara (tipo A,B o C)")
		console.log("El usuario introdujo "+nombre +" como su nombre")

		if (tipo==null || tipo=="")
			alert("Debe escribir un tipo A,B o C y aceptar")
		else{ 
			tipo=tipo.toUpperCase()
			console.log("El tipo de camisa es:"+tipo);

			if (tipo!="A" && tipo!="B" && tipo!="C") 
				alert("Debe introducir un tipo valido");

			else {
				if (tipo=="A") {
					 costo=costoA;
				}
				else {
			 		if (tipo=="B") {
						 costo=costoB;
					}
			 		else {
			 	  		if (tipo=="C") {
			 				 costo=costoC;
			 	  		}
			 		}		
			 			
				}
			 	
			 		
			}
		} 

		alert("el costo de la camisa sin cargos es de:"+costo);
	}


	


	
