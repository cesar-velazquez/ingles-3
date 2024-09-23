$(function () {
    /************ OPA46  - Unit 4.2****************************/
    /* Recursoopa48 de Selecionar */
    var ImgRespuestasSeleccionaropa48 = [2, 1, 1, 1, 1, 2, 2, 1];
    var resTexopa48 = [
        "has",
        "hasn't",
        "have",
        "have",
        "have",
        "haven't",
        "has",
        "has"];

    var BuenasSeleccionaropa48 = 0;
    var malasopa48 = 0;
    var intentosopa48 = 0;
    // inicio prueba
    // console.log("Inicio " + BuenasSeleccionaropa48);
    $(document).on('click', '#check_opa48', function (e) {
        malasopa48 = 0;
        intentosopa48++;
        recursoopa48 = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionaropa48.length; i++) {
            $("#opSelectOpa48-" + i + " .contselopce").removeClass("invisible");
            $("#opSelectOpa48-" + i + " .TexSel").html($("#select-Opa48-" + i + ' option:selected').text());
            if ($("#select-Opa48-" + i).val() == ImgRespuestasSeleccionaropa48[i]) {
                $("#opSelectOpa48-" + i + " .TexSel").addClass("ecorrecto");
                $("#opSelectOpa48-" + i + " .respmens").html("Correct!");
                $("#opSelectOpa48-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionaropa48++;
                // console.log("1.- " + BuenasSeleccionaropa48);
            }
            else {
                $("#opSelectOpa48-" + i + " .TexSel").addClass("eincorrecto");
                $("#opSelectOpa48-" + i + " .respmens").html("Incorrect!");
                $("#opSelectOpa48-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malasopa48++;
                // console.log("2.- " + BuenasSeleccionaropa48);
            }
        }
        $(".seleccionar-opa48 select").addClass("invisible");
        if (malasopa48 == 0) {

            $("." + recursoopa48 + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recursoopa48 + " .retroalimentacion1").removeClass("none");
            $("." + recursoopa48 + " .retroalimentacion1").addClass("verderetro");            
            $("." + recursoopa48 + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");            
        }
        else {
            if (intentosopa48 < 4) {
                $("." + recursoopa48 + " .bt").removeAttr('disabled');
                $("." + recursoopa48 + " .retroalimentacion1").removeClass("none");
                $("." + recursoopa48 + " .bt").addClass("btn-descarga");
                $("." + recursoopa48 + " .retroalimentacion1").addClass("rojoretro");
                $("." + recursoopa48 + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");                
            }
            else {
                $("." + recursoopa48 + " .retroalimentacion1").addClass("rojoretro");
                $("." + recursoopa48 + " .retroalimentacion1").removeClass("none");
                $("." + recursoopa48 + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a = 0; a < ImgRespuestasSeleccionaropa48.length; a++) {
                    $("#opSelectOpa48-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opSelectOpa48-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opSelectOpa48-" + a + " .TexSel").html(resTexopa48[a]);
                    $("#opSelectOpa48-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opSelectOpa48-" + a + " .respmens").html("Correct!");
                    $("#opSelectOpa48-" + a + ' .TexSel').siblings('.result').addClass("fa-check");                    
                }
            }

        }
        // $("." + recursoopa48).focus();
        $("." + recursoopa48 + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#try_opa48', function (e) {
        var idcontenedoropa48;
        console.log("idContenedoropa48: ", idcontenedoropa48);
        console.log("click");
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                idcontenedoropa48 = $(this).closest(".divcontsel").attr("id");
                $("#" + idcontenedoropa48 + " select").removeClass("invisible");
                $("#" + idcontenedoropa48 + " select").val('0')
                $("#" + idcontenedoropa48 + " .TexSel").removeClass("ecorrecto");
                $("#" + idcontenedoropa48 + " .TexSel").removeClass("eincorrecto");
                $("#" + idcontenedoropa48 + " .TexSel").html("");
                $("#" + idcontenedoropa48 + " .respmens").html("");
                $("#" + idcontenedoropa48 + " .TexSel").siblings('.result').removeClass("fa-check");
                $("#" + idcontenedoropa48 + " .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#" + idcontenedoropa48 + " .contselopce").addClass("invisible");
                $("." + recursoopa48 + " .retroalimentacion1").addClass("none");
                console.log(idcontenedoropa48);
            }
            console.log("idContenedoropa4822: ", idcontenedoropa48);
        });
        // $(".seleccion-opa48").focus();
        $("#try_opa48").attr("disabled", "disabled");
        $("#try_opa48").removeClass("btn-descarga");
        $(".seleccionar-opa48 .retroalimentacion1").html("");
    });
    // fin prueba
})



