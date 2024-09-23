$(function () {
    /************ OPA46  - Unit 4.2****************************/
    /* Recurso de Selecionar */
    var ImgRespuestasSeleccionar112 = [3, 1, 4, 5, 5, 2, 1];
    var resTex112 = [
        "have",
        "gone",
        "went",
        "did",
        "did",
        "'ve",
        "gone"];
    var BuenasSeleccionar112 = 0;
    var malas2 = 0;
    var intentos2 = 0;
    // inicio prueba
    $(document).on('click', '#check-Opa49', function (e) {
        malas2 = 0;
        intentos2++;
        recurso = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionar112.length; i++) {
            $("#sl-opa49-" + i + " .contselopce").removeClass("invisible");
            $("#sl-opa49-" + i + " .TexSel").html($("#select-49-" + i + ' option:selected').text());
            if ($("#select-49-" + i).val() == ImgRespuestasSeleccionar112[i]) {
                $("#sl-opa49-" + i + " .TexSel").addClass("ecorrecto");
                $("#sl-opa49-" + i + " .respmens").html("Correct!");
                $("#sl-opa49-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar112++;
            }
            else {
                $("#sl-opa49-" + i + " .TexSel").addClass("eincorrecto");
                $("#sl-opa49-" + i + " .respmens").html("Incorrect!");
                $("#sl-opa49-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas2++;
            }
        }
        $(".seleccionarOpa49 select").addClass("invisible");
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
                    $("#sl-opa49-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#sl-opa49-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#sl-opa49-" + a + " .TexSel").html(resTex112[a]);
                    $("#sl-opa49-" + a + " .TexSel").addClass("ecorrecto");
                    $("#sl-opa49-" + a + " .respmens").html("Correct!");
                    $("#sl-opa49-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }

        }
        // $("." + recurso).focus();
        $("." + recurso + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#try-Opa49', function (e) {
        console.log("first")
        var idcontenedor;
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                // console.log(idcontenedor);
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
                // console.log(idcontenedor);
            }
            // console.log(idcontenedor);
        });
        // $(".seleccionar_opa46").focus();
        $("#try-Opa49").attr("disabled", "disabled");
        $("#try-Opa49").removeClass("btn-descarga");
        $(".seleccionarOpa49 .retroalimentacion1").html("");
    });
    // fin prueba
})
