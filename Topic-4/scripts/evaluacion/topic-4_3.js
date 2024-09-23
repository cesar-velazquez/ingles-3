
var correctasTG=0;
var incorrectasTG=0;
var recursoTG;


var RespuestasCorrectasTG = [ "arise", "awake", "be", "break", "bring", "come", "cost", "cut", "draw", "drink", "fly", "forbid", "give", "go", "grow", "sweep", "swim", "take", "teach", "write" ];
var posicionRespuestaCorrectaTG=0;

const cardIdsTG = ['card-tg-1', 'card-tg-2', 'card-tg-3', 'card-tg-4','card-tg-5','card-tg-6','card-tg-7','card-tg-8','card-tg-9','card-tg-10','card-tg-11','card-tg-12','card-tg-13','card-tg-14', 'card-tg-15', 
                  'card-tg-16', 'card-tg-17', 'card-tg-18', 'card-tg-19', 'card-tg-20', 'retroalimentacion-3'];
let currentCardIndexTG = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    // Función para que agregue el número de letras que contiene cada palabra a escribir
    for (let i = 0; i <= 20; i++) {

        posicionRespuestaCorrectaTG=i;
        longitud = RespuestasCorrectasTG[i].length;
        $("#longitud-letras-tg-" + i).text("La palabra contiene " + longitud + " letras")
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

    function evaluarRespuestasTG(recurso, posicionRespuestaCorrecta){

        if( $("." + recurso + ' input').val().toLowerCase().replace(/-/g, '') == RespuestasCorrectasTG[posicionRespuestaCorrecta] ) {

            $("." + recurso + " .input-actividad-1").addClass("is-valid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta-tg").text("Your answer is correct.");

            correctasTG++;
            console.log("Respuestas correctas: " + correctasTG)

        } else {

            $("." + recurso + " .input-actividad-1").addClass("is-invalid");
            $("." + recurso + " .input-actividad-1").attr('readonly', true);

            $("." + recurso + " #respuesta-correcta-incorrecta-tg").text("Your answer is incorrect.");

            incorrectasTG++;
            console.log("Respuestas incorrectas: " + incorrectasTG)
        }

    }

    function evaluarActividadTG(botonId, posicionRespuestaCorrecta) {
        // Obtén el recurso asociado al botón
        recurso = $(`#${botonId}`).attr('name');

        // Llama a la función evaluarRespuestas con los parámetros necesarios
        evaluarRespuestasTG(recurso, posicionRespuestaCorrecta);
    
        // Deshabilita el botón y habilita el siguiente paso
        $(`#${botonId}`).attr('disabled', true);

    }

    function enableNextButtonTG() {
        $('#next-button-tg').attr('disabled', false);
        $('#next-button-tg').removeClass('btn-descarga-blanco').addClass('btn-descarga');
        $('#next-button-tg').focus();
    }

    // Función para mostrar la siguiente card
    function showNextCardTG() {
        // Ocultar card actual
        $('#' + cardIdsTG[currentCardIndexTG]).removeClass('d-block').addClass('d-none');

        // Incrementar índice
        currentCardIndexTG++;

        // Obtener el elemento al que se quiere dar foco en la nueva tarjeta
        const focusElementId = 'longitud-letras-tg-' + currentCardIndexTG; // Ajusta el ID según tu estructura HTML

        // Verificar si se ha llegado al final
        if (currentCardIndexTG < cardIdsTG.length-1) {
            // Mostrar siguiente card
            $('#' + cardIdsTG[currentCardIndexTG]).removeClass('d-none').addClass('d-block');
            $('#' + focusElementId).focus();
            $('#next-button-tg').removeClass('btn-descarga').addClass('btn-descarga-blanco');
        } else {

            $('#retroalimentacion-3').removeClass('d-none').addClass('d-block');

            $('#next-button-tg').removeClass('d-inline-block').addClass('d-none');

            $('#score-3').focus();

            $('#right-answers-3').text(correctasTG);
            $('#wrong-answers-3').text(incorrectasTG);
    
            if( incorrectasTG > 1 ){
                $('.mensaje-incorrecto-3').removeClass('d-none').addClass('d-block');
                $('#try-again-3').removeClass('d-none').addClass('d-inline-block');
            } else {
                $('.mensaje-correcto-3').removeClass('d-none').addClass('d-block');
            }
            
        }

        // Deshabilitar el botón antes de mostrar la siguiente card
        $('#next-button-tg').attr('disabled', true);
    }

    // Asociar evento click al botón
    $(document).on('click', '#next-button-tg', showNextCardTG);

    $(document).on('click', '#check-tg-1', function(e) {
        evaluarActividadTG('check-tg-1', 0);
        enableNextButtonTG();
    });
    
    $(document).on('click', '#check-tg-2', function(e) {
        evaluarActividadTG('check-tg-2', 1);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-3', function(e) {
        evaluarActividadTG('check-tg-3', 2);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-4', function(e) {
        evaluarActividadTG('check-tg-4', 3);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-5', function(e) {
        evaluarActividadTG('check-tg-5', 4);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-6', function(e) {
        evaluarActividadTG('check-tg-6', 5);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-7', function(e) {
        evaluarActividadTG('check-tg-7', 6);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-8', function(e) {
        evaluarActividadTG('check-tg-8', 7);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-9', function(e) {
        evaluarActividadTG('check-tg-9', 8);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-10', function(e) {
        evaluarActividadTG('check-tg-10', 9);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-11', function(e) {
        evaluarActividadTG('check-tg-11', 10);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-12', function(e) {
        evaluarActividadTG('check-tg-12', 11);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-13', function(e) {
        evaluarActividadTG('check-tg-13', 12);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-14', function(e) {
        evaluarActividadTG('check-tg-14', 13);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-15', function(e) {
        evaluarActividadTG('check-tg-15', 14);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-16', function(e) {
        evaluarActividadTG('check-tg-16', 15);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-17', function(e) {
        evaluarActividadTG('check-tg-17', 16);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-18', function(e) {
        evaluarActividadTG('check-tg-18', 17);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-19', function(e) {
        evaluarActividadTG('check-tg-19', 18);
        enableNextButtonTG();
    });

    $(document).on('click', '#check-tg-20', function(e) {
        evaluarActividadTG('check-tg-20', 19);
        enableNextButtonTG();
    });

    // $(document).on('click', '#retro-3', function(e) {

    //     $('#' + cardIdsTG[19]).removeClass('d-block').addClass('d-none');
    //     $('#' + cardIdsTG[20]).removeClass('d-none').addClass('d-block');

    //     $('#score-3').focus();

    //     $('#right-answers-3').text(correctasTG);
    //     $('#wrong-answers-3').text(incorrectasTG);

    //     if( incorrectasTG > 1 ){
    //         $('.mensaje-incorrecto-3').removeClass('d-none').addClass('d-block');
    //         $('#try-again-3').removeClass('d-none').addClass('d-block');
    //     } else {
    //         $('.mensaje-correcto-3').removeClass('d-none').addClass('d-block');
    //     }

    // });

    $(document).on('click', '#try-again-3', function(e) {

        correctasTG=0;
        incorrectasTG=0;

        currentCardIndexTG = 0;

        $('#' + cardIdsTG[20]).removeClass('d-block').addClass('d-none');
        $('#' + cardIdsTG[currentCardIndexTG]).removeClass('d-none').addClass('d-block');
        $('#' + cardIdsTG[currentCardIndexTG]).addClass('slide-left');
        $('#try-again-3').removeClass('d-inline-block').addClass('d-none');
        $('#next-button-tg').removeClass('d-none').addClass('d-inline-block');
        $('#retro-3').removeClass('d-block').addClass('d-none');
        
        $("#third-group" + " .input-actividad-1").removeClass("is-valid");
        $("#third-group" + " .input-actividad-1").removeClass("is-invalid");
        $("#third-group" + " .input-actividad-1").attr('readonly', false);
        $("#third-group" + " .input-actividad-1").val("");

        $("#third-group" + " #respuesta-correcta-incorrecta-tg").text("");

        $("#parrafo-tg").focus();

        $('#third-group' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

    });

})