let btnTamFuenteTabla2 = document.getElementById("font_size");
let containersTable2 = document.querySelectorAll('.min_heightT2');

function ajustarAlturaContenedoresTable2() {
    // Obtener el contador actual o establecer un valor por defecto
    let contadorActual = localStorage.getItem("contadorIndexIngles3") || 1;

    containersTable2.forEach(containerTable2 => {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            if (contadorActual == 2) {
                containerTable2.style.height = "1200px";
                localStorage.setItem("PrimerNiveltabla", "activado");
            } else if (contadorActual == 3) {
                containerTable2.style.height = "1545px";
                localStorage.setItem("PrimerNiveltabla", "desactivado");
                localStorage.setItem("SegundoNiveltabla", "activado");
            } else if (contadorActual == 1) {
                containerTable2.style.height = "920px";
                localStorage.setItem("SegundoNiveltabla", "desactivado");
                localStorage.setItem("PrimerNiveltabla", "desactivado");
            }
        } else if (window.matchMedia("(min-width: 991px)").matches) {
            if (contadorActual == 2) {
                containerTable2.style.height = "1530px";
            } else if (contadorActual == 3) {
                containerTable2.style.height = "1900px";
            } else if (contadorActual == 1) {
                containerTable2.style.height = "955px";
            }
        } else {
            if (contadorActual == 2) {
                containerTable2.style.height = "100px";
            } else if (contadorActual == 3) {
                containerTable2.style.height = "130px";
            } else if (contadorActual == 1) {
                containerTable2.style.height = "90px";
            }
        }
    });
}

// Inicializar alturas cuando cargue la página
ajustarAlturaContenedoresTable2();

// Ajustar las alturas cuando la ventana cambie de tamaño
window.addEventListener('resize', ajustarAlturaContenedoresTable2);

// Ajustar las alturas cuando se haga clic en el botón
btnTamFuenteTabla2.addEventListener('click', ajustarAlturaContenedoresTable2);
