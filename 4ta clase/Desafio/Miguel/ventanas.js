
function abrirVentanas(x,y,w,h){        
        var dimesiones = "width="+w+",height="+h+",top="+y+",left="+x;
        var miVentana = window.open('info.html',"",dimesiones);
        window.setTimeout(function(){miVentana.moveTo(0,0);
            miVentana.resizeTo(screen.width,screen.height)}, 3000);
        window.setTimeout(function(){miVentana.close()}, 4000);
        // El 4000 lo hice para que se pudiera apreciar como se mueve y se maximiza la ventana.
        // Por lo que entendí en el enunciado eran 3s también para cerrar pero me pareció mejor
        // poner 1s más para que se pudiera apreciar la acción mover y maximizar mejor.
}

function derecha(){
    var n = parseInt(prompt("Veces que se abrira la ventana info ?"));

    if(!isNaN(n)){  
        for(var i = 0;i<n;i++){
            var x = screen.availWidth;
            var y = 0;
            var w = screen.availWidth/2;
            var h = screen.availHeight/2;
            abrirVentanas(x,y,w,h);
        }
    }
    else{
        alert("Número invalido");
    }
    
}