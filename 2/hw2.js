/* Задача 1
Дано целое число N (> 1).
Если оно является простым, то есть не имеет положительных делителей,
кроме 1 и самого себя, то вывести True, иначе вывести False.
*/

function primeNum(n) {
    let result = '';
    if (n > 1) {

        if (n === 2 || n === 3) {
            // простое число
            result = 'true';
        }

        for (let i = 2; i < n - 1; i++) {
            if (n % i === 0) {
                // составное число
                result = 'false';
                break;
            } else {
                // простое число
                result = 'true';
            }
        }
    }
    return result;
}

console.log(primeNum(9));


/*Задача 2
Дано целое число N( > 0).Найти количество и сумму его цифр.
*/

function getSum(num) {
    if (num > 0) {
        let numNew = num.toString();
        let sum = 0;
        let arr = numNew.split('');

        for (let i = 0; i < arr.length; i++) {
            let index = arr[i];
            sum += Number(index);
        }

        return sum;
    }
}

console.log(getSum(8789768565677));

/*
Задача 3
Дано 2 массива одинаковой длины(длина четная).Элементами массива являются исключительно числа.
Необходимо сравнить массивы по индексно.Результатом сравнения вывести счет между массивами
(если число у одного из массивов больше то добавляем к счету 1, если числа равны - ничего не меняем).
Например:
array1 = [1, 3, 4, 9], array2 = [2, 3, 6, 0]
сравниваем 1 и 2, 3 и 3, 4 и 6, 9 и 0
результат - 1: 2
*/

var array1 = [1, 3, 4, 9];
var array2 = [2, 3, 6, 0];

function compareArr(arr1, arr2) {
    let result = null;
    let count1 = 0;
    let count2 = 0;
    let j = 0;

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {

        while (j <= arr2.length) {

            let indexArr1 = arr1[i];
            let indexArr2 = arr2[j];

            if (indexArr1 > indexArr2) {
                result = ++count1 + ': ' + count2;
            } else if (indexArr1 < indexArr2) {
                result = count1 + ': ' + ++count2;
            }

            j++;
            break;
        }

    }

    return result;
}

console.log(compareArr(array1, array2));

/*Задача 3а (в обратном порядке)
array1 = [1, 3, 4, 9], array2 = [2, 3, 6, 0]
сравниваем 1 и 0, 3 и 6, 4 и 3, 9 и 2
результат - 3: 1
*/

var array1 = [1, 3, 4, 9];
var array2 = [2, 3, 6, 0];

function compareReverseArr(arr1, arr2) {
    let result = null;
    let count1 = 0;
    let count2 = 0;
    let j = arr2.length - 1;

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {

        while (j >= 0) {

            let indexArr1 = arr1[i];
            let indexArr2 = arr2[j];

            if (indexArr1 > indexArr2) {
                result = ++count1 + ': ' + count2;
            } else if (indexArr1 < indexArr2) {
                result = count1 + ': ' + ++count2;
            }

            --j;
            break;
        }

    }

    return result;
}

// console.log(compareReverseArr(array1, array2));

/*Задача 4
Дано массив строк.Необходимо обернуть каждую строку в тег span“ str” - > “ < span > str < /span>”
и вывести получившуюся строку.
*/

var testArr = ["Lorem Ipsum", "is simply dummy", "text"];

function wrapString(arr) {
    let wrapped = '';

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        wrapped += '<span>' + str + '</span>';
    }

    return wrapped;
}

console.log(wrapString(testArr));