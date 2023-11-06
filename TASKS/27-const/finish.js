/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr = [1, 2] // <-- Объявление переменной используя const <-- FIX: changed const to let

arr.push(3) // ANSWER -> there is no errors becase you are not changing the link to array, you only changed the array

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4] // ANSWER -> you are creating new array and trying to assigne it to already existing variable created via const, in another words - you are trying to re-wright the const variable
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]
