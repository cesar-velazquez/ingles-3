

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


/************ OPA34  - Unit 3.2****************************/


    /* Recurso de Selecionar 3 - 2 */

    /* 1, 2, 3, 4, 5, 6
    */

    var ImgRespuestasSeleccionar321 = [ 2, 6, 5, 3, 1, 4];
    var resTex321 = ["false", "true", "true", "false", "true"];
    var BuenasSeleccionar321 = 0;
    var malas321 = 0;
    var intentos321 = 0;

    $(document).on('click', '#check-s-32-1', function(e) { 
        malas321 = 0;
        intentos321++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar321.length; i++){
            $("#opsel-321-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-321-" + i + " .TexSel").html($("#s321-" + i + ' option:selected').text());
            if($("#s321-" + i).val() == ImgRespuestasSeleccionar321[i]){
                $("#opsel-321-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-321-" + i + " .respmens").html("Correct!");
                $("#opsel-321-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar321++;
            }
            else{
                $("#opsel-321-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-321-" + i + " .respmens").html("Incorrect!");
                $("#opsel-321-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas321++;
            }
        }
        $(".seleccionar-32-1 select").addClass("invisible");
        if (malas321 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
            $("#script1").removeAttr('disabled');
            $("#Descargar_OPA34").removeClass("not-active");
        }
        else {
            if(intentos321<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{                
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar321.length; a++ ){
                    $("#opsel-321-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-321-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    //$("#opsel-321-" + a + " .TexSel").html(resTex231[a]);
                    $("#opsel-321-" + a + " .TexSel").html(ImgRespuestasSeleccionar321[a]);
                    $("#opsel-321-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-321-" + a + " .respmens").html("Correct!");
                    $("#opsel-321-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
                $("#script1").removeAttr('disabled');
                $("#Descargar_OPA34").removeClass("not-active");
            }
            
        }
        $(".seleccionar-32-1").focus();
        $("." + recurso + " .bc").attr("disabled","disabled");
    });

    $(document).on('click', '#try-s-32-1', function(e) {  
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
        $(".seleccionar-32-1").focus();
        $("#try-s-32-1").attr("disabled","disabled");
        $("#try-s-32-1").removeClass("btn-descarga");
        $(".seleccionar-32-1 .retroalimentacion1").html("");          
    });



    /************ OPA35  - TOPIC 3.2****************************/


    /* Recurso de Selecionar 1 - 8 */

    /* 1: Past continuous
       2: Past simple
    */

    var ImgRespuestasSeleccionar322 = [ 2, 2, 1, 2, 1, 2, 1, 2, 1];
    var resTex322 = ["Past simple", "Past simple", "Past continuous", "Past simple", "Past continuous", "Past simple", "Past continuous", "Past simple", "Past continuous" ];
    var BuenasSeleccionar322 = 0;
    var malas322 = 0;
    var intentos322 = 0;

    $(document).on('click', '#check-s-322-2', function(e) { 
        malas322 = 0;
        intentos322++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar322.length; i++){
            $("#opsel-322-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-322-" + i + " .TexSel").html($("#s322-" + i + ' option:selected').text());
            if($("#s322-" + i).val() == ImgRespuestasSeleccionar322[i]){
                $("#opsel-322-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-322-" + i + " .respmens").html("Correct!");
                $("#opsel-322-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar322++;
            }
            else{
                $("#opsel-322-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-322-" + i + " .respmens").html("Incorrect!");
                $("#opsel-322-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas322++;
            }
        }
        $(".seleccionar-32-2 select").addClass("invisible");
        if (malas322 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos322<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar322.length; a++ ){
                    $("#opsel-322-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-322-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-322-" + a + " .TexSel").html(resTex322[a]);
                    $("#opsel-322-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-322-" + a + " .respmens").html("Correct!");
                    $("#opsel-322-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $(".seleccionar-32-2").focus();
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-322-2', function(e) {  
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
        $(".seleccionar-32-2").focus();
        $("#try-s-322-2").attr("disabled","disabled");
        $("#try-s-322-2").removeClass("btn-descarga");
        $(".seleccionar-32-2 .retroalimentacion1").html("");          
    });






    /************ OPA36  - TOPIC 3.2****************************/


    /* Recurso de Selecionar 1 - 12 */

    /* 1: Past continuous
       2: Past simple
    */

    var ImgRespuestasSeleccionar323 = [ 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1];
    var resTex323 = ["was eating", "saw", "was trying", "realized", "was thinking", "thought", "came up to", "was walking", "was looking", "asked" , "was getting", "ran" ];
    var BuenasSeleccionar323 = 0;
    var malas323 = 0;
    var intentos323 = 0;

    $(document).on('click', '#check-s-323-1', function(e) { 
        malas323 = 0;
        intentos323++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar323.length; i++){
            $("#opsel-323-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-323-" + i + " .TexSel").html($("#s323-" + i + ' option:selected').text());
            if($("#s323-" + i).val() == ImgRespuestasSeleccionar323[i]){
                $("#opsel-323-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-323-" + i + " .respmens").html("Correct!");
                $("#opsel-323-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar323++;
            }
            else{
                $("#opsel-323-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-323-" + i + " .respmens").html("Incorrect!");
                $("#opsel-323-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas323++;
            }
        }
        $(".seleccionar-32-3 select").addClass("invisible");
        if (malas323 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
            $("#script2").removeAttr('disabled');
            $("#Descargar_OPA36").removeClass("not-active");
        }
        else {
            if(intentos323<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar323.length; a++ ){
                    $("#opsel-323-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-323-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-323-" + a + " .TexSel").html(resTex323[a]);
                    $("#opsel-323-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-323-" + a + " .respmens").html("Correct!");
                    $("#opsel-323-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
                $("#script2").removeAttr('disabled');
                $("#Descargar_OPA36").removeClass("not-active");
            }
            
        }
        $(".seleccionar-32-3").focus();
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-323-1', function(e) {  
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
        $(".seleccionar-32-3").focus();
        $("#try-s-323-1").attr("disabled","disabled");
        $("#try-s-323-1").removeClass("btn-descarga");
        $(".seleccionar-32-3 .retroalimentacion1").html("");          
    });







    /************ OPA37  - TOPIC 3.2****************************/


    /* Recurso de Selecionar 1 - 3 */

    /* a), b), o C)
    */

    var ImgRespuestasSeleccionar324 = [ 1, 2, 2, 3, 3];
    var resTex324 = ["a) It was late.", "b) She turned on the radio.", "b) she was listening to the radio. ", "c) decided to call the police.", "c) dialing 911." ];
    var BuenasSeleccionar324 = 0;
    var malas324 = 0;
    var intentos324 = 0;

    $(document).on('click', '#check-s-324-4', function(e) { 
        malas324 = 0;
        intentos324++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar324.length; i++){
            $("#opsel-324-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-324-" + i + " .TexSel").html($("#s324-" + i + ' option:selected').text());
            if($("#s324-" + i).val() == ImgRespuestasSeleccionar324[i]){
                $("#opsel-324-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-324-" + i + " .respmens").html("Correct!");
                $("#opsel-324-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar324++;
            }
            else{
                $("#opsel-324-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-324-" + i + " .respmens").html("Incorrect!");
                $("#opsel-324-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas324++;
            }
        }
        $(".seleccionar-32-4 select").addClass("invisible");
        if (malas324 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos324<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar324.length; a++ ){
                    $("#opsel-324-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-324-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-324-" + a + " .TexSel").html(resTex324[a]);
                    $("#opsel-324-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-324-" + a + " .respmens").html("Correct!");
                    $("#opsel-324-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $(".seleccionar-32-4").focus();
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-324-4', function(e) {  
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
        $(".seleccionar-32-4").focus();
        $("#try-s-324-4").attr("disabled","disabled");
        $("#try-s-324-4").removeClass("btn-descarga");
        $(".seleccionar-32-4 .retroalimentacion1").html("");          
    });







    /******************************* OPA38  - Unit 3.2 ****************************/

    var RespuestasEscribir321 = [ "had", "when", "while", "was not/wasn't/wasn‘t/wasn´t/wasn`t/wasn’t", "doing", "was", "driving", "got" ];    
    var RespuestasEscribirTextos321 = [ "had", "when", "while", "wasn’t", "doing", "was", "driving", "got" ];
    var malEscribir321 = 0;
    var vecesEscribir321 = 0;
    calificadasEscribir321 = 0;


    var TodasSi=1;
    var formularioCompleto = true;
    $("#escribir-32-1 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-32-1', function(e) {
        vecesEscribir321++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir321.length; i++) {
            text= $("#" + recurso + ' #escribir-32-1-' + i).val();
            texto = $("#" + recurso + ' #escribir-32-1-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir321[i-1];
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
                $("#" + recurso + " #escribir-32-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                $("#" + recurso + " #escribir-32-1-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-32-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">Incorrect!</span>');
              $("#" + recurso + " #escribir-32-1-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir321++;              
            }
        }
        if (malEscribir321==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
            $("#script4").removeAttr('disabled');
            $("#Descargar_OPA37").removeClass("not-active");
        }
        else{
            if (vecesEscribir321<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasEscribirTextos321.length; a++ ){
                    $("." + recurso + " #escribir-32-1-" + a).siblings(".contselopc").html(RespuestasEscribirTextos321[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                    $("." + recurso + " #escribir-32-1-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("." + recurso + " #escribir-32-1-" + a).siblings(".contselopc").addClass("correcto");
                }
                $("#script4").removeAttr('disabled');
                $("#Descargar_OPA37").removeClass("not-active");
            }         
        }
        $(".escribir-32-1").focus();      
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-32-1 .s-resp").attr("aria-hidden","false");
        $("#escribir-32-1 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-32-1', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir321.length; i++) {
          
          if (!$("." + recurso + ' #escribir-32-1-' + i).siblings(".contselopc").hasClass( "correcto" )) {
                       

            $("." + recurso + ' #escribir-32-1-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-32-1-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-32-1-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-32-1-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $(".escribir-32-1").focus();
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir321=0;        
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



