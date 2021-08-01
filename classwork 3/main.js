// - створити функцію яка приймає масив та виводить його

// let elements = [1, 2, 4];
//
// function array(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// array(elements);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(n1,n2,n3){
//     min=arguments[0];
//     for (let i = 0; i < arguments.length; i++){
//         if (arguments[i]< min){
//             min=arguments[i];
//         }
//     }
//     console.log(min);
// }
//     min(-1,4,8);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(n1,n2,n3){
//     max=arguments[0];
//     for (let i = 0; i < arguments.length; i++){
//         if (arguments[i]> max){
//             max=arguments[i];
//         }
//     }
//     console.log(max);
// }
//     max(5,7,-5);

// - створити функцію яка повертає найбільше число з масиву

// array = [1, 5, 8, 10, 3]
//
// function maxArray(array) {
//     max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement
//         }
//     }
//     return max
// }
//
// let maxNumber = maxArray(array);
// console.log(maxNumber);

// - створити функцію яка повертає найменьше число з масиву

// array = [-1, 5, 8, 10, 3]
//
// function minArray(array) {
//     min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//     }
//     return min
// }
//
// let minNumber = minArray(array);
// console.log(minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// array = [4, 1, 8];
//
// function sumArray(array) {
//     sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// sumItem = sumArray(array);
// console.log(sumItem);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// array = [6, 9, 3];
//
// function midArray(array) {
//     mid = 0;
//     for (let i = 0; i < array.length; i++) {
//         mid += array[i];
//     }
//     mid = mid / array.length;
//     return mid;
// }
//
// midItem = midArray(array);
// console.log(midItem);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

// function randomArray(number) {
//     let array = [];
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     return array;
// }
//
// random = randomArray(6)
//
// console.log(random);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'},{city:'Lviv'}]
//
// let userKeys=[]
// function getKeys(){
//     for (const userElement of user) {
//         for(let key in userElement){
//             userKeys.push(key)
//         }
//     }
// }
// getKeys(user);
// console.log(userKeys);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'},{city:'Lviv'}]
//
// let userValue = []
// function getValue(){
//     for (const userElement of user) {
//         for(let key in userElement){
//             userValue.push(userElement[key]);
//         }
//     }
// }
// getValue(user);
// console.log(userValue);
