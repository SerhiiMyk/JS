// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let content = document.getElementById('main_header');
content.style.color = 'tomato';
content.innerText = "june-2021"

// b) робить шириниу елементу ul 400px

let ulWidth = document.getElementsByTagName('ul');
for (const ulWidthElement of ulWidth) {
    ulWidthElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let contentClass = document.getElementsByClassName('linkList');
for (const contentClassElement of contentClass) {
    contentClassElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.querySelector('.listElement2 a');
let text = listElement2.innerText;
console.log(text);


// e) отримує всі елементи li та змінює ім колір фону на сірий

let getLi = document.getElementsByTagName('li');
for (const liElement of getLi) {
    liElement.style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let getA = document.getElementsByTagName('a');
for (const aElement of getA) {
    aElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aLink3 = document.getElementsByTagName('a');
for (const aLink3Element of aLink3) {
    if (aLink3Element.innerText === 'link3') {
        aLink3Element.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let getAX = document.getElementsByTagName('a');
for (const aXElement of getAX) {
    aXElement.classList.add(`element_${aXElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeaderBackColor = document.getElementsByClassName('sub-header');
// backColor = prompt();
// for (const subHeaderBackColorElement of subHeaderBackColor) {
//     subHeaderBackColorElement.style.backgroundColor = backColor;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaderBackColorIfText = document.getElementsByClassName('sub-header');
// backColor = prompt();
// for (const subHeaderBackColorIfTextElement of subHeaderBackColorIfText) {
//     if (subHeaderBackColorIfTextElement.innerText === 'content 2 segment') {
//         subHeaderBackColorIfTextElement.style.backgroundColor = backColor
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let changeTextCont1 = document.getElementsByClassName('content_1');
// let userText = prompt();
// for (const changeTextCont1Element of changeTextCont1) {
//     changeTextCont1Element.innerHTML = userText;
// }

// l) отримати елементи p та змінити їм padding на 20px

let getP = document.getElementsByTagName('p');
for (const pElement of getP) {
    pElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let getText2 = document.getElementsByClassName('text2');
for (const text2Element of getText2) {
    text2Element.innerHTML = 'june-2021'
}