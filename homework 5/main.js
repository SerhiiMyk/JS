// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content);

// -- отримує текст з блоку з id "rules"

let rulse = document.getElementById('rules');


// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'some text1';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rulse.innerText = 'some tex t2';

// -- змініть кожному елементу колір фону на червоний

content.style.backgroundColor = 'red';
rulse.style.backgroundColor = 'red';

// -- змініть кожному елементу колір тексту на синій

content.style.backgroundColor = 'blue';
rulse.style.backgroundColor = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rulse.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

let elements = document.getElementsByClassName('fc_rules');
console.log(elements);

for (const element of elements) {
    element.onclick = function () {
        console.log(element);
        element.style.backgroundColor = 'purple';
    }
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const element of elements) {
    element.style.backgroundColor = 'red'
}
