
var correctasSG=0;
var incorrectasSG=0;
var recursoSG;


var RespuestasCorrectasSG = [ "accept", "ask", "add", "call", "circle", "continue", "cook", "discover", "discuss", "hope", "label", "fight", "give", "know", "lend", "listen", "match", "practice", "thank" ];
var posicionRespuestaCorrectaSG=0;

const cardIdsSG = ['card-sg-1', 'card-sg-2', 'card-sg-3', 'card-sg-4','card-sg-5','card-sg-6','card-sg-7','card-sg-8','card-sg-9','card-sg-10','card-sg-11','card-sg-12','card-sg-13','card-sg-14', 'card-sg-15', 
                  'card-sg-16', 'card-sg-17', 'card-sg-18', 'card-sg-19', 'retroalimentacion-2'];
let currentCardIndexSG = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    // Función para que agregue el número de letras que contiene cada palabra a escribir
    for (let i = 0; i <= 19; i++) {

        posicionRespuestaCorrectaSG=i;
        longitud = RespuestasCorrectasSG[i].length;
        $("#longitud-letras-sg-" + i).text("La palabra contiene " + longitud + " letras")

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

    function evaluarRespuestasSG(recurso, posicionRespuestaCorrecta){

        if( $("." + recurso + ' input').val().toLowerCase().replace(/-/g, '') == RespuestasCorrectasSG[posicionRespuestaCorrecta] ) {

            $("." + recurso + " .input-actividad-1").addClass("is-valid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta-sg").text("Your answer is correct.");

            correctasSG++;
            console.log("Respuestas correctas: " + correctasSG)

        } else {

            $("." + recurso + " .input-actividad-1").addClass("is-invalid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta-sg").text("Your answer is incorrect.");

            incorrectasSG++;
            console.log("Respuestas incorrectas: " + incorrectasSG)
        }

    }

    function evaluarActividadSG(botonId, posicionRespuestaCorrecta) {
        // Obtén el recurso asociado al botón
        recurso = $(`#${botonId}`).attr('name');

        // Llama a la función evaluarRespuestas con los parámetros necesarios
        evaluarRespuestasSG(recurso, posicionRespuestaCorrecta);
    
        // Deshabilita el botón y habilita el siguiente paso
        $(`#${botonId}`).attr('disabled', true);

    }

    function enableNextButtonSG() {
        $('#next-button-sg').attr('disabled', false);
        $('#next-button-sg').removeClass('btn-descarga-blanco').addClass('btn-descarga');
        $('#next-button-sg').focus();
    }

    // Función para mostrar la siguiente card
    function showNextCardSG() {
        // Ocultar card actual
        $('#' + cardIdsSG[currentCardIndexSG]).removeClass('d-block').addClass('d-none');

        // Incrementar índice
        currentCardIndexSG++;

        // Obtener el elemento al que se quiere dar foco en la nueva tarjeta
        const focusElementId = 'longitud-letras-sg-' + currentCardIndexSG; // Ajusta el ID según tu estructura HTML

        // Verificar si se ha llegado al final
        if (currentCardIndexSG < cardIdsSG.length-1) {
            // Mostrar siguiente card
            $('#' + cardIdsSG[currentCardIndexSG]).removeClass('d-none').addClass('d-block');
            $('#' + focusElementId).focus();
            $('#next-button-sg').removeClass('btn-descarga').addClass('btn-descarga-blanco');
        } else {
           
            $('#retroalimentacion-2').removeClass('d-none').addClass('d-block');

            $('#next-button-sg').removeClass('d-inline-block').addClass('d-none');

            $('#score-2').focus();

            $('#right-answers-2').text(correctasSG);
            $('#wrong-answers-2').text(incorrectasSG);

            if( incorrectasSG > 1 ){
                $('.mensaje-incorrecto-2').removeClass('d-none').addClass('d-block');
                $('#try-again-2').removeClass('d-none').addClass('d-inline-block');
            } else {
                $('.mensaje-correcto-2').removeClass('d-none').addClass('d-block');
                $('.separador-2').removeClass('d-none').addClass('d-block');
                $('#third-group').removeClass('d-none').addClass('d-block');
            }

        }

        // Deshabilitar el botón antes de mostrar la siguiente card
        $('#next-button-sg').attr('disabled', true);
    }

    // Asociar evento click al botón
    $(document).on('click', '#next-button-sg', showNextCardSG);

    $(document).on('click', '#check-sg-1', function(e) {
        evaluarActividadSG('check-sg-1', 0);
        enableNextButtonSG();
    });
    
    $(document).on('click', '#check-sg-2', function(e) {
        evaluarActividadSG('check-sg-2', 1);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-3', function(e) {
        evaluarActividadSG('check-sg-3', 2);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-4', function(e) {
        evaluarActividadSG('check-sg-4', 3);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-5', function(e) {
        evaluarActividadSG('check-sg-5', 4);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-6', function(e) {
        evaluarActividadSG('check-sg-6', 5);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-7', function(e) {
        evaluarActividadSG('check-sg-7', 6);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-8', function(e) {
        evaluarActividadSG('check-sg-8', 7);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-9', function(e) {
        evaluarActividadSG('check-sg-9', 8);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-10', function(e) {
        evaluarActividadSG('check-sg-10', 9);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-11', function(e) {
        evaluarActividadSG('check-sg-11', 10);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-12', function(e) {
        evaluarActividadSG('check-sg-12', 11);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-13', function(e) {
        evaluarActividadSG('check-sg-13', 12);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-14', function(e) {
        evaluarActividadSG('check-sg-14', 13);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-15', function(e) {
        evaluarActividadSG('check-sg-15', 14);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-16', function(e) {
        evaluarActividadSG('check-sg-16', 15);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-17', function(e) {
        evaluarActividadSG('check-sg-17', 16);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-18', function(e) {
        evaluarActividadSG('check-sg-18', 17);
        enableNextButtonSG();
    });

    $(document).on('click', '#check-sg-19', function(e) {
        evaluarActividadSG('check-sg-19', 18);
        enableNextButtonSG();
    });

    // $(document).on('click', '#retro-2', function(e) {

    //     $('#' + cardIdsSG[18]).removeClass('d-block').addClass('d-none');
    //     $('#' + cardIdsSG[19]).removeClass('d-none').addClass('d-block');

    //     $('#score-2').focus();

    //     $('#right-answers-2').text(correctasSG);
    //     $('#wrong-answers-2').text(incorrectasSG);

    //     if( incorrectasSG > 1 ){
    //         $('.mensaje-incorrecto-2').removeClass('d-none').addClass('d-block');
    //         $('#try-again-2').removeClass('d-none').addClass('d-block');
    //     } else {
    //         $('.mensaje-correcto-2').removeClass('d-none').addClass('d-block');
    //         $('#third-group').removeClass('d-none').addClass('d-block');
    //     }

    // });

    $(document).on('click', '#try-again-2', function(e) {

        correctasSG=0;
        incorrectasSG=0;

        currentCardIndexSG = 0;

        $('#' + cardIdsSG[19]).removeClass('d-block').addClass('d-none');
        $('#' + cardIdsSG[currentCardIndexSG]).removeClass('d-none').addClass('d-block');
        $('#' + cardIdsSG[currentCardIndexSG]).addClass('slide-left');
        $('#try-again-2').removeClass('d-inline-block').addClass('d-none');
        $('#next-button-sg').removeClass('d-none').addClass('d-inline-block');
        $('#retro-2').removeClass('d-block').addClass('d-none');
        
        $("#second-group" + " .input-actividad-1").removeClass("is-valid");
        $("#second-group" + " .input-actividad-1").removeClass("is-invalid");
        $("#second-group" + " .input-actividad-1").attr('readonly', false);
        $("#second-group" + " .input-actividad-1").val("");

        $("#second-group" + " #respuesta-correcta-incorrecta-sg").text("");

        $("#parrafo-sg").focus();

        $('#second-group' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

    });

})