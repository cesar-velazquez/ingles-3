$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ "arose", "arisen", "was/were", "been", "awoken", "begun", "bite", 
        "blew", "broken", "choose", "chose" , "come", "rode", "rang", "rung", "risen", "ran", "saw", "seen", 
        "do", "drunk", "fallen", "fall", "drove", "driven", "ate", "flew"
    ];

    var Respuestas_correctas_2 = [ "was", "were"]
    
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

        $(".mensaje-incorrecto-42").removeClass("d-block");
        $(".mensaje-incorrecto-42").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#input-act42-" + i).val().toLowerCase() == Respuestas_correctas[i-1])){
                
                $("#input-act42-" + i).removeClass("is-invalid");
                $("#input-act42-" + i).attr('readonly', false);

                $("#input-act42-" + i).val("");

            } else{
                console.log("Hay respuestas correctas");
            }

        }

        $("#try-act42").removeClass("btn-descarga");
        $("#try-act42").addClass("btn-descarga-blanco");
        $("#try-act42").attr('disabled', true);

        $("#instruction-1").focus();

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-act42").removeAttr('disabled');

                $("#try-act42").removeClass("btn-descarga-blanco");
                $("#try-act42").addClass("btn-descarga");

                $(".mensaje-incorrecto-42").removeClass("d-none");
                $(".mensaje-incorrecto-42").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    for (var i = 1; i <= Respuestas_correctas.length; i++) {

                        $("#input-act42-" + i).removeClass("is-invalid");
                        $("#input-act42-" + i).addClass("is-valid");
                        $("#input-act42-" + i).attr('readonly', true);

                        $("#input-act42-" + i).val(Respuestas_correctas[i-1]);
            
                    }
                    
                    $(".mensaje-incorrecto-42").removeClass("d-block");
                    $(".mensaje-incorrecto-42").addClass("d-none");

                    $(".mensaje-ver-respuestas-42").removeClass("d-none");
                    $(".mensaje-ver-respuestas-42").addClass("d-block");

                    $(".retroalimentacion-42").removeClass("d-none");
                    $(".retroalimentacion-42").addClass("d-block");

                    $("#try-act42").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-42").removeClass("d-none");
                $(".mensaje-correcto-42").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-act42', function(e) {
        
        recurso = $(this).attr('name');

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if($("#input-act42-" + i).val().toLowerCase() == Respuestas_correctas[i-1] || $("#input-act42-" + i).val().toLowerCase() == Respuestas_correctas_2[0] || $("#input-act42-" + i).val().toLowerCase() == Respuestas_correctas_2[1] ){

                $("#input-act42-" + i).addClass("is-valid");
                $("#input-act42-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-act42-" + i).html("word " + i + " is correct!");

            }else{

                $("#input-act42-" + i).addClass("is-invalid");
                $("#input-act42-" + i).attr('readonly', true);

                $(".mensaje-correct-incorrect-act42-" + i).html("word " + i + " is incorrect!");

                mal++;

            }

        }

        $("#check-act42").attr('disabled', true);
        evaluarRespuestas();
        
    });

    $(document).on('click', '#try-act42', function(e) {
        repetir();
    })

    
})