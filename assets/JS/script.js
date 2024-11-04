

// codigo modificado, segun lo solicido en el punto 2.2 respecto a que reciba al elemento clikeado, en este caso el div.
    function pintar (ele1) {
    ele1.target.style.backgroundColor = 'yellow'
    }

    const ele1 = document.getElementById ('ele1')
    ele1.addEventListener ('click', pintar);



    // codigo modificado, segun lo solicido en el punto 2.3
    // se define la función con un parámetro 'color' que tiene un valor predeterminado de 'green'
    pintar()

    function pintar () {
        ele = document.getElementById ('ele1')
        ele.style.backgroundColor = 'green';   
    }
    const fondodiv =document.querySelector ('div');
    // se coloca 'yellow' como argumento en el evento click
        fondodiv.addEventListener('click', function(){
        ele.style.backgroundColor ='yellow';     
    })

    
    



