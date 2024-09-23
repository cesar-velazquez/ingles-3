let btnTamFuente = document.getElementById("font_size");
const ActualContainer = document.getElementById('content_tabs');
let AlturaPrimerNivel = localStorage.getItem("PrimerNivel");
let AlturaSegundoNivel = localStorage.getItem("SegundoNivel");

let cuadroM1 = document.getElementById("cuadroModul1");
let cuadroM2 = document.getElementById("cuadroModul2");
let cuadroM3 = document.getElementById("cuadroModul3");

if (AlturaPrimerNivel === "activado") {
    ActualContainer.style.height = "710px";
    ActualContainer.style.transitionDuration = "1s";
}

if (AlturaSegundoNivel === "activado") {
    ActualContainer.style.height = "917px";
    ActualContainer.style.transitionDuration = "1s";
}

function ajustarAlturaContenedor() {
    const contadorActual = localStorage.getItem("contador");    

    if (window.matchMedia("(min-width: 1200px)").matches) {
        // console.log("mayor a 1200");
        if (contadorActual == 2) {
            ActualContainer.style.height = "710px";

            cuadroM1.style.height = "262px";
            cuadroM2.style.height = "262px";
            cuadroM3.style.height = "262px";

            ActualContainer.style.transitionDuration = "1s";
            localStorage.setItem("PrimerNivel", "activado");
        } else if (contadorActual == 3) {
            ActualContainer.style.height = "917px";

            cuadroM1.style.height = "292px";
            cuadroM2.style.height = "292px";
            cuadroM3.style.height = "292px";

            ActualContainer.style.transitionDuration = "1s";
            localStorage.setItem("PrimerNivel", "desactivado");
            localStorage.setItem("SegundoNivel", "activado");
        } else if (contadorActual == 1) {
            ActualContainer.style.height = "600px";

            cuadroM1.style.height = "auto";
            cuadroM2.style.height = "auto";
            cuadroM3.style.height = "auto";

            ActualContainer.style.transitionDuration = "1s";
            localStorage.setItem("SegundoNivel", "desactivado");
        }
    } else if (window.matchMedia("(min-width: 991px)").matches) {
        // console.log("es menor");
        if (contadorActual == 2) {
            // ActualContainer.style.backgroundColor = "red";
            ActualContainer.style.height = "790px";
            cuadroM1.style.height = "262px";
            cuadroM2.style.height = "262px";
            cuadroM3.style.height = "262px";
        } else if (contadorActual == 3) {
            // ActualContainer.style.backgroundColor = "pink";
            ActualContainer.style.height = "1020px";
        } else if (contadorActual == 1) {
            // ActualContainer.style.backgroundColor = "green";
            ActualContainer.style.height = "600px";
        }
    } else {
        // console.log("es menor");
        if (contadorActual == 2) {
            // ActualContainer.style.backgroundColor = "orange";
            ActualContainer.style.height = "960px";
        } else if (contadorActual == 3) {
            // ActualContainer.style.backgroundColor = "gray";
            ActualContainer.style.height = "1320px";
        } else if (contadorActual == 1) {
            // ActualContainer.style.backgroundColor = "blue";
            ActualContainer.style.height = "775px";
        }
    }
}

ajustarAlturaContenedor();

window.addEventListener('resize', ajustarAlturaContenedor);

btnTamFuente.addEventListener('click', function () {
    ajustarAlturaContenedor();
});