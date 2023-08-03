let dias = prompt ("ingrese los dias de viaje");
let gasto_hotel = prompt ("ingrese los gastos del hotel por dia");
let gasto_comida = prompt ("ingrese los gasto de comida diario");
let total = (gasto_hotel*dias) + (gasto_comida*dias) + (dias*200);
console.log ("el total de dinero para comida es: $"+ gasto_comida*dias) ;
console.log ("el total de dinero para el hotel es: $"  + gasto_hotel*dias);
console.log ("el total de dinero para otros dias es : $ " + dias*200);
console.log ("el total de dinero para el viajes es: $ " + total) ;