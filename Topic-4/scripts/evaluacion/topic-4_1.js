
var sentenciasContestadas=0; //veces
var correctas=0;
var incorrectas=0;
var recurso;

const audio = document.querySelectorAll("audio");

var RespuestasCorrectas1 = [ "for", "over", "lose", "hold", "full", "nervous", "interview", "height", "airplane", "upload", "awful", "stand", "runner", "spider", "dream" ];
var posicionRespuestaCorrecta=0;

const cardIdsFG = ['card-fg-1', 'card-fg-2', 'card-fg-3', 'card-fg-4','card-fg-5','card-fg-6','card-fg-7','card-fg-8','card-fg-9','card-fg-10','card-fg-11','card-fg-12','card-fg-13','card-fg-14', 'card-fg-15', 'retroalimentacion-1'];
let currentCardIndexFG = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    // Función para que agregue el número de letras que contiene cada palabra a escribir
    for (let i = 0; i <= 14; i++) {

        posicionrespuestaCorrecta=i;
        longitud = RespuestasCorrectas1[i].length;
        $("#longitud-letras-" + i).text("La palabra contiene " + longitud + " letras")

    }

});

$(function() {

    // Evaluar si ya estan llenos los campos

    function verificarRespuestasEscritas(event) {

        var formularioCompleto = true;

        if (event) {
            $("." + recurso +" input").each(function(){                
                if($(this).val().length <= 0 ){
                    TodasSi=0;                    
                    formularioCompleto = false;     
                }                                                          
            });                              
            return formularioCompleto;
        }
        return false;
    }

    $(".escribir").keyup(function() {
        recurso = $(this).attr('name');
        TodasSi=1; 
        if (verificarRespuestasEscritas(event)) { //Están contestadas todas
            $("." + recurso + " .boton-check").removeAttr('disabled');                   
        }
    });

    /* ---------------- ---------------- */

    function evaluarRespuestas(recurso, posicionRespuestaCorrecta){

        if( $("." + recurso + ' input').val().toLowerCase().replace(/-/g, '') == RespuestasCorrectas1[posicionRespuestaCorrecta] ) {

            $("." + recurso + " .input-actividad-1").addClass("is-valid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta").text("Your answer is correct.");

            correctas++;
            console.log("Respuestas correctas: " + correctas)

        } else {

            $("." + recurso + " .input-actividad-1").addClass("is-invalid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta").text("Your answer is incorrect.");

            incorrectas++;
            console.log("Respuestas incorrectas: " + incorrectas)
        }

    }

    function evaluarActividad(botonId, posicionRespuestaCorrecta) {
        // Obtén el recurso asociado al botón
        recurso = $(`#${botonId}`).attr('name');

        // Llama a la función evaluarRespuestas con los parámetros necesarios
        evaluarRespuestas(recurso, posicionRespuestaCorrecta);
    
        // Deshabilita el botón y habilita el siguiente paso
        $(`#${botonId}`).attr('disabled', true);

    }

    function enableNextButton() {
        $('#next-button').attr('disabled', false);
        $('#next-button').removeClass('btn-descarga-blanco').addClass('btn-descarga');
        $('#next-button').focus();
    }

    // Función para mostrar la siguiente card
    function showNextCard() {
        // Ocultar card actual
        $('#' + cardIdsFG[currentCardIndexFG]).removeClass('d-block').addClass('d-none');

        // Incrementar índice
        currentCardIndexFG++;

        // Obtener el elemento al que se quiere dar foco en la nueva tarjeta
        const focusElementId = 'longitud-letras-' + currentCardIndexFG; // Ajusta el ID según tu estructura HTML
    
        // Verificar si se ha llegado al final
        if (currentCardIndexFG < cardIdsFG.length-1) { //16 longitud
            // Mostrar siguiente card
            $('#' + cardIdsFG[currentCardIndexFG]).removeClass('d-none').addClass('d-block');
            // Mostrar siguiente card y dar foco
            //$('#' + cardIdsFG[currentCardIndexFG]).removeClass('d-none').addClass('d-block').find('#' + focusElementId).focus();
            $('#' + focusElementId).focus();

            $('#next-button').removeClass('btn-descarga').addClass('btn-descarga-blanco');

        } else {

            $('#retroalimentacion-1').removeClass('d-none').addClass('d-block');

            $('#next-button').removeClass('d-inline-block').addClass('d-none');

            $('#score-1').focus();

            $('#right-answers-1').text(correctas);
            $('#wrong-answers-1').text(incorrectas);

            if( incorrectas > 1 ){
                $('.mensaje-incorrecto-1').removeClass('d-none').addClass('d-block');
                $('#try-again-1').removeClass('d-none').addClass('d-inline-block');
            } else {
                $('.mensaje-correcto-1').removeClass('d-none').addClass('d-block');
                $('.separador-1').removeClass('d-none').addClass('d-block');
                $('#second-group').removeClass('d-none').addClass('d-block');
            }

        }

        // Deshabilitar el botón antes de mostrar la siguiente card
        $('#next-button').attr('disabled', true);

    }

    // Asociar evento click al botón
    $(document).on('click', '#next-button', showNextCard);


    $(document).on('click', '#check-fg-1', function(e) {
        evaluarActividad('check-fg-1', 0);
        enableNextButton();
    });
    
    $(document).on('click', '#check-fg-2', function(e) {
        evaluarActividad('check-fg-2', 1);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-3', function(e) {
        evaluarActividad('check-fg-3', 2);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-4', function(e) {
        evaluarActividad('check-fg-4', 3);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-5', function(e) {
        evaluarActividad('check-fg-5', 4);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-6', function(e) {
        evaluarActividad('check-fg-6', 5);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-7', function(e) {
        evaluarActividad('check-fg-7', 6);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-8', function(e) {
        evaluarActividad('check-fg-8', 7);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-9', function(e) {
        evaluarActividad('check-fg-9', 8);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-10', function(e) {
        evaluarActividad('check-fg-10', 9);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-11', function(e) {
        evaluarActividad('check-fg-11', 10);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-12', function(e) {
        evaluarActividad('check-fg-12', 11);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-13', function(e) {
        evaluarActividad('check-fg-13', 12);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-14', function(e) {
        evaluarActividad('check-fg-14', 13);
        enableNextButton();
    });

    $(document).on('click', '#check-fg-15', function(e) {
        evaluarActividad('check-fg-15', 14);
        enableNextButton();
    });

    // $(document).on('click', '#retro-1', function(e) {

    //     $('#' + cardIdsFG[14]).removeClass('d-block').addClass('d-none');
    //     $('#' + cardIdsFG[15]).removeClass('d-none').addClass('d-block');

    //     $('#score-1').focus();

    //     $('#right-answers-1').text(correctas);
    //     $('#wrong-answers-1').text(incorrectas);

    //     if( incorrectas > 1 ){
    //         $('.mensaje-incorrecto-1').removeClass('d-none').addClass('d-block');
    //         $('#try-again-1').removeClass('d-none').addClass('d-block');
    //     } else {
    //         $('.mensaje-correcto-1').removeClass('d-none').addClass('d-block');
    //         $('#second-group').removeClass('d-none').addClass('d-block');
    //     }

    // });

    $(document).on('click', '#try-again-1', function(e) {

        sentenciasContestadas=0; //veces
        correctas=0;
        incorrectas=0;

        currentCardIndexFG = 0;

        $('#' + cardIdsFG[15]).removeClass('d-block').addClass('d-none');
        $('#' + cardIdsFG[currentCardIndexFG]).removeClass('d-none').addClass('d-block');
        $('#' + cardIdsFG[currentCardIndexFG]).addClass('slide-left');
        $('#try-again-1').removeClass('d-inline-block').addClass('d-none');
        $('#next-button').removeClass('d-none').addClass('d-inline-block');
        $('#retro-1').removeClass('d-block').addClass('d-none');
        
        $(".input-actividad-1").removeClass("is-valid");
        $(".input-actividad-1").removeClass("is-invalid");
        $(".input-actividad-1").attr('readonly', false);
        $(".input-actividad-1").val("");

        $("#respuesta-correcta-incorrecta").text("");

        $("#parrafo-fg").focus();

        $('#first-group' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

    });

    
})
