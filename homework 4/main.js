// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

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


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// function randomArray(number,range) {
//     let array = [];
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.round(Math.random() * range);
//     }
//     return array;
// }
//
// random = randomArray(6,200)
//
// console.log(random);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// function randomArray(number,range) {
//     let array = [];
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.round(Math.random() * range);
//     }
//     array.sort(function (a,b){
//         return a-b
//     })
//     return array;
// }
//
// random = randomArray(6,200)
// console.log(random);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

function randomArray(number, range) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push(Math.round(Math.random() * range));
    }
    let result = array.filter(function (item) {
        if (item % 2 === 0) {
            return item
        }
    })
    console.log(result);
    return result;
}

let random = randomArray(6, 200)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let str = random.map(function (value) {
    return String(value);
});
console.log(str);


function randomNumbToStr(whatToDo) {
    whatToDo();
}

randomNumbToStr(function () {
    for (let i = 0; i < random.length; i++) {
        random[i] = String(random[i]);
    }
    console.log(random)
    return random
})


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

const serhii = new User('1', 'Serhii', 'Bozhuk', 'Serhii.Bozhuk@gmail.com', '0988572985');
console.log(serhii);


// створити пустий масив, наповнити його 10 об'єктами new User(....)


const alina = new User('6', 'Alina', 'Zoiko', 'Alina.Zoiko@gmail@gmail.com', '0987582904');
const mihailo = new User('3', 'Mykhailo', 'Osibchuk', 'Mykhailo.Osibchuk@gmail.com', '0987589405');
const oleg = new User('7', 'Oleg', 'Marynovsky', 'Oleg.Marynovsky@gmail.com', '0987689304');
const daria = new User('5', 'Daria', 'Mykhailyuk', 'Daria.Mykhailyuk@gmail.com', '0987589300');
const konstantin = new User('2', 'Konstantin', 'Pavlovsky', 'Konstantin@gmail.Pavlovsky.com', '0987589036');
const taras = new User('4', 'Taras', 'Rudy', 'Taras.Rudy@gmail.com', '0987850348');
const iryna = new User('8', 'Iryna', 'Zalizny', 'Iryna.Zalizny@gmail.com', '0985674839');
const maxim = new User('1', 'Maxim', 'Stepaniuk', 'Maxim.Stepaniuk@gmail.com', '0988547689');
const bogdan = new User('10', 'Bogdan', 'Loiko', 'Bogdan.Loiko@gmail.com', '0988522344');

let newUserArray = [serhii, alina, mihailo, oleg, daria, konstantin, taras, maxim, iryna, bogdan];

console.log(newUserArray);


// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)


let filterSort = function (array) {
    let filter = array.filter(function (item) {
        if (item.id % 2 === 0) {
            return item
        }
    })
    let sort = filter.sort(function (a, b) {
        return a.id - b.id
    })
    console.log(sort);
}

filterSort(newUserArray);



