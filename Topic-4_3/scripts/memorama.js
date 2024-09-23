Datos11 = [
    {
        "memo":
            [
                {
                    "instrucciones": "",
                    "opciones":
                        [
                            {
                                "op1": "Shave",
                                "op2": "Shaved",
                                "op3": "",
                            },
                            {
                                "op1": "Shine",
                                "op2": "Shone",
                                "op3": "",
                            },
                            {
                                "op1": "Shoot",
                                "op2": "Shot",
                                "op3": "",
                            },
                            {
                                "op1": "Spend",
                                "op2": "Spent",
                                "op3": "",
                            },
                            {
                                "op1": "Stand",
                                "op2": "Stood",
                                "op3": "",
                            },
                            {
                                "op1": "Strike",
                                "op2": "Struck",
                                "op3": "",
                            },
                            {
                                "op1": "Sweep",
                                "op2": "Swept",
                                "op3": "",
                            },
                            {
                                "op1": "Tell",
                                "op2": "Told",
                                "op3": "",
                            },
                            {
                                "op1": "Think",
                                "op2": "Thought",
                                "op3": "",
                            },
                            {
                                "op1": "Win",
                                "op2": "Won",
                                "op3": "",
                            },
                            {
                                "op1": "Understand",
                                "op2": "Understood",
                                "op3": "",
                            }
                        ],
                    "retroalimentacion":
                        [
                            {
                                "texto": "Poor achievement.",
                                "texto2": "Please, listen again and answer the exercise. When you get more than 4 correct answers, you are ready to continue with the next exercise of this unit.",
                                "numero": 3
                            },
                            {
                                "texto": "Ok, but you need to improve. ",
                                "texto2": "I suggest you try the exercise again before you continue with the next exercise.",
                                "numero": 5
                            },
                            {
                                "texto": "Good job.",
                                "texto2": "You are ready to continue with the next exercise of this unit.",
                                "numero": 6
                            }
                        ]
                }
            ]

    }
];

Datos7 = [
    {
        "memo":
            [
                {
                    "instrucciones": "",
                    "opciones":
                        [
                            {
                                "op1": "Pay",
                                "op2": "Paid /paid",
                                "op3": "",                                
                            },
                            {
                                "op1": "Sell",
                                "op2": "Sold / sold",
                                "op3": "",                                
                            },
                            {
                                "op1": "Send",
                                "op2": "Sent / sent",
                                "op3": "",                                
                            },
                            {
                                "op1": "Feel",
                                "op2": "Felt / felt",
                                "op3": "",                                
                            },
                            {
                                "op1": "Fight",
                                "op2": "Fought / fought",
                                "op3": "",                                
                            },
                            {
                                "op1": "Find",
                                "op2": "Found / found",
                                "op3": "",                                
                            },
                            {
                                "op1": "Have",
                                "op2": "straight",
                                "op3": "Had / had",                                
                            },
                        ],
                    "retroalimentacion":
                        [
                            {
                                "texto": "Poor achievement.",
                                "texto2": "Please, listen again and answer the exercise. When you get more than 4 correct answers, you are ready to continue with the next exercise of this unit.",
                                "numero": 3
                            },
                            {
                                "texto": "Ok, but you need to improve. ",
                                "texto2": "I suggest you try the exercise again before you continue with the next exercise.",
                                "numero": 5
                            },
                            {
                                "texto": "Good job.",
                                "texto2": "You are ready to continue with the next exercise of this unit.",
                                "numero": 6
                            }
                        ]
                }
            ]

    }
];

