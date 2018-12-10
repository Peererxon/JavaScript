var cantidad

function abrirVentana(X, Y, W, H) 
{
    moveTo(X,Y)
    resizeTo(W,H) 
}

function enlace(cantidad)
{
    var counter = 0
    do
    {
        window.open("info.html","","height=300,width=500") 
        counter = counter + 1
    } while (counter != cantidad)
    
}

function derecha()
{
    abrirVentana(screen.availWidth/2,0,screen.availWidth/2,screen.availHeight/2)
}

function cantidadVentana() 
{   
    do
    {
        cantidad = prompt("Cuantas Veces Desea Abrir la Pagina?:")
        if (cantidad == "" || cantidad == null || isNaN(cantidad) || cantidad <= 0)
        {
            alert("Ingrese una Cantidad Valida")
        }
    } while (cantidad == "" || cantidad == null || isNaN(cantidad) || cantidad <= 0)

    enlace(cantidad)
}

function mostrarPantalla() 
{
    abrirVentana(0,0,screen.availWidth,screen.availHeight)  
    setTimeout(window.close, 5000) 
}