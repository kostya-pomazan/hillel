 function replaceString(oldS, newS, fullS) {
     for (var i = 0; i < fullS.length; ++i) {
         if (fullS.substring(i, i + oldS.length) == oldS) {
             fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
         }
     }
     return fullS;
 }

//  replaceString('мир', 'веб', 'Дивный новый мир');

// Отобразит 'zilla' - последние 5 символов
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
// console.log(anyString5);

/* Задача 1
 * Дано строка произвольной длины.Необходимо вывести в консоль перевернутую строку.Пример - “bar”“ rab”
 */

 function stringReverse(str) {
    var reverse = '';
    for (var i = str.length; i >= 0; --i) {
        reverse += str.charAt(i);
    }
    return reverse;
}

console.log(stringReverse('Kostya'));

/* Задача 2
 * Дано - есть тестовая строка - “this is my test string”.Вывести в консоль следующие строки используя операции над данной строкой:
 * “string”, “this”, “this is”, “ in ”
 */

// function replaceString(oldS, newS, fullS) {
//     for (var i = 0; i < fullS.length; ++i) {
//         if (fullS.substring(i, i + oldS.length) == oldS) {
//             fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
//         }
//     }
//     return fullS;
// }

function stringSearch(fullStr, searchStr) {
    var result = '';

    //  var pos = str.indexOf('в');
    //  while (pos !== -1) {
    //      count++;
    //      pos = str.indexOf('в', pos + 1);
    //  }

    for (var i = 0; i <= fullStr.length; ++i) {
        // console.log(fullStr.substring(i, i + searchStr.length));
        if (fullStr.substring(i, i + searchStr.length) == searchStr) {
            result = fullStr.substring(i, i + searchStr.length);
            break;
        }
    }

    if (result == '') {
        console.log('No matches');
    }

    return result;
}

// console.log(stringSearch('this is my test string', 'string'));
// console.log(stringSearch('this is my test string', 'this'));
// console.log(stringSearch('this is my test string', 'this is'));
// console.log(stringSearch('this is my test string', ' in '));

/* Задача 3
 * Дано - есть произвольная строка. Вывести на экран слово имеющее максимальную длину.
 * Если таких слов несколько вывести то, которое встречается раньше.
 */

function findLargestWord(str) {
    var arr = str.split('');
    var resultWord = 0;
    // console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var index = arr[i];
        // console.log(index);
        var lergestWordLength = index.length;
        // console.log(lergestWord);
        if (resultWord < lergestWordLength) {
            resultWord = lergestWordLength;
            var longest = index;
            // console.log(resultWord + ' ' + longest + ' lergestWord');
        }
    }
    // console.log("Word '" + longest + "' the first the longest word that has " + resultWord + " symbols");
    alert("Word '" + longest + "' the first the longest word that has " + resultWord + " symbols");
}

// findLargestWord('user user user1 user01 user02 user03');


/* Задача 1
 * Дано произвольное число - вывести в консоль данное число и строку “положительное” или “отрицательное”
 */

function hasNum(n) {
    var result = n > 0 ? ' положительное' : ' отрицательное';
    return console.log(n + result);
}
// hasNum(10);

/* Задача 2
 * Дано произвольное число - вывести в консоль данное число и строку“ четное” или“ нечетное”
 */

 function isEven(n) {
     var result = (n % 2 == 0) ? ' четное' : ' нечетное';
     return console.log(n + result);
 }

//  isEven(4);

/* Задача 3
 * Дано произвольное число - цена(5.99 или 2.55)
 * Если данное число меньше определенной константы например 4 - применить к данной цене скидку равную 25 % и вывести на экран.
 * Если цена больше или равна определенной константе(4) применить скидку 10 % и вывести полученную цену на экран
 */

function price(n) {
    console.log(n);
    const fixedPrice = 4;
    var discount1 = 25;
    var discount2 = 10;
    var num = Math.round(n * 1) / 1;
    console.log(num);

    if (num < fixedPrice) {
        let result = num * discount1 / 100;
        alert(result);
    } else {
        let result = num * discount2 / 100;
        alert(result);
    }
}

// price(5.99);
// price(2.55);

