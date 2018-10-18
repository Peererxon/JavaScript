var nombre;
var cantidad;
var origen;
var tipo;
var Subtotal;
var precio_total;
var costo;
var descuento;
var precio_xfranela;

//constantes

const tipoA=25000;
const tipoB=50000;
const tipoC=68900;

const descuentoDocena=0.15;
const descuento6_11=0.05;
//entradas

nombre=prompt("Diganos su nombre, por favor");
	if (nombre==null ||nombre=="") 
	{
			alert("Debe escribir su nombre y aceptar"); 
	}
	tipo=prompt("Que tipo de camisa desea (tipo A,B o C)");

	cantidad=prompt("cuantas camisas desea llevar");
	if (isNaN(cantidad))
	{
		alert("introduzca un numero");
	}

	origen=confirm("Desea que la camisa sea importada?");
	if (origen==true) {

		if (cantidad>=24) {
			if (tipo=="a") {
					precio_xfranela=tipoA*1.45;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);					

			}
			else if (tipo=="b") {
					precio_xfranela=tipoB*1.45;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);
			}

			else{
					precio_xfranela=tipoC*1.45;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);
			}
		}

	if (cantidad>=6 || cantidad<=11) {
			if (tipo=="a") {
					precio_xfranela=tipoA*1.45;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}
			else if (tipo=="b") {
					precio_xfranela=tipoB*1.45;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}

			else{
					precio_xfranela=tipoC*1.45;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}
	}

	if (cantidad<6 || cantidad>11 && cantidad<24) {
			if (tipo=="a") {
				Subtotal=cantidad*precio_xfranela;
			}
			else if (tipo=="b") {
				Subtotal=cantidad*precio_xfranela;
			}

			else{
				Subtotal=cantidad*precio_xfranela;
			}
	}


	}

	else{ //nacional ;)
		if (cantidad>=24 && origen==false) {
			if (tipo=="a") {
				precio_xfranela=tipoA*1.25;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);
			}
			else if (tipo=="b") {
				precio_xfranela=tipoB*1.25;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);
			}

			else{
				precio_xfranela=tipoC*1.25;
					descuento=descuentoDocena;
					Subtotal=(cantidad*precio_xfranela);

			}
		if (cantidad>=6 || cantidad<=11) {
			if (tipo=="a") {
					precio_xfranela=tipoA*1.25;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}
			else if (tipo=="b") {
					precio_xfranela=tipoB*1.25;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}

			else{
					precio_xfranela=tipoC*1.25;
					descuento=descuento6_11;
					Subtotal=(cantidad*precio_xfranela);
			}
		}

	if (cantidad<6 || cantidad>11) {
			if (tipo=="a") {
				Subtotal=cantidad*precio_xfranela;
				costo=Subtotal*1.25;
			}
			else if (tipo=="b") {
				Subtotal=cantidad*precio_xfranela;
				costo=Subtotal*1.25;
			}

			else{
				Subtotal=cantidad*precio_xfranela;
				costo=Subtotal*1.25;
			}
	}
		}

		}
	
	alert("Su nombre es "+ nombre+ " usted a elegido la camisa tipo: "+ tipo +" y la cantidad de: "
		+cantidad+"el precio a pagar por la franela "+precio_xfranela+
		" el Subtotal: " +Subtotal)+ "un descuento de: "+ descuento +"%";