Datos6 = [
    {
        "memo":
            [
                {
                    "instrucciones": "",
                    "opciones":
                        [
                            {
                                "op1": "Bring",
                                "op2": "Brought / brought",
                                "op3": "",
                            },
                            {
                                "op1": "Build",
                                "op2": "Built / built",
                                "op3": "",
                            },
                            {
                                "op1": "Buy",
                                "op2": "Bought / bought",
                                "op3": "",
                            },
                            {
                                "op1": "Catch",
                                "op2": "Caught / caught",
                                "op3": "",
                            },
                            {
                                "op1": "Lose",
                                "op2": "Lost / lost",
                                "op3": "",
                            },
                            {
                                "op1": "Make",
                                "op2": "Made / made",
                                "op3": "",
                            },
                            {
                                "op1": "Meet",
                                "op2": "Met / met",
                                "op3": "",
                            }
                        ],
                    "retroalimentacion":
                        [
                            {
                                "texto": "Poor achievement.",
                                "texto2": "Please, listen again and answer the exercise. When you get more than 4 correct answers, you are ready to continue with the next exercise of this unit.",
                                "numero": 3
                            },
                            {
                                "texto": "Ok, but you need to improve. ",
                                "texto2": "I suggest you try the exercise again before you continue with the next exercise.",
                                "numero": 5
                            },
                            {
                                "texto": "Good job.",
                                "texto2": "You are ready to continue with the next exercise of this unit.",
                                "numero": 6
                            }
                        ]
                }
            ]

    }
];

function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}

$("#memorama1 select").change(function () {
    activ5("memorama1");
});


function reiniciar(recurso) {
    activ5(recurso);
}

