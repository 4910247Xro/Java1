let valueByHour= 2000
let quantityOfHour= prompt("ingrese la cantidad de horas")
let quantityOfMinutes= prompt("ingrese la cantidad de minutos")

let totalprince =0

if (quantityOfMinutes > 0) {
    quantityOfHour = parseInt (quantityOfHour) + 1
}

totalprince= quantityOfHour * valueByHour 

alert("el precio que debe de pagar es: " + totalprince)