$(function () {

    var ImgRespuestasSeleccionaropa53 = [1, 2, 2, 1, 2, 1, 2, 1];
    var resTexOpa53 = ["For", "Since", "Since", "For", "Since", "For", "Since", "For"];
    var BuenasSeleccionarOpa53 = 0;
    var malasopa53 = 0;
    var intentosopa53 = 0;

    $(document).on('click', '#checkopa53', function (e) {
        malasopa53 = 0;
        intentosopa53++;
        recursoOpa53 = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionaropa53.length; i++) {
            $("#opSelectOpa53-" + i + " .contselopce").removeClass("invisible");
            $("#opSelectOpa53-" + i + " .TexSel").html($("#select_Opa53-" + i + ' option:selected').text());
            if ($("#select_Opa53-" + i).val() == ImgRespuestasSeleccionaropa53[i]) {
                $("#opSelectOpa53-" + i + " .TexSel").addClass("ecorrecto");
                $("#opSelectOpa53-" + i + " .respmens").html("Correct!");
                $("#opSelectOpa53-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionarOpa53++;
            }
            else {
                $("#opSelectOpa53-" + i + " .TexSel").addClass("eincorrecto");
                $("#opSelectOpa53-" + i + " .respmens").html("Incorrect!");
                $("#opSelectOpa53-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malasopa53++;
            }
        }
        $(".seleccionar_opa53 select").addClass("invisible");
        if (malasopa53 == 0) {
            $("." + recursoOpa53 + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recursoOpa53 + " .retroalimentacion1").removeClass("none");
            $("." + recursoOpa53 + " .retroalimentacion1").addClass("verderetro");
            $("." + recursoOpa53 + " .retroalimentacion1 p").html("Very good! You are ready to continue.");
        }
        else {
            if (intentosopa53 < 4) {
                $("." + recursoOpa53 + " .bt").removeAttr('disabled');
                $("." + recursoOpa53 + " .retroalimentacion1").removeClass("none");
                $("." + recursoOpa53 + " .bt").addClass("btn-descarga");
                $("." + recursoOpa53 + " .retroalimentacion1").addClass("rojoretro");
                $("." + recursoOpa53 + " .retroalimentacion1 p").html("Try to answer the exercise again.");
            }
            else {
                $("." + recursoOpa53 + " .retroalimentacion1").addClass("negroretro");
                $("." + recursoOpa53 + " .retroalimentacion1").removeClass("none");
                $("." + recursoOpa53 + " .retroalimentacion1 p").html("Please, check the correct answers.");
                for (a = 0; a < ImgRespuestasSeleccionaropa53.length; a++) {
                    $("#opSelectOpa53-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opSelectOpa53-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opSelectOpa53-" + a + " .TexSel").html(resTexOpa53[a]);
                    $("#opSelectOpa53-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opSelectOpa53-" + a + " .respmens").html("Correct!");
                    $("#opSelectOpa53-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }

        }
        $(".seleccionar_opa53").focus();
        $("." + recursoOpa53 + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#tryopa53', function (e) {
        var idcontenedoropa53;
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                idcontenedoropa53 = $(this).closest(".divcontsel").attr("id");
                $("#" + idcontenedoropa53 + " select").removeClass("invisible");
                $("#" + idcontenedoropa53 + " select").val('0')
                $("#" + idcontenedoropa53 + " .TexSel").removeClass("ecorrecto");
                $("#" + idcontenedoropa53 + " .TexSel").removeClass("eincorrecto");
                $("#" + idcontenedoropa53 + " .TexSel").html("");
                $("#" + idcontenedoropa53 + " .respmens").html("");
                $("#" + idcontenedoropa53 + " .TexSel").siblings('.result').removeClass("fa-check");
                $("#" + idcontenedoropa53 + " .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#" + idcontenedoropa53 + " .contselopce").addClass("invisible");
                $("." + recursoOpa53 + " .retroalimentacion1").addClass("none");
            }
        });
        $(".seleccionar_opa53").focus();
        $("#tryopa53").attr("disabled", "disabled");
        $("#tryopa53").removeClass("btn-descarga");
        $(".seleccionar_opa53 .retroalimentacion1 p").html("");
    });
})