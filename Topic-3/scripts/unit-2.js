

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


/******************************* CRUCIGRAMA 1  - Topic 2 ****************************/

    var RespuestasEscribir11 = [ "many", "several", "some", "any", "much"];    
    var RespuestasSelectTextos11 = [ "many", "several", "some", "any", "much"];
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
                    $("." + recurso + " #escribir-1-1-" + a).siblings(".contselopc").removeClass("incorrecto");
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






/******************************* CRUCIGRAMA 2  - Topic 2 ****************************/

    var RespuestasEscribir22 = [ "gender", "finances", "norms", "coworkers", "equality", "prodigy", "freedom", "guests", "variety", "wine" ];    
    var RespuestasSelectTextos22 = [ "Gender", "Finances", "Norms", "Coworkers", "Equality", "Prodigy", "Freedom", "Guests", "Variety", "Wine" ];
    var malEscribir22 = 0;
    var vecesEscribir22 = 0;
    calificadasEscribir22 = 0;


    var TodasSi2=1;
    var formularioCompleto = true;
    $("#escribir-2-2 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-22-2', function(e) {
        vecesEscribir22++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir22.length; i++) {
            text= $("#" + recurso + ' #escribir-2-2-' + i).val();
            texto = $("#" + recurso + ' #escribir-2-2-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir22[i-1];
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
                $("#" + recurso + " #escribir-2-2-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir-2-2-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-2-2-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
              $("#" + recurso + " #escribir-2-2-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir22++;              
            }
        }
        if (malEscribir22==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir22<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasSelectTextos22.length; a++ ){
                    $("." + recurso + " #escribir-2-2-" + a).siblings(".contselopc").html(RespuestasSelectTextos22[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("." + recurso + " #escribir-2-2-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("." + recurso + " #escribir-2-2-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-2-2 .s-resp").attr("aria-hidden","false");
        $("#escribir-2-2 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-22-2', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir22.length; i++) {
          
          if (!$("." + recurso + ' #escribir-2-2-' + i).siblings(".contselopc").hasClass( "correcto" )) {
                       

            $("." + recurso + ' #escribir-2-2-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-2-2-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-2-2-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-2-2-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir22=0;        
    });


    /******************************* CRUCIGRAMA 3 - Topic 2 ****************************/

    var RespuestasEscribir23 = [ "tender", "epic", "dramatic", "prodigious", "marvel", "limited", "wide" ];    
    var RespuestasSelectTextos23 = [ "tender", "epic", "dramatic", "prodigious", "marvel", "limited", "wide" ];
    var malEscribir23 = 0;
    var vecesEscribir23 = 0;
    calificadasEscribir23 = 0;

    var TodasSi3=1;
    var formularioCompleto = true;
    $("#escribir-2-3 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-23-3', function(e) {
        vecesEscribir23++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir23.length; i++) {
            text= $("#" + recurso + ' #escribir-2-3-' + i).val();
            texto = $("#" + recurso + ' #escribir-2-3-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir23[i-1];
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
                $("#" + recurso + " #escribir-2-3-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir-2-3-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-2-3-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
              $("#" + recurso + " #escribir-2-3-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir23++;              
            }
        }
        if (malEscribir23==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir23<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasSelectTextos23.length; a++ ){
                    $("." + recurso + " #escribir-2-3-" + a).siblings(".contselopc").html(RespuestasSelectTextos23[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("." + recurso + " #escribir-2-3-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("." + recurso + " #escribir-2-3-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-2-3 .s-resp").attr("aria-hidden","false");
        $("#escribir-2-3 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-23-3', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir23.length; i++) {
          
          if (!$("." + recurso + ' #escribir-2-3-' + i).siblings(".contselopc").hasClass( "correcto" )) {
            $("." + recurso + ' #escribir-2-3-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-2-3-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-2-3-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-2-3-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir23=0;        
    });




        /******************************* CRUCIGRAMA 4 - Topic 2 ****************************/

    var RespuestasEscribir24 = [ "receive", "compose", "quit", "tie", "mark", "deny", "vote", "serve" ];    
    var RespuestasSelectTextos24 = [ "receive", "compose", "quit", "tie", "mark", "deny", "vote", "serve" ];
    var malEscribir24 = 0;
    var vecesEscribir24 = 0;
    calificadasEscribir24 = 0;

    var TodasSi4=1;
    var formularioCompleto = true;
    $("#escribir-2-4 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-24-4', function(e) {
        vecesEscribir24++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir24.length; i++) {
            text= $("#" + recurso + ' #escribir-2-4-' + i).val();
            texto = $("#" + recurso + ' #escribir-2-4-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir24[i-1];
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
                $("#" + recurso + " #escribir-2-4-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir-2-4-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-2-4-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
              $("#" + recurso + " #escribir-2-4-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir24++;              
            }
        }
        if (malEscribir24==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir24<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasSelectTextos24.length; a++ ){
                    $("." + recurso + " #escribir-2-4-" + a).siblings(".contselopc").html(RespuestasSelectTextos24[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("." + recurso + " #escribir-2-4-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("." + recurso + " #escribir-2-4-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-2-4 .s-resp").attr("aria-hidden","false");
        $("#escribir-2-4 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-24-4', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir24.length; i++) {
          
          if (!$("." + recurso + ' #escribir-2-4-' + i).siblings(".contselopc").hasClass( "correcto" )) {
            $("." + recurso + ' #escribir-2-4-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-2-4-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-2-4-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-2-4-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir24=0;        
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



