const displayValorAnterior = document.querySelector('#valor-anterior');
const displayValorActual = document.querySelector('#valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.textContent);
        });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarOperador(boton.value);
    });
});
