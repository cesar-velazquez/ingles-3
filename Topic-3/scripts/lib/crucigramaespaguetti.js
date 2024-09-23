"use strict";

(function (window, $) {
    var actividad;
    var contenedorCrucigrama = "#contenedor-crucigrama";
    var desplazadorCrucigrama = "#desplazador-crucigrama";
    var preguntasCrucigrama = ".preguntas-crucigrama";
    var lienzoCrucigrama = "#lienzo-crucigrama";
    var controlCrucigrama = '#control-crucigrama';
    var rutaRecursos = "actividades/";
    var miLienzo = $(lienzoCrucigrama);
    var letra1 = 0;
    var letra2 = 0;
    var permitido = 1;
    var NpalabraAnterior = -1;
    var tecla = 0;
    var key = "";
    var letraNum = 0;
    var movi = 0;
    var movi2 = 0;
    var numero=0;
    var controlAnimacion = [];
    var id="";
    var contenidoAnimacion = [];
    var contenidoVentana = $('.retroalimentaciones');
    var columnas, filas;
    function cargarDatos(archivo) {
        //var rutaJson = rutaRecursos + archivo;
        console.log(archivo);
        var promise = $.getJSON('actividades/' + archivo);
        promise.done(function (data) {
          setTimeout(function(){
            DatosJson(data);
          },1000);
        }).fail(function (error) { });
    }
    var veces=0;
    function DatosJson(datosCrucigrama) {
        actividad =datosCrucigrama;
        console.log(actividad);
        columnas = actividad.numeroColumnas;
        filas = actividad.numeroFilas;
        $(document).on('keydown',controlPalabra);
        
        $('.btnComprobar-cruc').click(function (e) {
            /*NUEVO INICIA*/
            veces++;
            if (veces<4){
                $(".btnComprobar-cruc").attr('disabled', true);
                $(".btnlimpiar-cruc").removeAttr("disabled");
                $(".btnlimpiar-cruc").addClass("btn-descarga");
                corregir();
            }
            else{
                for (var k = 0; k < actividad.palabras.length; k++) {
                    var palabraItem = actividad.palabras[k];
                    var fila = palabraItem.fila;
                    var columna = palabraItem.columna;
                    var direccion = palabraItem.direccion;
                    var palabra = palabraItem.valor;
                    var cont = 0; var inicio;
                    if (direccion == "V") { inicio=fila; }
                    else if (direccion == "H") { inicio=columna; }
                    for (var i = inicio; i <= (palabra.length + inicio - 1) ; i++) {
                        if (direccion == "V") { 
                            continua=(columna < 10) ? "0" + columna : columna;
                            var aumenta=(i < 10) ? "0" + i : i;
                         }
                        else if (direccion == "H") { 
                            aumenta=(fila < 10) ? "0" + fila : fila;
                            var continua=(i < 10) ? "0" + i : i;
                        }
                        var div="#c" + aumenta + "_" + continua;
                        var correcto = palabra.substring(cont, cont + 1);
                        $(div).html(correcto.toUpperCase());
                        $(div).addClass("ok"); 
                        $("#lienzo-crucigrama").addClass("revisado-c");
                        $(".activa").removeClass("foco");
                        $(".activa").removeClass("activaPalabra");                 
                        cont++;
                    }
                }
                $(".btnComprobar-cruc").attr('disabled', true);
                $(".btnlimpiar-cruc").attr('disabled', true);
                $(".btnlimpiar-cruc").removeClass("btn-descarga");
                $(".retroalimentaciones").html("<p class='color-rojo'>Please, check the correct answers.</p>");                
            }
            /*NUEVO TERMINA*/
        });
        
        $('.btnlimpiar-cruc').click(function (e) {
            /*NUEVO INICIA*/
           $(".btnlimpiar-cruc").attr('disabled', true);
           $(".btnlimpiar-cruc").removeClass("btn-descarga");
           /*NUEVO TERMINA*/
           limpiar();           
        });
        crear();
        crucigrama();

    }

    function limpiar(){
        //NO limpia las buenas
        /*NUEVO INICIA*/
        $("#lienzo-crucigrama .activa").each(function(){ 
            if( $(this).hasClass("error") ){
                $(this).html("");
                $(this).removeClass("foco").removeClass("activaPalabra").removeClass("ok").removeClass("error");                
            }                                                                      
        });
        /*NUEVO TERMINA*/
        $("#lienzo-crucigrama").removeClass("revisado-c");
        //$(".lienzo-crucigrama").removeClass("revisado-c");
        $(contenidoVentana).html('<p aria-hidden="true">&nbsp;</p>'); 
        

        /*$(".activa").html("");
        $(".activa").removeClass("foco").removeClass("activaPalabra").removeClass("ok").removeClass("error");
        $(".lienzo-crucigrama").removeClass("revisado-c");
        $(contenidoVentana).html('<p aria-hidden="true">&nbsp;</p>');*/
    }
    function corregir() {
        var vacio=true;
        $(".activa").each(function(){ 
            //console.log($(this).text());
            if ($(this).text().length==0) {
                vacio=false;
            }
         });

        if (vacio) {


            var error = 0;
            //var vacio=0;
            //$(".lienzo-crucigrama").addClass("revisado-c");
            $("#lienzo-crucigrama").addClass("revisado-c");
            $(".activa").removeClass("foco");
            $(".activa").removeClass("activaPalabra");
            for (var k = 0; k < actividad.palabras.length; k++) {
                var palabraItem = actividad.palabras[k];
                var fila = palabraItem.fila;
                var columna = palabraItem.columna;
                var direccion = palabraItem.direccion;
                var palabra = palabraItem.valor;
                var cont = 0; var inicio;
                if (direccion == "V") { inicio=fila; }
                else if (direccion == "H") { inicio=columna; }
                for (var i = inicio; i <= (palabra.length + inicio - 1) ; i++) {
                    if (direccion == "V") { 
                        continua=(columna < 10) ? "0" + columna : columna;
                        var aumenta=(i < 10) ? "0" + i : i;
                     }
                    else if (direccion == "H") { 
                        aumenta=(fila < 10) ? "0" + fila : fila;
                        var continua=(i < 10) ? "0" + i : i;
                    }
                    var div="#c" + aumenta + "_" + continua;
                    var contenido = $(div).html();
                    var correcto = palabra.substring(cont, cont + 1);
                    if (contenido != "") {
                        if (contenido.toLowerCase() != correcto.toLowerCase()) {
                            $(div).addClass("error");
                            error = 1;
                        } else {
                            $(div).addClass("ok");
                        }
                    } else {
                        $(div).addClass("error");
                        vacio++;
                    }
                    cont++;
                }
            }
       
        
            if (error === 0) {
                $(contenidoVentana).html("<p class='color-verde'>Very good! You are ready to continue.</p>");
                $(".btnlimpiar-cruc").attr('disabled', true);
                $(".btnlimpiar-cruc").removeClass("btn-descarga");
            } else {
                $(contenidoVentana).html("<p class='color-rojo'>Try to answer the exercise again.</p>");
            }

        }
        else{
            $(contenidoVentana).html("<p class='color-rojo'>Complete the crucigrama</p>");
            //<p aria-hidden="true">&nbsp;</p>
        }
    }
    function corregirPalabra(indice) {
        var error = 0, aumenta, continua;
        $(".activa").removeClass("foco");
        $(".activa").removeClass("activaPalabra");
        var palabraItem = actividad.palabras[indice];
        fila = palabraItem.fila;
        columna = palabraItem.columna;
        direccion = palabraItem.direccion;
        palabra = palabraItem.valor;
        cont = 0;
        if (direccion == "V") { inicio=fila; }
        else if (direccion == "H") { inicio=columna; }
        for (i = inicio; i <= (palabra.length + inicio - 1) ; i++) {
            if (palabra.direccion === "V") {
                aumenta = (i < 10) ? "0" + i : i;
                continua=(columna < 10) ? "0" + columna : columna;
            }
            if (palabra.direccion === "H") {
                aumenta = (fila < 10) ? "0" + fila : fila;
                continua=(i < 10) ? "0" + i : i;
            }
            var div="#c" + aumenta + "_" + continua;
            var contenido = $(div).html();
            var correcto = palabra.substring(cont, cont + 1);
            if (contenido !== "") {
                if (contenido !== correcto) {
                    $(div).addClass("error");
                    error = 1;
                } else {
                    $(div).addClass("ok");
                }
            } else {
                $(div).addClass("error");
                error = 1;
            }
            cont++;
        }
    }
    function calcularDimension(){
        var tamMaximoAncho = $(desplazadorCrucigrama).width();
        var tamMaximoAlto = $(desplazadorCrucigrama).height();
        var tamCasillaAncho = parseInt(tamMaximoAncho / columnas);
        var tamCasillaAlto = parseInt(tamMaximoAlto / filas);
        var celda;
        if (tamCasillaAncho >= tamCasillaAlto) {
            celda = tamCasillaAlto;
            var tamMaximo = tamMaximoAlto;
            $(desplazadorCrucigrama).width(celda * columnas);
        } else {
            celda = tamCasillaAncho;
            var tamMaximo = tamMaximoAncho;
           // $(desplazadorCrucigrama).width($(contenedorCrucigrama).width());
        }
       
        $(lienzoCrucigrama).css('background-size', "" + celda + "px " + celda + "px");
        if (celda < 15) numero = 3;
        else if (celda < 18) numero = 4;
        else if (celda < 21) numero = 5;
        else if (celda < 24) numero = 6;
        else if (celda < 26) numero = 7;
        else if (celda < 30) numero = 8;
        else if (celda < 35) numero = 9;
        else if (celda < 40) numero = 10;
        else if (celda < 45) numero = 11;
        else numero = 12;
        return celda;
    }
    function crear() {
        var tamCasilla=calcularDimension();       
        miLienzo.html("<input id='" + controlCrucigrama.replace('#', '') + "' maxlength='1' class='control-crucigrama' >");
        var px = 0;
        var py = 0;
        for (var i = 0; i < filas; i++) {
            var ix=(i < 10) ? "0" + i : i;
            for (var j = 0; j < columnas; j++) {
                var jy=(j < 10) ? "0" + j : j;
                var div = $("<div>", {
                    id: "c" + ix + "_" + jy,
                    "class": "casilla",
                    css: {
                        "left": px,
                        "top": py
                    }
                });
                miLienzo.append(div);
                px = px + (tamCasilla);
                var tamLetra = tamCasilla - 8;
                if (tamLetra < 7) tamLetra = 7;
                $("#c" + ix + "_" + jy).css({
                    "width": tamCasilla + "px",
                    "height": tamCasilla + "px",
                    //"font-size": tamLetra + "px",
                    //"line-height": tamCasilla + "px"
                });
            }
            px = 0;
            py = py + (tamCasilla);
        }
        var altoLienzo = tamCasilla * filas;
        $(lienzoCrucigrama).height(altoLienzo);
        cargar();
        //activ5();
    }
    function cargar() {
        for (var j = 0; j < actividad.palabras.length; j++) {
            var palabra = actividad.palabras[j];                   
            var palabraf=palabra.fila;
            var palabrac=palabra.columna;
            //var palabrap=palabra.definicion;
            //var palLi = $("<li>", { id: "pregli" + j }).append((j+1)+". "+palabrap);
            if (palabra.direccion=="V") {
                $(".preguntas-vertical").append("<p>"+(j+1)+". "+palabra.definicion+"</p>");
            }
            else{
                    $(".preguntas-horizontal").append("<p>"+(j+1)+". "+palabra.definicion+"</p>");
                }
            
            var kz = (j < 10) ? "0" + j : j;
            if (palabra.direccion === "V") { var inicio=palabraf; }
            if (palabra.direccion === "H") { var inicio=palabrac; }
            for (var i = inicio; i <= (palabra.valor.length + inicio - 1) ; i++) {
                if (palabra.direccion === "V") {
                    var continua = (i < 10) ? "0" + i : i;
                    var aumenta=(palabrac < 10) ? "0" + palabrac : palabrac;
                }
                if (palabra.direccion === "H"){
                    var continua = (palabraf < 10) ? "0" + palabraf : palabraf;
                    var aumenta=(i < 10) ? "0" + i : i;
                }
                var div="#c" + continua + "_" + aumenta;
                if (i === inicio){
                    if ($("#sp" + continua + "_" + aumenta).length==0) 
                    { 
                        var span = $("<span>", {
                            id: "sp" + continua + "_" + aumenta,
                            "class": "numerito",
                            css: { "left": $(div).css("left"), "top": $(div).css("top") }
                        }).append(j+1);
                        miLienzo.append(span);
                    }
                    else{
                        $("#sp" + continua + "_" + aumenta).append(j + 1);
                    }
                }
                $(div).addClass("e" + kz);
                if ((i === inicio) && ($(div).hasClass("activa"))) {
                    var clase = $(div).attr("class");
                    var p1 = clase.substring(9, 11);
                    var p2 = clase.substring(20, 22);
                    $(div).className = "casilla e" + p2 + " activa e" + p1;
                } else {
                    $(div).addClass("activa");
                }
                /*$(div).attr("contenteditable",true);
                $(div).attr("tabindex",i);*/
                
            }          
        }
        for (i = 0; i < actividad.numeroFilas; i++) {
            var ix = (i < 10) ? "0" + i : i;
            for (j = 0; j < actividad.numeroColumnas; j++) {
                var jy = (j < 10) ? "0" + j : j;
                if (!$("#c" + ix + "_" + jy).hasClass('activa'))
                    $("#c" + ix + "_" + jy).remove();
            }
        }
        $(".activa").click(actualizar);
        $(".numerito").click(clickCelda);
        $(controlCrucigrama).on('keydown',limitar);
        /*if (is_touch_device()) {
            $(controlCrucigrama).on('keyup',salta);
        } else {
            */
            $(controlCrucigrama).on('change',limitar_y_saltar);
            $(controlCrucigrama).on('keyup',function (event) {
                var evento = event || window.event;                
                if (evento.keyCode == 8) { tecla = 0; }
                else { $(this).trigger('change'); }
            });
        //}
    };  

    function actualizar(event) {
        //if (!$(".lienzo-crucigrama").hasClass("revisado-c")) {
        if (!$("#lienzo-crucigrama").hasClass("revisado-c")) {
            var id=$(this).attr("id");
            var clase=$(this).attr("class");
            NpalabraAnterior = clase.substring(9, 11);
            NpalabraAnterior = parseInt(NpalabraAnterior, 10);
            activar(id);
            $(controlCrucigrama).focus().css({"top": $(this).css("top"), "left": $(this).css("left")});
        }        

    }

    /*NUEVO INICIA*/
    $("#lienzo-crucigrama").keyup(function(e){
        var vacio1=true;
        $("#lienzo-crucigrama .activa").each(function(){ 
            if ($(this).text().length==0) {
                vacio1=false;                
            }            
        });
        if (vacio1){
            $(".comprobar").removeAttr("disabled");
        } 
    });
    /*NUEVO TERMINA*/

    
    //Evalua si están llenos los input
    /*function verificarRespuestasEscritas(event) {
        var formularioCompleto = true;
        if (event) {
            $(".crucigrama-principal .activa").each(function(){    
                if ($(this).html() == "") {            
                    TodasSi=0;                    
                    formularioCompleto = false;     
                }                                                          
            });                              
            return formularioCompleto;
        }
        return false;
    }

    $(".activa").keyup(function() {
        alert("entro");
        TodasSi=1;          
        if (verificarRespuestasEscritas(event)) { 
            $(".btnComprobar-cruc").removeClass('cDisabled');                   
        }
    });*/





    function salta(event) {
        var llave = "";
        if (event == "ayuda")
            llave = key;
        else {
            var evento = event || window.event;
            llave = evento.keyCode;
        }
        if ((tecla == 0) && (llave == key)) {
            if ($(controlCrucigrama).val() == "")
                $(controlCrucigrama).val(letraTecleada);
            $("#" + id).html($(controlCrucigrama).val());
            $(controlCrucigrama).val("");
            $("#" + id).html($("#" + id).html().toUpperCase());
            controlAnimacion.push(id);
            var contenido = $("#" + id).html();
            contenidoAnimacion.push(contenido);
            $("#" + id).html(contenido);
            var clase = $("#"+id).attr("class");
            var Npalabra = clase.substring(9, 11);
            Npalabra = parseInt(Npalabra, 10);
            var Npalabra2 = clase.substring(20, 22);
            Npalabra2 = parseInt(Npalabra2, 10);
            if (Npalabra != NpalabraAnterior)
                if (Npalabra2 == NpalabraAnterior)
                    Npalabra = Npalabra2;
            var palabra = actividad.palabras[Npalabra];
            var direccion = palabra.direccion;
            var col = parseInt(id.substring(4, 6), 10);
            var colM = col + 1;
            var fil = parseInt(id.substring(1, 3), 10);
            var filM = fil + 1;
            var limite;
            if (direccion == "H") {
                limite = palabra.columna + palabra.valor.length;
            }
            if (direccion == "V") {
                limite = palabra.fila + palabra.valor.length;
            }
            if ((((direccion == "V") && (limite - 1 < filM)) || ((direccion == "H") && (limite - 1 < colM))) && ($("#" + id).html() != " ")) {
                desactivar("fin");
                NpalabraAnterior = -1;
            } else {
                if (direccion == "H"){
                    var inicio=(fil < 10) ? "0" + fil : fil;
                    var continua=(colM < 10) ? "0" + colM : colM;
                }
                if (direccion == "V"){
                    var inicio=(filM < 10) ? "0" + filM : filM;
                    var continua=(col < 10) ? "0" + col : col;
                }
                activar("c" + inicio + "_" + continua);
                NpalabraAnterior = Npalabra;
            }
        }
        tecla = 0;
    }
    
    function limitar(event) {
        var evento = event || window.event;
        key = evento.keyCode;
        if (evento.keyCode == 8) {
            evento.preventDefault();
            tecla = 1;
            if (movi == 1) {
                movi2 = 1;
                movi = 0;
            }
            return true;
        } else if ((evento.keyCode >= 48) && (evento.keyCode <= 57)||(evento.keyCode >= 65) && (evento.keyCode <= 90)) {
            $("#" + id).html(" ");
            letraNum = 1;
            var letraTecleada = String.fromCharCode(key);
            if (movi == 1) {
                movi2 = 1;
                movi = 0;
            }
            return true;
        } else {
            $("#" + id).html(" ");
            letraNum = 0;
            var letraTecleada = String.fromCharCode(key);
            if (movi == 1) {
                movi2 = 1;
                movi = 0;
            }
            return true;
        }
    }
    function limitar_y_saltar(event) {
        if (movi2 == 1) {
            $(controlCrucigrama).val(letraTecleada);
            movi2 = 0;
        }
        var evento = event || window.event;
        if ($(this).val()) {
            key = $(this).val().charCodeAt(0);
            var e = jQuery.Event("keyup", {
                keyCode: key
            });
            salta(e);
        }
    }
    function activar(valorId) {
        desactivar("activo");
        id = valorId;
        var claseParcial;
        var clase=$("#"+id).attr("class");
        var Npalabra = clase.substring(9, 11);
        Npalabra = parseInt(Npalabra, 10);
        var Npalabra2 = clase.substring(20, 22);
        Npalabra2 = parseInt(Npalabra, 10);
        //$("#pregli"+parseInt(Npalabra)).removeClass().addClass("pregunta-activa");
        if ((Npalabra !== NpalabraAnterior) && (Npalabra2 === NpalabraAnterior)) {
            if (Npalabra2 < 10) Npalabra2 = "0" + Npalabra2;
            claseParcial = "e" + Npalabra2;
        } else {
            claseParcial = clase.substring(8, 11);
        }
        
        /*if( !$("." + claseParcial).hasClass("ok") ){
            $("." + claseParcial).addClass("activaPalabra");
        }*/

        $("." + claseParcial).addClass("activaPalabra");
        $("#" + id).addClass("foco");
        $(controlCrucigrama).css("top", $("#"+id).css("top"));
        $(controlCrucigrama).css("left", $("#"+id).css("left"));
    }
    function desactivar(opcion) {
        //No quita el verde
        /*NUEVO INICIA*/
        $(".activa").removeClass("foco").removeClass("activaPalabra").removeClass("error");
        /*NUEVO TERMINA*/
        //$(".activa").removeClass("foco").removeClass("activaPalabra").removeClass("ok").removeClass("error");
        //$(".pregunta-activa").removeClass().addClass(clasecss);
        id = "";
        if (opcion == "fin") {
            $(controlCrucigrama).blur();
        }
    }
    function clickCelda(event) {
        //console.log("click");
        var idNumerito = event.target.getAttribute("id");
        var idCelda = "c" + idNumerito.substring(2, 7);
        $("#" + idCelda).click();
    }    
    function controlPalabra(event) {
        if (permitido === 1) {
            if ((event.which !== 16) && (letra1 === 0)) {
                letra1 = event.keyCode;
                permitido = 0;
            }
        } else {
            if ((event.which !== 16) && (letra1 !== 0) && (letra2 === 0)) {
                letra2 = event.keyCode;
                permitido = 1;
            }
        }
    }
    /*   
    function is_touch_device() {
        var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        return supportsTouch;
    };
    */

    function crucigrama(){ 

    var name="activity-8"; //este se debe modificar segun actividad
    var diferencia="8"; //este se debe modificar segun actividad
    var textoAct ="";
    console.log(actividad);
    var totalopciones = actividad.palabras.length;
    var correctas = [];
    var respuestas = [];
    
    $("#"+name).html("").append("<p lang='es'>Escucha atentamente cada pregunta y responde.</p><p class='sr-only textocomplementario' lang='es'>Lista de "+totalopciones+" preguntas</p><div class='escritura palabras'></div>");

    $.each(actividad.palabras, function (indice, reactivo) {
        correctas.push(reactivo.valor);
        
        $(".palabras").append("<div class='reactivo parrafo' ><span lang='es' class='sr-only' >Pregunta </span> <span class='numero16'>"+(indice+1)+"</span> "+reactivo.definicion+
          " <input id='actividad"+diferencia+"-"+indice+"' type='text' placeholder='write here...' name='"+name+"' class='escribir' />"+
          "<div class='contretros invisible'></div></div>");
    });
    $("#"+name).append("<div class='retroalimentacion' lang='es'><p aria-hidden='true'>&nbsp;</p></div>");
    $("#"+name).append('<div class="contenedor-boton--derecha"><div><button name="'+name+'" class="comprobar btn control" disabled=""><b>Check</b></button></div><div><button class="try btn control" disabled="" name="'+name+'"><b>Try again</b></button></div></div>');
    console.log($(document).width());

    if($(document).width()<768) $(".alter-crucigrama").addClass("movil");
    else $(".alter-crucigrama").addClass("sr-only");
    //$("#"+name+" .alter-crucigrama").();

    //alter-crucigrama

    $("#"+name+" .comprobar").click(function() {
        var text="";
        $(this).attr('disabled','disabled');
      
        var vacio = 0;
        var contadorCorrectas = 0;
                
       $("#" + name + " .textocomplementario").html("Lista de "+totalopciones+" palabras, resultados:");

       $("#" + name +" input").each(function(i){
            
              text= $(this).val();
            
            if( text.toLowerCase().replace(/^[ '"]+|[ '"]+$|( ){2,}/g, '$1').trim() == correctas[i] ){ 
                $(this).siblings(".contretros").html(text +' <i class="result fa-solid fa-check" aria-hidden="true"></i><span class="respmens sr-only">correct answer</span>');
                $(this).siblings(".contretros").addClass("correcto");
                contadorCorrectas++;
            }
            else{
              $(this).siblings(".contretros").html(text +' <i class="result fa-solid fa-xmark" aria-hidden="true"></i><span class="respmens sr-only">wrong answer</span>');
              $(this).siblings(".contretros").addClass("incorrecto");
            }
            $(this).siblings("div").attr("aria-hidden","true");
            $(this).attr('disabled', true).addClass("invisible");
        });
       $("#" + name + " .contretros").removeClass("invisible");
       
        if (contadorCorrectas != correctas.length) { 
            $("#" + name + " .try").removeAttr('disabled');
            $("#" + name + " .retroalimentacion").html("<p class='color-rojo' lang='es'>Revisa tus respuestas e inténtalo de nuevo.</p>");
        }
        else{
            $("#" + name + " .retroalimentacion").html("<p class='color-verde' lang='es'>Muy bien.</p>");
        }        
    });

    $("#"+name+" .try").click(function() {
        //recurso = $(this).attr('name');
        $(this).attr('disabled','disabled');
        $("#" + name + " .textocomplementario").html("Lista de "+totalopciones+" palabras");
        
        $("#" + name +" input").each(function(i){ 
          if (!$(this).siblings(".contretros").hasClass( "correcto" )) {
            $(this).siblings(".contretros").html("");
            $("#" + name + " .retroalimentacion").html('<p aria-hidden="true">&nbsp;</p>');
            $(this).siblings(".contretros").removeClass("incorrecto").addClass("invisible");
            $(this).attr('disabled', false).removeClass("invisible").val("");
            $(this).siblings(".s-resp").attr("aria-hidden","true");
            $(this).siblings("div").attr("aria-hidden","false");
          }
        });

    });

    $(".escribir").keyup(function() { 
        //recurso = $(this).attr('name');
        var formularioCompleto = true;
        $("#" + name +" input").each(function(){
            if($(this).val().length <= 0 ){
                formularioCompleto = false;
            }
        });
        if (formularioCompleto) { 
            $("#" + name + " .comprobar").removeAttr('disabled');
        }
    });
}
    window.cargarDatos = cargarDatos;
}(window, window.jQuery));