$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ "3", "7", "1", "5", "2", "6", "4", "8" ];
    
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

    function repetir(){

        $(".mensaje-incorrecto-4").removeClass("d-block");
        $(".mensaje-incorrecto-4").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#input-4-" + i).val().toLowerCase() == Respuestas_correctas[i-1])){
                
                $("#input-4-" + i).removeClass("is-invalid");
                $("#input-4-" + i).attr('readonly', false);

                $("#input-4-" + i).val("");

            } else{
                console.log("Hay respuestas correctas");
            }

        }

        $("#try-1-4").removeClass("btn-descarga");
        $("#try-1-4").addClass("btn-descarga-blanco");
        $("#try-1-4").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-1-4").removeAttr('disabled');

                $("#try-1-4").removeClass("btn-descarga-blanco");
                $("#try-1-4").addClass("btn-descarga");

                $(".mensaje-incorrecto-4").removeClass("d-none");
                $(".mensaje-incorrecto-4").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    for (var i = 1; i <= Respuestas_correctas.length; i++) {

                        $("#input-4-" + i).removeClass("is-invalid");
                        $("#input-4-" + i).addClass("is-valid");
                        $("#input-4-" + i).attr('readonly', true);

                        $("#input-4-" + i).val(Respuestas_correctas[i-1]);
            
                    }
                    
                    $(".mensaje-incorrecto-4").removeClass("d-block");
                    $(".mensaje-incorrecto-4").addClass("d-none");

                    $(".mensaje-ver-respuestas-4").removeClass("d-none");
                    $(".mensaje-ver-respuestas-4").addClass("d-block");

                    $(".retroalimentacion-4").removeClass("d-none");
                    $(".retroalimentacion-4").addClass("d-block");

                    $("#try-1-4").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-4").removeClass("d-none");
                $(".mensaje-correcto-4").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-1-4', function(e) {
        
        recurso = $(this).attr('name');

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if($("#input-4-" + i).val().toLowerCase() == Respuestas_correctas[i-1] ){

                $("#input-4-" + i).addClass("is-valid");
                $("#input-4-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-esc-4-" + i).html("answer " + i + " is correct!");

            }else{

                $("#input-4-" + i).addClass("is-invalid");
                $("#input-4-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-esc-4-" + i).html("answer " + i + " is incorrect!");

                mal++;

            }

        }

        $("#check-1-4").attr('disabled', true);
        evaluarRespuestas();
        
    });

    $(document).on('click', '#try-1-4', function(e) {
        repetir();
    })

    
})