// Función encargada de abrir y cerrar el menú accesible:
let menu = document.querySelector('.menuacces');
let btnAccess = document.querySelector('.btnAccessUniversal');

function handleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
// Función que se encarga de: Si el usuario da click fuera del menú accesible se cerrará 
document.addEventListener('click', function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBtnAcces = btnAccess.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBtnAcces) {
        menu.classList.remove('active');
    }
});

// función que hace que se cierre mi menú cuando ya se haya seleccionado una opción:

// font_size
// let btnFont_size = document.getElementById("font_size");
// btnFont_size.addEventListener('click', function () {
//     handleMenu();
// })

// link_resaltar
let btnHiper = document.getElementById("link_resaltar");
btnHiper.addEventListener('click', function () {
    handleMenu();
})
// cursorBig
let btnCursor = document.getElementById("cursorBig");
btnCursor.addEventListener('click', function () {
    handleMenu();
})
// voz
// let btnComandVoz = document.getElementById("btn-access");
// btnComandVoz.addEventListener('click', function () {
//     handleMenu();
// })
btn_lectorInmersivo
let btnLectorInm = document.getElementById("btn_lectorInmersivo");
btnLectorInm.addEventListener('click', function () {
    handleMenu();
})
// enlaceaLecturaF
// let btnLecturaF = document.getElementById("enlaceaLecturaF");
// btnLecturaF.addEventListener('click', function () {
//     handleMenu();
// })
// lineaLectura
let btnLineaLect = document.getElementById("lineaLectura");
btnLineaLect.addEventListener('click', function () {
    handleMenu();
})



// Función para mostrar linea
let linea = document.getElementById("readline");
let estadoLinea = localStorage.getItem("Línea de Lectura");

if (estadoLinea) {
    linea.classList.add("active");
}

function showLine() {
    if (linea.classList.contains('active')) {
        linea.classList.remove('active');
        localStorage.removeItem("Línea de Lectura");
    } else {
        linea.classList.add('active');
        localStorage.setItem("Línea de Lectura", "activado");
    }
}

function detectarPosicionMouse(event) {
    let line = document.getElementById("readline");
    const y = event.clientY;
    line.style.top = y + 'px';
}

// Fin función



// Función que resalta los Hipervínculos:
const botonResaltar = document.getElementById("link_resaltar");
const enlaces = document.querySelectorAll("a");

let LinkAzul = localStorage.getItem("Hipervínculos");
if (LinkAzul === "activado") {
    enlaces.forEach(enlace => {
        enlace.classList.add("resaltado");
    })
}

// almacenar el local storage de la línea de lectura:
let resaltar = LinkAzul === "activado";

botonResaltar.addEventListener("click", function () {
    resaltar = !resaltar;
    enlaces.forEach(enlace => {
        if (resaltar) {
            enlace.classList.add("resaltado");
            localStorage.setItem("Hipervínculos", "activado");
        } else {
            enlace.classList.remove("resaltado");
            localStorage.setItem("Hipervínculos", "desactivado");
        }
    });
});

// Función que muestra el cursor más grande:
let btncursor = document.getElementById("cursorBig");
let cursorActivo = false;
let estadoCursor = localStorage.getItem("cursor");

function actualizarCursor() {
    if (window.matchMedia("(max-width: 767px").matches) {
        document.body.style.cursor = "auto";
        cursorActivo = false;
        btncursor.classList.remove("activo");
    } else {
        if (estadoCursor) {
            document.body.style.cursor = estadoCursor;
            cursorActivo = estadoCursor !== "auto";
            if (cursorActivo) {
                btncursor.classList.add("activo");
            }
        }
    }
}

actualizarCursor();

btncursor.addEventListener('click', function (e) {
    if (!cursorActivo && window.matchMedia("(min-width: 767px)").matches) {
        document.body.style.cursor = "url('./img/cursor/cursoracces.png'), auto";
        btncursor.classList.add("activo");
        cursorActivo = true;
    } else {
        console.log(cursorActivo);
        document.body.style.cursor = "auto";
        btncursor.classList.remove("active");
        cursorActivo = false;
    }
    localStorage.setItem("cursor", document.body.style.cursor);
});

window.addEventListener('resize', actualizarCursor);
// fin función cursor


// función cambio de fuente
const btnAumentarFuente = document.getElementById('font_size');
// const pleca = document.getElementById('pleca_uv');
const subtitulos = document.querySelectorAll("h2");
const subtitulosh3 = document.querySelectorAll("h3");
const parrafos = document.querySelectorAll("p");
const listas = document.querySelectorAll("ul");
const listasol = document.querySelectorAll("ol");
let header_ext = document.getElementById("hr_extr");

let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafosIngles3Index")) || 1.3;
let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulosIngles3Index")) || 1.5;
let tamFuenteSubth3 = parseFloat(localStorage.getItem("FuenteActualSubtH3Ingles3Index")) || 1.5;
let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUlIngles3Index")) || 1.3;
let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOlIngles3Index")) || 1.3;


// let conta = 0;
btnAumentarFuente.addEventListener('click', function () {
    tamFuenteParrafos += 0.25;
    tamFuenteSubtitulos += 0.25;
    // tamFuentePleca += 0.25;
    tamFuenteSubth3 += 0.25;
    tamFuenteUl += 0.25;
    tamFuenteOl += 0.25;

    if (tamFuenteUl > 1.8) {
        tamFuenteUl = 1.3;
    }
    if (tamFuenteOl > 1.8) {
        tamFuenteOl = 1.3;
    }

    if (tamFuenteParrafos > 1.8) {
        tamFuenteParrafos = 1.3;
    }

    if (tamFuenteSubth3 > 2) {
        tamFuenteSubth3 = 1.5;
    }

    if (tamFuenteSubtitulos > 2) {
        tamFuenteSubtitulos = 1.5;
    }
    listas.forEach(lista => {
        lista.style.fontSize = tamFuenteUl + 'rem';
    })

    listasol.forEach(listaOl => {
        listaOl.style.fontSize = tamFuenteOl + 'rem';
    })

    subtitulosh3.forEach(subtituloh3 => {
        subtituloh3.style.fontSize = tamFuenteSubth3 + 'rem';
    })

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
    });

    localStorage.setItem("FuenteActualSubtH3Ingles3Index", tamFuenteSubth3.toString());
    localStorage.setItem("FuenteActualParrafosIngles3Index", tamFuenteParrafos.toString());
    localStorage.setItem("FuenteActualUlIngles3Index", tamFuenteUl.toString());
    localStorage.setItem("FuenteActualOlIngles3Index", tamFuenteOl.toString());
    localStorage.setItem("FuenteActualSubtitulosIngles3Index", tamFuenteSubtitulos.toString());
});


document.addEventListener("DOMContentLoaded", function () {
    let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafosIngles3Index")) || 1.3;
    let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUlIngles3Index")) || 1.3;
    let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOlIngles3Index")) || 1.3;
    let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulosIngles3Index")) || 1.5;
    let tamFuenteSubtitulosh3 = parseFloat(localStorage.getItem("FuenteActualSubtH3Ingles3Index")) || 1.5;

    listas.forEach(lista => {
        lista.style.fontSize = tamFuenteUl + 'rem';
    })

    listasol.forEach(listaOl => {
        listaOl.style.fontSize = tamFuenteOl + 'rem';
    })

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
    });

    subtitulosh3.forEach(subtituloh3 => {
        subtituloh3.style.fontSize = tamFuenteSubtitulosh3 + 'rem';
    })
});


