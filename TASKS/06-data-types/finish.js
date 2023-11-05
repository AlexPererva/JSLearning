/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const string = 'thisIsString'
const number = 300303
const logical = true
const thisIsNull = null
const thisIsUndefined = undefined
const myObject = {
    myName: 'Oleksandr',
    myAge: 26
}
const myArray = [0,1,2,3,4,5]


console.log(typeof(string))
console.log(typeof(number))
console.log(typeof(logical))
console.log(typeof(thisIsNull))
console.log(typeof(thisIsUndefined))
console.log(typeof(myObject))
console.log(typeof(myArray))
