// ================================
// TONALIDADES DE VERDE
// ================================

const coloresVerde = [
    "#003300",
    "#004D00",
    "#006600",
    "#007A00",
    "#008800",
    "#009900",
    "#00AA00",
    "#00BB00",
    "#00CC00",
    "#00DD00",
    "#00EE00"
];


// ================================
// TONALIDADES DE ROJO
// ================================

const coloresRojo = [
    "#330000",
    "#4D0000",
    "#660000",
    "#7A0000",
    "#880000",
    "#9D0000",
    "#AA0000",
    "#BB0000",
    "#CC0000",
    "#DD0000",
    "#EE0000"
];


// ================================
// ELEMENTOS HTML
// ================================

const controlVerde = document.getElementById("verde");
const controlRojo = document.getElementById("rojo");

const franjaVerde = document.getElementById("franjaVerde");
const franjaRoja = document.getElementById("franjaRoja");

const valorVerde = document.getElementById("valorVerde");
const valorRojo = document.getElementById("valorRojo");


// ================================
// CAMBIAR VERDE
// ================================

controlVerde.addEventListener("input", function () {

    const posicion = Number(this.value);

    const color = coloresVerde[posicion];

    franjaVerde.style.backgroundColor = color;

    valorVerde.textContent = color;
});


// ================================
// CAMBIAR ROJO
// ================================

controlRojo.addEventListener("input", function () {

    const posicion = Number(this.value);

    const color = coloresRojo[posicion];

    franjaRoja.style.backgroundColor = color;

    valorRojo.textContent = color;
});