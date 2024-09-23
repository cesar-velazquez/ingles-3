Datos3=  [
{
"memo" :   
[
    {
    "instrucciones":"",
    "opciones" :  
    [
        {
        "op1": "blouse",
        "op2": "blouse",
        },
        {
        "op1": "boots",
        "op2": "boots",
        },
        {
        "op1": "coat",
        "op2": "coat",
        },
        {
        "op1": "dress",
        "op2": "dress",
        },
        {
        "op1": "heels",
        "op2": "heels",
        },
        {
        "op1": "jeans",
        "op2": "jeans",
        },
        {
        "op1": "shoes",
        "op2": "shoes",
        },
        {
        "op1": "sweater",
        "op2": "sweater",
        }
    ],
    "retroalimentacion" :
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

    $("#memorama1 select").change(function() {  
        activ5("memorama1");
    });


    function reiniciar(recurso) {
        activ5(recurso);
    }

    function activ5(recurso){
        $(".reiniciarmemo").removeClass("btn-descarga");
        $("#"+recurso+" .retroalimentacion").css("visibility","hidden");
        $("#"+recurso+" .reiniciarmemo").attr("disabled", true)
        $("#"+recurso+" .retroalimentacion").attr("aria-hidden",true);
        $("#"+recurso+" .respuestas-correctas").attr("aria-hidden", true);
        $("#"+recurso+" .respuestas-correctas div").html("");
        $("#"+recurso+" .texto-apoyo").attr("aria-hidden",false);

        var carta1 = null;
        //var totalopciones = Datos3[0].memo[0].opciones.length;
        var totalopciones = $("#" + recurso + ' .memo-nivel option:selected').val();
        var cartas= new Array();
        var emparejadas=0;

        for(i=1;i<=totalopciones;i++){
            var elemento='<button data-name="'+i+'" type="button" class="color-1 tarjetamemo" >'+
                        '<p lang="en"><i>'+Datos3[0].memo[0].opciones[(i-1)].op1+'</i></p>'+
                        '</button>';
            var elemento2='<button data-name="'+i+'" type="button" class="color-1 tarjetamemo" >'+
                        '<img src="../img/modulo1/memorama/'+Datos3[0].memo[0].opciones[(i-1)].op2+'.png" alt="imagen de apoyo" aria-hidden="true" />'+
                        '<i class="sr-only" lang="en">'+Datos3[0].memo[0].opciones[(i-1)].op1+'</i>'+
                        '</button>';
            cartas.push(elemento, elemento2);
        }
        shuffleArray(cartas);
         $("#"+recurso+" .interiorMemorama").html("");
        for(i=0;i<cartas.length;i++){
            $("#"+recurso+" .interiorMemorama").append(cartas[i]);
        }
    
        $("#"+recurso+' .interiorMemorama button').click(function() {
            console.log(recurso);
            var contenidoCarta = this;
            totalcont=10;
        
            if (!$(contenidoCarta).hasClass('abierta')) {
                $(contenidoCarta).addClass('abierta');
                $(contenidoCarta).find('img').css('display','none');
                $(contenidoCarta).removeClass('color-1');
                $(contenidoCarta).find('span').css('display','block');
                if (carta1 == null) {
                    carta1 = this;
                } else if ($(carta1).attr('data-name') == $(this).attr('data-name')) {
                    $(carta1).addClass("matched").attr("aria-hidden", true).append("<i class='fa-solid fa-check' aria-hidden='true'></i>");
                    $(this).addClass("matched").attr("aria-hidden", true).append("<i class='fa-solid fa-check' aria-hidden='true'></i>");
                    var vconcar= $(".matched").length;
                    emparejadas++;

                    if (emparejadas==1) {
                        $("#"+recurso+" .respuestas-correctas").attr("aria-hidden", false);
                    }
                    //Este texto se debe modificar segun corresponda
                    $("#"+recurso+" .respuestas-correctas div").append("<p><i lang='en'>" + $(carta1).find("i").text() + "</i> corresponde a <i lang='en'>" + $(this).find("i").text() +"</i></p>");
                    carta1 = null;

                } else {
                    // not matched
                    setTimeout(function() {
                        $(carta1).removeClass('abierta');
                        $(carta1).find('span').css('display','none');
                        $(carta1).addClass('color-1');
                        $(carta1).find('img').css('display','block');
                        $(contenidoCarta).removeClass('abierta');
                        $(contenidoCarta).find('span').css('display','none');
                        $(contenidoCarta).addClass('color-1');
                        $(contenidoCarta).find('img').css('display','block');
                        carta1 = null;
                    }, 750);
                }
            }
            console.log(emparejadas +" = "+ totalopciones);

            if (emparejadas == totalopciones) {
                $("#"+recurso+" .retroalimentacion").css("visibility","visible");
                $("#"+recurso+" .retroalimentacion").attr("aria-hidden",false);
                $("#"+recurso+" .texto-apoyo").attr("aria-hidden",true);

                $(".reiniciarmemo").addClass("btn-descarga");

                setTimeout(function(){
                     $("#"+recurso+" .reiniciarmemo").attr("disabled", false)
                },200);
            }
        });

        $("#"+recurso+" .reiniciarmemo").click(function(){ reiniciar(recurso) });
    }

activ5("memorama1");