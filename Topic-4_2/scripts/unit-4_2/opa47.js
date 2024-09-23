$(function () {

    var ImgRespuestasSeleccionaropa47 = [2, 2, 1, 2, 1];
    var resTexOpa47 = ["False", "False", "True", "False", "True"];
    var BuenasSeleccionarOpa47 = 0;
    var malasopa47 = 0;
    var intentosopa47 = 0;

    $(document).on('click', '#check-opa47', function (e) {
        malasopa47 = 0;
        intentosopa47++;
        recursoOpa47 = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionaropa47.length; i++) {
            $("#opselect-opa47-" + i + " .contselopce").removeClass("invisible");
            $("#opselect-opa47-" + i + " .TexSel").html($("#select-opa47-" + i + ' option:selected').text());
            if ($("#select-opa47-" + i).val() == ImgRespuestasSeleccionaropa47[i]) {
                $("#opselect-opa47-" + i + " .TexSel").addClass("ecorrecto");
                $("#opselect-opa47-" + i + " .respmens").html("Correct!");
                $("#opselect-opa47-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionarOpa47++;
            }
            else {
                $("#opselect-opa47-" + i + " .TexSel").addClass("eincorrecto");
                $("#opselect-opa47-" + i + " .respmens").html("Incorrect!");
                $("#opselect-opa47-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malasopa47++;
            }
        }
        $(".seleccionarOpa-47 select").addClass("invisible");
        if (malasopa47 == 0) {
            $("." + recursoOpa47 + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recursoOpa47 + " .retroalimentacion1").removeClass("none");
            $("." + recursoOpa47 + " .retroalimentacion1").addClass("verderetro");
            $("." + recursoOpa47 + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else {
            if (intentosopa47 < 4) {
                $("." + recursoOpa47 + " .bt").removeAttr('disabled');
                $("." + recursoOpa47 + " .retroalimentacion1").removeClass("none");
                $("." + recursoOpa47 + " .bt").addClass("btn-descarga");
                $("." + recursoOpa47 + " .retroalimentacion1").addClass("rojoretro");
                $("." + recursoOpa47 + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
            }
            else {
                $("." + recursoOpa47 + " .retroalimentacion1").addClass("negroretro");
                $("." + recursoOpa47 + " .retroalimentacion1").removeClass("none");
                $("." + recursoOpa47 + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a = 0; a < ImgRespuestasSeleccionaropa47.length; a++) {
                    $("#opselect-opa47-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opselect-opa47-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opselect-opa47-" + a + " .TexSel").html(resTexOpa47[a]);
                    $("#opselect-opa47-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opselect-opa47-" + a + " .respmens").html("Correct!");
                    $("#opselect-opa47-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }

        }
        $("." + recursoOpa47 + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#try-opa47', function (e) {
        var idcontenedoropa47;
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                idcontenedoropa47 = $(this).closest(".divcontsel").attr("id");
                $("#" + idcontenedoropa47 + " select").removeClass("invisible");
                $("#" + idcontenedoropa47 + " select").val('0')
                $("#" + idcontenedoropa47 + " .TexSel").removeClass("ecorrecto");
                $("#" + idcontenedoropa47 + " .TexSel").removeClass("eincorrecto");
                $("#" + idcontenedoropa47 + " .TexSel").html("");
                $("#" + idcontenedoropa47 + " .respmens").html("");
                $("#" + idcontenedoropa47 + " .TexSel").siblings('.result').removeClass("fa-check");
                $("#" + idcontenedoropa47 + " .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#" + idcontenedoropa47 + " .contselopce").addClass("invisible");
                $("." + recursoOpa47 + " .retroalimentacion1").addClass("none");
            }
        });
        $("#try-opa47").attr("disabled", "disabled");
        $("#try-opa47").removeClass("btn-descarga");
        $(".seleccionarOpa-47 .retroalimentacion1").html("");
    });
})