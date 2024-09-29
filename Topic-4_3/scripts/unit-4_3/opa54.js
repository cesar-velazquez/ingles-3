$(function () {

    /******************************* OPA31  - Unit 3.2 ****************************/

    $("#escribir_opa54 .s-resp").attr("aria-hidden", "true");

    var RespuestasEscribir331 = [
        "have lived/’ve lived/'ve lived/`ve lived/‘ve lived/´ve lived",
        "since",
        "have studied/’ve studied/'ve studied/`ve studied/‘ve studied/´ve studied",
        "since",
        "haven’t slept/haven't slept/haven`t slept/haven‘t slept/haven´t slept/have not slept/‘ve not slept/'ve not slept/`ve not slept/´ve not slept",
        "for",
        "have drunk/’ve drunk/'ve drunk/`ve drunk/‘ve drunk/´ve drunk",
        "since",
        "has been",
        "for",
        "hasn’t came/hasn't came/hasn`t came/hasn‘t came/hasn´t came/has not came",
        "for",
        "have lived/’ve lived/'ve lived/`ve lived/‘ve lived/´ve lived",
        "since",
        "haven’t talked/haven't talked/haven`t talked/haven‘t talked/haven´t talked/have not talked/’ve not talked/'ve not talked/`ve not talked/‘ve not talked/´ve not talked",
        "for"
    ];

    var malEscribir31 = 0;
    var vecesEscribir31 = 0;
    //calificadasEscribir31 = 0;

    $(document).on('click', '#checkopa54', function (e) {
        vecesEscribir31++;
        recurso = $(this).attr('name');
        $("#escribir_opa54").focus();
        $(this).attr('disabled', 'disabled');
        var texto;
        // console.log(recurso);
        for (var i = 1; i <= RespuestasEscribir331.length; i++) {

            text = $("#" + recurso + ' #escribirOpa54-' + i).val();
            texto = String($("#" + recurso + ' #escribirOpa54-' + i).val().toLowerCase());
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
                $("#" + recurso + " #escribirOpa54-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribirOpa54-" + i).siblings(".contselopc").addClass("correcto");
            }
            else {
                $("#" + recurso + " #escribirOpa54-" + i).siblings(".contselopc").html(text + ' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
                $("#" + recurso + " #escribirOpa54-" + i).siblings(".contselopc").addClass("incorrecto");
                malEscribir31++;
            }
        }

        if (malEscribir31 == 0) {
            $("#" + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").removeClass("none");
            $("#" + recurso + " .retroalimentacion1").addClass("verderetro");
            $("#" + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else {

            if (vecesEscribir31 < 4) {
                $("#" + recurso + " .try").removeAttr('disabled');
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("#" + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
                $("#" + recurso + " .bt").removeAttr('disabled');
                $("#" + recurso + " .bt").addClass("btn-descarga");
            }
            else {
                $("#" + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("#" + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a = 1; a <= RespuestasEscribir331.length; a++) {
                    string = RespuestasEscribir331[a - 1];
                    let sentencias = string.split("/");

                    $("#" + recurso + " #escribirOpa54-" + a).siblings(".contselopc").html(sentencias[0] + ' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("#" + recurso + " #escribirOpa54-" + a).siblings(".contselopc").addClass("correcto");
                    // $("." + recurso + " .retroalimentacion1").addClass("none");
                }
            }
        }

        $(".escribir_opa54").focus();
        $("#" + recurso + ' input').attr('disabled', true).addClass("invisible");
        $("#escribir_Opa54 .s-resp").attr("aria-hidden", "false");
        $("#escribir_Opa54 .text-ayuda").attr("aria-hidden", "true");
        //text-ayuda

    });

    $(document).on('click', '#tryopa54', function (e) {
        console.log("log");
        malEscribir31 = 0;


        recurso = $(this).attr('name');
        $("#escribir_Opa54").focus();
        $(this).attr('disabled', 'disabled');
        $(this).removeClass("btn-descarga");

        for (var i = 1; i <= RespuestasEscribir331.length; i++) {
            if (!$("#" + recurso + ' #escribirOpa54-' + i).siblings(".contselopc").hasClass("correcto")) {

                //     console.log("log "+i);

                $("#" + recurso + ' #escribirOpa54-' + i).siblings(".contselopc").html("");
                $("#" + recurso + ' #escribirOpa54-' + i).siblings(".contselopc").removeClass("incorrecto");
                $("#" + recurso + ' #escribirOpa54-' + i).attr('disabled', false).removeClass("invisible").val("");
                $("#" + recurso + ' #escribirOpa54-' + i).siblings(".s-resp").attr("aria-hidden", "true");
                $("#" + recurso + ' #escribirOpa54-' + i).siblings(".text-ayuda").attr("aria-hidden", "false");
            }
        }

        $("#" + recurso + " .retroalimentacion1 p").html("");

        $(".escribir_opa54").focus();
        $("#" + recurso + " .comprobar").removeAttr('disabled');

    });

})