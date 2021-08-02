
    // Зробити свій розпорядок дня.
    //
    // У вас має бути більше 10 асинхронних дій з рандомними затримками.
    // Вам необхідно синхронізувати всі свої дії за допомогою callback
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



    function callbackHell(){
        setTimeout(() => {
            console.log(wakeUP);
            setTimeout(() => {
                console.log(brashTeeth);
                setTimeout(() => {
                    console.log(exercise);
                    setTimeout(() => {
                        console.log(ran);
                        setTimeout(() => {
                            console.log(meditation);
                            setTimeout(() => {
                                console.log(reading);
                                setTimeout(() => {
                                    console.log(breakfast);
                                    setTimeout(() => {
                                        console.log(walking);
                                        setTimeout(() => {
                                            console.log(working);
                                            setTimeout(() => {
                                                console.log(dinner);
                                                setTimeout(() => {
                                                    console.log(studding);
                                                    setTimeout(() => {
                                                        console.log(goBad);
                                                    }, 100)
                                                }, 1000)
                                            }, 500)
                                        }, 2000)
                                    }, 100)
                                }, 500)
                            }, 500)
                        }, 300)
                    }, 200)
                }, 400)
            }, 100)
        }, 200)
    }

    callbackHell()
