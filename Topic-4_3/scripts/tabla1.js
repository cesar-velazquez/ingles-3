let btnTamFuenteTabla = document.getElementById("font_size");
let containers = document.querySelectorAll('.contenedor-ajustable');
let containersTitle = document.querySelectorAll('.min_head_height');

// Definir las alturas para cada caso
const heightConfig = {
    large: { 1: "auto", 2: "auto", 3: "auto" },
    medium: { 1: "100px", 2: "150px", 3: "180px" },
    small: { 1: "190px", 2: "215px", 3: "290px" },
    titleLarge: { 1: "auto", 2: "auto", 3: "auto" },
    titleMedium: { 1: "80px", 2: "140px", 3: "110px" },
    titleSmall: { 1: "90px", 2: "100px", 3: "130px" }
};

// Función para determinar el tamaño de pantalla
function getScreenSize() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        return 'large';
    } else if (window.matchMedia("(min-width: 991px)").matches) {
        return 'medium';
    } else {
        return 'small';
    }
}

// Función que ajusta la altura de los elementos
function ajustarAltura(elements, type) {
    let contadorActual = localStorage.getItem("contadorIndexIngles3") || 1;
    let screenSize = getScreenSize();
    let heights = type === 'title' ? heightConfig[`title${screenSize.charAt(0).toUpperCase() + screenSize.slice(1)}`] : heightConfig[screenSize];

    elements.forEach(element => {
        element.style.height = heights[contadorActual];
    });

    actualizarEstadoLocalStorage(contadorActual);
}

// Función que actualiza el estado en localStorage
function actualizarEstadoLocalStorage(contadorActual) {
    if (contadorActual == 2) {
        localStorage.setItem("PrimerNiveltabla", "activado");
        localStorage.setItem("SegundoNiveltabla", "desactivado");
    } else if (contadorActual == 3) {
        localStorage.setItem("PrimerNiveltabla", "desactivado");
        localStorage.setItem("SegundoNiveltabla", "activado");
    } else {
        localStorage.setItem("PrimerNiveltabla", "desactivado");
        localStorage.setItem("SegundoNiveltabla", "desactivado");
    }
}

// Función principal que ajusta todos los contenedores
function ajustarAlturaContenedores() {
    ajustarAltura(containersTitle, 'title');
    ajustarAltura(containers, 'container');
}

// Inicializa las alturas al cargar la página
ajustarAlturaContenedores();

// Ajusta las alturas cuando la ventana cambia de tamaño
window.addEventListener('resize', ajustarAlturaContenedores);

// Ajusta las alturas cuando se hace clic en el botón
btnTamFuenteTabla.addEventListener('click', ajustarAlturaContenedores);


// let btnTamFuenteTabla = document.getElementById("font_size");
// let containers = document.querySelectorAll('.contenedor-ajustable');
// let containersTitle = document.querySelectorAll('.min_head_height');

// function ajustarAlturaContenedores() {
//     let contadorActual = localStorage.getItem("contadorIndexIngles3");


//     containersTitle.forEach(containerTitle => {
//         if (window.matchMedia("(min-width: 1200px)").matches) {
//             if (contadorActual == 2) {
//                 containerTitle.style.height = "70px";                
//                 localStorage.setItem("PrimerNiveltabla", "activado");
//             } else if (contadorActual == 3) {
//                 containerTitle.style.height = "80px";
//                 localStorage.setItem("PrimerNiveltabla", "desactivado");
//                 localStorage.setItem("SegundoNiveltabla", "activado");
//             } else if (contadorActual == 1 || contadorActual == null) {
//                 containerTitle.style.height = "95px";
//                 localStorage.setItem("SegundoNiveltabla", "desactivado");
//                 localStorage.setItem("PrimerNiveltabla", "desactivado");
//             }
//         } else if (window.matchMedia("(min-width: 991px)").matches) {
//             if (contadorActual == 2) {
//                 containerTitle.style.height = "140px";
//             } else if (contadorActual == 3) {
//                 containerTitle.style.height = "110px";
//             } else if (contadorActual == 1) {
//                 containerTitle.style.height = "80px";
//             }
//         } else {
//             if (contadorActual == 2) {
//                 containerTitle.style.height = "100px";
//             } else if (contadorActual == 3) {
//                 containerTitle.style.height = "130px";
//             } else if (contadorActual == 1) {
//                 containerTitle.style.height = "90px";
//             }
//         }
//     });

//     containers.forEach(container => {
//         if (window.matchMedia("(min-width: 1200px)").matches) {
//             if (contadorActual == 2) {
//                 container.style.height = "150px";                
//                 localStorage.setItem("PrimerNiveltabla", "activado");
//             } else if (contadorActual == 3) {
//                 container.style.height = "170px";
//                 localStorage.setItem("PrimerNiveltabla", "desactivado");
//                 localStorage.setItem("SegundoNiveltabla", "activado");
//             } else if (contadorActual == 1) {
//                 container.style.height = "95px";
//                 localStorage.setItem("SegundoNiveltabla", "desactivado");
//                 localStorage.setItem("PrimerNiveltabla", "desactivado");
//             }
//         } else if (window.matchMedia("(min-width: 991px)").matches) {
//             if (contadorActual == 2) {
//                 container.style.height = "150px";
//             } else if (contadorActual == 3) {
//                 container.style.height = "180px";
//             } else if (contadorActual == 1) {
//                 container.style.height = "100px";
//             }
//         } else {
//             if (contadorActual == 2) {
//                 container.style.height = "215px";
//             } else if (contadorActual == 3) {
//                 container.style.height = "290px";
//             } else if (contadorActual == 1) {
//                 container.style.height = "190px";
//             }
//         }
//     });
// }

// ajustarAlturaContenedores();
// window.addEventListener('resize', ajustarAlturaContenedores);

// btnTamFuenteTabla.addEventListener('click', function () {
//     ajustarAlturaContenedores();
// });


