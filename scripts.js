
var numerodefichas
let selecciones = []
let numjogadas=0;
let score = document.querySelector('.score span')
numerodefichas=Number(prompt("Com quantas cartas quer jogar? 😛 inserir números pares de 4 a 14"));

let cartaBobRoss = "bobrossparrot", cartaExplody = "explodyparrot", cartaFiesta = "fiestaparrot", cartaMetal = "metalparrot";
let cartaRevertIt = "revertitparrot", cartaTriplets = "tripletsparrot", cartaUnicorn = "unicornparrot";
let iconos=[cartaBobRoss, cartaExplody, cartaFiesta, cartaMetal, cartaRevertIt, cartaTriplets, cartaUnicorn];
function generartablero(){

    const tablero = document.querySelector("ul");
    tarjetas = []
    for (let i = 0; i < numerodefichas; i++) {
        tarjetas.push(`
        <div id="tablero">
            <ul class="areatarjeta" >
              <li  class="tarjeta" onclick="jogada(${i})">
                <div class="tarjeton" id="tarjeta${i}"  >
                <div  class="caratrasera" id="trasera${i}" >
                    <div class="metalparrot">
                    <img  src="./imagens/${iconos[0]}.gif" alt=""> 
                    </div>
                </div>
                <div class="carasuperior">
                    <div class="front">
                        <img class="front" src="./imagens/front.png" alt="">
                    </div>  
                </div>
            </div>
            </li>
            </ul>
        </div>
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}


function comenzar(){
numerodefichas=Number(prompt("Com quantas cartas quer jogar? 😛 inserir números pares de 4 a 14 "));
}

function teste (){
    while(numerodefichas % 2 !== 0 || numerodefichas<4 || numerodefichas > 14){
        comenzar()
    }
    generartablero();
}
teste();

let totalJogadas = 0;
let contaJogadas=0;
function jogada(i){
    totalJogadas++;
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
      
        
       
    } 
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
    
    
   
}


function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
            score.innerHTML = parseInt(score.innerHTML) + 1
            contaJogadas++;
            if (verificarFin()) {
                alert(`Você ganhou em ${totalJogadas} jogadas 🥇! em ${segundos}  segundos 🕕`)
                reiniciarpartida()
            }
    
        }
        
        
    }, 1000);

}

function reiniciarpartida(){
   iniciar=prompt("Voce gostaria de reiniciar a partida?")
    if (iniciar=="sim"){
        segundos=0;
        totalJogadas=0;
        score.innerHTML = 0;
        comenzar()
        teste()
    } else{
        segundos=0;
        alert("🎮Volte pronto🎮")
    }

    
}
function verificarFin() {
    for (let i = 0; i < numerodefichas; i++) {
        let trasera = document.getElementById("trasera" + i)
        if (trasera.style.background != "plum") {
            return false
        }
    }
    return true
}

let segundos = 0;
let minutos = 0;
          
function segundo(){
    //incrementa os segundos
    segundos++;
    if(segundos==60){
        //incrementa os minutos
        minutos++;
        //Zerar os segundos
        segundos=0;
        //escreve os minutos
        document.getElementById('minuto').innerHTML=minutos

    }
    //escreve os segundos
    document.getElementById('segundo').innerHTML=segundos                  
}
            
setInterval(function(){ segundo() },1000)