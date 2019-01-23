// Написать функцию которая возвращает глубокую копию массива.(или хотябы на 1 уровень глубже чем slice)
function copy(arr) {
	let result = [];

	for (let item = 0; item < arr.length; item++) {
		console.log(arr[item])
		if (typeof arr[item] === 'object') {
			result[item] = copy(arr[item]);
		} else {
			result[item] = arr[item];
		}
	}

	return result;
}

// Написать функцию которая удаляет самый минимальный элемент массива из него (все элементы числа)
function removeSmallest(arr) {
	let min = Math.min.apply(null, arr);
	console.log(min)

	let minIndex = arr.indexOf(min);
	console.log(minIndex)

	arr.splice(minIndex, 1);
	return arr;
}

// Написать функцию которая сортирует массив строк по длине, по возрастанию и по убыванию
function sortArrIncreace(arr) {
	return arr.sort(function(a,b) {
		if (a < b) {
			return -1;
		} else {
			return 1;
		}
	});
}

function sortArrReduction(arr) {
	return arr.sort(function (a, b) {
		if (a > b) {
			return -1;
		} else {
			return 1;
		}
	});
}

const arrayUtilities = {
	copyArr: copy,
	removeSmallestEl: removeSmallest,
	sortArrIncreaceEl: sortArrIncreace,
	sortArrReductionEl: sortArrReduction
}


// new array
let array1 = [0, '0', 'text', ['inside arr', [555, 0, 1, '2'] ] ];
let newArray1 = arrayUtilities.copyArr(array1);
console.log(newArray1)
newArray1[0] = 1;
console.log(newArray1)

// remove min element form array

let array2 = [6,5,1,55];
let newArray2 = arrayUtilities.removeSmallestEl(array2);
console.log(newArray2)


let arr3 = ['kos', 'kostyap', 'kostya'];
let newArray3 = arrayUtilities.sortArrIncreaceEl(arr3);

console.log(arr3)

let arr4 = ['kos', 'kostyap', 'kostya'];
let newArray4 = arrayUtilities.sortArrReductionEl(arr4);

console.log(arr4)