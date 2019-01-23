// написать ф-цию, которая принимает число и возвращает массив случ.чисел,
// длинна массива равна числу которое мы передали

// Добавить параметр ф-ции который отвечает за макс случ.значение 
// В итоге должно быть 2 параметра
// Первый - длинна массива, второй - макс. случайное значение

// function numRandom(num) {
//     return Math.floor(Math.random() * 10);
// }

function buildNubmer (arrLength, maxNum) {
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * maxNum)+1);
    }

    return arr;
}

// console.log(buildNubmer(3, 100));

/*=================================*/

// написать ф-цию которая принимает массив чисел, проходит по нему, и выводит в консоль
// слово в зависимости от значения
// если число делится на 3 без остатка - выводим "Fizz"
// если число делится на 5 без остатка - выводим "Buzz"
// если делится и на 3 и на 5 - выводим "FizzBuzz"
// если ни одно из этих условий не выполняются то выводим само число



function chekerNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log(arr[i] + " - FizzBuzz");

        } else if (arr[i] % 3 === 0) {
            console.log(arr[i] + " - Fizz");

        } else if (arr[i] % 5 === 0) {
            console.log(arr[i] + " - Buzz");
        } else {
            console.log(arr[i]);
        }
    }
}

chekerNum(['1','2','3','4','5','6','7','8','9','10','60','900', ]);


// with only 'if' and 'continue'
function chekerNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log(arr[i] + " - FizzBuzz");
            continue;
        }
        if (arr[i] % 3 === 0) {
            console.log(arr[i] + " - Fizz");
            continue;
        }
        if (arr[i] % 5 === 0) {
            console.log(arr[i] + " - Buzz");
            continue;
        } 
        console.log(arr[i]);
    }
}

chekerNum(['1','2','3','4','5','6','7','8','9','10','60','900', ]);