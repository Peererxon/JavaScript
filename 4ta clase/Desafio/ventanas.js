var x,y,w,h;

function abrirVentana(x,y,w,h){

	window.moveTo(x,y)
    window.resizeTo(w,h) 
    // x desplazamiento lateral "y" horizontal(arriba,abajo)
}

function derecha(){
	x=screen.availWidth/2;
	y=0;
	w=screen.availWidth/2;
	h=screen.availHeight/2;

	abrirVentana(x,y,w,h)
	/*el codigo de x es el ancho entre 2, el de h es el largo entre 2 segun el monitor*/
}

function repetir(){

		var n=prompt("¿cuantas veces vas a abrir la pagina?")
		if (isNaN(n)||n==0)
			alert("Debe ingresar un numero");			
		else{
			for (var i = 0; i<n; i++) {
			window.open("info.html","","width=200")

			}
	}
}

function regresar(){
	abrirVentana(0,0,screen.availWidth,screen.availHeight)
	//para que se cierre a los 3 segundos posteriores de que se haya ampliado por completo
	setTimeout(window.close,3000);

}

