

$(function() {


/************************************ Escribir ************************************/



    //Evalua si están llenos los input

    function verificarRespuestasEscritas(event) {

        var formularioCompleto = true;
        if (event) {
            $("." + recurso +" input").each(function(){                
                if($(this).val().length <= 0 ){
                    TodasSi=0;                    
                    formularioCompleto = false;     
                }                                                          
            });                              
            return formularioCompleto;
        }
        return false;
    }


    
    $(".escribir").keyup(function() {
        recurso = $(this).attr('name');
        TodasSi=1;          
        if (verificarRespuestasEscritas(event)) { //Están contestadas todas
            $("." + recurso + " .check").removeAttr('disabled');                   
        }
    });




/******************************* OPA13  - Unit 2.2 ****************************/

    var RespuestasEscribir11 = [ "there was", "there was", "there were", "there were" ];    
    var RespuestasSelectTextos11 = [ "there was", "there was", "there were", "there were" ];
    var malEscribir11 = 0;
    var vecesEscribir11 = 0;
    calificadasEscribir11 = 0;


    var TodasSi=1;
    var formularioCompleto = true;
    $("#escribir-1-1 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-11-1', function(e) {
        vecesEscribir11++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir11.length; i++) {
            text= $("#" + recurso + ' #escribir-1-1-' + i).val();
            texto = $("#" + recurso + ' #escribir-1-1-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir11[i-1];
            let sentencias = string.split("/");            
            var correcto=false;            
            for (var j = 0; j < sentencias.length; j++) {                
                if($.trim(texto) == sentencias[j] ){ 
                    correcto=true;
                    break;
                }
            }
            /*if($.trim(texto) == RespuestasEscribir11[i-1] ){ */
            if(correcto){             
                $("#" + recurso + " #escribir-1-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir-1-1-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-1-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
              $("#" + recurso + " #escribir-1-1-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir11++;              
            }
        }
        if (malEscribir11==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir11<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasSelectTextos11.length; a++ ){
                    $("." + recurso + " #escribir-1-1-" + a).siblings(".contselopc").html(RespuestasSelectTextos11[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("." + recurso + " #escribir-1-1-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-1-1 .s-resp").attr("aria-hidden","false");
        $("#escribir-1-1 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-11-1', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir11.length; i++) {
          
          if (!$("." + recurso + ' #escribir-1-1-' + i).siblings(".contselopc").hasClass( "correcto" )) {
                       

            $("." + recurso + ' #escribir-1-1-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-1-1-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-1-1-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-1-1-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir11=0;        
    });





        /************************************ SELECTS ************************************/

var recurso;
    //Evalua si están llenos los faqs
    var fila2 = 0;
    function verificarRespuestasContestadas(event) {
        var formularioCompleto = true;
        if (event) {
            $("." + recurso +" select").each(function(){
                if($(this).val()==null){ //No selecciono una opcion  
                    TodasSi=0;                    
                    formularioCompleto = false;                 
                }                               
            });                              
            return formularioCompleto;
        }
        return false;
    }

    $( ".reactivo" ).change(function() {
        recurso = $(this).attr('name');
        TodasSi=1;          
        if (verificarRespuestasContestadas(event)) { //Están contestadas todas
            $("." + recurso + " .bc").removeAttr('disabled');                   
        }
    });



/* ************************************************ */


/************ OPA14  - Unit 2.2****************************/


    /* Recurso de Selecionar 1 - 2 */

    /* 1: there was
       2: wasn’t<
       2: there were
       2: False
    */

    var ImgRespuestasSeleccionar112 = [ 2,1,1,3,3];
    var resTex112 = ["Miguel was driving to work in his new car.", "Melany and her friends were playing cards all day.", "My family was having dinner yesterday midnight.", "Gaby and Yuri were waiting for the bus this morning.", "My cousins and I were swimming in the swimming pool last vacation."];
    var BuenasSeleccionar112 = 0;
    var malas2 = 0;
    var intentos2 = 0;

    $(document).on('click', '#check-s-12-1', function(e) { 
        malas2 = 0;
        intentos2++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar112.length; i++){
            $("#opsel-12-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-12-" + i + " .TexSel").html($("#s12-" + i + ' option:selected').text());
            if($("#s12-" + i).val() == ImgRespuestasSeleccionar112[i]){
                $("#opsel-12-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-12-" + i + " .respmens").html("Correct!");
                $("#opsel-12-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar112++;
            }
            else{
                $("#opsel-12-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-12-" + i + " .respmens").html("Incorrect!");
                $("#opsel-12-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas2++;
            }
        }
        $(".seleccionar-1-2 select").addClass("invisible");
        if (malas2 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos2<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar112.length; a++ ){
                    $("#opsel-12-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-12-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-12-" + a + " .TexSel").html(resTex112[a]);
                    $("#opsel-12-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-12-" + a + " .respmens").html("Correct!");
                    $("#opsel-12-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-12-1', function(e) {  
        var idcontenedor;
        $(".conTarjetas .TexSel").each(function(){
            if ( $(this).hasClass("eincorrecto") ){                
                idcontenedor = $(this).closest(".divcontsel").attr("id");
                $("#"+idcontenedor+" select").removeClass("invisible");
                $("#"+idcontenedor+" select").val('0')
                $("#"+idcontenedor+" .TexSel").removeClass("ecorrecto");
                $("#"+idcontenedor+" .TexSel").removeClass("eincorrecto");
                $("#"+idcontenedor+" .TexSel").html("");
                $("#"+idcontenedor+" .respmens").html("");
                $("#"+idcontenedor+" .TexSel").siblings('.result').removeClass("fa-check");
                $("#"+idcontenedor+" .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#"+idcontenedor+" .contselopce").addClass("invisible");
            }                                                               
        }); 
        $("#try-s-12-1").attr("disabled","disabled");
        $("#try-s-12-1").removeClass("btn-descarga");
        $(".seleccionar-1-2 .retroalimentacion1").html("");          
    });








    /************ OPA15  - Unit 2.2****************************/


    /* Recurso de Selecionar 1 - 3 */

    /* 1: true
       2: false       
    */

    var ImgRespuestasSeleccionar222 = [ 2, 1, 2, 1, 2];
    var resTex222 = ["false", "true", "false", "true", "false"];
    var BuenasSeleccionar222 = 0;
    var malas22 = 0;
    var intentos22 = 0;

    $(document).on('click', '#check-s-22-2', function(e) { 
        malas22 = 0;
        intentos22++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar222.length; i++){
            $("#opsel-22-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-22-" + i + " .TexSel").html($("#s22-" + i + ' option:selected').text());
            if($("#s22-" + i).val() == ImgRespuestasSeleccionar222[i]){
                $("#opsel-22-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-22-" + i + " .respmens").html("Correct!");
                $("#opsel-22-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar222++;
            }
            else{
                $("#opsel-22-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-22-" + i + " .respmens").html("Incorrect!");
                $("#opsel-22-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas22++;
            }
        }
        $(".seleccionar-2-2 select").addClass("invisible");
        if (malas22 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos22<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar222.length; a++ ){
                    $("#opsel-22-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-22-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-22-" + a + " .TexSel").html(resTex222[a]);
                    $("#opsel-22-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-22-" + a + " .respmens").html("Correct!");
                    $("#opsel-22-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-22-2', function(e) {  
        var idcontenedor;
        $(".conTarjetas .TexSel").each(function(){
            if ( $(this).hasClass("eincorrecto") ){                
                idcontenedor = $(this).closest(".divcontsel").attr("id");
                $("#"+idcontenedor+" select").removeClass("invisible");
                $("#"+idcontenedor+" select").val('0')
                $("#"+idcontenedor+" .TexSel").removeClass("ecorrecto");
                $("#"+idcontenedor+" .TexSel").removeClass("eincorrecto");
                $("#"+idcontenedor+" .TexSel").html("");
                $("#"+idcontenedor+" .respmens").html("");
                $("#"+idcontenedor+" .TexSel").siblings('.result').removeClass("fa-check");
                $("#"+idcontenedor+" .TexSel").siblings('.result').removeClass("fa-xmark");
                $("#"+idcontenedor+" .contselopce").addClass("invisible");
            }                                                               
        }); 
        $("#try-s-22-1").attr("disabled","disabled");
        $("#try-s-22-1").removeClass("btn-descarga");
        $(".seleccionar-1-2 .retroalimentacion1").html("");          
    });















    if (isMobile()){
        /*$(".escribir-12-1 .pla1").attr("placeholder", "Phonemes 1: Write here...");
        $(".escribir-12-1 .pla2").attr("placeholder", "Phonemes 2: Write here...");*/
        $(".seleccionar-12-1 select option:selected").text("Choose here...");
        /*$(".seleccionar-12-2 select option:selected").text("Type of linking: Choose here...");*/
    }
    else{
        //alert("no es movil");
    }

    function isMobile() {
        try{ 
            document.createEvent("TouchEvent"); 
            return true; 
        }
        catch(e){ 
            return false;
        }
    }



 
    $('.btn-colapsar:not(.btn-collpse)').click(function() {
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

    $('.btn-collpse').on('click', function() {
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



