// Matriz vacia para ubicar el tablero
let matrizTablero = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

class Flota {
    constructor(nombreBarco, tamanhoBarco, golpesBarco) {
        this.nombre = nombreBarco;
        this.tamanho = tamanhoBarco;
        this.golpes = golpesBarco;
    }

}

class Juego {

    iniciarPartida(){ // Inicio del bucle jugable
    }

    posicionarBarcos(jugador){ // Posicionamiento de los barcos (Recibe jugador)
    }

    alternarTurno(jugador){ // Alternancia de turnos (Recibe jugador)
    }

    interaccionTurnos(jugadorAtacante, jugadorDefensor){ // Atacar y recibir ataque (Recibe jugador)
    }

    detectarGanador(){ // Detectar ganador (Cada ronda)
    }

    mostrarTablero(jugador){ // Mostrar tablero (Recibe jugador)
    }

}