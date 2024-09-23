$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var recurso;

    var Respuestas_correctas = [ 2, 3, 1, 3, 2 ];
    
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

        $(".mensaje-incorrecto-2").removeClass("d-block");
        $(".mensaje-incorrecto-2").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#select-2-" + i).val() == Respuestas_correctas[i-1])){
                
                $("#select-2-" + i).removeClass("is-invalid");
                $("#select-2-" + i).attr('disabled', false);

                $("#select-2-" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#try-1-2").removeClass("btn-descarga");
        $("#try-1-2").addClass("btn-descarga-blanco");
        $("#try-1-2").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-1-2").removeAttr('disabled');

                $("#try-1-2").removeClass("btn-descarga-blanco");
                $("#try-1-2").addClass("btn-descarga");

                $(".mensaje-incorrecto-2").removeClass("d-none");
                $(".mensaje-incorrecto-2").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    $(".respuesta-correcta-select-1").val('2');
                    $(".respuesta-correcta-select-2").val('3');
                    $(".respuesta-correcta-select-3").val('1');
                    $(".respuesta-correcta-select-4").val('3');
                    $(".respuesta-correcta-select-5").val('2');
                    
                    $(".evaluacion-1-2 .custom-select").removeClass("is-invalid");
                    $(".evaluacion-1-2 .custom-select").addClass("is-valid");
                    $(".evaluacion-1-2 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-2").removeClass("d-block");
                    $(".mensaje-incorrecto-2").addClass("d-none");

                    $(".mensaje-ver-respuestas-2").removeClass("d-none");
                    $(".mensaje-ver-respuestas-2").addClass("d-block");

                    $(".retroalimentacion-2").removeClass("d-none");
                    $(".retroalimentacion-2").addClass("d-block");

                    $("#try-1-2").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-2").removeClass("d-none");
                $(".mensaje-correcto-2").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-1-2', function(e) {
        
        recurso = $(this).attr('name');
        var texto;
    
        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            texto = $("." + recurso + ' #select-2-' + i).val();
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
                $("." + recurso + " #select-2-" + i).addClass("is-valid");
                $("." + recurso + " #select-2-" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-" + i).html("Statement " + i + " is correct!");

            }else{
                console.log("respuestas mal");
                $("." + recurso + " #select-2-" + i).addClass("is-invalid");
                $("." + recurso + " #select-2-" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-" + i).html("Statement " + i + " is incorrect!");

                mal++;
            }               
        }

        $("#check-1-2").attr('disabled', true);
        evaluarRespuestas();
        

    });

    $(document).on('click', '#try-1-2', function(e) {
        repetir();
    })

    
})