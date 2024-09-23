var contadorGeneral2=0;
var contadorGeneral3=0;
var contadorGeneral4=new Array();

var Datos1 = {
    indiceAutoevaluacion: 0,
    preguntas: [
        {
            imagen: 'IB3V-M3_OPA29-A-01.png',
            texto:'tdhiignm',
            descripcionim:'Imagen que representa la media noche.',
            opciones: [
                {
                    contenido: "midnight"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-02.png',
            texto:'hatc',
            descripcionim:'Imagen de dos personas utilizando el chat.',
            opciones: [
                {
                    contenido: "chat"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-03.png',
            texto:'pngsri',
            descripcionim:'Imagen que representa la primavera.',
            opciones: [
                {
                    contenido: "spring"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-04.png',
            texto:'sediilk',
            descripcionim:'Imagen que representa no me gusta.',
            opciones: [
                {
                    contenido: "dislike"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-05.png',
            texto:'eeekwdn',
            descripcionim:'Imagen que representa el fin de semana.',
            opciones: [
                {
                    contenido: "weekend"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-06.png',
            texto:'aeth',
            descripcionim:'Imagen que representa odiar algo.',
            opciones: [
                {
                    contenido: "hate"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-07.png',
            texto:'giimsmwn',
            descripcionim:'Imagen de persona nadando.',
            opciones: [
                {
                    contenido: "swimming"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-08.png',
            texto:'elvo',
            descripcionim:'Imagen de un corazón.',
            opciones: [
                {
                    contenido: "love"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-09.png',
            texto:'gdnriiv',
            descripcionim:'Imagen de persona manejando.',
            opciones: [
                {
                    contenido: "driving"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-A-10.png',
            texto:'mashicrst',
            descripcionim:'Imagen que representa la navidad.',
            opciones: [
                {
                    contenido: "christmas"
                }
            ]
        }
    ],
    terminoEvaluacion: false
    };

    var Datos2 = {
    indiceAutoevaluacion: 0,
    preguntas: [
        {
            imagen: 'IB3V-M3_OPA29-B-01.png',
            texto:'truuno',
            descripcionim:'Imagen que representa la acción de vaciar.',
            opciones: [
                {
                    contenido: "run out"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-02.png',
            texto:'ngteo',
            descripcionim:'Imagen que representa subirse.',
            opciones: [
                {
                    contenido: "get on"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-03.png',
            texto:'anufrrfe',
            descripcionim:'Imagen que representa correr tras algo.',
            opciones: [
                {
                    contenido: "run after"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-04.png',
            texto:'oaeuttk',
            descripcionim:'Imagen que representa la acción de sacar.',
            opciones: [
                {
                    contenido: "take out"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-05.png',
            texto:'lpuitf',
            descripcionim:'Imagen que representa la acción de levantar.',
            opciones: [
                {
                    contenido: "lift up"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-06.png',
            texto:'kotucki',
            descripcionim:'Imagen que representa la acción de echar.',
            opciones: [
                {
                    contenido: "kick out"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-07.png',
            texto:'kgcoab',
            descripcionim:'Imagen que representa la acción de regresar.',
            opciones: [
                {
                    contenido: "go back"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-08.png',
            texto:'nutrnon',
            descripcionim:'Imagen que representa la acción de encender.',
            opciones: [
                {
                    contenido: "turn on"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-B-09.png',
            texto:'cooutem',
            descripcionim:'Imagen que representa la acción de salir.',
            opciones: [
                {
                    contenido: "come out"
                }
            ]
        }
        
    ],
    terminoEvaluacion: false
    };


    var Datos3 = {
    indiceAutoevaluacion: 0,
    preguntas: [
        {
            imagen: 'IB3V-M3_OPA29-C-02.png',
            texto:'kcchaesch',
            descripcionim:'Imagen de persona cobrando un cheque.',
            opciones: [
                {
                    contenido: "cash a check"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-C-02.png',
            texto:'harcs',
            descripcionim:'Imagen de dos autos chocando.',
            opciones: [
                {
                    contenido: "crash"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-C-03.png',
            texto:'roeudtrof',
            descripcionim:'Imagen que representa algo descompuesto.',
            opciones: [
                {
                    contenido: "out of order"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-C-04.png',
            texto:'aeeblt',
            descripcionim:'Imagen de persona llegando tarde.',
            opciones: [
                {
                    contenido: "be late"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-C-05.png',
            texto:'arwnyua',
            descripcionim:'Imagen de una persona huyendo.',
            opciones: [
                {
                    contenido: "run away"
                }
            ]
        },
        {
            imagen: 'IB3V-M3_OPA29-C-06.png',
            texto:'rvaeri',
            descripcionim:'Imagen de un barco llegando.',
            opciones: [
                {
                    contenido: "arrive"
                }
            ]
        }
        
    ],
    terminoEvaluacion: false
    };

function quizfinal(activity) {
    setTimeout(function() {
        $("."+activity).html("");
        var contenedorPrin = "."+activity;

        //var totalQuest=0;

        if(activity=="evaluacionfinal"){
            var Datos = Datos1;
            var difer=1;
        }

        if(activity=="evaluacionfinal2"){
            var Datos = Datos2;
            var difer=2;
        }

        if(activity=="evaluacionfinal3"){
            var Datos = Datos3;
            var difer=3;
        }

        var totalQuest = Datos.preguntas.length;
        
        var current = 0,
            numPreg = 0,
            numResp = 0,
            respuestas = new Array();

        var $gral = $("<div>", { id: "myCarousel", "class": "carousel-slide" });
        var $slides = $("<div>", { "class": "carousel-interno" }).css("width", (totalQuest + 1) * 100 + "%");

        for (var i = 0; i <= totalQuest; i++) {
            var $slide = $("<div>", { id: "item"+difer + i, "class": "c-item", "aria-hidden": true }).css("width", 100 / (totalQuest + 1) + "%");
        
            if (i < totalQuest) {
                
                $slide.append("<div class='numeracion'><p><span class='sr-only'>Pregunta </span>" + (i + 1) + " de " + totalQuest + "</p></div>");

                var $contenedorPreg = $("<div>", { "class": "contenedor-preg" });

                $contenedorPreg.append("<img src='topic-3/img/content/" + Datos.preguntas[i].imagen + "' alt='"+Datos.preguntas[i].descripcionim+"'>");
                
                $contenedorPreg.append("<p class=''>" + Datos.preguntas[i].texto + "</p>");
                
                $slide.append($contenedorPreg);

                var $contenedorOpc = $("<div>", { "class": "contenedor-opciones seleccionable item-input-" + i  });

                
                for (var j = 0; j < Datos.preguntas[i].opciones.length; j++) {
                    
                    var inputs=Datos.preguntas[i].opciones[0].contenido.split(" ");

                    $resp = $("<div>", {
                        "class": ""
                    }).data({
                        "numPreg": i
                    });

                    for(var k = 0; k < inputs.length; k++) {
                        $resp.append("<input class='inputs-auto form-control' data-activity="+activity+" data-valor='"+i+"' placeholder='Write here...'/><p class='pastexto' ></p>")    
                    }

                    $contenedorOpc.append($resp);
                }
                $slide.append($contenedorOpc);

                var $botones = $("<div>", {
                    "class": "botones" });
                var $boton1 = $("<button>", {
                    "class": "byc btn right control btn-right-"+i , "data-valor":i, "data-difer":difer, "aria-hidden":true
                }).append("Next");
                var $boton2 = $("<button>", {
                    "class": "left btn control btn-left-"+i , "data-valor":i, "data-difer":difer
                }).append("Check");
                $botones.append($boton2, $boton1);

                $slide.append($botones);

            }
            if (i == totalQuest) {
                $slide.addClass("ultimo-c-item");
            }
            $slides.append($slide);

        }

        $gral.append($slides);
        $("."+activity).append($gral);

        $("#item10").attr("aria-hidden",false);
        $("#item20").attr("aria-hidden",false);
        $("#item30").attr("aria-hidden",false);

        $(contenedorPrin + ' .left').click(function() {
            if ($(this).hasClass("activo")) {
                
                var actual=$(this).attr('data-valor');
                var difer=$(this).attr('data-difer');
                $(this).removeClass("activo").attr("aria-hidden", true);
                $(this).siblings("button").addClass("activo").removeClass("byc");

                if (current <= totalQuest) {
                    var contadorvacios = 0;
                    $(contenedorPrin + " #item"+difer + current + " input").each(function(i) {
                        contadorvacios++;
                        
                            var conteoResp = 0;
                            //$(contenedorPrin + " #item"+difer + current + " input").each(function(i) {
                                numPreg = $(this).parent().data('numPreg');
                             
                                $(contenedorPrin + " #item"+difer + numPreg + " p").removeClass("seleccionado");
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
                                    $(contenedorPrin + " #item"+difer + numPreg + " .pastexto").html($(this).val()).append("<span class='sr-only'> correct! </span><i class='fa-solid fa-check' aria-hidden='true'></i>");
                                    conteoResp++;
                                } else {
                                    $(this).parent().addClass("inter-incorrecto");
                                    $(this).addClass("invisible");
                                    $(contenedorPrin + " #item"+difer + numPreg + " .pastexto").html($(this).val()).append("<span class='sr-only'> incorrect! </span><i class='fa-solid fa-xmark' aria-hidden='true'></i>");
                                    
                                    //$(contenedorPrin + " #item" + numPreg + " .respuesta").html("<b>La respuesta correcta es "+arregloResp+".</b>");
                                }
                                if (conteoResp == contadorvacios) {
                                    respuestas[numPreg] = 1;
                                } else {
                                    respuestas[numPreg] = 0;
                                }
                            //});


                            $(contenedorPrin + " #item" + numPreg + " .contenedor-opciones").removeClass("seleccionable");
                    });
                }
                
                current++;
                $(contenedorPrin + " #item" + current ).attr("aria-hidden", false);
                if (current == totalQuest) {
                    evaluaQuiz();
                }
                
            }

        });

        $(contenedorPrin + ' .right').click(function() {
            
            $(contenedorPrin + " .carousel-interno").css("margin-left", -100 * current + "%");

            //console.log(current+"  "+totalQuest);
                
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
                act = $(this).attr('data-activity');
                formularioCompleto = true;

                //console.log("."+act +" item-input-"+recurso +" input");
                $("."+act +" .item-input-"+recurso +" input").each(function() {
                
                    if($(this).val().length <= 0 ){
                        formularioCompleto = false;
                    }

                });

                if (formularioCompleto) {
                    $("."+act +" .btn-left-"+recurso).addClass('activo');
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