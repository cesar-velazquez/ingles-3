$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ 3, 7, 2, 5, 4, 1, 8, 6 ];
    
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

        $(".mensaje-incorrecto-m").removeClass("d-block");
        $(".mensaje-incorrecto-m").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#select-1m-" + i).val() == Respuestas_correctas[i-1])){
                
                $("#select-1m-" + i).removeClass("is-invalid");
                $("#select-1m-" + i).attr('disabled', false);

                $("#select-1m-" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#try-1-1m").removeClass("btn-descarga");
        $("#try-1-1m").addClass("btn-descarga-blanco");
        $("#try-1-1m").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-1-1m").removeAttr('disabled');

                $("#try-1-1m").removeClass("btn-descarga-blanco");
                $("#try-1-1m").addClass("btn-descarga");

                $(".mensaje-incorrecto-m").removeClass("d-none");
                $(".mensaje-incorrecto-m").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    $(".respuesta-correcta-selectm-1").val('3');
                    $(".respuesta-correcta-selectm-2").val('7');
                    $(".respuesta-correcta-selectm-3").val('2');
                    $(".respuesta-correcta-selectm-4").val('5');
                    $(".respuesta-correcta-selectm-5").val('4');
                    $(".respuesta-correcta-selectm-6").val('1');
                    $(".respuesta-correcta-selectm-7").val('8');
                    $(".respuesta-correcta-selectm-8").val('6');

                    
                    $(".evaluacion-1m-1 .custom-select").removeClass("is-invalid");
                    $(".evaluacion-1m-1 .custom-select").addClass("is-valid");
                    $(".evaluacion-1m-1 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-m").removeClass("d-block");
                    $(".mensaje-incorrecto-m").addClass("d-none");

                    $(".mensaje-ver-respuestas-m").removeClass("d-none");
                    $(".mensaje-ver-respuestas-m").addClass("d-block");

                    $(".retroalimentacion-m").removeClass("d-none");
                    $(".retroalimentacion-m").addClass("d-block");

                    $("#try-1-1m").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-m").removeClass("d-none");
                $(".mensaje-correcto-m").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-1-1m', function(e) {
        
        recurso = $(this).attr('name');
        var texto;
    
        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            texto = $("." + recurso + ' #select-1m-' + i).val();
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
                $("." + recurso + " #select-1m-" + i).addClass("is-valid");
                $("." + recurso + " #select-1m-" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrectm-" + i).html("Statement " + i + " is correct!");

            }else{
                console.log("respuestas mal");
                $("." + recurso + " #select-1m-" + i).addClass("is-invalid");
                $("." + recurso + " #select-1m-" + i).attr('disabled', true);

                $(".mensaje-correct-incorrectm-" + i).html("Statement " + i + " is incorrect!");

                mal++;
            }               
        }

        $("#check-1-1m").attr('disabled', true);
        evaluarRespuestas();
        

    });

    $(document).on('click', '#try-1-1m', function(e) {
        repetir();
    })

    
})
