Datos3=  [
{
"ordenar" :   
[
    {
      "reactivos": [
        {
          "texto": "Could Leo speak French when he was a child?"
        }, 
        {
          "texto": "Donna couldn’t finish her homework because she fell asleep."
        },
        {
          "texto": "Yesterday night we could see all the stars in the sky."
        },
        {
          "texto": "When I was a young child, I couldn’t tie my shoes."
        },
        {
          "texto": "Could your grandfather fly an airplane?"
        },
        {
          "texto": "They are happy because they could finish their project on time."
        },
        {
          "texto": "Could you drive a car when you were younger?"
        },
        {
          "texto": "I could climb trees when I was a child but I’m very old now."
        }
      ]
    }
  ]
    
}
];


var vecespasa=0;
function activ5(){ 

    var name="activity-7"; //este se debe modificar segun actividad
    var diferencia="7"; //este se debe modificar segun actividad
    var totalopciones = Datos3[0].ordenar[0].reactivos.length;
    var correctas = [];
    var respuestas = [];
    var malas=0;
    var incisos = [ "a", "b", "c", "d", "e", "f", "g", "h" ];    
    

    
    $("#"+name).html("").append("<p class='sr-only textocomplementario' lang='es'>Lista de "+totalopciones+" enunciados</p><div class='ordenar'></div>");
    $.each(Datos3[0].ordenar[0].reactivos, function (indice, reactivo) {
        correctas.push(reactivo.texto);
        var opcionesReactivo = reactivo.texto.split(" ");
        opcionesReactivo.sort(() => Math.random() - 0.5);
        $(".ordenar").append("<div id='ordenar-" + indice + "' ><span class='text-azul esp'>"+incisos[indice]+".</span><span class='sr-only' lang='es'>Enunciado "+(indice+1)+"</span></div>");
        $("#"+ name +" #ordenar-" + indice).append("<div class='ordenarOpc'></div>");
        $("#"+ name +" #ordenar-" + indice).append("<div class='ordenarCampo' data-num='" + indice + "'></div>");
        $("#"+ name +" #ordenar-" + indice).append("<div class='contselopc sr-only'><p></p></div>");

        $.each(opcionesReactivo, function (indiceOpcion, opcion) {
            $("#"+ name +" #ordenar-" + indice+" .ordenarOpc").append("<button id='labels" + indice + indiceOpcion + "' data-name='" + indice + "' class='labels'>" + opcion + "</button>");
        });
    });

    $(".labels").click(function (e) {
        $(this).attr("aria-hidden","true");
        if($(this).parent().hasClass("ordenarOpc")){
            $("#ordenar-" + $(this).data("name") + " .contselopc p").append($(this).text()+" ");            
        }



        $("#ordenar-" + $(this).data("name") + " .ordenarCampo").append($(this));
        console.log($("#ordenar-" + $(this).data("name") +" .ordenarCampo" ).height());
        $("#ordenar-"+ $(this).data("name") +" .ordenarOpc").css("min-height", $("#ordenar-" + $(this).data("name") +" .ordenarCampo" ).height()+26);



        if ($("#activity-7 .ordenarOpc button").length==0) { $("#activity-7 .comprobar").removeAttr('disabled'); }
    });

    $("#"+name).append("</div>");
    $("#"+name).append("<div class='retroalimentacion' lang='es'><p aria-hidden='true'>&nbsp;</p></div><ol class='instruccion-color-verde ml-4 text-left' start='2'><li>Press the buttons and check your answers.</li></ol>");
    /*$("#"+name).append('<div class="contenedor-boton--derecha"><button name="'+name+'" class="comprobar btn control" disabled=""><b>Check</b></button><button class="try btn control" disabled="" name="'+name+'"><b>Try again</b></button></div>');*/

    $("#"+name).append("<div class='contenedor-botones2'><div class='text-right evaluacion'><button role='button' class='comprobar btn boton-check btn-reintentar bc btn-descarga waves-effect waves-light check' disabled='' name='"+name+"'>Check</button></div><div class='text-right evaluacion'><button role='button' class='try btn boton-check btn-reintentar bt waves-effect waves-light' disabled='' name='"+name+"'>Try again</button></div></div>");




    $("#"+name+" .comprobar").click(function() {
      vecespasa++;
      malas=0;

        $(this).attr('disabled','disabled');
      
        var vacio = 0;
        var contadorCorrectas = 0;
        $("#"+ name +" .ordenar .ordenarCampo").each(function () {
            
            var optid = $(this).data("num");
            var cadena = "";
            $("#ordenar-" + optid + " button").each(function () {
                cadena +=  $(this).html()+ " ";
            });
            
            if (cadena != "") {                
                respuestas[$(this).data("num")] = cadena;
            }
           
        });
                
       $("#" + name + " .textocomplementario").append(", resultados:");
       $("#" + name + " .ordenar").addClass("color-revisado");
        //console.log(respuestas);
        //console.log(correctas);
       if (vecespasa < 4){
        for (var i = 0; i < correctas.length; i++) {
            var correcta = correctas[i] ? correctas[i].toLowerCase().replace(/^[ '"]+|[ '"]+$|( ){2,}/g, '$1').trim():'';
            var respuesta = respuestas[i] ? respuestas[i].toLowerCase().replace(/^[ '"]+|[ '"]+$|( ){2,}/g, '$1').trim() : '';               
            if (correcta == respuesta) {           
                contadorCorrectas++;
                $("#ordenar-" + i ).html('<p class="contselopc"><span class="sr-only" lang="es">Enunciado '+(i+1)+'</span> '+incisos[i]+". "+correctas[i]+'<i class="result fa-solid fa-check" aria-hidden="true"></i><span class="respmens sr-only">Correct!</span></p>');
            }
            else {
              malas++;              
              $("#ordenar-" + i ).html('<p class="contselopc"><span class="sr-only" lang="es">Enunciado '+(i+1)+'</span> '+incisos[i]+". "+respuestas[i]+'<i class="result fa-solid fa-xmark" aria-hidden="true"></i><span class="respmens sr-only">Incorrect!</span></p>');
            }
        
        }
      }
        
        if (contadorCorrectas != respuestas.length) { 
          if (vecespasa < 4){
            $("#" + name + " .try").removeAttr('disabled');
            $("#" + name + " .retroalimentacion").html("<p class='color-rojo' lang='es'>Try to answer the exercise again</p>");
          }
          else{
            for (var i = 0; i < correctas.length; i++) {
              $("#ordenar-" + i ).html('<p class="contselopc"><span class="sr-only" lang="es">Enunciado '+(i+1)+'</span> '+incisos[i]+". "+Datos3[0].ordenar[0].reactivos[i].texto+'<i class="result fa-solid fa-check" aria-hidden="true"></i><span class="respmens sr-only">Correct!</span></p>');              
            }
            $("#" + name + " .retroalimentacion").html("<p class='color-negro' lang='es'>Please, check the correct answers.</p>");
          }
        }
        else{
            $("#" + name + " .retroalimentacion").html("<p class='color-verde' lang='es'>Very good! You are ready to continue.</p>");
        }
    });

    $("#"+name+" .try").click(function() {
      //recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');

        activ5();
        //$("#" + name + " .retroalimentacion").html("<p aria-hidden='true'>&nbsp;</p>");
    });

}

activ5();