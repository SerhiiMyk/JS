// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.


let wakeUP = '1.wake up';               //200
let brashTeeth = '2.brash teeth';       //100
let exercise = '3.exercise';            //400
let ran = '4.ran';                      //200
let meditation = '5.meditation';        //300
let reading = '6.reading';              //500
let breakfast = '7.breakfast';          //500
let walking = '8.walking to the gob';    //100
let working = '9.working';               //2000
let dinner = '10.dinner';               //500
let studding = '11.studding';           //1000
let goBad = '12.go to the bad';         //100

//promise

// let promiseSynch = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(wakeUP)
//     }, 200)
//     setTimeout(() => {
//         resolve(brashTeeth)
//     }, 100)
//     setTimeout(() => {
//         resolve(exercise)
//     }, 400)
//     setTimeout(() => {
//         resolve(ran)
//     }, 200)
//     setTimeout(() => {
//         resolve(meditation)
//     }, 300)
//     setTimeout(() => {
//         resolve(reading)
//     }, 500)
//     setTimeout(() => {
//         resolve(breakfast)
//     }, 500)
//     setTimeout(() => {
//         resolve(walking)
//     }, 100)
//     setTimeout(() => {
//         resolve(working)
//     }, 2000)
//     setTimeout(() => {
//         resolve(dinner)
//     }, 500)
//     setTimeout(() => {
//         resolve(studding)
//     }, 1000)
//     setTimeout(() => {
//         resolve(goBad)
//     }, 100)
//
// })
//
//
// promiseSynch
//     .then(() => {
//         console.log(wakeUP);
//     })
//     .then(() => {
//         console.log(brashTeeth);
//     })
//     .then(() => {
//         console.log(exercise);
//     })
//     .then(() => {
//         console.log(ran);
//     })
//     .then(() => {
//         console.log(meditation);
//     })
//     .then(() => {
//         console.log(reading);
//     })
//     .then(() => {
//         console.log(breakfast);
//     })
//     .then(() => {
//         console.log(walking);
//     })
//     .then(() => {
//         console.log(working);
//     })
//     .then(() => {
//         console.log(dinner);
//     })
//     .then(() => {
//         console.log(studding);
//     })
//     .then(() => {
//         console.log(goBad);
//     })

//async/await

// function returnTimeOutPromise(value, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     });
// }
//
// async function asyncAwait() {
//     let action1 = await returnTimeOutPromise(wakeUP, 200)
//     console.log(action1)
//     let action2 = await returnTimeOutPromise(brashTeeth, 100)
//     console.log(action2)
//     let action3 = await returnTimeOutPromise(exercise, 400)
//     console.log(action3)
//     let action4 = await returnTimeOutPromise(ran, 200)
//     console.log(action4)
//     let action5 = await returnTimeOutPromise(meditation, 300)
//     console.log(action5)
//     let action6 = await returnTimeOutPromise(reading, 500)
//     console.log(action6)
//     let action7 = await returnTimeOutPromise(breakfast, 500)
//     console.log(action7)
//     let action8 = await returnTimeOutPromise(walking, 100)
//     console.log(action8)
//     let action9 = await returnTimeOutPromise(working, 2000)
//     console.log(action9)
//     let action10 = await returnTimeOutPromise(dinner, 100)
//     console.log(action10)
//     let action11 = await returnTimeOutPromise(studding, 1000)
//     console.log(action11)
//     let action12 = await returnTimeOutPromise(goBad, 100)
//     console.log(action12)
// }
//
// asyncAwait()