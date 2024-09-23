// Resaltar enlaces:
let link_resaltar = document.getElementById('link_resaltar');
let iconLink = document.getElementById("icon_Link");
let iconLinkActive = document.getElementById("icon_Link_Active");
// Toma como base lo que ya se guardo en el local storage: el cual está definido al inicio cuando se activa la función de hipervínculos.
let marcaLink = localStorage.getItem("Marca Hipervínculos Topic-1");

if (marcaLink === "activado") {
    link_resaltar.classList.add("HerramientaActivada");
    iconLink.style.display = "none";
    iconLinkActive.style.display = "inline-flex";
}
let linkactivo = marcaLink === "activado";
// let linkactivo = false;
link_resaltar.addEventListener('click', function () {
    if (!linkactivo) {
        linkactivo = true;
        iconLink.style.display = "none";
        iconLinkActive.style.display = "inline-flex";
        link_resaltar.classList.add("HerramientaActivada");
        localStorage.setItem("Marca Hipervínculos Topic-1", "activado");
    } else {
        linkactivo = false;
        iconLink.style.display = "inline-flex";
        iconLinkActive.style.display = "none";
        link_resaltar.classList.remove("HerramientaActivada");
        link_resaltar.style.transitionDuration = ".5s";
        localStorage.setItem("Marca Hipervínculos Topic-1", "desactivado");
    }
});

// Cursor:
let btn_Cursor = document.getElementById("cursorBig");
let iconCursor = document.getElementById("icon_Cursor");
let iconCursorActive = document.getElementById("icon_Cursor_Active");

// VERIFICAR SI HAY UN ESTADO GUARDADO:
let marca = localStorage.getItem("Marca Cursor Topic-1");

if (marca === "activado") {
    btn_Cursor.classList.add("HerramientaActivada");
    iconCursor.style.display = "none";
    iconCursorActive.style.display = "inline-flex";
}

let cursor = marca === "activado";

btn_Cursor.addEventListener('click', function () {
    if (!cursor) {
        cursor = true;
        iconCursor.style.display = "none";
        iconCursorActive.style.display = "inline-flex";
        btn_Cursor.classList.add("HerramientaActivada");
        localStorage.setItem("Marca Cursor Topic-1", "activado");
    } else {
        cursor = false;
        iconCursor.style.display = "inline-flex";
        iconCursorActive.style.display = "none";
        btn_Cursor.classList.remove("HerramientaActivada");
        btn_Cursor.style.transitionDuration = ".5s";
        localStorage.setItem("Marca Cursor Topic-1", "desactivado");
    }
});


// Función Linea de lectura:
let lineaLectura = document.getElementById("lineaLectura");
let iconLectura = document.getElementById("icon_Linea_Lectura");
let iconLecturaActive = document.getElementById("icon_Linea_Lectura_Active");

let marcaAzulLinea = localStorage.getItem("Marca Línea de Lectura Topic-1");
if (marcaAzulLinea === "activado") {
    lineaLectura.classList.add("HerramientaActivada");
    iconLecturaActive.style.display = "inline-flex";
    iconLectura.style.display = "none";
}

let lineaSelect = marcaAzulLinea === "activado";
lineaLectura.addEventListener('click', function () {
    if (!lineaSelect) {
        lineaSelect = true;
        iconLectura.style.display = "none";
        iconLecturaActive.style.display = "inline-flex";
        lineaLectura.classList.add("HerramientaActivada");
        localStorage.setItem("Marca Línea de Lectura Topic-1", "activado");
    } else {
        lineaSelect = false;
        iconLectura.style.display = "inline-flex";
        iconLecturaActive.style.display = "none";
        lineaLectura.classList.remove("HerramientaActivada");
        lineaLectura.style.transitionDuration = ".5s";
        localStorage.setItem("Marca Línea de Lectura Topic-1", "desactivado");
    }
});


// tamaño fuente:
let btn_FontSize = document.getElementById("font_size");
let iconFontSize = document.getElementById("icon_FontSize");
let iconFontSizeActive = document.getElementById("icon_FontSize_Active");

let marcaAzulFuente = localStorage.getItem("marcaAzulFuenteIngles3Topic1");
let contador = parseFloat(localStorage.getItem("contadorIngles3Topic1")) || 1;

if (marcaAzulFuente === "activado") {
    iconFontSize.style.display = "none";
    iconFontSizeActive.style.display = "inline-flex";
    btn_FontSize.classList.add("HerramientaActivada");
}

let btnFontS = marcaAzulFuente === "activado";
let cont = parseFloat(localStorage.getItem("contadorIngles3Topic1")) || 1;

btn_FontSize.addEventListener('click', function () {
    cont += 1;
    if (cont === 2 || cont === 3) {
        iconFontSize.style.display = "none";
        iconFontSizeActive.style.display = "inline-flex";
        btn_FontSize.classList.add("HerramientaActivada");
        localStorage.setItem("marcaAzulFuenteIngles3Topic1", "activado");
        localStorage.setItem("contadorIngles3Topic1", cont.toString());
    }
    else if (cont != 2 || cont != 3) {
        cont = 1;
        iconFontSize.style.display = "inline-flex";
        iconFontSizeActive.style.display = "none";
        btn_FontSize.classList.remove("HerramientaActivada");
        localStorage.setItem("marcaAzulFuenteIngles3Topic1", "desactivado");
        localStorage.setItem("contadorIngles3Topic1", cont.toString());
    }
});