function activ5(recurso) {

    $(".reiniciarmemo").removeClass("btn-descarga");
    $("#" + recurso + " .retroalimentacion").css("visibility", "hidden");
    $("#" + recurso + " .reiniciarmemo").attr("disabled", true)
    $("#" + recurso + " .retroalimentacion").attr("aria-hidden", true);
    $("#" + recurso + " .respuestas-correctas").attr("aria-hidden", true);
    $("#" + recurso + " .respuestas-correctas div").html("");
    $("#" + recurso + " .texto-apoyo").attr("aria-hidden", false);

    var carta1 = null;
    //var totalopciones = Datos3[0].memo[0].opciones.length;
    var totalopciones = $("#" + recurso + ' .memo-nivel option:selected').val();
    var nivel = $("#" + recurso + ' .memo-nivel option:selected').text();

    var cartas = new Array();
    var emparejadas = 0;

    if (totalopciones == 7 && nivel=="Memorama 1") {
        console.log("Entró en el nivel 1 del memorama");
        for (i = 1; i <= totalopciones; i++) {
            var elemento = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
                '<p aria-hidden="true" ><i>' + Datos6[0].memo[0].opciones[(i - 1)].op1 + '</i></p>' +
                '<i  class="sr-only">' + Datos6[0].memo[0].opciones[(i - 1)].op1 + '</i>' +
                '</button>';
            var elemento2 = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
            '<p aria-hidden="true" ><i>' + Datos6[0].memo[0].opciones[(i - 1)].op2 + '</i></p>' +
            '<i  class="sr-only">' + Datos6[0].memo[0].opciones[(i - 1)].op2 + '</i>' +
            '</button>';
            cartas.push(elemento, elemento2);
        }
    } else if (totalopciones == 7 && nivel=="Memorama 2") {
        console.log("Entró en el nivel 2 del memorama");
        for (i = 1; i <= totalopciones; i++) {
            var elemento = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
                '<p aria-hidden="true" ><i>' + Datos7[0].memo[0].opciones[(i - 1)].op1 + '</i></p>' +
                '<i  class="sr-only">' + Datos7[0].memo[0].opciones[(i - 1)].op1 + '</i>' +
                '</button>';
            var elemento2 = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
            '<p aria-hidden="true" ><i>' + Datos7[0].memo[0].opciones[(i - 1)].op2 + '</i></p>' +
            '<i  class="sr-only">' + Datos7[0].memo[0].opciones[(i - 1)].op2 + '</i>' +
            '</button>';
            cartas.push(elemento, elemento2);
        }
    } else {
        for (i = 1; i <= totalopciones; i++) {
            var elemento = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
                '<p aria-hidden="true" ><i>' + Datos11[0].memo[0].opciones[(i - 1)].op1 + '</i></p>' +
                '<i  class="sr-only">' + Datos11[0].memo[0].opciones[(i - 1)].op1 + '</i>' +
                '</button>';
            var elemento2 = '<button lang="en" data-name="' + i + '" type="button" class="color-1 tarjetamemo" >' +
            '<p aria-hidden="true" ><i>' + Datos11[0].memo[0].opciones[(i - 1)].op2 + '</i></p>' +
            '<i  class="sr-only">' + Datos11[0].memo[0].opciones[(i - 1)].op2 + '</i>' +
            '</button>';
            cartas.push(elemento, elemento2);
        }
    }

    shuffleArray(cartas);

    $("#" + recurso + " .interiorMemorama").html("");

    for (i = 0; i < cartas.length; i++) {
        $("#" + recurso + " .interiorMemorama").append(cartas[i]);
    }

    console.log("Parejas totales:" + cartas.length);

    $("#" + recurso + " .contador").html('<p class="parrafo">' + emparejadas + '/'  + cartas.length/2 +  ' pairs' + '</p>' );

    $("#" + recurso + ' .interiorMemorama button').click(function () {
        // console.log(recurso);
        var contenidoCarta = this;
        totalcont = 10;

        if (!$(contenidoCarta).hasClass('abierta')) {
            $(contenidoCarta).addClass('abierta');
            $(contenidoCarta).find('img').css('display', 'none');
            $(contenidoCarta).removeClass('color-1');
            $(contenidoCarta).find('span').css('display', 'block');
            if (carta1 == null) {
                carta1 = this;
            } else if ($(carta1).attr('data-name') == $(this).attr('data-name')) {
                $(carta1).addClass("matched").attr("aria-hidden", true).append("<i class='fa-solid fa-check' aria-hidden='true'></i>");
                $(this).addClass("matched").attr("aria-hidden", true).append("<i class='fa-solid fa-check' aria-hidden='true'></i>");
                var vconcar = $(".matched").length;
                emparejadas++;

                console.log("emparejadas: " + emparejadas);
                $("#" + recurso + " .contador").html('<p class="parrafo">' + emparejadas + '/'  + cartas.length/2 +  ' pairs' + '</p>');

                if (emparejadas == 1) {
                    $("#" + recurso + " .respuestas-correctas").attr("aria-hidden", false);
                }
                //Este texto se debe modificar segun corresponda
                $("#" + recurso + " .respuestas-correctas div").append("<p><i lang='en'>" + $(carta1).find("i").text() + "</i> corresponde a <i lang='en'>" + $(this).find("i").text() + "</i></p>");
                carta1 = null;

            } else {
                // not matched
                setTimeout(function () {
                    $(carta1).removeClass('abierta');
                    $(carta1).find('span').css('display', 'none');
                    $(carta1).addClass('color-1');
                    $(carta1).find('img').css('display', 'block');
                    $(contenidoCarta).removeClass('abierta');
                    $(contenidoCarta).find('span').css('display', 'none');
                    $(contenidoCarta).addClass('color-1');
                    $(contenidoCarta).find('img').css('display', 'block');
                    carta1 = null;
                }, 750);
            }
        }
        // console.log(emparejadas + " = " + totalopciones);

        if (emparejadas == totalopciones) {
            $("#" + recurso + " .retroalimentacion").css("visibility", "visible");
            $("#" + recurso + " .retroalimentacion").attr("aria-hidden", false);
            $("#" + recurso + " .texto-apoyo").attr("aria-hidden", true);

            $(".reiniciarmemo").addClass("btn-descarga");

            setTimeout(function () {
                $("#" + recurso + " .reiniciarmemo").attr("disabled", false)
            }, 200);
        }
    });

    $("#" + recurso + " .reiniciarmemo").click(function () { reiniciar(recurso) });
}

activ5("memorama1");

