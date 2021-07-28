
    // --створити масив з:
    // - з 5 числових значень
    // - з 5 стічкових значень
    // - з 5 значень стрічкового, числового та булевого типу
    // - та вивести його в консоль

    // let numbArr = [2,6,7,3,4];
    // let strArr = ['a','b','c','d','e'];
    // let allArr = [1,'b',true,'d',false];
    //
    // console.log(numbArr);
    // console.log(strArr);
    // console.log(allArr);

    // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    // let newArr=[];
    // newArr[0]='a';
    // newArr[1]=1;
    // newArr[2]=true;
    // console.log(newArr);

    // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    // let textForDiv= ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10"]
    //
    // document.write(`<div>`)
    // for (const textElement of textForDiv) {
//     document.write(`
//         <div>
//             <p>${textElement}</p>
//         </div>
//     `)
// }
// document.write(`</div>`)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let textForDiv= ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10"]
//
// document.write(`<div>`)
// for (let i = 0; i < textForDiv.length; i++) {
//     const textForDivElement = textForDiv[i];
//     document.write(`
//         <div>
//             <p>i =${[i]} ${textForDivElement}</p>
//         </div>
//     `)
// }
// document.write(`</div>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let textForDiv20 = ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text11", "text12", "text13", "text14", "text15", "text16", "text17", "text18", "text19", "text20"]
//
// document.write(`<div>`)
// let i = 0;
// while (i < textForDiv20.length) {
//     const textForDivElement = textForDiv20[i];
//     document.write(`
//         <div>
//             <h1>${textForDivElement}</h1>
//         </div>
//     `)
//     i++
// }
// document.write(`</div>`)


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let textForDiv20 = ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text11", "text12", "text13", "text14", "text15", "text16", "text17", "text18", "text19", "text20"]
//
// document.write(`<div>`)
// let i = 0;
// while (i < textForDiv20.length) {
//     const textForDivElement = textForDiv20[i];
//     document.write(`
//         <div>
//             <h1>i =${[i]} ${textForDivElement}</h1>
//         </div>
//     `)
//     i++
// }
// document.write(`</div>`)


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbArr10= [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < numbArr10.length; i++) {
//     console.log(numbArr10[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let textArr10= ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10"]
// for (let i = 0; i < textArr10.length; i++) {
//     console.log(textArr10[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let allArr10= ["text1",1,false,"text4",5,"text6",7,"text8",true,"text10"]
// for (let i = 0; i < allArr10.length; i++) {
//     console.log(allArr10[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let allArr10 = ["text1", 1, false, "text4", 5, "text6", 7, "text8", true, "text10"]
// for (let i = 0; i < allArr10.length; i++) {
//     if (typeof (allArr10[i]) == "boolean")
//         console.log(allArr10[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let allArr10 = ["text1", 1, false, "text4", 5, "text6", 7, "text8", true, "text10"]
// for (let i = 0; i < allArr10.length; i++) {
//     if (typeof (allArr10[i]) == "number")
//         console.log(allArr10[i]);
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let allArr10 = ["text1", 1, false, "text4", 5, "text6", 7, "text8", true, "text10"]
// for (let i = 0; i < allArr10.length; i++) {
//     if (typeof (allArr10[i]) == "string")
//         console.log(allArr10[i]);
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let Arr10 = [];
//
// Arr10[1] = "text1";
// Arr10[2] = 1;
// Arr10[3] = false;
// Arr10[4] = "text4";
// Arr10[5] = 5;
// Arr10[6] = "text6";
// Arr10[7] = 7;
// Arr10[8] = true;
// Arr10[9] = "text9";
// Arr10[10] = "text10";
// for (let i = 0; i < Arr10.length; i++) {
//     console.log(Arr10[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i}</br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i}</br>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`${i}</br>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`${i}</br>`)
//     }
// }
