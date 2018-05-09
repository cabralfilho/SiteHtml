$( document ).ready(function() {

    //swal("Here's the title!", "...and here's the text!");

    //Player de fundo

    var audio = new Audio('musicas/Entrada.wav');
    audio.play();


    setTimeout(function(){
        $('#carregamento').addClass('esconder');
        $('#englobarTudo').removeClass('esconder');
    }, 3000);



});

