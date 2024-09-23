

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
        console.log("sii");
        recurso = $(this).attr('name');
        TodasSi=1;          
        if (verificarRespuestasEscritas(event)) { //Están contestadas todas
            $("." + recurso + " .check").removeAttr('disabled');                   
        }
    });

/******************************* OPA31  - Unit 3.2 ****************************/
          
    $("#escribir-3-1 .s-resp").attr("aria-hidden","true");

    var RespuestasEscribir331 = [ 
      "was wearing", 
      "was beginning", 
      "were baking", 
      "were reading", 
      "was repairing", 
      "wasn’t living/was not living/wasn't living/wasn`t living/wasn‘t living/wasn´t living", 
      "wasn’t using/was not using/wasn't using/wasn`t using/wasn‘t using/wasn´t using"
       ];

    var malEscribir31 = 0;
    var vecesEscribir31 = 0;
    //calificadasEscribir31 = 0;

    $(document).on('click', '#check-e-33-1', function(e) {
         vecesEscribir31++;
        recurso = $(this).attr('name');
        $("#escribir-3-1" ).focus();
        $(this).attr('disabled','disabled');
        var texto;
       // console.log(recurso);
        for (var i = 1; i <= RespuestasEscribir331.length; i++) {
            
              text= $("#" + recurso + ' #escribir-3-1-' + i).val();
              texto = String($("#" + recurso + ' #escribir-3-1-' + i).val().toLowerCase());

              //console.log(texto.substring(-1));
            if(texto.substr(-1)=="."){ /*quito punto*/
                texto = texto.substring(0, texto.length - 1);
            }            
            string=RespuestasEscribir331[i-1];
            let sentencias = string.split("/");            
            var correcto=false;            
            for (var j = 0; j < sentencias.length; j++) { 
             //   console.log($.trim(texto) +" == "+ sentencias[j]);
                if($.trim(texto) == sentencias[j] ){ 
                    correcto=true;
                    break;
                }
            }

            if(correcto){  
                $("#" + recurso + " #escribir-3-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                $("#" + recurso + " #escribir-3-1-" + i).siblings(".contselopc").addClass("correcto");
            }
            else{
              $("#" + recurso + " #escribir-3-1-" + i).siblings(".contselopc").html(text +' <i class="result fa-solid fa-xmark"></i><span class="respmens sr-only">wrong answer</span>');
              $("#" + recurso + " #escribir-3-1-" + i).siblings(".contselopc").addClass("incorrecto");
              malEscribir31++;
            }
        }

        if (malEscribir31==0){
            $("#" + recurso + " .retroalimentacion1").removeClass("rojoretro");
            $("#" + recurso + " .retroalimentacion1").addClass("verderetro");
            $("#" + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else{

            if (vecesEscribir31<4){
                $("#" + recurso + " .try").removeAttr('disabled');
                $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("#" + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
                $("#" + recurso + " .bt").removeAttr('disabled');
                $("#" + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("#" + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                for (a=1; a<=RespuestasEscribir331.length; a++ ){
                    string=RespuestasEscribir331[a-1];
                    let sentencias = string.split("/");

                    $("#" + recurso + " #escribir-3-1-" + a).siblings(".contselopc").html(sentencias[0] +' <i class="result fa-solid fa-check"></i><span class="respmens sr-only">correct answer</span>');
                    $("#" + recurso + " #escribir-3-1-" + a).siblings(".contselopc").addClass("correcto");
                }
            }
        }
        
        $("#" + recurso + ' input').attr('disabled', true).addClass("invisible");
        
        $("#escribir-3-1 .s-resp").attr("aria-hidden","false");
        $("#escribir-3-1 .text-ayuda").attr("aria-hidden","true");
        //text-ayuda

    });

    $(document).on('click', '#try-e-33-1', function(e) {
      console.log("log");
      malEscribir31=0;
      

        recurso = $(this).attr('name');
        $("#escribir-3-1").focus();
        $(this).attr('disabled','disabled');
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir331.length; i++) {
          if (!$("#" + recurso + ' #escribir-3-1-' + i).siblings(".contselopc").hasClass( "correcto" )) {
           
       //     console.log("log "+i);

            $("#" + recurso + ' #escribir-3-1-' + i).siblings(".contselopc").html("");
            $("#" + recurso + ' #escribir-3-1-' + i).siblings(".contselopc").removeClass("incorrecto");
            $("#" + recurso + ' #escribir-3-1-' + i).attr('disabled', false).removeClass("invisible").val("");
            $("#" + recurso + ' #escribir-3-1-' + i).siblings(".s-resp").attr("aria-hidden","true");
            $("#" + recurso + ' #escribir-3-1-' + i).siblings(".text-ayuda").attr("aria-hidden","false");
          }
        }

        $("#" + recurso + " .retroalimentacion1").html("");


       // $("#" + recurso + " .comprobar").removeAttr('disabled');

    });


/******************************* OPA32  - Unit 3.3 ****************************/
    var RespuestasEscribir11 = [ 
    "was",
    "having",
    "weren’t/were not/weren‘t/weren`t/weren´t/weren't",
    "were sitting",
    "was",
    "reading",
    "she wasn’t/she wasn‘t/she wasn`t/she wasn´t/she wasn't",
    "was watching",
    "were",
    "doing",
    "was cleaning",
    "painting",
    "weren’t playing/weren‘t playing/weren`t playing/weren´t playing/weren't playing/were not playing",
    "was raining",
    "weren’t/were not/weren‘t/weren`t/weren´t/weren't"
     ];
    var RespuestasSelectTextos11 = [
    "Was",
    "having",
    "weren’t",
    "were sitting",
    "Was",
    "reading",
    "she wasn’t",
    "was watching",
    "were",
    "doing",
    "was cleaning",
    "painting ",
    "weren’t playing",
    "was raining",
    "weren’t"
    ];
    var malEscribir11 = 0;
    var vecesEscribir11 = 0;
    calificadasEscribir11 = 0;


    var TodasSi=1;
    var formularioCompleto = true;
    $("#escribir-1-1 .s-resp").attr("aria-hidden","true");

    $(document).on('click', '#check-e-11-1', function(e) {
        console.log("diclick");
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
                console.log($.trim(texto) +" == "+ sentencias[j]);
                if($.trim(texto) == sentencias[j] ){ 
                    correcto=true;
                    break;
                }
            }
            
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
            $("." + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else{
            if (vecesEscribir11<4){
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
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


/************ OPA30  - Unit 3.1****************************/


    /* Recurso de Selecionar */


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
            $("." + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
        }
        else {
            if(intentos2<4){
                $("." + recurso + " .bt").removeAttr('disabled');
                $("." + recurso + " .bt").addClass("btn-descarga");
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
            }
            else{
                $("." + recurso + " .retroalimentacion1").addClass("rojoretro");
                $("." + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
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
        $("." + recurso).focus();
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
        $(".seleccionar-1-2").focus();
        $("#try-s-12-1").attr("disabled","disabled");
        $("#try-s-12-1").removeClass("btn-descarga");
        
        $(".seleccionar-1-2 .retroalimentacion1").html("");          
    });

/************ OPA33  - Unit 3.1****************************/
    var RespuestasEscribir333 = [ 
        
        '0/0/3/0/5/0',
        '1/2/0/4/0'
    ];

    $('#activity-33 input[type=checkbox]').on('change', function() {
       // alert("El input " + $(this).prop('value') + " estÃ¡ seleccionado");
        recurso = "activity-33";
        console.log(recurso);
        var total=2;
        var contador=0;
        for(i=1; i<=total; i++){
            if($("input[name='act303-"+i+"']").is(':checked') === true){
                contador++;
            }            
            else{
                return false;
            }
        }
        if(total==contador){
            //console.log(contador);
            $(".activity").removeClass('imprime');
            $("#" + recurso).addClass('imprime');
            $("#" + recurso +" .check").removeAttr('disabled'); 
        }
            //$("#" + recurso +" .btn-imprimir").removeAttr('disabled'); }
            
    });

    var malEscribir33 = 0;
    var bienescribir33 = 0;
    var vecesEscribir33 = 0;
    var totalbienes=0;

    $(document).on('click', '#check-s-33-2', function(e) {
        
        vecesEscribir33++;
        
        recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        var texto;
        
        for (var i = 1; i <= RespuestasEscribir333.length; i++) {
            texto = $("input[name='act303-"+i+"']:checked").val();
          
            string=RespuestasEscribir333[i-1];
            let sentencias = string.split("/");

            for(var k = 0; k < sentencias.length; k++) {
                
                if (!(parseInt(sentencias[k])== 0)) {
                    totalbienes++;
                    console.log(sentencias[k]+" , "+totalbienes);
                }
            }
            
            var correcto=false;

            $("input[name='act303-"+i+"']:checked").each(function(j) {
                texto = this.value;

                if(sentencias[texto-1] == $.trim(texto) ){ 
                    bienescribir33++;
                    $("#" + recurso + " #act33-" + i +"-"+texto).addClass("correcto");
                    $("#" + recurso + " #act33-" + i +"-"+texto + " .respmens").html("correct answer");
                    $("#" + recurso + " #act33-" + i +"-"+texto + " .result").addClass("fa-check");
                }
                else{
                    $("#" + recurso + " #act33-" + i +"-"+texto).addClass("incorrecto");
                    $("#" + recurso + " #act33-" + i +"-"+texto + " .respmens").html("wrong answer");
                    $("#" + recurso + " #act33-" + i +"-"+texto + " .result").addClass("fa-xmark");
                    malEscribir33++;
                }

            });

            if (malEscribir33==0){
                $("#" + recurso + " .retroalimentacion1").removeClass("rojoretro");
                $("#" + recurso + " .retroalimentacion1").addClass("verderetro");
                $("#" + recurso + " .retroalimentacion1").html("<p>Very good! You are ready to continue.</p>");
            }
            else{
                if (vecesEscribir33<4){
                    $("#" + recurso + " .try").removeAttr('disabled');
                    $("#" + recurso + " .try").addClass("btn-descarga");
                    $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                    $("#" + recurso + " .retroalimentacion1").html("<p>Try to answer the exercise again.</p>");
                    
                }
                else{
                    $("#" + recurso + " .retroalimentacion1").addClass("rojoretro");
                    $("#" + recurso + " .retroalimentacion1").html("<p>Please, check the correct answers.</p>");
                    for (a=1; a<=RespuestasEscribir333.length; a++ ){
                        string=RespuestasEscribir333[a-1];
                        let sentencias = string.split("/");
                        
                        for(b=1; b<=sentencias.length; b++){

                             console.log($("#" + recurso + " #act33-" + a +"-"+b).hasClass("incorrecto"));

                            if($("#" + recurso + " #act33-" + a +"-"+b).hasClass("incorrecto")){
                                $("#" + recurso + " #act33-" + a +"-"+b).removeClass("incorrecto");
                                $("#" + recurso + ' #act33-'+a+'-' + b+" input").prop("checked", false);
                                $("#" + recurso + ' #act33-'+a+'-' + b +" .result").removeClass("fa-xmark");
                            }
                            
                            if (sentencias[b-1]!=0) {
                                $("#" + recurso + " #act33-" + a +"-"+b).addClass("correcto");
                                $("#" + recurso + " #act33-" + a +"-"+ b + " .respmens").html("correct answer");
                                $("#" + recurso + " #act33-" + a +"-"+b + " .result").addClass("fa-check");
                            }
                        }

                    }
                }
            }
         }
        
        $("#" + recurso + ' input').attr('disabled', true).addClass("invisible");
        $("#" + recurso + " .btn-imprimir").removeAttr('disabled');     
    });

    $(document).on('click', '#try-s-33-2', function(e) {  
        malEscribir33=0;
        bienescribir33=0;
        totalbienes=0;
        recurso = $(this).attr('name');        
        $(this).attr("disabled","disabled");
        $(this).removeClass("btn-descarga");
        
        for (var i = 1; i <= RespuestasEscribir333.length; i++) {
            string=RespuestasEscribir333[i-1];
            let sentencias = string.split("/");
            for(var j=1; j<= sentencias.length; j++){
            
              if (($("#" + recurso + ' #act33-'+i+'-' + j).hasClass( "correcto" )) || ($("#" + recurso + ' #act33-'+i+'-' + j).hasClass( "incorrecto" ))) {

                $("#" + recurso + " #act33-" + i +"-"+j).removeClass("incorrecto").removeClass("correcto");

                $("#" + recurso + ' #act33-'+i+'-' + j +" .respmens").html("");
                
                $("#" + recurso + ' #act33-'+i+'-' + j +" .result").removeClass("fa-xmark").removeClass("fa-check");
              }
              $("#" + recurso + ' #act33-'+i+'-' + j+" input").attr('disabled', false).prop("checked", false).removeClass("invisible");
          }
        }
        $("#" + recurso + " .retroalimentacion1").html("");
       // malEscribir11=0;
    });



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



