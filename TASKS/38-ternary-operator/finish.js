/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// without else
function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  // if (inputArray.length === 0) {
  //   return 'Массив пустой'
  // }
  return 'Массив пустой'
}

// // via conditional operator
// function isArrayEmpty(inputArray) {
//   return inputArray.length > 0 ? 'Array is not empty' : 'Array is empty'
// }

// // via arrow function
//const isArrayEmpty = (inputArray) => inputArray.length > 0 ? 'Array is not empty' : 'Array is empty'


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))