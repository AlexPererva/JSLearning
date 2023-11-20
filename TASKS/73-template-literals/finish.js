/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
]

function carInfo(car){
  return `Price of car ${car.brand} - ${car.price} and this is ${car.price > 20000 ? 'expensive': 'cheap'} car` 
}

cars.forEach((car) => console.log(carInfo(car)))
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
