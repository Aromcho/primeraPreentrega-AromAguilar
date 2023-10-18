
function hora() {
    let hora = prompt("ingrese la hora")
    
    if (hora >= 6 && hora < 12) {
        document.getElementById('bienvenida').innerHTML = 'Buen dia ' + nombre;
    } else if (hora >= 12 && hora < 20) {
        document.getElementById('bienvenida').innerHTML = 'Buenas tardes ' + nombre;
    } else {
        document.getElementById('bienvenida').innerHTML = 'Buenas noches ' + nombre;
}
}
let nombre = prompt('decime tu nombre');
hora();




