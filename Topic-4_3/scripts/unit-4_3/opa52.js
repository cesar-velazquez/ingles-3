$(function () {

    /******************************* OPA52  - Unit 4.3 ****************************/

    $("#escribir_opa52 .s-resp").attr("aria-hidden", "true");

    var RespuestasEscribiropa52 = [
        "more than five years/more than 5 years",
        "since she was in high school/since he was in high school",
        "nine"
    ];

    var malEscribir31 = 0;
    var vecesEscribir31 = 0;
    //calificadasEscribir31 = 0;

    $(document).on('click', '#check-opa52', function (e) {
        vecesEscribir31++;
        recurso = $(this).attr('name');
        $("#escribir_opa52").focus();        
        $(this).attr('disabled', 'disabled');
        var texto;
        // console.log(recurso);
        for (var i = 1; i <= RespuestasEscribiropa52.length; i++) {

            text = $("#" + recurso + ' #escribir_opa52-' + i).val();
            texto = String($("#" + recurso + ' #escribir_opa52-' + i).val().toLowerCase());
            console.log(texto);
            //console.log(texto.substring(-1));
            if (texto.substr(-1) == ".") { /*quito punto*/
                texto = texto.substring(0, texto.length - 1);
            }
            string = RespuestasEscribiropa52[i - 1];
            let sentencias = string.split("/");
            console.log(sentencias)
            var correcto = false;
            for (var j = 0; j < sentencias.length; j++) {
                //   console.log($.trim(texto) +" == "+ sentencias[j]);
                if ($.trim(texto) == sentencias[j]) {
                    correcto = true;
                    break;
                }
            }

            if (correcto) {
                $("#" + recurso + " #escribir_opa52-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir_opa52-" + i).siblings(".contselopc").addClass("correcto");
            }
            else {
                $("#" + recurso + " #escribir_opa52-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
                $("#" + recurso + " #escribir_opa52-" + i).siblings(".contselopc").addClass("incorrecto");
                malEscribir31++;
            }
        }

        if (malEscribir31 == 0) {
            $("#" + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").removeClass("none");
            $("#" + recurso + " .retroalimentacion1").addClass("verderetro");
            $("#" + recurso + " .retroalimentacion1 p").html("Very good! You are ready to continue.");
        }
        else {

            if (vecesEscribir31 < 4) {
                $("#" + recurso + " .try").removeAttr('disabled');
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("#" + recurso + " .retroalimentacion1 p").html("Try to answer the exercise again.");
                $("#" + recurso + " .bt").removeAttr('disabled');
                $("#" + recurso + " .bt").addClass("btn-descarga");
            }
            else {
                $("#" + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("#" + recurso + " .retroalimentacion1 p").html("Please, check the correct answers.");
                for (a = 1; a <= RespuestasEscribiropa52.length; a++) {
                    string = RespuestasEscribiropa52[a - 1];
                    let sentencias = string.split("/");

                    $("#" + recurso + " #escribir_opa52-" + a).siblings(".contselopc").html(sentencias[0] + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("#" + recurso + " #escribir_opa52-" + a).siblings(".contselopc").addClass("correcto");
                    // $("." + recurso + " .retroalimentacion1").addClass("none");
                }
            }
        }

        $("#" + recurso + ' input').attr('disabled', true).addClass("invisible");

        $("#escribir_opa52 .s-resp").attr("aria-hidden", "false");
        $("#escribir_opa52 .text-ayuda").attr("aria-hidden", "true");
        //text-ayuda
    });

    $(document).on('click', '#try-opa52', function (e) {
        console.log("log");
        malEscribir31 = 0;


        recurso = $(this).attr('name');
        $("#escribir_opa52").focus();
        $(this).attr('disabled', 'disabled');
        $(this).removeClass("btn-descarga");

        for (var i = 1; i <= RespuestasEscribiropa52.length; i++) {
            if (!$("#" + recurso + ' #escribir_opa52-' + i).siblings(".contselopc").hasClass("correcto")) {

                //     console.log("log "+i);

                $("#" + recurso + ' #escribir_opa52-' + i).siblings(".contselopc").html("");
                $("#" + recurso + ' #escribir_opa52-' + i).siblings(".contselopc").removeClass("incorrecto");
                $("#" + recurso + ' #escribir_opa52-' + i).attr('disabled', false).removeClass("invisible").val("");
                $("#" + recurso + ' #escribir_opa52-' + i).siblings(".s-resp").attr("aria-hidden", "true");
                $("#" + recurso + ' #escribir_opa52-' + i).siblings(".text-ayuda").attr("aria-hidden", "false");
                $("." + recurso + " .retroalimentacion1").addClass("none");
            }
        }

        $("#" + recurso + " .retroalimentacion1 p").html("");        


        // $("#" + recurso + " .comprobar").removeAttr('disabled');

    });

})