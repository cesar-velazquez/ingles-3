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

btn_lectorInmersivo
let btnLectorInm = document.getElementById("btn_lectorInmersivo");
btnLectorInm.addEventListener('click', function () {
    handleMenu();
})

// lineaLectura
let btnLineaLect = document.getElementById("lineaLectura");
btnLineaLect.addEventListener('click', function () {
    handleMenu();
})

// Función para mostrar linea
let linea = document.getElementById("readline");
let estadoLinea = localStorage.getItem("Línea de Lectura Topic-1_3");

if (estadoLinea) {
    linea.classList.add("active");
}

function showLine() {
    if (linea.classList.contains('active')) {
        linea.classList.remove('active');
        localStorage.removeItem("Línea de Lectura Topic-1_3");
    } else {
        linea.classList.add('active');
        localStorage.setItem("Línea de Lectura Topic-1_3", "activado");
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

let LinkAzul = localStorage.getItem("Hipervínculos Topic-1_3");
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
            localStorage.setItem("Hipervínculos Topic-1_3", "activado");
        } else {
            enlace.classList.remove("resaltado");
            localStorage.setItem("Hipervínculos Topic-1_3", "desactivado");
        }
    });
});

// Función que muestra el cursor más grande:
function CursorEstado() {
    let estadoCursor = localStorage.getItem("cursor Topic-1_3");

    if (estadoCursor) {
        document.body.style.cursor = estadoCursor;
    }

    // let ubicacion = window.location.pathname;
    let cursorActivo = localStorage.getItem("Marca Cursor Topic-1_3");

    // let newRuta = "url('../img/cursor/cursoracces.png'), auto";
    let Ruta = "url('./Topic-1_3/img/cursor/cursoracces.png'), auto";

    if (cursorActivo == "activado" && window.matchMedia("(min-width: 767px)").matches) {        
        document.body.style.cursor = Ruta;
    } else {
        document.body.style.cursor = "auto";
    }
    // Guardar la ruta del cursor después de establecerla
    localStorage.setItem("cursor Topic-1_3", document.body.style.cursor);
}

CursorEstado();
window.addEventListener('resize', CursorEstado);

let btncursor = document.getElementById("cursorBig");
btncursor.addEventListener('click', function () {
    location.reload();
    CursorEstado()
});


// función cambio de fuente
const btnAumentarFuente = document.getElementById('font_size');
// const pleca = document.getElementById('pleca_uv');
const subtitulos = document.querySelectorAll("h2");
const subtitulosh3 = document.querySelectorAll("h3");
const parrafos = document.querySelectorAll("p");
const listas = document.querySelectorAll("ul");
const listasol = document.querySelectorAll("ol");
// const ActualContainer = document.getElementById('content_tabs');

let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafosIngles3Topic1_3")) || 1.3;
let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulosIngles3Topic1_3")) || 1.5;
// let tamFuentePleca = parseFloat(localStorage.getItem("FuenteActualPleca")) || 1;
let tamFuenteSubth3 = parseFloat(localStorage.getItem("FuenteActualSubtH3Ingles3Topic1_3")) || 1.5;
let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUlIngles3Topic1_3")) || 1.3;
let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOlIngles3Topic1_3")) || 1.3;
// let tamContent = parseFloat(localStorage.getItem("tamContent")) || 600;

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

    // pleca.style.fontSize = tamFuentePleca + 'rem';
    // localStorage.setItem("tamContent", tamContent.toString());
    localStorage.setItem("FuenteActualSubtH3Ingles3Topic1_3", tamFuenteSubth3.toString());
    localStorage.setItem("FuenteActualParrafosIngles3Topic1_3", tamFuenteParrafos.toString());
    localStorage.setItem("FuenteActualUlIngles3Topic1_3", tamFuenteUl.toString());
    localStorage.setItem("FuenteActualOlIngles3Topic1_3", tamFuenteOl.toString());
    localStorage.setItem("FuenteActualSubtitulosIngles3Topic1_3", tamFuenteSubtitulos.toString());
    // localStorage.setItem("FuenteActualPleca", tamFuentePleca.toString());
});


document.addEventListener("DOMContentLoaded", function () {
    let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafosIngles3Topic1_3")) || 1.3;
    let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUlIngles3Topic1_3")) || 1.3;
    let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOlIngles3Topic1_3")) || 1.3;
    let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulosIngles3Topic1_3")) || 1.5;
    let tamFuenteSubtitulosh3 = parseFloat(localStorage.getItem("FuenteActualSubtH3Ingles3Topic1_3")) || 1.5;

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


