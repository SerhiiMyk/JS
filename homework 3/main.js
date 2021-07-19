//
//
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let recArea=function (a,b){
//     recArea=a*b;
// };
// recArea(5,6);
// console.log(`area of rectangle - ${recArea} cm`)

// - створити функцію яка обчислює та повертає площу кола


// let circArea=function (r) {
//     circArea = 3.14 * r ** 2;
//     return circArea;
// };
// circArea(5);
// console.log(`area of circle - ${circArea} cm`);

// - створити функцію яка обчислює та повертає площу циліндру

// let cylArea=function (r,h) {
//     cylArea = 3.14 * r ** 2*h;
//     return cylArea;
// };
// cylArea(4,8);
// console.log(`area of circle - ${cylArea} cm`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function maxMin() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments [i] < min) {
//             min = arguments[i];
//         }
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// let min = maxMin(1, 3, 6, 2, 10, 5);
// console.log(min)


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function createText(text){`
//    <div>
//       ${text}
//    </div>`
//    console.log(text);
// }
// createText('hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function funcUl(li) {
// document.write(`
//     <ul>
//         <li>${li}</li>
//         <li>${li}</li>
//         <li>${li}</li>
//     </ul>`)
// }
//
// funcUl('print');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)

// function funcUl(text, numb) {
//     document.write(`<ul>`);
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// funcUl('print', 4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function elArray(){
    document.write(`<ul>`);
    for (let i =0; i<arguments.length; i++){
         let array = arguments[i];
        document.write(`<li>${array}</li>`);
    }
    document.write(`<ul>`);
}
elArray(11,'text',false);



