/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

setTimeout(() => console.log('Hello World'),5000)


/**
 * Additional task:
 * 
 * 1. Create function for sum of two numbers and returning the result into console
 * 2. Should be inmplemented via callback function
 * 
 * 
 */

function sumTwoNumbers(a,b){
    return a + b
}

function printResult(sumTwoNumbers) {
    console.log(sumTwoNumbers(1,3))
}

printResult(sumTwoNumbers)