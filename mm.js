var vidaEnemigo = 100;
var danoCritico = 20;
var danoNormal = 10;
var vidaPersonaje = 100;

function verificarFinDelJuego() {
    if (vidaEnemigo <= 0 || vidaPersonaje <= 0) {
        alert("¡Fin del juego! El ganador es " + (vidaEnemigo <= 0 ? "el jugador" : "el enemigo"));
        window.location.href = "index.html"; // Redirigir a la pantalla de inicio
    }
}

setInterval(function () {
    var eVida = document.getElementById("enemigoVida");
    eVida.value = vidaEnemigo;
    verificarFinDelJuego();
}, 1);

setInterval(function () {
    var pVida = document.getElementById("personajeVida");
    pVida.value = vidaPersonaje;
    verificarFinDelJuego();
}, 1);

document.getElementById("dimagenes").style.display = 'none';
document.getElementById("enemigoVida").style.display = 'none';

// Función de atacar al enemigo
function aSeleccion(jugadorAtaques) {
    var dOpciones = ['fuego', 'agua', 'tierra'];
    var dEnemigo = dOpciones[Math.floor(Math.random() * 3)];

    if (
        (jugadorAtaques === 'aFuego' && dEnemigo === 'agua') ||
        (jugadorAtaques === 'aTierra' && dEnemigo === 'fuego') ||
        (jugadorAtaques === 'aAgua' && dEnemigo === 'tierra')
    ) {
        document.getElementById("mensajes").innerHTML = "El jugador ha usado ataque de " + jugadorAtaques.substr(1) +
            " y el enemigo se defiende con escudo de " + dEnemigo + ". No se ha causado daño.";
        document.getElementById("imagenes").style.display = 'none';
        document.getElementById("dimagenes").style.display = 'block';
        document.getElementById("enemigoVida").style.display = 'block';
        document.getElementById("personajeVida").style.display = 'none';
    } else if (
        (jugadorAtaques === 'aFuego' && dEnemigo === 'fuego') ||
        (jugadorAtaques === 'aAgua' && dEnemigo === 'agua') ||
        (jugadorAtaques === 'aTierra' && dEnemigo === 'tierra')
    ) {
        document.getElementById("mensajes").innerHTML = "El jugador ha usado ataque de " + jugadorAtaques.substr(1) +
            " y ha causado 10 de daño al enemigo.";
        vidaEnemigo -= danoNormal;
        document.getElementById("imagenes").style.display = 'none';
        document.getElementById("dimagenes").style.display = 'block';
        document.getElementById("enemigoVida").style.display = 'block';
        document.getElementById("personajeVida").style.display = 'none';
    } else {
        document.getElementById("mensajes").innerHTML = "El jugador ha usado ataque de " + jugadorAtaques.substr(1) +
            " y ha causado 20 de daño al enemigo.";
        vidaEnemigo -= danoCritico;
        document.getElementById("imagenes").style.display = 'none';
        document.getElementById("dimagenes").style.display = 'block';
        document.getElementById("enemigoVida").style.display = 'block';
        document.getElementById("personajeVida").style.display = 'none';
    }
}

// Función de defenderse
function dSeleccion(jugadorDefensas) {
    var aOpciones = ['fuego', 'agua', 'tierra'];
    var aEnemigo = aOpciones[Math.floor(Math.random() * 3)];

    if (
        (jugadorDefensas === 'deFuego' && aEnemigo === 'agua') ||
        (jugadorDefensas === 'deTierra' && aEnemigo === 'fuego') ||
        (jugadorDefensas === 'deAgua' && aEnemigo === 'tierra')
    ) {
        document.getElementById("mensajes").innerHTML = "El enemigo ha usado ataque de " + aEnemigo +
            " y ha causado 20 de daño al jugador.";
        vidaPersonaje -= danoCritico;
        document.getElementById("imagenes").style.display = 'block';
        document.getElementById("dimagenes").style.display = 'none';
        document.getElementById("enemigoVida").style.display = 'none';
        document.getElementById("personajeVida").style.display = 'block';
    } else if (
        (jugadorDefensas === 'deFuego' && aEnemigo === 'fuego') ||
        (jugadorDefensas === 'deAgua' && aEnemigo === 'agua') ||
        (jugadorDefensas === 'deTierra' && aEnemigo === 'tierra')
    ) {
        document.getElementById("mensajes").innerHTML = "El enemigo ha usado ataque de " + aEnemigo +
            " y ha causado 10 de daño al jugador.";
        vidaPersonaje -= danoNormal;
        document.getElementById("imagenes").style.display = 'block';
        document.getElementById("dimagenes").style.display = 'none';
        document.getElementById("enemigoVida").style.display = 'none';
        document.getElementById("personajeVida").style.display = 'block';
    } else {
        document.getElementById("mensajes").innerHTML = "El enemigo ha usado ataque de " + aEnemigo +
            " y no se ha causado daño.";
        document.getElementById("imagenes").style.display = 'block';
        document.getElementById("dimagenes").style.display = 'none';
        document.getElementById("enemigoVida").style.display = 'none';
        document.getElementById("personajeVida").style.display = 'block';
    }
}
