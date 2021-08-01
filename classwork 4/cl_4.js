//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const serhii = new Client('1', 'Serhii', 'Bozhuk', 'Serhii.Bozhuk@gmail.com', '0988572985', ['apple', 'eggs']);
// const alina = new Client('2', 'Alina', 'Zoiko', 'Alina.Zoiko@gmail@gmail.com', '0987582904', ['apple']);
// const mihailo = new Client('3', 'Mykhailo', 'Osibchuk', 'Mykhailo.Osibchuk@gmail.com', '0987589405', ['apple', 'eggs', 'bread', 'tomatoes', 'potato', 'cucumbers', 'nuts', 'milk', 'cheese']);
// const oleg = new Client('4', 'Oleg', 'Marynovsky', 'Oleg.Marynovsky@gmail.com', '0987689304', ['apple', 'eggs', 'bread', 'tomatoes']);
// const daria = new Client('5', 'Daria', 'Mykhailyuk', 'Daria.Mykhailyuk@gmail.com', '0987589300', ['apple', 'eggs', 'bread', 'tomatoes', 'potato']);
// const konstantin = new Client('6', 'Konstantin', 'Pavlovsky', 'Konstantin@gmail.Pavlovsky.com', '0987589036', ['apple', 'eggs', 'bread', 'tomatoes', 'potato', 'cucumbers', 'nuts', 'milk']);
// const taras = new Client('7', 'Taras', 'Rudy', 'Taras.Rudy@gmail.com', '0987850348', ['apple', 'eggs', 'bread', 'tomatoes', 'potato', 'cucumbers']);
// const iryna = new Client('8', 'Iryna', 'Zalizny', 'Iryna.Zalizny@gmail.com', '0985674839', ['apple', 'eggs', 'bread', 'tomatoes', 'potato', 'cucumbers', 'nuts']);
// const maxim = new Client('9', 'Maxim', 'Stepaniuk', 'Maxim.Stepaniuk@gmail.com', '0988547689', ['apple', 'eggs', 'bread', 'tomatoes', 'potato', 'cucumbers', 'nuts', 'milk', 'cheese', 'sprite']);
// const bogdan = new Client('10', 'Bogdan', 'Loiko', 'Bogdan.Loiko@gmail.com', '0988522344', ['apple', 'eggs', 'bread']);
// console.log(serhii)
//
// let buyerArr = [serhii, alina, mihailo, oleg, daria, konstantin, taras, maxim, iryna, bogdan];
// console.log(buyerArr);
//
// function shoppingSort(arr) {
//     let orderSort = arr.sort(function (a, b) {
//         return a.order.length - b.order.length
//     })
//     console.log(orderSort);
// }
//
// shoppingSort(buyerArr);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, power) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.power = power;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info() {
//         console.log(this)
//     }
//
//     increaseMaSpeed(newMaxSpeed) {
//         this.maxSpeed += newMaxSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// const AudiA7 = new Car('A7', 'audi', '2017', 320, 3)
// AudiA7.info();
//
// AudiA7.drive(20);
// AudiA7.increaseMaSpeed(20);
// AudiA7.changeYear(2021);
// AudiA7.addDriver({name: 'Serhii'});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, producer, year, maxSpeed, power) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.power = power;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log(this)
//     }
//
//     this.increaseMaSpeed = function (newMaxSpeed) {
//         this.maxSpeed += newMaxSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// const AudiA7 = new Car('A7', 'audi', '2017', 320, 3)
// AudiA7.info();
//
// AudiA7.drive(20);
// AudiA7.increaseMaSpeed(20);
// AudiA7.changeYear(2021);
// AudiA7.addDriver({name: 'Serhii'});
// AudiA7.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, ege, footSize) {
//         this.name = name;
//         this.ege = ege;
//         this.footSize = footSize;
//     }
// }
//
// const Anna = new Cinderella('Anna', 19, 36);
// const Viktoria = new Cinderella('Viktoria', 20, 37);
// const Sasha = new Cinderella('Sasha', 21, 35);
// const Nastia = new Cinderella('Nastia', 18, 38);
// const Marina = new Cinderella('Marina', 22, 34);
// const Natasha = new Cinderella('Natasha', 23, 36);
// const Olena = new Cinderella('Olena', 20, 39);
// const Marta = new Cinderella('Marta', 24, 37);
// const Mariya = new Cinderella('Mariya', 19, 36);
//
// let divchata = [Anna, Viktoria, Sasha, Nastia, Marina, Natasha, Olena, Marta, Mariya]
//
// class Prince {
//     constructor(name, ege, shoes) {
//         this.name = name;
//         this.ege = ege;
//         this.shoes = shoes;
//     }
//     choise(){
//         for (const divchuna of divchata) {
//             if (alfred.shoes===divchuna.footSize)
//                 console.log(`my girl ${divchuna.name}`);
//         }
//     }
// }
//
// const alfred = new Prince('Alfred', 25, 35)
// alfred.choise()

// let findCinderella = divchata.find(function (item) {
//     if (alfred.shoes === item.footSize) {
//         console.log(`my girl ${item.name}`)
//         return item;
//     }
// })

