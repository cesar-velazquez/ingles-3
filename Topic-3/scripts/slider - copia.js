var contadorGeneral2=0;
var contadorGeneral3=0;
var contadorGeneral4=new Array();

Imagen que representa la media noche.
Imagen de dos personas utilizando el chat.
Imagen que representa la primavera.
Imagen que representa no me gusta.
Imagen que representa el fin de semana.
Imagen que representa odiar algo.
Imagen de persona nadando.
Imagen de un corazón.
Imagen de persona manejando.
Imagen que representa la navidad.  


var Datos = {
    indiceAutoevaluacion: 0,
    preguntas: [
        {
            imagen: '.png',
            texto:'',
            descripcionim:'',
            opciones: [
                {
                    contenido: ""
                }
            ]
        },
    ],
    terminoEvaluacion: false
    }

function quizfinal() {
    setTimeout(function() {
        $(".evaluacionfinal").html("");
        var contenedorPrin = ".evaluacionfinal";
        var totalQuest = Datos.preguntas.length;
        var current = 0,
            numPreg = 0,
            numResp = 0,
            respuestas = new Array();

        var $gral = $("<div>", { id: "myCarousel", "class": "carousel-slide" });
        var $slides = $("<div>", { "class": "carousel-interno" }).css("width", (totalQuest + 1) * 100 + "%");

        for (var i = 0; i <= totalQuest; i++) {
            var $slide = $("<div>", { id: "item" + i, "class": "c-item", "aria-hidden": true }).css("width", 100 / (totalQuest + 1) + "%");
        
            if (i < totalQuest) {
                
                $slide.append("<div class='numeracion'><p><span class='sr-only'>Pregunta </span>" + (i + 1) + " de " + totalQuest + "</p></div>");

                var $contenedorPreg = $("<div>", { "class": "contenedor-preg" });
                 if (Datos.preguntas[i].texto){
                    $contenedorPreg.append("<p class=''>" + Datos.preguntas[i].texto + "</p>");
                }

                if (Datos.preguntas[i].imagen) {
                    $contenedorPreg.append("<img src='img/" + Datos.preguntas[i].imagen + "' alt='"+Datos.preguntas[i].descripcionim+"'>");
                }
               
                $slide.append($contenedorPreg);

                var $contenedorOpc = $("<div>", { "class": "contenedor-opciones seleccionable item-input-" + i  });
                
                for (var j = 0; j < Datos.preguntas[i].opciones.length; j++) {
                    $resp = $("<div>", {
                        "class": ""
                    }).data({
                        "numPreg": i
                    }).append("<input class='inputs-auto form-control' data-valor='"+i+"' placeholder='Escribe aquí...'/><p class='pastexto' ></p><p class='respuesta'></p>");
                    $contenedorOpc.append($resp);
                }
                $slide.append($contenedorOpc);

                var $botones = $("<div>", {
                    "class": "botones" });
                var $boton1 = $("<button>", {
                    "class": "right control btn-right-"+i , "data-valor":i, "aria-hidden":true
                }).append("Siguiente");
                var $boton2 = $("<button>", {
                    "class": "left control btn-left-"+i , "data-valor":i
                }).append("Revisar");
                $botones.append($boton2, $boton1);

                $slide.append($botones);

            }
            if (i == totalQuest) {
                $slide.addClass("ultimo-c-item");
            }
            $slides.append($slide);

            

            //$slides.append($slide);
        }

        $gral.append($slides);
        $(".evaluacionfinal").append($gral);

        $("#item0").attr("aria-hidden",false);

        $(contenedorPrin + ' .left').click(function() {
            if ($(this).hasClass("activo")) {
                
                var actual=$(this).attr('data-valor');
                $(this).removeClass("activo").attr("aria-hidden", true);
                $(this).siblings("button").addClass("activo");

                if (current <= totalQuest) {
                    var contadorvacios = 0;
                    $(contenedorPrin + " #item" + current + " input").each(function(i) {
                        contadorvacios++;
                        
                            var conteoResp = 0;
                            $(contenedorPrin + " #item" + current + " input").each(function(i) {
                                numPreg = $(this).parent().data('numPreg');
                             
                                $(contenedorPrin + " #item" + numPreg + " p").removeClass("seleccionado");
                                var arregloResp = Datos.preguntas[numPreg].opciones[0].contenido;
                                var contestada = 0;
                                if (contestada == 0) {
                                    if (normalize(arregloResp).toLowerCase() == normalize($(this).val()).toLowerCase()) {
                                        contestada = 1;
                                    }
                                }
                                if (contestada == 1) {
                                    $(this).parent().addClass("inter-correcto selecs");
                                    $(this).addClass("invisible");
                                    $(contenedorPrin + " #item" + numPreg + " .pastexto").html($(this).val()).append("<span class='sr-only'> es correcto </span><i class='fa-solid fa-check' aria-hidden='true'></i>");
                                    conteoResp++;
                                } else {
                                    $(this).parent().addClass("inter-incorrecto");
                                    $(this).addClass("invisible");
                                    $(contenedorPrin + " #item" + numPreg + " .pastexto").html($(this).val()).append("<span class='sr-only'> es incorrecto</span><i class='fa-solid fa-xmark' aria-hidden='true'></i>");
                                    
                                    $(contenedorPrin + " #item" + numPreg + " .respuesta").html("<b>La respuesta correcta es "+arregloResp+".</b>");
                                }
                                if (conteoResp == contadorvacios) {
                                    respuestas[numPreg] = 1;
                                } else {
                                    respuestas[numPreg] = 0;
                                }
                            });
                            $(contenedorPrin + " #item" + numPreg + " .contenedor-opciones").removeClass("seleccionable");
                    });
                }
                //$(contenedorPrin + " #item" + current ).attr("aria-hidden", true);
                current++;
                $(contenedorPrin + " #item" + current ).attr("aria-hidden", false);
                if (current == totalQuest) {
                    evaluaQuiz();
                }
                
            }

        });

        $(contenedorPrin + ' .right').click(function() {
                
                if (current % 2 === 0) {
                    $(".modulo-2-eva .carousel-slide").css("background", "#D1DD9F");
                } else {
                    $(".modulo-2-eva .carousel-slide").css("background", "#fff");
                }
                $(contenedorPrin + " .carousel-interno").css("margin-left", -100 * current + "%");
                console.log(current+"  "+totalQuest);
                
           // }
        });

            evaluaQuiz = function() {
                respuestasTotal = respuestas.length;
                var promedio = 0;
                    var alto =$(".carousel-interno").height()-70;
                
                var $contentResp = $("<div>", { "class": "content-resp" });
                for (var j = 0; j < respuestasTotal; j++) {
                    if (respuestas[j] == 1) {
                        promedio++;
                        var $retroRespadd = $("<button>", { 
                            "class": "botones-modales color-correcto",
                            "data-target": "#retroalimentacion-modal",
                            "data-toggle": "modal",
                            "data-j": j
                        }).append("<p>" + (j + 1) + "</p>");
                    } else if (respuestas[j] == 0) {
                        var $retroRespadd = $("<button>", {
                            "class": "botones-modales color-incorrecto",
                            "data-target": "#retroalimentacion-modal",
                            "data-toggle": "modal",
                            "data-j": j
                        }).append("<p>" + (j + 1) + "</p>");

                    }
                    $contentResp.append($retroRespadd);
                }
                var $retroResp = $("<div>", { "class": "retro-resp" }).append("<div class='fondo-gris'><span class='sr-only'>Resultados, Respuestas correctas "+promedio+", Respuestas incorrectas "+ (respuestasTotal-promedio) +" </span><p>Presiona el botón que corresponde a cada pregunta para consultar tus respuestas.</p></div>").height(alto);

                $retroResp.append($contentResp);
                var $botones = $("<div>", {"class": "botones absolutos" });
                $retroResp.append($botones);
                
                $(".carousel-slide").css("background", "#fff");

                $(contenedorPrin + " #item" + current).append($retroResp);
                
                $(contenedorPrin + " #item" + current +" .botones").html('<button onClick="quizfinal()" class="control activo">Intentar de nuevo</button>');
                $(".contenedor-evaluacion").addClass("evaluado-img");
             
                $(contenedorPrin + '  .botones-modales').click(function() {
                    var dataj = $(this).attr("data-j");
                    $("#retroalimentacion-modal .modal-body").html("");
                    $(".contenedor-evaluacion #item" + dataj).clone().appendTo($("#retroalimentacion-modal .modal-body"));
                });
            }

            $(".inputs-auto").keyup(function() {
                recurso = $(this).attr('data-valor');
                
                if(!$(this).val().length <= 0 ){
                //formularioCompleto = false;
                    $(".btn-left-"+recurso).addClass('activo');
                }
                
            });

        }, 200);

}

var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÇç",
        to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuucc",
        mapping = {};
    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);
    return function(str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    }
})();