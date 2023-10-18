let mayorDeEdad = prompt('Para entrar a esta app tienes que ser mayor de edad, coloca tu edad aca');
while(mayorDeEdad <= 18) {
    mayorDeEdad = prompt('Para entrar a esta app tienes que ser mayor de edad, coloca tu edad aca');
} alert('eres mayor de edad, entra');

const displayValorAnterior = document.getElementById ('valor-anterior');
const displayValorAactual = document.getElementById ('valor-actual');
const botonesNumero = document.querySelectorAll ('.numero');
const botonesOperadores = document.querySelectorAll ('.operador');

const display = new Display(displayValorAnterior, displayValorAactual)
botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML);

    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton. value))
});