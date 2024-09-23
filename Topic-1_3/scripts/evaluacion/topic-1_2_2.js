$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ "Jake", "July", "Mary", "Sam" ];
    
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

        $(".mensaje-incorrecto-2").removeClass("d-block");
        $(".mensaje-incorrecto-2").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#input-e-" + i).val().toLowerCase() == Respuestas_correctas[i-1].toLowerCase())){
                
                $("#input-e-" + i).removeClass("is-invalid");
                $("#input-e-" + i).attr('readonly', false);

                $("#input-e-" + i).val("");

            } else{
                console.log("Hay respuestas correctas");
            }

        }

        $("#check-s-try-2").removeClass("btn-descarga");
        $("#check-s-try-2").addClass("btn-descarga-blanco");
        $("#check-s-try-2").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#check-s-try-2").removeAttr('disabled');

                $("#check-s-try-2").removeClass("btn-descarga-blanco");
                $("#check-s-try-2").addClass("btn-descarga");

                $(".mensaje-incorrecto-2").removeClass("d-none");
                $(".mensaje-incorrecto-2").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    for (var i = 1; i <= Respuestas_correctas.length; i++) {

                        $("#input-e-" + i).removeClass("is-invalid");
                        $("#input-e-" + i).addClass("is-valid");
                        $("#input-e-" + i).attr('readonly', true);

                        $("#input-e-" + i).val(Respuestas_correctas[i-1]);
            
                    }
                    
                    $(".mensaje-incorrecto-2").removeClass("d-block");
                    $(".mensaje-incorrecto-2").addClass("d-none");

                    $(".mensaje-ver-respuestas-2").removeClass("d-none");
                    $(".mensaje-ver-respuestas-2").addClass("d-block");

                    $(".retroalimentacion-2").removeClass("d-none");
                    $(".retroalimentacion-2").addClass("d-block");

                    $("#check-s-try-2").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-2").removeClass("d-none");
                $(".mensaje-correcto-2").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-S1_2_2', function(e) {
        
        recurso = $(this).attr('name');

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            console.log("antes del if");
            
            if($("#input-e-" + i).val().toLowerCase() == Respuestas_correctas[i-1].toLowerCase() ){

                console.log("respondio bien");

                $("#input-e-" + i).addClass("is-valid");
                $("#input-e-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-esc-" + i).html("Question " + i + " is correct!");

            }else{

                console.log("respondio mal");

                $("#input-e-" + i).addClass("is-invalid");
                $("#input-e-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-esc-" + i).html("Statement " + i + " is incorrect!");

                mal++;

            }

        }

        $("#check-S1_2_2").attr('disabled', true);
        evaluarRespuestas();
        
    });

    $(document).on('click', '#check-s-try-2', function(e) {
        repetir();
    })

    
})