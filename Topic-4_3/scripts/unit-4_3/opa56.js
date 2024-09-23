$(function () {

    /******************************* OPA31  - Unit 3.2 ****************************/

    $("#escribir_opa56 .s-resp").attr("aria-hidden", "true");

    var RespuestasEscribir331 = [
        // ’ ' ` ‘ ´
        "i have just seen her/i’ve just seen her/i've just seen her/i`ve just seen her/i‘ve just seen her/i´ve just seen her",
        "he has already left",
        "i have not read it yet/i haven’t read it yet/i haven't read it yet/i haven`t read it yet/i haven‘t read it yet/i haven´t read it yet",
        "she has already seen the film",
        "they have just arrived",
        "we have not told him yet/we haven’t told him yet/we haven't told him yet/we haven`t told him yet/we haven‘t told him yet/we haven´t told him yet",
    ];

    var malEscribir31 = 0;
    var vecesEscribir31 = 0;
    //calificadasEscribir31 = 0;

    $(document).on('click', '#checkopa56', function (e) {
        vecesEscribir31++;
        recurso = $(this).attr('name');
        $("#escribir_opa56").focus();
        $(this).attr('disabled', 'disabled');
        var texto;
        // console.log(recurso);
        for (var i = 1; i <= RespuestasEscribir331.length; i++) {

            text = $("#" + recurso + ' #escribiropa56-' + i).val();
            texto = String($("#" + recurso + ' #escribiropa56-' + i).val().toLowerCase());
            console.log(texto);
            //console.log(texto.substring(-1));
            if (texto.substr(-1) == ".") { /*quito punto*/
                texto = texto.substring(0, texto.length - 1);
            }
            string = RespuestasEscribir331[i - 1];
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
                $("#" + recurso + " #escribiropa56-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribiropa56-" + i).siblings(".contselopc").addClass("correcto");
            }
            else {
                $("#" + recurso + " #escribiropa56-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
                $("#" + recurso + " #escribiropa56-" + i).siblings(".contselopc").addClass("incorrecto");
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
                $("#" + recurso + " .retroalimentacion1  p").html("Try to answer the exercise again.");
                $("#" + recurso + " .bt").removeAttr('disabled');
                $("#" + recurso + " .bt").addClass("btn-descarga");
            }
            else {
                $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("#" + recurso + " .retroalimentacion1  p").html("Please, check the correct answers.");
                for (a = 1; a <= RespuestasEscribir331.length; a++) {
                    string = RespuestasEscribir331[a - 1];
                    let sentencias = string.split("/");

                    $("#" + recurso + " #escribiropa56-" + a).siblings(".contselopc").html(sentencias[0] + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("#" + recurso + " #escribiropa56-" + a).siblings(".contselopc").addClass("correcto");
                    $("." + recurso + " .retroalimentacion1 ").addClass("none");
                }
            }
        }

        $("#" + recurso + ' input').attr('disabled', true).addClass("invisible");

        $("#escribir_opa56 .s-resp").attr("aria-hidden", "false");
        $("#escribir_opa56 .text-ayuda").attr("aria-hidden", "true");
        //text-ayuda

    });

    $(document).on('click', '#tryopa56', function (e) {
        console.log("log");
        malEscribir31 = 0;


        recurso = $(this).attr('name');
        $("#escribir_opa56").focus();
        $(this).attr('disabled', 'disabled');
        $(this).removeClass("btn-descarga");

        for (var i = 1; i <= RespuestasEscribir331.length; i++) {
            if (!$("#" + recurso + ' #escribiropa56-' + i).siblings(".contselopc").hasClass("correcto")) {

                //     console.log("log "+i);

                $("#" + recurso + ' #escribiropa56-' + i).siblings(".contselopc").html("");
                $("#" + recurso + ' #escribiropa56-' + i).siblings(".contselopc").removeClass("incorrecto");
                $("#" + recurso + ' #escribiropa56-' + i).attr('disabled', false).removeClass("invisible").val("");
                $("#" + recurso + ' #escribiropa56-' + i).siblings(".s-resp").attr("aria-hidden", "true");
                $("#" + recurso + ' #escribiropa56-' + i).siblings(".text-ayuda").attr("aria-hidden", "false");
                $("." + recurso + " .retroalimentacion1").addClass("none");
            }
        }

        $("#" + recurso + " .retroalimentacion1 p").html("");


        // $("#" + recurso + " .comprobar").removeAttr('disabled');

    });

})