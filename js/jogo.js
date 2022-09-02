var altura;
var largura;
var vidas = 1;
var tempo = 15;
var criaTempo = 1500
//ajusta dificuldade
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criaTempo = 1500
}else if(nivel === 'dificil'){
    criaTempo = 1000
}else if(nivel === 'impossivel'){
    criaTempo = 750
}

//atualiza o tamanho do palco de acordo com o tamanho da tela
function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}

ajustaTamanhoPalco()


//cronometro

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html';

    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }

    
    
},1000)

//criar posição randômica

function posicaoRandom(){
    
    //remover mosquito anterior
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if( vidas > 3){
            window.location.href = 'fim_do_jogo.html'
        }else{
            
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
             
            vidas++
        }

    }
   
    

    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0: posX;
    posY = posY < 0 ? 0: posY;
    

    //criar elemento html

    var mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoRandom() + ' ' + ladoRandom() 
    
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }



    document.body.appendChild(mosquito)


    
}

//tamanho randômico da mosca

function tamanhoRandom(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
        default:
            return 'mosquito1'
    }
}

//lado da mosca aleatorio

function ladoRandom(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
        default:
            return 'ladoA'        
    }         



}



