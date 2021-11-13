class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        this.resultado = a + b;
        return this.resultado.toFixed(2);
    }

    restar(a, b) {
        this.resultado = a - b;
        return this.resultado.toFixed(2);
    }

    multiplicar(a, b) {
        this.resultado = a * b;
        return this.resultado.toFixed(2);
    }

    dividir(a, b) {
        this.resultado = a / b;
        return this.resultado.toFixed(2);
    }
}