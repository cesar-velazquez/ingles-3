$(function() {

    var correctasmFG=0
    var incorrectasmFG=0;
    var correctasmSG=0
    var incorrectasmSG=0;
    var correctasmTG=0
    var incorrectasmTG=0;

    var recurso

    var RespuestasCorrectasmFG = ["for", "over", "lose", "hold", "full", "nervous", "interview", "height", "airplane", "upload", "awful", "stand", "runner", "spider", "dream" ];

    var RespuestasCorrectasmSG = [ "accept", "ask", "add", "call", "circle", "continue", "cook", "discover", "discuss", "hope", "label", "fight", "give", "know", "lend", "listen", "match", "practice", "thank" ];

    var RespuestasCorrectasmTG = [ "arise", "awake", "be", "break", "bring", "come", "cost", "cut", "draw", "drink", "fly", "forbid", "give", "go", "grow", "sweep", "swim", "take", "teach", "write" ];

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

    $(document).on('click', '#check-fg-m-1', function(e) {

        for (var i = 0; i < RespuestasCorrectasmFG.length; i++) {

            if( $("#input-fg-m-" + i).val().toLowerCase().replace(/-/g, '') == RespuestasCorrectasmFG[i] ) {

                $("#input-fg-m-" + i).addClass("is-valid");
                $("#input-fg-m-" + i).attr('readonly', true);

                correctasmFG++;
                console.log("Respuestas correctas: " + correctasmFG)

            } else {

                $("#input-fg-m-" + i).addClass("is-invalid");
                $("#input-fg-m-" + i).attr('readonly', true);

                incorrectasmFG++;
                console.log("Respuestas incorrectas: " + incorrectasmFG)
            }
            
        }

        $("#retrom-1").removeClass("d-none").addClass("d-block");

        $('#right-answers-m-1').text(correctasmFG);
        $('#wrong-answers-m-1').text(incorrectasmFG);

        if( incorrectasmFG >= 1 ){
            $('.mensaje-incorrecto-m-1').removeClass('d-none').addClass('d-block');
            $('#try-fg-m-1').attr('disabled', false);
        } else {
            $('.mensaje-correcto-m-1').removeClass('d-none').addClass('d-block');
        }

        $('#check-fg-m-1').attr('disabled', true);

    });

    $(document).on('click', '#try-fg-m-1', function(e) {
        
        var correctasmFG=0, incorrectasmFG=0;

        $("#retrom-1").removeClass("d-block").addClass("d-none");

        $("#fg-movil" + " .input-actividad-1").removeClass("is-valid");
        $("#fg-movil" + " .input-actividad-1").removeClass("is-invalid");
        $("#fg-movil" + " .input-actividad-1").attr('readonly', false);
        $("#fg-movil" + " .input-actividad-1").val("");

        $('.mensaje-incorrecto-m-1').removeClass('d-block').addClass('d-none');
        $('.mensaje-correcto-m-1').removeClass('d-block').addClass('d-none');

        $('#fg-movil' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

        $('#try-fg-m-1').attr('disabled', true);

    });

    // ------------------------------------

    $(document).on('click', '#check-sg-m-1', function(e) {

        for (var i = 0; i < RespuestasCorrectasmSG.length; i++) {

            if( $("#input-sg-m-" + i).val().toLowerCase().replace(/-/g, '') == RespuestasCorrectasmSG[i] ) {

                $("#input-sg-m-" + i).addClass("is-valid");
                $("#input-sg-m-" + i).attr('readonly', true);

                correctasmSG++;
                console.log("Respuestas correctas: " + correctasmSG)

            } else {

                $("#input-sg-m-" + i).addClass("is-invalid");
                $("#input-sg-m-" + i).attr('readonly', true);

                incorrectasmSG++;
                console.log("Respuestas incorrectas: " + incorrectasmSG)
            }
            
        }

        $("#retrom-2").removeClass("d-none").addClass("d-block");

        $('#right-answers-m-2').text(correctasmSG);
        $('#wrong-answers-m-2').text(incorrectasmSG);

        if( incorrectasmSG >= 1 ){
            $('.mensaje-incorrecto-m-2').removeClass('d-none').addClass('d-block');
            $('#try-sg-m-1').attr('disabled', false);
        } else {
            $('.mensaje-correcto-m-2').removeClass('d-none').addClass('d-block');
        }

        $('#check-sg-m-1').attr('disabled', true);

    });

    $(document).on('click', '#try-sg-m-1', function(e) {
        
        var correctasmSG=0, incorrectasmSG=0;

        $("#retrom-2").removeClass("d-block").addClass("d-none");

        $("#sg-movil" + " .input-actividad-1").removeClass("is-valid");
        $("#sg-movil" + " .input-actividad-1").removeClass("is-invalid");
        $("#sg-movil" + " .input-actividad-1").attr('readonly', false);
        $("#sg-movil" + " .input-actividad-1").val("");

        $('.mensaje-incorrecto-m-2').removeClass('d-block').addClass('d-none');
        $('.mensaje-correcto-m-2').removeClass('d-block').addClass('d-none');

        $('#sg-movil' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

        $('#try-sg-m-1').attr('disabled', true);

    });
    

    // ------------------------------------

    $(document).on('click', '#check-tg-m-1', function(e) {

        for (var i = 0; i < RespuestasCorrectasmTG.length; i++) {

            if( $("#input-tg-m-" + i).val().toLowerCase().replace(/-/g, '') == RespuestasCorrectasmTG[i] ) {

                $("#input-tg-m-" + i).addClass("is-valid");
                $("#input-tg-m-" + i).attr('readonly', true);

                correctasmTG++;
                console.log("Respuestas correctas: " + correctasmTG)

            } else {

                $("#input-tg-m-" + i).addClass("is-invalid");
                $("#input-tg-m-" + i).attr('readonly', true);

                incorrectasmTG++;
                console.log("Respuestas incorrectas: " + incorrectasmTG)
            }
            
        }

        $("#retrom-3").removeClass("d-none").addClass("d-block");

        $('#right-answers-m-3').text(correctasmTG);
        $('#wrong-answers-m-3').text(incorrectasmTG);

        if( incorrectasmTG >= 1 ){
            $('.mensaje-incorrecto-m-3').removeClass('d-none').addClass('d-block');
            $('#try-tg-m-1').attr('disabled', false);
        } else {
            $('.mensaje-correcto-m-3').removeClass('d-none').addClass('d-block');
        }

        $('#check-tg-m-1').attr('disabled', true);

    });

    $(document).on('click', '#try-tg-m-1', function(e) {
        
        var correctasmSG=0, incorrectasmSG=0;

        $("#retrom-3").removeClass("d-block").addClass("d-none");

        $("#tg-movil" + " .input-actividad-1").removeClass("is-valid");
        $("#tg-movil" + " .input-actividad-1").removeClass("is-invalid");
        $("#tg-movil" + " .input-actividad-1").attr('readonly', false);
        $("#tg-movil" + " .input-actividad-1").val("");

        $('.mensaje-incorrecto-m-3').removeClass('d-block').addClass('d-none');
        $('.mensaje-correcto-m-3').removeClass('d-block').addClass('d-none');

        $('#tg-movil' + ' audio').each(function() {
            // Restablecer cada audio
            this.currentTime = 0;
        });

        $('#try-tg-m-1').attr('disabled', true);

    });

})  