'use strict'

// Condicional IF
// Si A es (igual, mayor que, menor) que a B entonces algo

/*
var edad1 = 10
var edad2 = 12

// Si pasa esto
if (edad1 > edad2) {
	// Ejecuta esto
	console.log('Edad uno es mayor que edad2')
} else {
	console.log('La edad uno es inferior')
}
*/

/*
// Operadores relacionales
Mayor: >
Menor:: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

var edad = 12
var nombre = 'David Suarez'

if (edad >= 18) {
	// Es mayor de edad
	console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad')

	if (edad <= 33) {
		console.log('Todavía eres millenial')
	} else if (edad >= 70) {
		console.log('Eres anciano')
	} else {
		console.log('Ya no eres millenial')
	}
} else {
	// Es menor de edad
	console.log(nombre + ' tiene ' + edad + ' años, es MENOR de edad')
}

/*
// Operadores lógico
AND(Y): &&
OR(O): ||
Negación: !
*/

// var year = 2018

// Negación
if (year != 2016) {
	console.log('El año no es 2016, realmente es: ' + year)
}

/*
// AND
if (year >= 2000 && year <= 2020 && year != 2018) {
	console.log('Estamos en la era actual')
} else {
	console.log('Estamos en la era postmoderna')
}
*/

var year = 2022

// AND
if (year >= 2000 && year <= 2020) {
	console.log('Estamos en la era actual')
} else {
	console.log('Estamos en la era post moderna')
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
	console.log('el año acaba en 8')
} else {
	console.log('Año no registrado')
}
