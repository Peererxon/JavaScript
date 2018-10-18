var nombre, tipo, origen, origen_salida, cantidad, precio, monto, recargo, recargo_porcentaje, descuento, descuento_porcentaje
var impuesto, impuesto_porcentaje, monto_final, precio_unitario 

nombre = prompt("Ingrese su Nombre:")

if (!nombre == "" || !nombre == null || isNaN(nombre)) {
	
	nombre = nombre.substr(0,1).toUpperCase() + nombre.substr(1,nombre.lenght).toLowerCase()
	console.log("Comprador: " + nombre)
	tipo = prompt("Ingrese el Tipo de Franela Deseado (A/B/C):")

	if (tipo != null) {
		tipo = tipo.toUpperCase()
	}

	if (tipo=="A") {
		precio = 25000
	}

	if (tipo=="B") { 
		precio = 50000
	}

	if (tipo=="C") {
		precio = 68900
	}

	if (tipo=="A" || tipo=="B" || tipo=="C") {

		console.log("")
		console.log("El Tipo de Franela Seleccionada es: " + tipo)

		origen = confirm("Desea que sus Franelas Sean de Precedencia Nacional?")

		if (origen == false) {
			recargo = 0.45
			origen_salida = "El Origen de Sus Franelas es de Importacion"
			alert("Sus Franelas Seran Importadas")
		}

		else {
			recargo = 0.25
			origen_salida = "El Origen de Sus Franelas es Nacional"
		}			

		recargo_porcentaje = recargo * 100
		recargo = precio * recargo
		precio_unitario = precio + recargo

		console.log(origen_salida)
		console.log("")
		console.log("El Precio Base por Franela es: " + precio + "Bs.")
		console.log("Porcentaje de Recargo: " + recargo_porcentaje + "% (" + recargo + "Bs.)")
		console.log("El Precio Unitario por Franela es: " + precio_unitario + "Bs.")

		cantidad = prompt("Ingrese la Cantidad de Franelas que Desea Comprar:")

		if (cantidad >= 1 && !isNaN(cantidad) && cantidad != null && cantidad != "") {

			descuento = 0

			if (cantidad >= 6 && cantidad <= 11) {
				descuento = 0.05
			}

			if (cantidad >= 12) {
				descuento = 0.15
			}

			descuento_porcentaje = descuento * 100
			monto = precio_unitario * cantidad
			descuento = monto * descuento
			impuesto = 0.12 * monto
			impuesto_porcentaje = 12
			monto_final = monto + impuesto - descuento

			console.log("Cantidad: " + cantidad)
			console.log("")
			console.log("Subtotal: " + monto + "Bs.")
			console.log("")
			console.log("Descuento: " + descuento_porcentaje  + "% (" + descuento + "Bs.)")
			console.log("Impuesto: " + impuesto_porcentaje + "% (" + impuesto + "Bs.)")
			console.log("")
			console.log("Monto a Pagar: " + monto_final + "Bs.")

			alert("Comprador: " + nombre + "\n\nEl Tipo de Franela Seleccionada es: " + tipo + "\n" + origen_salida 
				+ "\n\nEl Precio Base por Franela es: " + precio + "Bs.\nPorcentaje de Recargo: " + recargo_porcentaje 
				+ "% (" + recargo + "Bs.)\nEl Precio Unitario por Franela es: " + precio_unitario + "Bs.\nCantidad: " 
				+ cantidad + "\n\nSubtotal: " + monto + "Bs.\n\nDescuento: " + descuento_porcentaje  + "% (" + descuento 
				+ "Bs.)\nImpuesto: " + impuesto_porcentaje + "% (" + impuesto + "Bs.)\n\nMonto a Pagar: " + monto_final + "Bs.")
		}

		else {
			alert("ERROR: LA CANTIDAD INGRESADA NO ES VALIDA")
			console.log("ERROR: LA CANTIDAD INGRESADA NO ES VALIDA")
		}

	}

	else {	
		alert("ERROR: EL TIPO DE FRANELA INGRESADA NO ES VALIDO")
		console.log("ERROR: EL TIPO DE FRANELA INGRESADO NO ES VALIDO")
	}
}

else {
	alert("ERROR: EL NOMBRE INGRESADO NO ES VALIDO")
	console.log("ERROR: EL NOMBRE INGRESADO NO ES VALIDO")
}
