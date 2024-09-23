//Evalua si están llenos los input

function verificarRespuestasEscritas(event) {

    var formularioCompleto = true;
    if (event) {
        $("." + recurso + " input").each(function () {
            if ($(this).val().length <= 0) {
                TodasSi = 0;
                formularioCompleto = false;
            }
        });
        return formularioCompleto;
    }
    return false;
}



$(".escribir").keyup(function () {
    // console.log("sii");
    recurso = $(this).attr('name');
    TodasSi = 1;
    if (verificarRespuestasEscritas(event)) { //Están contestadas todas
        $("." + recurso + " .check").removeAttr('disabled');
        // console.log("si x2");
    }
});