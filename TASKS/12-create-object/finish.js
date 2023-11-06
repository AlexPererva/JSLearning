/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
    name: 'Alex',
    surname: 'Pererva',
    favoriteNumber: 11
}
const message = 'My name is ' + myObject.name + ' ' + myObject.surname + ' and my favorite number is ' + myObject.favoriteNumber
const messageV2 = `My name is ${myObject.name} ${myObject.surname} and my favorite number is ${myObject.favoriteNumber}`

console.log(message)
console.log(messageV2)