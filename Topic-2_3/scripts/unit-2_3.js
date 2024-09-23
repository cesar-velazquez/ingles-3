

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


/************ OPA16  - Unit 2.3****************************/


    /* Recurso de Selecionar 2 - 3 */

    /* 1: True
       2: False
    */

    var ImgRespuestasSeleccionar231 = [ 2, 1, 1, 2, 1 ];
    var resTex231 = ["false", "true", "true", "false", "true"];
    var BuenasSeleccionar231 = 0;
    var malas231 = 0;
    var intentos231 = 0;

    $(document).on('click', '#check-s-231-1', function(e) { 
        malas231 = 0;
        intentos231++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar231.length; i++){
            $("#opsel-231-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-231-" + i + " .TexSel").html($("#s231-" + i + ' option:selected').text());
            if($("#s231-" + i).val() == ImgRespuestasSeleccionar231[i]){
                $("#opsel-231-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-231-" + i + " .respmens").html("Correct!");
                $("#opsel-231-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar231++;
            }
            else{
                $("#opsel-231-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-231-" + i + " .respmens").html("Incorrect!");
                $("#opsel-231-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas231++;
            }
        }
        $(".seleccionar-23-1 select").addClass("invisible");
        if (malas231 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos231<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar231.length; a++ ){
                    $("#opsel-231-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-231-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-231-" + a + " .TexSel").html(resTex231[a]);
                    $("#opsel-231-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-231-" + a + " .respmens").html("Correct!");
                    $("#opsel-231-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-231-1', function(e) {  
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
        $("#try-s-231-1").attr("disabled","disabled");
        $("#try-s-231-1").removeClass("btn-descarga");
        $(".seleccionar-23-1 .retroalimentacion1").html("");          
    });



    /******************************* OPA17  - Unit 2.3 ****************************/

    var RespuestasEscribir231 = [ "could", "could", "could not/couldn't/couldn‘t/couldn´t/couldn`t/couldn’t", "could not/couldn't/couldn‘t/couldn´t/couldn`t/couldn’t", "could not/couldn't/couldn‘t/couldn´t/couldn`t/couldn’t", "could", "could", "could not/couldn't/couldn‘t/couldn´t/couldn`t/couldn’t", "could not/couldn't/couldn‘t/couldn´t/couldn`t/couldn’t", "could" ];    
    var RespuestasEscribirTextos231 = [ "could", "could", "couldn't", "couldn't", "couldn't", "could", "could", "couldn't", "couldn't", "could" ];
    var malEscribir231 = 0;
    var vecesEscribir231 = 0;
    calificadasEscribir231 = 0;


    var TodasSi=1;
    var formularioCompleto = true;
    $("#escribir-23-1 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-23-1', function(e) {
        vecesEscribir231++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir231.length; i++) {
            text= $("#" + recurso + ' #escribir-23-1-' + i).val();
            texto = $("#" + recurso + ' #escribir-23-1-' + i).val().toLowerCase().trim();                       
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir231[i-1];
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
                $("#" + recurso + " #escribir-23-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                $("#" + recurso + " #escribir-23-1-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-23-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">Incorrect!</span>');
              $("#" + recurso + " #escribir-23-1-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir231++;              
            }
        }
        if (malEscribir231==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir231<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasEscribirTextos231.length; a++ ){
                    $("." + recurso + " #escribir-23-1-" + a).siblings(".contselopc").html(RespuestasEscribirTextos231[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                    $("." + recurso + " #escribir-23-1-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("." + recurso + " #escribir-23-1-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-23-1 .s-resp").attr("aria-hidden","false");
        $("#escribir-23-1 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-23-1', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir231.length; i++) {
          
          if (!$("." + recurso + ' #escribir-23-1-' + i).siblings(".contselopc").hasClass( "correcto" )) {
                       

            $("." + recurso + ' #escribir-23-1-' + i).siblings(".contselopc").html("");
            $("." + recurso + ' #escribir-23-1-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("." + recurso + ' #escribir-23-1-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("." + recurso + ' #escribir-23-1-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir231=0;        
    });




    /******************************* OPA18  - Unit 2.3 ****************************/

    var RespuestasEscribir232 = [ "could leo speak french when he was a child?", "donna could not finish her homework because she fell asleep/donna couldn't finish her homework because she fell asleep/donna couldn’t finish her homework because she fell asleep/donna couldn‘t finish her homework because she fell asleep/donna couldn´t finish her homework because she fell asleep/donna couldn`t finish her homework because she fell asleep", "yesterday night we could see all the stars in the sky", "when i was a young child, i could not tie my shoes/when i was a young child, i couldn't tie my shoes/when i was a young child, i couldn’t tie my shoes/when i was a young child, i couldn‘t tie my shoes/when i was a young child, i couldn´t tie my shoes/when i was a young child, i couldn`t tie my shoes", "could your grandfather fly an airplane?", "they are happy because they could finish their project on time", "could you drive a car when you were younger?", "i could climb trees when i was a child but i am very old now/i could climb trees when i was a child but i'm very old now/i could climb trees when i was a child but i’m very old now/i could climb trees when i was a child but i‘m very old now/i could climb trees when i was a child but i´m very old now/i could climb trees when i was a child but i`m very old now" ];
    var RespuestasEscribirTextos232 = [ "Could Leo speak French when he was a child?", "Donna couldn’t finish her homework because she fell asleep.", "Yesterday night we could see all the stars in the sky.", "When I was a young child, I couldn’t tie my shoes.", "Could your grandfather fly an airplane?", "They are happy because they could finish their project on time.", "Could you drive a car when you were younger?", "I could climb trees when I was a child but I’m very old now." ];
    var malEscribir232 = 0;
    var vecesEscribir232 = 0;
    calificadasEscribir232 = 0;


/*'’‘´`*/

    var TodasSi2=1;
    var formularioCompleto = true;
    $("#escribir-23-2 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-23-2', function(e) {
        vecesEscribir232++;
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        for (var i = 1; i <= RespuestasEscribir232.length; i++) {
            text= $("#escribir-23-2-" + i).val();
            //alert($("#escribir-23-2-" + i).val());
            //texto = $("#" + recurso + ' #escribir-23-2-' + i).val().toLowerCase().trim(); 
            texto = $("#escribir-23-2-" + i).val().toLowerCase().trim(); 
            if(texto.substr(-1)=="."){ /*quito punto*/         
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir232[i-1];
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
                $("#escribir-23-2-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                $("#escribir-23-2-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#escribir-23-2-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">Incorrect!</span>');
              $("#escribir-23-2-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir232++;              
            }
        }
        if (malEscribir232==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else{
            if (vecesEscribir232<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");                
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasEscribirTextos232.length; a++ ){
                    $("#escribir-23-2-" + a).siblings(".contselopc").html(RespuestasEscribirTextos232[a-1] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                    $("#escribir-23-2-" + a).siblings(".contselopc").removeClass("incorrecto");
                    $("#escribir-23-2-" + a).siblings(".contselopc").addClass("correcto");
                }
            }         
        }        
        $("." + recurso + ' input').attr('disabled', true).addClass("invisible");        
        $("#escribir-23-2 .s-resp").attr("aria-hidden","false");
        $("#escribir-23-2 .text-ayuda").attr("aria-hidden","true");
    });

    $(document).on('click', '#try-e-23-2', function(e) {
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir232.length; i++) {
          
          if (!$("." + recurso + ' #escribir-23-2-' + i).siblings(".contselopc").hasClass( "correcto" )) {
                       

            $('#escribir-23-2-' + i).siblings(".contselopc").html("");
            $('#escribir-23-2-' + i).siblings(".contselopc").removeClass("incorrecto");
            $('#escribir-23-2-' + i).attr('disabled', false).removeClass("invisible").val("");
            $('#escribir-23-2-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("." + recurso +" .text-ayuda").attr("aria-hidden","false");
          }
        }
        $("." + recurso + " .retroalimentacion1").html("");
        malEscribir232=0;        
    });


    /******************************* OPA19  - Unit 2.3 ****************************/


    
    //Habilita el botón de Check
    $(document).on('click', '.opciones-23-1 button', function(e) {
        inciso = $(this).attr('name');
        btnTotal=0;
        $("#"+inciso+" button" ).each(function(){
            if( $(this).hasClass("btn-seleccionado") ){
                $(this).removeClass("btn-seleccionado");
            }
        }); 
        $(this).addClass("btn-seleccionado");
        $(".opciones-23-1 .tar-bot button" ).each(function(){
            if( $(this).hasClass("btn-seleccionado") ){
                btnTotal++;
            }
        }); 
        if (btnTotal == 6){
            $(".opciones-23-1 .bc").removeAttr('disabled'); 
        }
    });



    var RespuestasOpciones231 = [ 1, 2, 1, 2, 2, 1 ];
    var RespuestasOpcionesTextos231 = [ "Could", "Couldn't", "Could", "Couldn't", "Couldn't", "Could" ];
    var malOpciones231 = 0;
    var vecesOpciones231 = 0;
    calificadasOpciones231 = 0;


/*'’‘´`*/

    $(document).on('click', '#check-o-23-1', function(e) {
        vecesOpciones231++;
        recurso = "opciones-23-1";
        $(this).attr('disabled','disabled');
        var texto;
        var id;
        var contador=0;
        $(".opciones-23-1 .tar-bot button" ).each(function(){
            if( $(this).hasClass("btn-seleccionado") ){
                contador++;
                id=$(this).attr('id').substring(11, 12);
                if(id==1){ texto="Could"; }
                else{ texto="Couldn't"; }
                if( id == RespuestasOpciones231[contador-1] ){
                    $(".con-btn-"+contador+"-"+id+" .contselopc").html(texto +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                    $(".con-btn-"+contador+"-"+id+" .contselopc").addClass("correcto");                     
                }
                else{
                    $(".con-btn-"+contador+"-"+id+" .contselopc").html(texto +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">Incorrect!</span>');
                    $(".con-btn-"+contador+"-"+id+" .contselopc").addClass("incorrecto");
                    malOpciones231++;
                }
                $("#opciones-"+contador+"-"+id).addClass("invisible");                
            }            
        });
        $('.tar-bot button').attr('disabled', true);
        $('#try-o-23-1').attr('disabled', false);
        $("#try-o-23-1").addClass("btn-descarga");
        
        if (malOpciones231==0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
            $('.'+recurso+' button').attr('disabled', true);
        }
        else{
            if (vecesOpciones231<=4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $(".tar-bot .contselopc").html("");
                $(".tar-bot .contselopc").removeClass("incorrecto");                
                $(".tar-bot button").removeClass("invisible btn-seleccionado");  
                $(".tar-bot button").attr('disabled', false);

                $("." + recurso + " .retroalimentacion1").addClass("negroretro");                
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=1; a<=RespuestasOpcionesTextos231.length; a++ ){
                    $(".con-btn-"+a+"-"+RespuestasOpciones231[a-1]+" .contselopc").html(texto +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">Correct!</span>');
                    $(".con-btn-"+a+"-"+RespuestasOpciones231[a-1]+" .contselopc").addClass("correcto");
                    $("#opciones-"+a+"-"+RespuestasOpciones231[a-1]).addClass("invisible"); 
                    $('.'+recurso+' button').attr('disabled', true);                    
                }
            }         
        }     
        $('.'+recurso+' button').attr('aria-hidden', true);           
    });

    $(document).on('click', '#try-o-23-1', function(e) {
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        var inciso;
        var ArrayBuenas =[];
        var contador2=0;
        $(".opciones-23-1 .contselopc").each(function(){
            if($(this).hasClass("correcto") ){
                inciso = $(this).attr('name');
                ArrayBuenas[contador2]=inciso;
                contador2++;
            }
        });
        var tar;
        var noesta=false;
        for(i=0; i<6; i++){
            noesta=false;
            tar="t"+(i+1);
            for(j=0; j<=ArrayBuenas.length;j++){
                if(tar == ArrayBuenas[j]){
                    noesta=true;                      
                }
            }
            if (noesta==false){ 
                $("#"+tar+" .contselopc").html("");
                $("#"+tar+" .contselopc").removeClass("incorrecto");                
                $("#"+tar+" button").removeClass("invisible btn-seleccionado");  
                $("#"+tar+" button").attr('disabled', false); 
                $("#"+tar+" button").removeAttr('aria-hidden');
            }
        }      
        $("#check-o-23-1").attr('disabled', true); 
        $(".opciones-23-1 .retroalimentacion1").html("");
        malOpciones231=0;

    });



/************ OPA19 - Movil  - Unit 2.3****************************/


    /* Recurso de Selecionar 2 - 3 */

    /* 1: Could
       2: Couldn't
    */

    var ImgRespuestasSeleccionar232 = [ 1, 2, 1, 2, 2, 1 ];
    var resTex232 = ["Could", "Couldn't", "Could", "Couldn't", "Couldn't", "Could"];
    var BuenasSeleccionar232 = 0;
    var malas232 = 0;
    var intentos232 = 0;

    $(document).on('click', '#check-s-232-1', function(e) { 
        malas232 = 0;
        intentos232++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar232.length; i++){
            $("#opsel-232-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-232-" + i + " .TexSel").html($("#s232-" + i + ' option:selected').text());
            if($("#s232-" + i).val() == ImgRespuestasSeleccionar232[i]){
                $("#opsel-232-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-232-" + i + " .respmens").html("Correct!");
                $("#opsel-232-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar231++;
            }
            else{
                $("#opsel-232-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-232-" + i + " .respmens").html("Incorrect!");
                $("#opsel-232-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas232++;
            }
        }
        $(".seleccionar-23-2 select").addClass("invisible");
        if (malas232 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos232<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar232.length; a++ ){
                    $("#opsel-232-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-232-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-232-" + a + " .TexSel").html(resTex232[a]);
                    $("#opsel-232-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-232-" + a + " .respmens").html("Correct!");
                    $("#opsel-232-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-232-1', function(e) {  
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
        $("#try-s-232-1").attr("disabled","disabled");
        $("#try-s-232-1").removeClass("btn-descarga");
        $(".seleccionar-23-2 .retroalimentacion1").html("");          
    });




/************ OPA20  - Unit 2.3****************************/


    /* Recurso de Selecionar 2 - 3 */

    /* 1: True
       2: False
    */

    var ImgRespuestasSeleccionar233 = [ 2, 2, 2, 1, 1, 2 ];
    var resTex233 = ["in 20th century.", "b) because there weren’t contraceptive methods.", "b) in 1980.", "a) Married women.", "a) as nurses.", "b) 1955."];
    var BuenasSeleccionar233 = 0;
    var malas233 = 0;
    var intentos233 = 0;

    $(document).on('click', '#check-s-233-1', function(e) { 
        malas233 = 0;
        intentos233++;
        recurso = $(this).attr('name');
        for(i=0; i<ImgRespuestasSeleccionar233.length; i++){
            $("#opsel-233-" + i + " .contselopce").removeClass("invisible");
            $("#opsel-233-" + i + " .TexSel").html($("#s233-" + i + ' option:selected').text());
            if($("#s233-" + i).val() == ImgRespuestasSeleccionar233[i]){
                $("#opsel-233-" + i + " .TexSel").addClass("ecorrecto");
                $("#opsel-233-" + i + " .respmens").html("Correct!");
                $("#opsel-233-" + i + ' .TexSel').siblings('.result').addClass("fa-check");
                BuenasSeleccionar233++;
            }
            else{
                $("#opsel-233-" + i + " .TexSel").addClass("eincorrecto");
                $("#opsel-233-" + i + " .respmens").html("Incorrect!");
                $("#opsel-233-" + i + ' .TexSel').siblings('.result').addClass("fa-xmark");
                malas233++;
            }
        }
        $(".seleccionar-23-3 select").addClass("invisible");
        if (malas233 == 0){
            $("." + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("." + recurso + " .retroalimentacion1").addClass("verderetro");
            $("." + recurso + " .retroalimentacion1").html("Very good! You are ready to continue.");
        }
        else {
            if(intentos233<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("Try to answer the exercise again.");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("negroretro");
                $("." + recurso + " .retroalimentacion1").html("Please, check the correct answers.");
                for (a=0; a<ImgRespuestasSeleccionar233.length; a++ ){
                    $("#opsel-233-" + a + " .TexSel").removeClass("eincorrecto");
                    $("#opsel-233-" + a + " .TexSel").siblings('.result').removeClass("fa-xmark");
                    $("#opsel-233-" + a + " .TexSel").html(resTex233[a]);
                    $("#opsel-233-" + a + " .TexSel").addClass("ecorrecto");
                    $("#opsel-233-" + a + " .respmens").html("Correct!");
                    $("#opsel-233-" + a + ' .TexSel').siblings('.result').addClass("fa-check");
                }
            }
            
        }
        $("." + recurso + " .bc").attr("disabled","disabled");

    });

    $(document).on('click', '#try-s-233-1', function(e) {  
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
        $("#try-s-233-1").attr("disabled","disabled");
        $("#try-s-233-1").removeClass("btn-descarga");
        $(".seleccionar-23-3 .retroalimentacion1").html("");          
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



