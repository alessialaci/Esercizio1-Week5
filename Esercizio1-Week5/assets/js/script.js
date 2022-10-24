const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

var dataCorrente = new Date();
var ora = dataCorrente.getHours();
var mese = mesi[dataCorrente.getMonth()];
var nome = document.getElementById('nome');
var btnSaluto = document.getElementById('btnSaluto');
var saluto = document.getElementById('saluto');

document.getElementById('data').innerHTML = `${dataCorrente.getDate()} / ${mese} / ${dataCorrente.getFullYear()}`;
document.getElementById('dataCompleta').innerHTML = dataCorrente;
document.getElementById('giorno').innerHTML += dataCorrente.getDate();
document.getElementById('mese').innerHTML += mese;
document.getElementById('oggi').innerHTML += `${dataCorrente.getDate()}-${dataCorrente.getMonth() + 1}-${dataCorrente.getFullYear()}`;

btnSaluto.addEventListener('click', function () {
    salutare();
})

function salutare() {
    if (ora <= 13) {
        saluto.innerHTML = `Buongiorno, ${nome.value}!`;
        return;
    } else if (ora <= 18) {
        saluto.innerHTML = `Buon pomeriggio, ${nome.value}!`;
        return;
    } else {
        saluto.innerHTML = `Buonasera, ${nome.value}!`;
        return;
    }
}


// Funzione iniziale... abbiamo trovato in seguito un metodo più veloce

// function calcolaMese() {
//     let meseCorrente;

//     if (dataCorrente.getMonth() == 0) {
//         meseCorrente = mesi[0];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 1) {
//         meseCorrente = mesi[1];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 2) {
//         meseCorrente = mesi[2];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 3) {
//         meseCorrente = mesi[3];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 4) {
//         meseCorrente = mesi[4];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 5) {
//         meseCorrente = mesi[5];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 6) {
//         meseCorrente = mesi[6];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 7) {
//         meseCorrente = mesi[7];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 8) {
//         meseCorrente = mesi[1];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 9) {
//         meseCorrente = mesi[9];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 10) {
//         meseCorrente = mesi[10];
//         return meseCorrente;
//     } else if (dataCorrente.getMonth() == 11) {
//         meseCorrente = mesi[11];
//         return meseCorrente;
//     }
// }