$(function() {

    var veces=0;
    var intentos=0;
    var mal=0;

    var veces2=0;
    var intentos2=0;
    var mal2=0;

    var veces3=0;
    var intentos3=0;
    var mal3=0;

    var recurso;
    var recurso2;
    var recurso3;

    var Respuestas_correctas = [ 1, 2, 3, 4, 5, 6, 7 ];
    var Respuestas_correctas2 = [ 1, 2, 3, 4, 5, 6, 7 ];
    var Respuestas_correctas3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
    
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

        $(".mensaje-incorrecto-43").removeClass("d-block");
        $(".mensaje-incorrecto-43").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            if(!($("#select-act43-" + i).val() == Respuestas_correctas[i-1])){
                
                $("#select-act43-" + i).removeClass("is-invalid");
                $("#select-act43-" + i).attr('disabled', false);

                $("#select-act43-" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#try-act43").removeClass("btn-descarga");
        $("#try-act43").addClass("btn-descarga-blanco");
        $("#try-act43").attr('disabled', true);

    }

    function evaluarRespuestas(){

        veces++;

        if (veces == 1){

            if (mal>0){

                console.log("respuestas mal: "  + mal);

                intentos++;
                console.log("intentos: " + intentos);
                
                $("#try-act43").removeAttr('disabled');

                $("#try-act43").removeClass("btn-descarga-blanco");
                $("#try-act43").addClass("btn-descarga");

                $(".mensaje-incorrecto-43").removeClass("d-none");
                $(".mensaje-incorrecto-43").addClass("d-block");

                veces=0;
                mal=0;

                if (intentos==4){

                    $(".respuesta-correcta-select-act43-1").val('1');
                    $(".respuesta-correcta-select-act43-2").val('2');
                    $(".respuesta-correcta-select-act43-3").val('3');
                    $(".respuesta-correcta-select-act43-4").val('4');
                    $(".respuesta-correcta-select-act43-5").val('5');
                    $(".respuesta-correcta-select-act43-6").val('6');
                    $(".respuesta-correcta-select-act43-7").val('7');
                    
                    $(".evaluacion-act43 .custom-select").removeClass("is-invalid");
                    $(".evaluacion-act43 .custom-select").addClass("is-valid");
                    $(".evaluacion-act43 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-43").removeClass("d-block");
                    $(".mensaje-incorrecto-43").addClass("d-none");

                    $(".mensaje-ver-respuestas-43").removeClass("d-none");
                    $(".mensaje-ver-respuestas-43").addClass("d-block");

                    $("#try-act43").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-43").removeClass("d-none");
                $(".mensaje-correcto-43").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-act43', function(e) {
        
        recurso = $(this).attr('name');
        var texto;
    
        for (var i = 1; i <= Respuestas_correctas.length; i++) {

            texto = $("." + recurso + ' #select-act43-' + i).val();
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
                $("." + recurso + " #select-act43-" + i).addClass("is-valid");
                $("." + recurso + " #select-act43-" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-act43-" + i).html("Statement " + i + " is correct!");

            }else{
                console.log("respuestas mal");
                $("." + recurso + " #select-act43-" + i).addClass("is-invalid");
                $("." + recurso + " #select-act43-" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-act43-" + i).html("Statement " + i + " is incorrect!");

                mal++;
            }               
        }

        $("#check-act43").attr('disabled', true);
        evaluarRespuestas();
        

    });

    $(document).on('click', '#try-act43', function(e) {
        repetir();
    })

    // ------------------------------------------

    function repetir2(){

        $(".mensaje-incorrecto-143").removeClass("d-block");
        $(".mensaje-incorrecto-143").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas2.length; i++) {

            if(!($("#select-act143-" + i).val() == Respuestas_correctas2[i-1])){
                
                $("#select-act143-" + i).removeClass("is-invalid");
                $("#select-act143-" + i).attr('disabled', false);

                $("#select-act143-" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#try-act143").removeClass("btn-descarga");
        $("#try-act143").addClass("btn-descarga-blanco");
        $("#try-act143").attr('disabled', true);

    }

    function evaluarRespuestas2(){

        veces2++;

        if (veces2 == 1){

            if (mal2>0){

                intentos2++;
                
                $("#try-act143").removeAttr('disabled');

                $("#try-act143").removeClass("btn-descarga-blanco");
                $("#try-act143").addClass("btn-descarga");

                $(".mensaje-incorrecto-143").removeClass("d-none");
                $(".mensaje-incorrecto-143").addClass("d-block");

                veces2=0;
                mal2=0;

                if (intentos2==4){

                    $(".respuesta-correcta-select-act143-1").val('1');
                    $(".respuesta-correcta-select-act143-2").val('2');
                    $(".respuesta-correcta-select-act143-3").val('3');
                    $(".respuesta-correcta-select-act143-4").val('4');
                    $(".respuesta-correcta-select-act143-5").val('5');
                    $(".respuesta-correcta-select-act143-6").val('6');
                    $(".respuesta-correcta-select-act143-7").val('7');
                    
                    $(".evaluacion-act143 .custom-select").removeClass("is-invalid");
                    $(".evaluacion-act143 .custom-select").addClass("is-valid");
                    $(".evaluacion-act143 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-143").removeClass("d-block");
                    $(".mensaje-incorrecto-143").addClass("d-none");

                    $(".mensaje-ver-respuestas-143").removeClass("d-none");
                    $(".mensaje-ver-respuestas-143").addClass("d-block");

                    $("#try-act143").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-143").removeClass("d-none");
                $(".mensaje-correcto-143").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-act143', function(e) {
        
        recurso2 = $(this).attr('name');
        var texto2;
    
        for (var i = 1; i <= Respuestas_correctas2.length; i++) {

            texto2 = $("." + recurso2 + ' #select-act143-' + i).val();
            string2=Respuestas_correctas2[i-1];

            var correcto2=false;            

            if(texto2 == string2 ){ 
                correcto2=true;
            }

            if(correcto2){
                $("." + recurso2 + " #select-act143-" + i).addClass("is-valid");
                $("." + recurso2 + " #select-act143-" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-act143-" + i).html("Statement " + i + " is correct!");

            }else{
                $("." + recurso2 + " #select-act143-" + i).addClass("is-invalid");
                $("." + recurso2 + " #select-act143-" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-act143-" + i).html("Statement " + i + " is incorrect!");

                mal2++;
            }               
        }

        $("#check-act143").attr('disabled', true);
        evaluarRespuestas2();
        

    });

    $(document).on('click', '#try-act143', function(e) {
        repetir2();
    })

    // ------------------------------------------

    function repetir3(){

        $(".mensaje-incorrecto-243").removeClass("d-block");
        $(".mensaje-incorrecto-243").addClass("d-none");

        for (var i = 1; i <= Respuestas_correctas3.length; i++) {

            if(!($("#select-act243-" + i).val() == Respuestas_correctas3[i-1])){
                
                $("#select-act243-" + i).removeClass("is-invalid");
                $("#select-act243-" + i).attr('disabled', false);

                $("#select-act243-" + i).val("0");

            } else{

                console.log("Hay respuestas correctas");

            }

        }

        $("#try-act243").removeClass("btn-descarga");
        $("#try-act243").addClass("btn-descarga-blanco");
        $("#try-act243").attr('disabled', true);

    }

    function evaluarRespuestas3(){

        veces3++;

        if (veces3 == 1){

            if (mal3>0){

                intentos3++;

                $("#try-act243").removeAttr('disabled');

                $("#try-act243").removeClass("btn-descarga-blanco");
                $("#try-act243").addClass("btn-descarga");

                $(".mensaje-incorrecto-243").removeClass("d-none");
                $(".mensaje-incorrecto-243").addClass("d-block");

                veces3=0;
                mal3=0;

                if (intentos3==4){

                    $(".respuesta-correcta-select-act243-1").val('1');
                    $(".respuesta-correcta-select-act243-2").val('2');
                    $(".respuesta-correcta-select-act243-3").val('3');
                    $(".respuesta-correcta-select-act243-4").val('4');
                    $(".respuesta-correcta-select-act243-5").val('5');
                    $(".respuesta-correcta-select-act243-6").val('6');
                    $(".respuesta-correcta-select-act243-7").val('7');
                    $(".respuesta-correcta-select-act243-8").val('8');
                    $(".respuesta-correcta-select-act243-9").val('9');
                    $(".respuesta-correcta-select-act243-10").val('10');
                    $(".respuesta-correcta-select-act243-11").val('11');
                    
                    $(".evaluacion-act243 .custom-select").removeClass("is-invalid");
                    $(".evaluacion-act243 .custom-select").addClass("is-valid");
                    $(".evaluacion-act243 .custom-select").attr('disabled', true);

                    $(".mensaje-incorrecto-243").removeClass("d-block");
                    $(".mensaje-incorrecto-243").addClass("d-none");

                    $(".mensaje-ver-respuestas-243").removeClass("d-none");
                    $(".mensaje-ver-respuestas-243").addClass("d-block");

                    $("#try-act243").attr('disabled', true);

                }
                
            } else {

                $(".mensaje-correcto-243").removeClass("d-none");
                $(".mensaje-correcto-243").addClass("d-block");

            }

        }

    }

    $(document).on('click', '#check-act243', function(e) {
        
        recurso3 = $(this).attr('name');
        var texto3;
    
        for (var i = 1; i <= Respuestas_correctas3.length; i++) {

            texto3 = $("." + recurso3 + ' #select-act243-' + i).val();
            string3=Respuestas_correctas3[i-1];

            var correcto3=false;            

            if(texto3 == string3 ){ 
                correcto3=true;
            }

            if(correcto3){
                $("." + recurso3 + " #select-act243-" + i).addClass("is-valid");
                $("." + recurso3 + " #select-act243-" + i).attr('disabled', true);
                
                $(".mensaje-correct-incorrect-act243-" + i).html("Statement " + i + " is correct!");

            }else{
                $("." + recurso3 + " #select-act243-" + i).addClass("is-invalid");
                $("." + recurso3 + " #select-act243-" + i).attr('disabled', true);

                $(".mensaje-correct-incorrect-act243-" + i).html("Statement " + i + " is incorrect!");

                mal3++;
            }               
        }

        $("#check-act243").attr('disabled', true);
        evaluarRespuestas3();
        

    });

    $(document).on('click', '#try-act243', function(e) {
        repetir3();
    })
    
})