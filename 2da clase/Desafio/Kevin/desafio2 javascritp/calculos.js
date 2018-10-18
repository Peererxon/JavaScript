var nombre=prompt("Introducir Nombre del Cliente");
console.log(nombre)
if (nombre==null || nombre=="" || !isNaN(nombre))
				alert("!!!Debe Ingresar el Nombre del Cliente!!!")

var tipo_franela=prompt("Seleccione Tipo de Franela (A, B o C)");
var precio_franela;
tipo_franela = tipo_franela.toUpperCase();
if (tipo_franela=="A") {
	precio_franela=25000;
}
			
if (tipo_franela=="B") {
	precio_franela=50000;
}

if (tipo_franela=="C") {
	precio_franela=68900;
}
if (tipo_franela=="A"||tipo_franela=="B"||tipo_franela=="C") {
	console.log("tipo de franela es:"+tipo_franela)
	console.log("precio es :"+precio_franela)
	var origenes,recargo,donde_viene,recargo_total,porcentaje_recargo,precio_unidad;
	origenes=confirm("Desea que su producto sea Importado?")
	if (origenes==false) {
		recargo=0.25;
		donde_viene="Las franelas son productos nacionales"
		alert("Las franelas son nacionales")
		}
		else
		{
		recargo=0.45;
		donde_viene= "Las franelas son productos Importados"
		alert("Las franelas son Importados")
		}
		recargo_total=precio_franela*recargo;
		porcentaje_recargo=recargo*100;
		precio_unidad=precio_franela+recargo_total;
		console.log("")
		console.log("donde viene "+donde_viene)
		console.log("origenes: "+origenes)
		console.log("porcentaje de recargo: "+porcentaje_recargo+"%")
		console.log("recargo total: "+recargo_total)
		console.log("precio a pagar por la franela: "+precio_unidad )
var cantidad=prompt("Ingrese la Cantidad de Franelas a Comprar!")
var descuento,porcentaje_descuento,descuento_total,subtotal,impuesto,porcentaje_impuesto,precio_descontado,monto_pagar;
if (cantidad>=1 && !isNaN(cantidad) && cantidad!=null && cantidad!="") {
	descuento=0
	if (cantidad>=6 && cantidad<=11){
		descuento=0.05;
	}
	if (cantidad>=24) {
		descuento=0.15;
	}
subtotal=precio_unidad*cantidad;
impuesto=subtotal*0.12;
porcentaje_impuesto=0.12*100;
descuento_total=subtotal*descuento;
porcentaje_descuento=descuento*100;
precio_descontado=subtotal-descuento_total;
monto_pagar=precio_descontado+impuesto;
console.log("")
console.log("Cantidad: "+cantidad)
console.log("subtotal: "+subtotal+"$")
console.log("descuento: "+porcentaje_descuento+"% ("+descuento_total+"$)")
console.log("Impuesto: "+porcentaje_impuesto+"% ("+impuesto+"$)")
console.log("Monto a Pagar: "+monto_pagar+"$")

alert("Cliente: "+nombre^"\n\nSon "+cantidad+" Franelas de tipo: "+tipo_franela+"\n"+donde_viene+"\n\nEl precio de cada franela es: "+precio_franela
	+"$ "+"\n porcentaje de recargo: "+porcentaje_recargo+"% ("+ recargo_total+"$)"+"\nEl precio Unitario por franelas es: "+precio_unidad+"$ "+"\n\nSubtotal: "+subtotal+
	"\n\ndescuento: "+porcentaje_descuento+"% ("+descuento+"$)"+"\nImpuesto: "+porcentaje_impuesto+"% ("+impuesto+"$)"+"\n\n monto a pagar"+monto_pagar+"$")
}
else{
	alert("Error el valor ingresado no es valido!!!")
	console.log("Error el valor ingresado no es valido!!!")
}

}
else {
	alert("Error en Seleccionar el tipo de franela!!!")
	console.log("Error en Seleccionar el tipo de franela!!!")
}


