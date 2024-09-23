$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ 3, 7, 6, 5, 4, 2, 1 ];
    
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

        $(".mensaje-incorrecto").removeClass("d-block");
        $(".mensaje-incorrecto").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#Act_Select1_2_" + i).val() == Respuestas_correctas[i-1])){
                
                $("#Act_Select1_2_" + i).removeClass("is-invalid");
                $("#Act_Select1_2_" + i).attr('disabled', false);

                $("#Act_Select1_2_" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#check-s-try-1").removeClass("btn-descarga");
        $("#check-s-try-1").addClass("btn-descarga-blanco");
        $("#check-s-try-1").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#check-s-try-1").removeAttr('disabled');

                $("#check-s-try-1").removeClass("btn-descarga-blanco");
                $("#check-s-try-1").addClass("btn-descarga");

                $(".mensaje-incorrecto").removeClass("d-none");
                $(".mensaje-incorrecto").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    $(".respuesta-correcta-select-1").val('3');
                    $(".respuesta-correcta-select-2").val('7');
                    $(".respuesta-correcta-select-3").val('6');
                    $(".respuesta-correcta-select-4").val('5');
                    $(".respuesta-correcta-select-5").val('4');
                    $(".respuesta-correcta-select-6").val('2');
                    $(".respuesta-correcta-select-7").val('1');
                    
                    $(".seleccionar1_2_2 .custom-select").removeClass("is-invalid");
                    $(".seleccionar1_2_2 .custom-select").addClass("is-valid");
                    $(".seleccionar1_2_2 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto").removeClass("d-block");
                    $(".mensaje-incorrecto").addClass("d-none");

                    $(".mensaje-ver-respuestas").removeClass("d-none");
                    $(".mensaje-ver-respuestas").addClass("d-block");

                    $(".retroalimentacion").removeClass("d-none");
                    $(".retroalimentacion").addClass("d-block");

                    $("#check-s-try-1").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto").removeClass("d-none");
                $(".mensaje-correcto").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-S1_2_1', function(e) {
        
        recurso = $(this).attr('name');
        var texto;
    
        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            texto = $("." + recurso + ' #Act_Select1_2_' + i).val();
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
                $("." + recurso + " #Act_Select1_2_" + i).addClass("is-valid");
                $("." + recurso + " #Act_Select1_2_" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-2_" + i).html("Statement " + i + " is correct!");

            }else{
                console.log("respuestas mal");
                $("." + recurso + " #Act_Select1_2_" + i).addClass("is-invalid");
                $("." + recurso + " #Act_Select1_2_" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-2_" + i).html("Statement " + i + " is incorrect!");

                mal++;
            }               
        }

        $("#check-S1_2_1").attr('disabled', true);
        evaluarRespuestas();
        

    });

    $(document).on('click', '#check-s-try-1', function(e) {
        repetir();
    })

    
})