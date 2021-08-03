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

function promiseSynch() {
    return new Promise((resolve) => {
        console.log('My routine:');
        resolve()
    });
}

function action1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(wakeUP)
            resolve(wakeUP)
        }, 200)
    });
}

function action2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(brashTeeth)
            resolve(brashTeeth)
        }, 100)
    });
}

function action3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(exercise)
            resolve()
        }, 400)
    });
}

function action4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(ran)
            resolve()
        }, 200)
    });
}

function action5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(meditation)
            resolve()
        }, 300)
    });
}

function action6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(reading)
            resolve()
        }, 500)
    });
}

function action7() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(breakfast)
            resolve()
        }, 500)
    });
}

function action8() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(walking)
            resolve()
        }, 100)
    });
}

function action9() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(working)
            resolve()
        }, 2000)
    });
}

function action10() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(dinner)
            resolve()
        }, 500)
    });
}

function action11() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(studding)
            resolve()
        }, 1000)
    });
}

function action12() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(goBad)
            resolve()
        }, 100)
    });
}

// promiseSynch()
//     .then(()=>{
//         return action1();
//     })
//     .then(()=>{
//         return action3()
//     })
//     .then(()=>{
//         return action4()
//     })
//     .then(()=>{
//         return action5()
//     })
//     .then(()=>{
//         return action6()
//     })
//     .then(()=>{
//         return action7()
//     })
//     .then(()=>{
//         return action8()
//     })
//     .then(()=>{
//         return action9()
//     })
//     .then(()=>{
//         return action10()
//     })
//     .then(()=>{
//         return action11()
//     })
//     .then(()=>{
//         return action12()
//     })
//


//async/await

async function asyncAwait() {
    let ac1 = await action1();
    let ac2 = await action2();
    let ac3 = await action3();
    let ac4 = await action4();
    let ac5 = await action5();
    let ac6 = await action6();
    let ac7 = await action7();
    let ac8 = await action8();
    let ac9 = await action9();
    let ac10 = await action10();
    let ac11 = await action11();
    let ac12 = await action12();
}
asyncAwait();

