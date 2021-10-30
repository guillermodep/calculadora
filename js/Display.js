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

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorAnterior = '';
        this.valorActual = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;

        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

    computar(tipo) {
        if(this.tipoOperacion !== 'igual'){
            this.calcular();
        }
        this.tipoOperacion = tipo;

        if(this.valorActual !== '') {
            this.valorAnterior = this.valorActual;
            this.valorActual = '';
        }

        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
}