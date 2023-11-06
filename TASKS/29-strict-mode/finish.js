/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

//let a  <-- FIX variable can be declarated here as well but not a good solution because functions should not impact global scope be creating/changing some variables

function myFunction() {
  let a //<-- FIX declarated variable in the local scope 
  a = 2
  return a
}

myFunction()

// if 'use strict' will be disabled, interpritator will create variable a automatically in global scope