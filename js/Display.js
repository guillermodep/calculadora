class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: '×',
            dividir: '÷',
        }
    }

    agregarNumero(numero) { // boton.textContent
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = `${this.valorActual}${numero}`;
        this.imprimirValores();
    }

    agregarOperador(tipoOperador) { //boton.value
        if(this.valorActual.includes('+', this.valorActual.length-1)) return;
        if(this.valorActual.includes('-', this.valorActual.length-1)) return;
        if(this.valorActual.includes('×', this.valorActual.length-1)) return;
        if(this.valorActual.includes('÷', this.valorActual.length-1)) return;
        // Ahora tengo que hacer que cambie el signo, no sólo que no lo escriba...
        
        // if(tipoOperador === 'igual'){

        // }
        this.valorActual = `${this.valorActual}${this.signos[tipoOperador]}`;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }


    calcular() {

    }

}


//     borrar() {
//         this.valorActual = this.valorActual.toString().slice(0,-1);
//         this.imprimirValores();
//     }

//     borrarTodo() {
//         this.valorAnterior = '';
//         this.valorActual = '';
//         this.tipoOperacion = undefined;
//         this.imprimirValores();
//     }



//     computar(tipo) {
//         if(this.tipoOperacion !== 'igual'){
//             this.calcular();
//         }
//         this.tipoOperacion = tipo;

//         if(this.valorActual !== '') {
//             this.valorAnterior = this.valorActual;
//             this.valorActual = '';
//         }

//         this.imprimirValores();
//     }
// }