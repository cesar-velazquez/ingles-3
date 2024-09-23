const btnAumentarFuente = document.getElementById('font_size');
// const pleca = document.getElementById('pleca_uv');
const subtitulos = document.querySelectorAll("h2");
const subtitulosh3 = document.querySelectorAll("h3");
const parrafos = document.querySelectorAll("p");
const listas = document.querySelectorAll("ul");
const listasol = document.querySelectorAll("ol");
const selectCombos = document.querySelectorAll("select");
const selectLabel = document.querySelectorAll("label");
// const ActualContainer = document.getElementById('content_tabs');

let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafos")) || 1.3;
let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulos")) || 1.5;
// let tamFuentePleca = parseFloat(localStorage.getItem("FuenteActualPleca")) || 1;
let tamFuenteSubth3 = parseFloat(localStorage.getItem("FuenteActualSubtH3")) || 1.5;
let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUl")) || 1.3;
let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOl")) || 1.3;
let tamFuenteSelect = parseFloat(localStorage.getItem("FuenteActualSelect")) || 1.3;
let tamFuenteLabel = parseFloat(localStorage.getItem("FuenteActualLabel")) || 1.3;
// let tamContent = parseFloat(localStorage.getItem("tamContent")) || 600;

// let conta = 0;
btnAumentarFuente.addEventListener('click', function () {
    tamFuenteParrafos += 0.25;
    tamFuenteSubtitulos += 0.25;
    // tamFuentePleca += 0.25;
    tamFuenteSubth3 += 0.25;
    tamFuenteUl += 0.25;
    tamFuenteOl += 0.25;
    tamFuenteSelect += 0.25;
    tamFuenteLabel += 0.25;

    if (tamFuenteUl > 1.8) {
        tamFuenteUl = 1.3;
    }

    if (tamFuenteOl > 1.8) {
        tamFuenteOl = 1.3;
    }

    if (tamFuenteParrafos > 1.8) {
        tamFuenteParrafos = 1.3;
    }

    if (tamFuenteSelect > 1.8) {
        tamFuenteSelect = 1.3;
    }

    if (tamFuenteLabel > 1.8) {
        tamFuenteLabel = 1.3;
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

    selectCombos.forEach(selectCombo => {
        selectCombo.style.fontSize = tamFuenteSelect + 'rem';
    });

    selectLabel.forEach(label => {
        label.style.fontSize = tamFuenteLabel + 'rem';
    });

    // pleca.style.fontSize = tamFuentePleca + 'rem';
    // localStorage.setItem("tamContent", tamContent.toString());
    localStorage.setItem("FuenteActualSubtH3", tamFuenteSubth3.toString());
    localStorage.setItem("FuenteActualParrafos", tamFuenteParrafos.toString());
    localStorage.setItem("FuenteActualUl", tamFuenteUl.toString());
    localStorage.setItem("FuenteActualOl", tamFuenteOl.toString());
    localStorage.setItem("FuenteActualSubtitulos", tamFuenteSubtitulos.toString());
    localStorage.setItem("FuenteActualSelect", tamFuenteSelect.toString());
    localStorage.setItem("FuenteActualLabel", tamFuenteLabel.toString());
    // localStorage.setItem("FuenteActualPleca", tamFuentePleca.toString());
});


document.addEventListener("DOMContentLoaded", function () {
    let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafos")) || 1.3;
    let tamFuenteUl = parseFloat(localStorage.getItem("FuenteActualUl")) || 1.3;
    let tamFuenteOl = parseFloat(localStorage.getItem("FuenteActualOl")) || 1.3;
    let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulos")) || 1.5;
    let tamFuenteSubtitulosh3 = parseFloat(localStorage.getItem("FuenteActualSubtH3")) || 1.5;
    let tamFuenteSelect = parseFloat(localStorage.getItem("FuenteActualSelect")) || 1.3;
    let tamFuenteLabel = parseFloat(localStorage.getItem("FuenteActualLabel")) || 1.3;

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

    selectCombos.forEach(selectCombo => {
        selectCombo.style.fontSize = tamFuenteSelect + 'rem';
    });

    selectLabel.forEach(label => {
        label.style.fontSize = tamFuenteLabel + 'rem';
    });

    // pleca.style.fontSize = tamFuentePleca + 'rem';
});