

$(function () {
    /************ OPA46  - Unit 4.2****************************/
    /* Recurso de Selecionar */
    var ImgRespuestasSeleccionar112 = [6, 5, 1, 7, 4, 2, 8, 3];
    var resTex112 = [
        "Flying in a small airplane.",
        "Meeting a famous person.",
        "Talking to a room full of people.",
        "Driving a fast car.",
        "Holding a spider in your hand.",
        "Standing on the top of a tall building.",
        "Moving to another city.",
        "Taking an exam."];
    var BuenasSeleccionar112 = 0;
    var malas2 = 0;
    var intentos2 = 0;
    // inicio prueba
    $(document).on('click', '#check_Opa46', function (e) {
        malas2 = 0;
        intentos2++;
        recurso = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionar112.length; i++) {
            $("#opsel-12-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-12-" + i + " .TexSel").html($("#s12-" + i + ' option:selected').text());
            if ($("#s12-" + i).val() == ImgRespuestasSeleccionar112[i]) {
                $("#opsel-12-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-12-" + i + " .respmens").html("Correct!");
                $("#opsel-12-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar112++;
            }
            else {
                $("#opsel-12-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-12-" + i + " .respmens").html("Incorrect!");
                $("#opsel-12-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas2++;
            }
        }
        $(".seleccionar_opa46 select").addClass("invisible");
        if (malas2 == 0) {

            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").removeClass("none");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else {
            if (intentos2 < 4) {
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
            }
            else {
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").removeClass("none");
                $("." + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a = 0; a < ImgRespuestasSeleccionar112.length; a++) {
                    $("#opsel-12-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-12-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-12-" + a + " .TexSel").html(resTex112[a]);
                    $("#opsel-12-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-12-" + a + " .respmens").html("Correct!");
                    $("#opsel-12-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }

        }
        $(".seleccionar_opa46").focus();
        $("." + recurso + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#try_Opa46', function (e) {
        var idcontenedor;
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                idcontenedor = $(this).closest(".divcontsel").attr("id");
                $("#" + idcontenedor + " select").removeClass("invisible");
                $("#" + idcontenedor + " select").val('0')
                $("#" + idcontenedor + " .TexSel").removeClass("ecorrecto");
                $("#" + idcontenedor + " .TexSel").removeClass("eincorrecto");
                $("#" + idcontenedor + " .TexSel").html("");
                $("#" + idcontenedor + " .respmens").html("");
                $("#" + idcontenedor + " .TexSel").siblings('.result').removeClass("fa-check");
                $("#" + idcontenedor + " .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#" + idcontenedor + " .contselopce").addClass("invisible");
                $("." + recurso + " .retroalimentacion1").addClass("none");
            }
        });
        $(".seleccionar_opa46").focus();
        $("#try_Opa46").attr("disabled", "disabled");
        $("#try_Opa46").removeClass("btn-descarga");
        $(".seleccionar_opa46 .retroalimentacion1").html("");
    });
    // fin prueba
})



