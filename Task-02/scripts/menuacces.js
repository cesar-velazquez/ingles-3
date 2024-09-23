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
let btnFont_size = document.getElementById("font_size");
btnFont_size.addEventListener('click', function () {
    handleMenu();
})

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
let estadoLinea = localStorage.getItem("Línea de Lectura Task-01");

if (estadoLinea) {
    linea.classList.add("active");
}

function showLine() {
    if (linea.classList.contains('active')) {
        linea.classList.remove('active');
        localStorage.removeItem("Línea de Lectura Task-01");
    } else {
        linea.classList.add('active');
        localStorage.setItem("Línea de Lectura Task-01", "activado");
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

let LinkAzul = localStorage.getItem("Hipervínculos Task-01");
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
            localStorage.setItem("Hipervínculos Task-01", "activado");
        } else {
            enlace.classList.remove("resaltado");
            localStorage.setItem("Hipervínculos Task-01", "desactivado");
        }
    });
});

// Función que muestra el cursor más grande:
function CursorEstado() {
    let estadoCursor = localStorage.getItem("cursor Task-01");

    if (estadoCursor) {
        document.body.style.cursor = estadoCursor;
    }

    // let ubicacion = window.location.pathname;
    let cursorActivo = localStorage.getItem("Marca Cursor Task-01");

    // let newRuta = "url('../img/cursor/cursoracces.png'), auto";
    let Ruta = "url('./img/cursor/cursoracces.png'), auto";

    if (cursorActivo == "activado" && window.matchMedia("(min-width: 767px)").matches) {        
        document.body.style.cursor = Ruta;
    } else {
        document.body.style.cursor = "auto";
    }
    // Guardar la ruta del cursor después de establecerla
    localStorage.setItem("cursor Task-01", document.body.style.cursor);
}

CursorEstado();
window.addEventListener('resize', CursorEstado);

let btncursor = document.getElementById("cursorBig");
btncursor.addEventListener('click', function () {
    location.reload();
    CursorEstado()
});



