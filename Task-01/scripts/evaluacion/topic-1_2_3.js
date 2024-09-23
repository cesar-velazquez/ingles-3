$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ 2, 7, 4, 1, 6, 8, 5, 3 ];
    
    // Evaluar si ya estan llenos los campos

    function verificarRespuestasContestadas(event) {
        var formularioCompleto = true;
        if (event) {
            $("." + recurso +" select").each(function(){
                if($(this).val()==null){ //No selecciono una opcion  
                    TodasSi=0;                    
                    formularioCompleto = false;                 
                }                               
            });                              
            return formularioCompleto;
        }
        return false;
    }

    $( ".reactivo" ).change(function() {
        recurso = $(this).attr('name');
        TodasSi=1;          
        if (verificarRespuestasContestadas(event)) { //Están contestadas todas
            $("." + recurso + " .boton-check").removeAttr('disabled');                   
        }
    });


    /* ---------------- ---------------- */


    function repetir(){

        $(".mensaje-incorrecto-3").removeClass("d-block");
        $(".mensaje-incorrecto-3").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#Act_Select1_3_" + i).val() == Respuestas_correctas[i-1])){
                
                $("#Act_Select1_3_" + i).removeClass("is-invalid");
                $("#Act_Select1_3_" + i).attr('disabled', false);

                $("#Act_Select1_3_" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#check-s-try-3").removeClass("btn-descarga");
        $("#check-s-try-3").addClass("btn-descarga-blanco");
        $("#check-s-try-3").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#check-s-try-3").removeAttr('disabled');

                $("#check-s-try-3").removeClass("btn-descarga-blanco");
                $("#check-s-try-3").addClass("btn-descarga");

                $(".mensaje-incorrecto-3").removeClass("d-none");
                $(".mensaje-incorrecto-3").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    $(".respuesta-correcta-select-3_1").val('2');
                    $(".respuesta-correcta-select-3_2").val('7');
                    $(".respuesta-correcta-select-3_3").val('4');
                    $(".respuesta-correcta-select-3_4").val('1');
                    $(".respuesta-correcta-select-3_5").val('6');
                    $(".respuesta-correcta-select-3_6").val('8');
                    $(".respuesta-correcta-select-3_7").val('5');
                    $(".respuesta-correcta-select-3_8").val('3');
                    
                    $(".seleccionar1_2_3 .custom-select").removeClass("is-invalid");
                    $(".seleccionar1_2_3 .custom-select").addClass("is-valid");
                    $(".seleccionar1_2_3 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-3").removeClass("d-block");
                    $(".mensaje-incorrecto-3").addClass("d-none");

                    $(".mensaje-ver-respuestas-3").removeClass("d-none");
                    $(".mensaje-ver-respuestas-3").addClass("d-block");

                    $(".retroalimentacion-3").removeClass("d-none");
                    $(".retroalimentacion-3").addClass("d-block");

                    $("#check-s-try-3").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-3").removeClass("d-none");
                $(".mensaje-correcto-3").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-S1_2_3', function(e) {
        
        recurso = $(this).attr('name');
        var texto;
    
        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            texto = $("." + recurso + ' #Act_Select1_3_' + i).val();
            console.log("Variable texto: " + texto);

            string=Respuestas_correctas[i-1];
            console.log("Variable string: " + string);

            var correcto=false;            

            if(texto == string ){ 
                console.log("Entro a la evaluación");
                correcto=true;
            }

            if(correcto){
                console.log("respuestas bien");
                $("." + recurso + " #Act_Select1_3_" + i).addClass("is-valid");
                $("." + recurso + " #Act_Select1_3_" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-3_" + i).html("Statement " + i + " is correct!");

            }else{
                console.log("respuestas mal");
                $("." + recurso + " #Act_Select1_3_" + i).addClass("is-invalid");
                $("." + recurso + " #Act_Select1_3_" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-3_" + i).html("Statement " + i + " is incorrect!");

                mal++;
            }               
        }

        $("#check-S1_2_3").attr('disabled', true);
        evaluarRespuestas();
        

    });

    $(document).on('click', '#check-s-try-3', function(e) {
        repetir();
    })

    
})