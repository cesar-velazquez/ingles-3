$(function () {
    /************ OPA46  - Unit 4.2****************************/
    /* Recursoopa50_2 de Selecionar */
    var ImgRespuestasSeleccionaropa50_2 = [1, 3, 2, 1, 2, 2];
    var resTexopa50_2 = [
        "has",
        "on top of a tall building",
        "hasn’t",
        "a fast car by himself",
        "hasn’t",
        "a spider in his hand"
    ];

    var BuenasSeleccionaropa50_2 = 0;
    var malasopa50_2 = 0;
    var intentosopa50_2 = 0;
    // inicio prueba
    // console.log("Inicio " + BuenasSeleccionaropa50_2);
    $(document).on('click', '#checkOpa50_2', function (e) {
        malasopa50_2 = 0;
        intentosopa50_2++;
        recursoopa50_2 = $(this).attr('name');
        for (i = 0; i < ImgRespuestasSeleccionaropa50_2.length; i++) {
            $("#opSelectOpa50-2-" + i + " .contselopce").removeClass("invisible");
            $("#opSelectOpa50-2-" + i + " .TexSel").html($("#select-Opa50-2-" + i + ' option:selected').text());
            if ($("#select-Opa50-2-" + i).val() == ImgRespuestasSeleccionaropa50_2[i]) {
                $("#opSelectOpa50-2-" + i + " .TexSel").addClass("ecorrecto");
                $("#opSelectOpa50-2-" + i + " .respmens").html("Correct!");
                $("#opSelectOpa50-2-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionaropa50_2++;
                // console.log("1.- " + BuenasSeleccionaropa50_2);
            }
            else {
                $("#opSelectOpa50-2-" + i + " .TexSel").addClass("eincorrecto");
                $("#opSelectOpa50-2-" + i + " .respmens").html("Incorrect!");
                $("#opSelectOpa50-2-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malasopa50_2++;
                // console.log("2.- " + BuenasSeleccionaropa50_2);
            }
        }
        $(".seleccionarOpa50_2 select").addClass("invisible");
        if (malasopa50_2 == 0) {

            $("." + recursoopa50_2 + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recursoopa50_2 + " .retroalimentacion1").removeClass("none");
            $("." + recursoopa50_2 + " .retroalimentacion1").addClass("verderetro");
            $("." + recursoopa50_2 + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else {
            if (intentosopa50_2 < 4) {
                $("." + recursoopa50_2 + " .bt").removeAttr('disabled');
                $("." + recursoopa50_2 + " .retroalimentacion1").removeClass("none");
                $("." + recursoopa50_2 + " .bt").addClass("btn-descarga");
                $("." + recursoopa50_2 + " .retroalimentacion1").addClass("rojoretro");
                $("." + recursoopa50_2 + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
            }
            else {
                $("." + recursoopa50_2 + " .retroalimentacion1").addClass("negroretro");
                $("." + recursoopa50_2 + " .retroalimentacion1").removeClass("none");
                $("." + recursoopa50_2 + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a = 0; a < ImgRespuestasSeleccionaropa50_2.length; a++) {
                    $("#opSelectOpa50-2-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opSelectOpa50-2-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opSelectOpa50-2-" + a + " .TexSel").html(resTexopa50_2[a]);
                    $("#opSelectOpa50-2-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opSelectOpa50-2-" + a + " .respmens").html("Correct!");
                    $("#opSelectOpa50-2-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }

        }
        $(".seleccionarOpa50_2").focus();
        $("." + recursoopa50_2 + " .bc").attr("disabled", "disabled");

    });

    $(document).on('click', '#tryOpa50_2', function (e) {
        var idcontenedoropa50_2;
        // console.log("idContenedoropa50_2: ", idcontenedoropa50_2);
        // console.log("click");
        $(".conTarjetas .TexSel").each(function () {
            if ($(this).hasClass("eincorrecto")) {
                idcontenedoropa50_2 = $(this).closest(".divcontsel").attr("id");
                $("#" + idcontenedoropa50_2 + " select").removeClass("invisible");
                $("#" + idcontenedoropa50_2 + " select").val('0')
                $("#" + idcontenedoropa50_2 + " .TexSel").removeClass("ecorrecto");
                $("#" + idcontenedoropa50_2 + " .TexSel").removeClass("eincorrecto");
                $("#" + idcontenedoropa50_2 + " .TexSel").html("");
                $("#" + idcontenedoropa50_2 + " .respmens").html("");
                $("#" + idcontenedoropa50_2 + " .TexSel").siblings('.result').removeClass("fa-check");
                $("#" + idcontenedoropa50_2 + " .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#" + idcontenedoropa50_2 + " .contselopce").addClass("invisible");
                $("." + recursoopa50_2 + " .retroalimentacion1").addClass("none");
                // console.log(idcontenedoropa50_2);
            }
            // console.log("idContenedoropa50_222: ", idcontenedoropa50_2);
        });
        $(".seleccionarOpa50_2").focus();
        $("#tryOpa50_2").attr("disabled", "disabled");
        $("#tryOpa50_2").removeClass("btn-descarga");
        $(".seleccionarOpa50_2 .retroalimentacion1").html("");
    });
    // fin prueba
})

// let btnFuente = document.getElementById("font_size");
// let check = document.getElementById("checkOpa50_2");
// let orderOpa50 = document.querySelectorAll('.order_opa50');

// let cuadrosOpa50 = document.getElementById("opa50_cuadros");
// let select = document.getElementById("select-Opa50-2-0");

// btnFuente.addEventListener("click", function () {
//     if (cont != 1 && select.classList.contains("invisible")) {
//         cuadrosOpa50.classList.add("opa50font");
//     } else {
//         cuadrosOpa50.classList.remove("opa50font");
//     }
// })

// check.addEventListener("click", function () {
//     if (cont != 1 ) {
//         cuadrosOpa50.classList.add("opa50font");
//     } else {
//         cuadrosOpa50.classList.remove("opa50font");
//     }
// })

let btnFuente = document.getElementById("font_size");
let check = document.getElementById("checkOpa50_2");
let orderOpa50 = document.querySelectorAll('.order_opa50');

let cuadrosOpa50 = document.getElementById("opa50_cuadros");
let select = document.getElementById("select-Opa50-2-0");

btnFuente.addEventListener("click", function () {
    orderOpa50.forEach(order50 => {
        if (cont != 1 && select.classList.contains("invisible")) {
            order50.classList.add("opa50font");
        } else {
            order50.classList.remove("opa50font");
        }
    })
})

check.addEventListener("click", function () {
    if (cont != 1) {
        cuadrosOpa50.classList.add("opa50font");
    } else {
        cuadrosOpa50.classList.remove("opa50font");
    }
})



