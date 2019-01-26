const utils = (function () {
	function filterNegative (arr) {
			return arr.filter(function (item) {
					return item >= 0
			});
	}

	function copyArr(arr) {
		let result = [];

		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] === Array.isArray(arr[i])) {
				result[i] = copyArr(arr[i]);
			} else if (arr[i] === Object) {
				result[i] = copyArr(arr[i]);
			} else {
				result[i] = arr[i];
			}
		}

		return result;
	}

	function findLengthString(arr, strlength) {
		let result = arr.filter(function(str) {
			return str.length > strlength;
		});

		return result;
	}

	return {
			filterNegative: filterNegative,
			deepCopy: copyArr,
			filterString: findLengthString
	}
})()


//1. сделать глубокую копию массива, с учетом того, что там могут быть объекты
let arr1 = [2, 4, [0, 2, 3], {name: 'Name', arr: [1,2]}, {price: 1}];
let newArr = utils.deepCopy(arr1);
console.log(newArr)
arr1[2][0] = 999
console.log(arr1)
newArr[3] = {name: 'MyName'}
newArr[3] = {arr: [777]}
console.log(newArr)
console.log(arr1)


//2. Написать функцию, которая возвращает массив строк длинна которых больше N. Функция принимает массив и минимальную длинну строки
let populArtists = ['Taylor Swift', 'Eminem', 'The Weeknd', 'Kendrick Lamar', 'Ed Sheeran', 'XXXTentacion', 'Drake', 'Post Malone'];
let arrayOfFoundStrings = utils.filterString(populArtists, 11);
console.log(arrayOfFoundStrings)
let populArtists1 = ['world', 'hello'];



// 3. Написать функцию, которая сортирует массив строк по количиству буквы (X)  в слове
//    пример ['world', 'hello']   sortMe(['world', 'hello'], 'l') ---> ['hello', 'world']

// function sortString(arr, letter) {
// 	let newArr = arr.map(function(item, index, arr){
// 		return item.split('');
// 	});


// 	newArr.sort(function (a, b) {
// 		if (a > b) {
// 			return 1;
// 		} else if (a < b) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	});

// 	return newArr;
// }

// let sortResult = sortString(populArtists1, 'l');
// console.log(sortResult)