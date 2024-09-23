$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ "forbidden", "forgiven", "given", "sung", "swun" ];
    
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

        $(".mensaje-incorrecto-44").removeClass("d-block");
        $(".mensaje-incorrecto-44").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#input-act44-" + i).val().toLowerCase() == Respuestas_correctas[i-1])){
                
                $("#input-act44-" + i).removeClass("is-invalid");
                $("#input-act44-" + i).attr('readonly', false);

                $("#input-act44-" + i).val("");

            } else{
                console.log("Hay respuestas correctas");
            }

        }

        $("#try-act44").removeClass("btn-descarga");
        $("#try-act44").addClass("btn-descarga-blanco");
        $("#try-act44").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-act44").removeAttr('disabled');

                $("#try-act44").removeClass("btn-descarga-blanco");
                $("#try-act44").addClass("btn-descarga");

                $(".mensaje-incorrecto-44").removeClass("d-none");
                $(".mensaje-incorrecto-44").addClass("d-block");

                veces=0;
                mal=0;

                if(intentos==2){

                    $(".pista-1").removeClass("d-none").addClass("d-block");
                    $(".pista-2").removeClass("d-none").addClass("d-block");
                    $(".pista-3").removeClass("d-none").addClass("d-block");
                    $(".pista-4").removeClass("d-none").addClass("d-block");
                    $(".pista-5").removeClass("d-none").addClass("d-block");
  
                }

                if (intentos==4){

                    for (var i = 1; i <= Respuestas_correctas.length; i++) {

                        $("#input-act44-" + i).removeClass("is-invalid");
                        $("#input-act44-" + i).addClass("is-valid");
                        $("#input-act44-" + i).attr('readonly', true);

                        $("#input-act44-" + i).val(Respuestas_correctas[i-1]);
            
                    }
                    
                    $(".mensaje-incorrecto-44").removeClass("d-block");
                    $(".mensaje-incorrecto-44").addClass("d-none");

                    $(".mensaje-ver-respuestas-44").removeClass("d-none");
                    $(".mensaje-ver-respuestas-44").addClass("d-block");

                    $(".retroalimentacion-44").removeClass("d-none");
                    $(".retroalimentacion-44").addClass("d-block");

                    $("#try-act44").attr('disabled', true);

                }

                
            } else {

                $(".mensaje-correcto-44").removeClass("d-none");
                $(".mensaje-correcto-44").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-act44', function(e) {
        
        recurso = $(this).attr('name');

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if($("#input-act44-" + i).val().toLowerCase() == Respuestas_correctas[i-1] ){

                $("#input-act44-" + i).addClass("is-valid");
                $("#input-act44-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-act44-" + i).html("word " + i + " is correct!");

            }else{

                $("#input-act44-" + i).addClass("is-invalid");
                $("#input-act44-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-act44-" + i).html("word " + i + " is incorrect!");

                mal++;

            }

        }

        $("#check-act44").attr('disabled', true);
        evaluarRespuestas();
        
    });

    $(document).on('click', '#try-act44', function(e) {
        repetir();
    })

    
})