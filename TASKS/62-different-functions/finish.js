/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

//console.log(firstFunction(2,3)) // function can be called before declaration of function

function firstFunction(a, b) {
  return a + b
}

//firstFunction = 'another value can be assigend to function variable'

//secondFunction(2,2) //cannot be called before declaration of function

const secondFunction = function (a, b) {
  return a + b
}

//secondFunction = 'anorther value can not be assigend'


console.log(firstFunction(1,2))
console.log(secondFunction(1,2))