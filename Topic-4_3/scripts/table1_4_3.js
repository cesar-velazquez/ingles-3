let btnTamFuenteTabla2M4_3 = document.getElementById("font_size");
let containersTable1M4_3 = document.querySelectorAll('.min_heightM4T2');

function ajustarAlturaContenedoresTable1M4_3() {
    // Obtener el contador actual o establecer un valor por defecto
    let contadorActual = localStorage.getItem("contadorIndexIngles3") || 1;

    containersTable1M4_3.forEach(containerTable2 => {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            if (contadorActual == 2) {
                containerTable2.style.height = "auto";
                localStorage.setItem("PrimerNiveltabla", "activado");
            } else if (contadorActual == 3) {
                containerTable2.style.height = "auto";
                localStorage.setItem("PrimerNiveltabla", "desactivado");
                localStorage.setItem("SegundoNiveltabla", "activado");
            } else if (contadorActual == 1) {
                containerTable2.style.height = "auto";
                localStorage.setItem("SegundoNiveltabla", "desactivado");
                localStorage.setItem("PrimerNiveltabla", "desactivado");
            }
        } else if (window.matchMedia("(min-width: 991px)").matches) {
            if (contadorActual == 2) {
                containerTable2.style.height = "auto";
            } else if (contadorActual == 3) {
                containerTable2.style.height = "auto";
            } else if (contadorActual == 1) {
                containerTable2.style.height = "auto";
            }
        } else {
            if (contadorActual == 2) {
                containerTable2.style.height = "auto";
            } else if (contadorActual == 3) {
                containerTable2.style.height = "auto";
            } else if (contadorActual == 1) {
                containerTable2.style.height = "auto";
            }
        }
    });
}

// Inicializar alturas cuando cargue la página
ajustarAlturaContenedoresTable1M4_3();

// Ajustar las alturas cuando la ventana cambie de tamaño
window.addEventListener('resize', ajustarAlturaContenedoresTable1M4_3);

// Ajustar las alturas cuando se haga clic en el botón
btnTamFuenteTabla2M4_3.addEventListener('click', ajustarAlturaContenedoresTable1M4_3);
