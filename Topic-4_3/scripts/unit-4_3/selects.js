var recurso;
//Evalua si están llenos los faqs
var fila2 = 0;
function verificarRespuestasContestadas(event) {
    var formularioCompleto = true;
    if (event) {
        $("." + recurso + " select").each(function () {
            if ($(this).val() == null) { //No selecciono una opcion  
                TodasSi = 0;
                formularioCompleto = false;
                // console.log("second", + formularioCompleto);
            }
        });
        return formularioCompleto;
        // console.log("second", + formularioCompleto);
    }
    return false;
    // console.log("second", + formularioCompleto);
}

$(".reactivo").change(function () {    
    recurso = $(this).attr('name');
    TodasSi = 1;
    if (verificarRespuestasContestadas(event)) { //Están contestadas todas
        $("." + recurso + " .bc").removeAttr('disabled');
        console.log("entroo", + recurso);
        // console.log("Recurso: ", recurso);
        console.log("Botón a habilitar: ", "." + recurso + " .bc");
    }
});