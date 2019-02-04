// создать функцию которая вернет объект,
// содержащий методы реализующие основные арифметические операции (+ - * /)
// добавить метод clear
// добавить метод showResult (=)

function createCalc() {
	let result = 0;
	return {
		plus: function (num) {
			result +=num;
		},
		minus: function (num) {
			result -= num;
		},
		multiply: function (num) {
			result *= num;
		},
		divide: function (num) {
			result /= num;
		},
		showResult: function () {
			console.log(result);
		},
		clear: function () {
			result = 0;
		}
	}
}

const calculate = createCalc();
calculate.plus(2);
calculate.plus(2);
calculate.minus(2);
calculate.multiply(2);
calculate.divide(2);
calculate.clear();
calculate.plus(40);
calculate.showResult();