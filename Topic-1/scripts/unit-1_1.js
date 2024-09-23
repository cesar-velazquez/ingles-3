

$(function () {

    var ImgRespuestasSeleccionar111 = [];
    var RespuestasSeleccionar111 = [];
    var RespuestasEnSelect111 = [];

    memoramaSelect();

    function memoramaSelect() {
        var numTarjetas1 = $("#selMemMov option:selected").val();
        // console.log("prueba: " + numTarjetas1);

        if (numTarjetas1 == 6) {
            ImgRespuestasSeleccionar111 = ['blond', 'shy', 'slim', 'son', 'tall', 'wife'];
            $(".conTarjetas").empty();
            var numTarjetas = 6;
            var misElementos = "012345";
            //Elegir las opciones que serán las correctas            
            for (i = 0; i < numTarjetas; i++) {
                var posicion = 0 + Math.floor(Math.random() * misElementos.length);
                var num1 = misElementos.charAt(posicion);
                RespuestasSeleccionar111[i] = misElementos.charAt(posicion);
                misElementos = misElementos.replace(num1, "");
                $(".conTarjetas").append("<div class='seleccionar-11-" + i + "'><div class='cont-img'><label for='s11-" + i + "' ><img src='./Topic-1/img/modulo1/memorama/movil_nivel1/" + ImgRespuestasSeleccionar111[num1] + ".png' alt='Image - " + ImgRespuestasSeleccionar111[num1] + "' aria-hidden='true'><span class='oculto'>Image - " + ImgRespuestasSeleccionar111[num1] + "</span></label></div><div id='opsel-11-" + i + "' class='divcontsel'><select id='s11-" + i + "' class='form-control reactivo custom-select' data-valor='r1' name='seleccionar-1-1'><option disabled='disabled' selected='selected' value='0' hidden='hidden' lang='en'>Choose here...</option></select><div class='contselopce invisible'><div class='TexSel'></div><i class='result fa-solid' aria-hidden='true'></i></div><div class='respmens sr-only'></div></div></div>");
            }

            var cadenaFinal;
            for (z = 0; z < numTarjetas; z++) {
                cadenaFinal = "";
                var cadena = "012345";
                //Elegir 3 opciones al azar quitando la opción correcta
                var cadenanueva = cadena.split(RespuestasSeleccionar111[z]).join('');

                for (i = 0; i < 3; i++) {
                    var posicion2 = 0 + Math.floor(Math.random() * cadenanueva.length);
                    var num2 = cadenanueva.charAt(posicion2);
                    cadenaFinal += cadenanueva.charAt(posicion2);
                    cadenanueva = cadenanueva.replace(num2, "");
                }
                cadenaFinal += RespuestasSeleccionar111[z];
                //Revolver la opción correcta con las otras 3 opciones para el Select
                var cadenaOpciones = cadenaFinal;
                for (j = 1; j <= 4; j++) {
                    var posicion3 = 0 + Math.floor(Math.random() * cadenaOpciones.length);
                    var num4 = cadenaOpciones.charAt(posicion3);
                    cadenaOpciones = cadenaOpciones.replace(num4, "");
                    $("#s11-" + z).append("<option value='" + j + "' lang='en'>" + ImgRespuestasSeleccionar111[num4] + "</option>");
                    //Opción en select correcta
                    if (RespuestasSeleccionar111[z] == num4) {
                        RespuestasEnSelect111[z] = j;
                    }
                }
            }
            $(".reactivo").change(function () {
                recurso = $(this).attr('name');
                TodasSi = 1;
                if (verificarRespuestasContestadas(event)) { //Están contestadas todas
                    $("." + recurso + " .bc").removeAttr('disabled');
                }
            });

        } else if (numTarjetas1 == 7) {
            ImgRespuestasSeleccionar111 = ['daughter', 'family', 'friendly', 'husband', 'married', 'straight', 'talkative'];
            $(".conTarjetas").empty();
            var numTarjetas = 7;
            var misElementos = "0123456";
            //Elegir las opciones que serán las correctas            
            for (i = 0; i < numTarjetas; i++) {
                var posicion = 0 + Math.floor(Math.random() * misElementos.length);
                var num1 = misElementos.charAt(posicion);
                RespuestasSeleccionar111[i] = misElementos.charAt(posicion);
                misElementos = misElementos.replace(num1, "");
                $(".conTarjetas").append("<div class='seleccionar-11-" + i + "'><div class='cont-img'><label for='s11-" + i + "' ><img src='./Topic-1/img/modulo1/memorama/movil_nivel2/" + ImgRespuestasSeleccionar111[num1] + ".png' alt='Image - " + ImgRespuestasSeleccionar111[num1] + "' aria-hidden='true'><span class='oculto'>Image - " + ImgRespuestasSeleccionar111[num1] + "</span></label></div><div id='opsel-11-" + i + "' class='divcontsel'><select id='s11-" + i + "' class='form-control reactivo custom-select' data-valor='r1' name='seleccionar-1-1'><option disabled='disabled' selected='selected' value='0' hidden='hidden' lang='en'>Choose here...</option></select><div class='contselopce invisible'><div class='TexSel'></div><i class='result fa-solid' aria-hidden='true'></i></div><div class='respmens sr-only'></div></div></div>");
            }
            var cadenaFinal;
            for (z = 0; z < numTarjetas; z++) {
                cadenaFinal = "";
                var cadena = "012345";
                //Elegir 3 opciones al azar quitando la opción correcta
                var cadenanueva = cadena.split(RespuestasSeleccionar111[z]).join('');

                for (i = 0; i < 3; i++) {
                    var posicion2 = 0 + Math.floor(Math.random() * cadenanueva.length);
                    var num2 = cadenanueva.charAt(posicion2);
                    cadenaFinal += cadenanueva.charAt(posicion2);
                    cadenanueva = cadenanueva.replace(num2, "");
                }
                cadenaFinal += RespuestasSeleccionar111[z];
                //Revolver la opción correcta con las otras 3 opciones para el Select
                var cadenaOpciones = cadenaFinal;
                for (j = 1; j <= 4; j++) {
                    var posicion3 = 0 + Math.floor(Math.random() * cadenaOpciones.length);
                    var num4 = cadenaOpciones.charAt(posicion3);
                    cadenaOpciones = cadenaOpciones.replace(num4, "");
                    $("#s11-" + z).append("<option value='" + j + "' lang='en'>" + ImgRespuestasSeleccionar111[num4] + "</option>");
                    //Opción en select correcta
                    if (RespuestasSeleccionar111[z] == num4) {
                        RespuestasEnSelect111[z] = j;
                    }
                }
            }
            $(".reactivo").change(function () {
                recurso = $(this).attr('name');
                TodasSi = 1;
                if (verificarRespuestasContestadas(event)) { //Están contestadas todas
                    $("." + recurso + " .bc").removeAttr('disabled');
                }
            });
        } else {
            ImgRespuestasSeleccionar111 = [
                'punctual', 'clever', 'extroverted', 'generous', 'granddaughter', 'grandparents',
                'hardworking', 'introverted', 'mummy', 'overweight', 'pessimistic'
            ];

            $(".conTarjetas").empty();
            var numTarjetas = 11;
            // console.log(ImgRespuestasSeleccionar111)

            // Genera un array de índices únicos
            var indices = Array.from(Array(numTarjetas).keys());

            // Función para mezclar un array
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            // Mezcla los índices
            shuffle(indices);

            for (let i = 0; i < numTarjetas; i++) {
                var num1 = indices[i];
                RespuestasSeleccionar111[i] = num1;
                $(".conTarjetas").append(
                    `<div class='seleccionar-11-${i}'>
                        <div class='cont-img'>
                            <label for='s11-${i}'>
                                <img src='./Topic-1/img/modulo1/memorama/movil_nivel3/${ImgRespuestasSeleccionar111[num1]}.png' 
                                    alt='Image - ${ImgRespuestasSeleccionar111[num1]}' 
                                    aria-hidden='true'>
                                <span class='oculto'>Image - ${ImgRespuestasSeleccionar111[num1]}</span>
                            </label>
                        </div>
                        <div id='opsel-11-${i}' class='divcontsel'>
                            <select id='s11-${i}' class='form-control reactivo custom-select' data-valor='r1' name='seleccionar-1-1'>
                                <option disabled='disabled' selected='selected' value='0' hidden='hidden' lang='en'>Choose here...</option>
                            </select>
                            <div class='contselopce invisible'>
                                <div class='TexSel'></div>
                                <i class='result fa-solid' aria-hidden='true'></i>
                            </div>
                            <div class='respmens sr-only'></div>
                        </div>
                    </div>`
                );
            }

            for (z = 0; z < numTarjetas; z++) {
                // Garantiza que la opción correcta esté incluida
                var opciones = [RespuestasSeleccionar111[z]];
                var restantes = [...Array(numTarjetas).keys()].filter(idx => idx !== RespuestasSeleccionar111[z]);

                while (opciones.length < 4) {
                    var posicion = Math.floor(Math.random() * restantes.length);
                    opciones.push(restantes[posicion]);
                    restantes.splice(posicion, 1);
                }

                shuffle(opciones);

                for (j = 1; j <= 4; j++) {
                    var opcion = opciones[j - 1];
                    $("#s11-" + z).append("<option value='" + j + "' lang='en'>" + ImgRespuestasSeleccionar111[opcion] + "</option>");
                    // Opción en select correcta
                    if (RespuestasSeleccionar111[z] == opcion) {
                        RespuestasEnSelect111[z] = j;
                    }
                }
            }

            $(".reactivo").change(function () {
                recurso = $(this).attr('name');
                TodasSi = 1;
                if (verificarRespuestasContestadas(event)) { //Están contestadas todas
                    $("." + recurso + " .bc").removeAttr('disabled');
                }
            });

        }
    };




    $("#selMemMov").change(function () {
        memoramaSelect();
        recurso = $(this).attr('name');
        $("." + recurso + " .bc").removeAttr('disabled');
    });





    var BuenasSeleccionar111 = 0;
    var malas = 0;

    $(document).on('click', '#check-s-11-1', function (e) {
        malas = 0;
        //alert("Hola");
        var idSelect = $(this).attr("id");
        var arregloId = idSelect.slice(-1);
        recurso = $(this).attr('name');
        var numTarjetas = $("#selMemMov option:selected").val();
        for (i = 0; i < numTarjetas; i++) {
            $("#opsel-11-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-11-" + i + " .TexSel").html($("#s11-" + i + ' option:selected').text());
            if ($("#s11-" + i).val() == RespuestasEnSelect111[i]) {
                $("#opsel-11-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-11-" + i + " .respmens").html("Correct!");
                $("#opsel-11-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar111++;
            }
            else {
                $("#opsel-11-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-11-" + i + " .respmens").html("Incorrect!");
                $("#opsel-11-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas++;
            }
        }
        $(".seleccionar-1-1 select").addClass("invisible");
        if (malas == 0) {
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            $("." + recurso + " .bt").removeAttr('disabled');
            $("." + recurso + " .bt").addClass("btn-descarga");
            $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").html("Please, try to answer the exercise  again.");
        }
        $("." + recurso + " .bc").attr("disabled", "disabled");
    });

    $(document).on('click', '#try-s-11-1', function (e) {
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
            }
        });
        $("#try-s-11-1").attr("disabled", "disabled");
        $("#try-s-11-1").removeClass("btn-descarga");
        $(".seleccionar-1-1 .retroalimentacion1").html("");
    });

    /************************************ SELECTS ************************************/

    var recurso;
    //Evalua si están llenos los faqs
    var fila2 = 0;
    function verificarRespuestasContestadas(event) {
        var formularioCompleto = true;
        if (event) {
            $("." + recurso + " select").each(function () {
                if ($(this).val() == null) { //No selecciono una opcion  
                    TodasSi = 0;
                    formularioCompleto = false;
                }
            });
            return formularioCompleto;
        }
        return false;
    }

    $(".reactivo").change(function () {
        recurso = $(this).attr('name');
        TodasSi = 1;
        if (verificarRespuestasContestadas(event)) { //Están contestadas todas
            $("." + recurso + " .bc").removeAttr('disabled');
        }
    });

    /* ************************************************ */

    if (isMobile()) {
        $(".seleccionar-12-1 select option:selected").text("Choose here...");
    }
    else {
        //alert("no es movil");
    }

    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e) {
            return false;
        }
    }

    $('.btn-colapsar:not(.btn-collpse)').click(function () {
        if ($(this).hasClass('expandido')) {
            $(this).removeClass('expandido');
            $(this).removeClass('btn-expandido');
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-plus');
        }
        else {
            $(this).addClass('expandido');
            $(this).addClass('btn-expandido');
            $(this).find('i').addClass('fa-times');
            $(this).find('i').removeClass('fa-plus');
        }
    });

    $('.btn-collpse').on('click', function () {
        if ($(window).width() >= 768) {
            if ($(this).hasClass('expandido')) {
                $(this).removeClass('expandido');
                $(this).find('i').removeClass('fa-minus');
                $(this).find('i').addClass('fa-plus');
            }
            else {
                $(this).addClass('expandido');
                $(this).find('i').addClass('fa-minus');
                $(this).find('i').removeClass('fa-plus');
            }
            var objetivo = $(this).attr('data-target');
            $(objetivo).collapse('toggle');
        }
        else {
            var url = $(this).attr('url-target');
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.href = url;
            link.download = '';
            link.click();
        }
    });


})



