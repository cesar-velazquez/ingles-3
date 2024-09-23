var contadorGeneral2=0;
var contadorGeneral3=0;
var contadorGeneral4=new Array();
var contadorSombras=0;

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
            texto:'kccahaesch',
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
    //console.log("volvi");

    setTimeout(function() {
        $("."+activity).html("");
        var contenedorPrin = "."+activity;

        if(activity=="evaluacionfinal1"){
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

        $(".instruccion-ocultar-"+difer).css("visibility","visible");
        //$(".instruccion-ocultar-"+diferen).css("visibility","hidden");

        var totalQuest = Datos.preguntas.length;

        
        var current = 0,
            numPreg = 0,
            numResp = 0,
            respuestas = new Array();

        $(".evaluacionfinal"+difer).attr("data-resultado",0).attr("data-total",totalQuest);

        var $gral = $("<div>", { id: "myCarousel", "class": "carousel-slide" });
        var $slides = $("<div>", { "class": "carousel-interno" }).css("width", (totalQuest + 1) * 100 + "%");

        for (var i = 0; i <= totalQuest; i++) {
            var $slide = $("<div>", { id: "item"+difer + i, "class": "c-item", "aria-hidden": true }).css("width", 100 / (totalQuest + 1) + "%");
        
            if (i < totalQuest) {
                
                $slide.append("<div class='numeracion'><p><span class='sr-only' >Question </span>" + (i + 1) + " of " + totalQuest + "</p></div>");

                var $contenedorPreg = $("<div>", { "class": "contenedor-preg" });

                $contenedorPreg.append("<img  lang='es' src='topic-3/img/content/" + Datos.preguntas[i].imagen + "' alt='"+Datos.preguntas[i].descripcionim+"'>");
                //var letras = "hola";
                //var spacedStr = str.split('').join(' ');
                    //console.log(spacedStr); // "h o l a"
                
                $contenedorPreg.append("<p class=''>" + Datos.preguntas[i].texto.split('').join(' ') + "</p>");
                
                $slide.append($contenedorPreg);

                var $contenedorOpc = $("<div>", { "class": "contenedor-opciones item-input-" + i  });
                
                for (var j = 0; j < Datos.preguntas[i].opciones.length; j++) {
                    
                    var inputs=Datos.preguntas[i].opciones[0].contenido.split(" ");

                    $resp = $("<div>", {
                        "class": ""
                    }).data({
                        "numPreg": i
                    });

                    for(var k = 0; k < inputs.length; k++) {
                        $resp.append("<input class='inputs-auto form-control' size="+inputs[k].length+" data-activity="+activity+" data-valor='"+i+"' placeholder='Write here...'/>")    
                    }

                    $resp.append("<p class='pastexto' ></p>");

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
            console.log(contenedorPrin);
            if ($(this).hasClass("activo")) {
                
                var actual=$(this).attr('data-valor');
                var difer=$(this).attr('data-difer');
                var numPreg=0;

                $(this).removeClass("activo").attr("aria-hidden", true);
                $(this).siblings("button").addClass("activo").removeClass("byc").attr("aria-hidden", false).focus();

                if (current <= totalQuest) {
                    var contadorvacios = 0;
                    
                    contadorvacios++;
                    var conteoResp = 0;
                    var respjunta="";

                    $(contenedorPrin + " #item"+difer + current + " input").each(function(i) {
                        numPreg = $(this).parent().data('numPreg');
                        respjunta+= $(this).val().trim() + " ";

                    });
                        
                    var arregloResp = Datos.preguntas[numPreg].opciones[0].contenido;
                    var contestada = 0;
                    if (contestada == 0) {
                        
                        if (normalize(arregloResp).toLowerCase() == normalize(respjunta.trim()).toLowerCase()) {
                            contestada = 1;
                        }
                    }
                    if (contestada == 1) {
                        $(contenedorPrin + " #item"+difer + numPreg + " div").addClass("inter-correcto selecs");
                        $(contenedorPrin + " #item"+difer + numPreg + " input").addClass("invisible");
                        
                        $(contenedorPrin + " #item"+difer + numPreg + " .pastexto").html(respjunta).append("<span class='sr-only'> correct! </span><i class='fa-solid fa-check' aria-hidden='true'></i>");
                        
                        var puntoGuard=parseInt($(".evaluacionfinal"+difer).attr("data-resultado"));
                        puntoGuard++;
                        console.log(puntoGuard);
                        $(".evaluacionfinal"+difer).attr("data-resultado",puntoGuard);

                    } else {
                        
                        $(contenedorPrin + " #item"+difer + numPreg + " div").addClass("inter-incorrecto");
                        $(contenedorPrin + " #item"+difer + numPreg + " input").addClass("invisible");
                        
                        $(contenedorPrin + " #item"+difer + numPreg + " .pastexto").html(respjunta).append("<span class='sr-only'> incorrect! </span><i class='fa-solid fa-xmark' aria-hidden='true'></i>");
                        
                    }

                }
                
                current++;
                
                //$(contenedorPrin + " #item"+difer  + current ).attr("aria-hidden", false);

                if (current == totalQuest) {
                    evaluaQuiz(difer);
                }
                
            }

        });

        $(contenedorPrin + ' .right').click(function() {
            $(contenedorPrin + " #item"+difer  + current ).attr("aria-hidden", false);
            $(contenedorPrin + " .carousel-interno").css("margin-left", -100 * current + "%");
            if (contadorSombras==1) { $(".sombrabloque2").css("display","none"); $(".actividad-or-2").attr("aria-hidden",false); }
            if (contadorSombras==2) { $(".sombrabloque3").css("display","none"); $(".actividad-or-3").attr("aria-hidden",false);}
                
        });

        quizfinalpinta =function(activity){

            var newStr = "evaluacionfinal"+activity;
            $("#data-act-ev-"+activity).focus();
            quizfinal(newStr)
        }

        evaluaQuiz = function(difer) {
        
            diferen=difer;
            var alto =$(".carousel-interno").height()-70;
            var mensaje="";
            var color="";

            var promedio=parseInt($(".evaluacionfinal"+difer).attr("data-resultado"));
            var respuestasTotal=parseInt($(".evaluacionfinal"+difer).attr("data-total"));
            
            if (promedio==respuestasTotal) { mensaje="Very good! You are ready to continue the next excersise."; color="008A0B" }
            else {mensaje="Try to answer the exercise again."; color="ED0028"}

            var $retroResp = $("<div>", { "class": "retro-resp" }).append("<div class='fondo-gris text-center'><p class='text-azul'>Score</p> <p>Right answers: "+promedio+"</p> <p>Wrong answers: "+ (respuestasTotal-promedio) +"</p></div> <p class='text-center' style='color: #"+color+"'><b>"+mensaje+"</b></p>").height(alto);

            var $botones = $("<div>", {"class": "botones absolutos" });

            if (!(promedio==respuestasTotal)) {
                $retroResp.append($botones);
             }
            $(".instruccion-ocultar-"+diferen).css("visibility","hidden");
            $(".evaluacionfinal"+diferen+" .ultimo-c-item").append($retroResp);

            var newStr = "evaluacionfinal"+diferen;

            $(".evaluacionfinal"+diferen+" .ultimo-c-item .botones").html('<button onClick="quizfinalpinta(\''+diferen+'\')" class="control activo">Try again</button>');
            contadorSombras++;

            

            console.log(contadorSombras);

            
                
        }



            $(".inputs-auto").keyup(function() {
                recurso = $(this).attr('data-valor');
                act = $(this).attr('data-activity');
                formularioCompleto = true;

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