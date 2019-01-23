// Два типа пицц - из меню
// Пицца наборная - цена которой вычисляется из суммы ингридиентов

// Функция которая создает пиццы по типу create human (название, ингридиенты, цена)
// Функция которая создает пиццы - просто по ингридиентам (ингридиенты)
// Функция Pizza Manager - создает пиццы, на основе массива который передаем

/*   Pizza{
		 name: ''                  // ''
		 ingridients: [ingridient] // [{name: 'cheese', price: 2}, {name: 'tomato', price: 3}]
		 price: number
		 type: custom || menu
		 getPrice:
	 }

	 Ingridient {
		 name: '',
		 price: number
	 }
*/

// createPizza('margarita', 25, [{name: 'cheese', price: 3}, {name: 'basil', price: 4}, {name: 'tomato', price: 4}]);
// createPizza('Pizza order number 25', 20, [{name: 'cheese', price: 3}, {name: 'basil', price: 4}, {name: 'tomato', price: 4}]);

function createPizza(name, price, ingridients) {
	const menu = 'Pizza from menu';
	const custom = 'Custom Pizza';
	const isCustomPizza = 'Pizza order number';
	
	function checkTypeOfPizza(name) {
		if (name.indexOf(isCustomPizza) !== -1) {
			return custom;
		} else {
			return menu;
		}
	}

	const Ingridient = {
		name: name,
		price: price
	}

	return {
		name: name,
		ingridients: [Ingridient],
		price: price,
		type: checkTypeOfPizza(name),
			getPrice: function () {
				if (this.type === custom) {
					let sum = 0;

					ingridients.forEach(function(item) {
						let prices = item.price;
						sum += prices;
					});

					return this.price + sum;
				} else {
					return price;
				}
		}
	}
}

// Функция Pizza Manager - создает пиццы, на основе массива который передаем
function pizzaManager(arr) {
	let resultArr = [];

	arr.forEach(function(i) {
		let result = createPizza.apply(createPizza, i);
		resultArr.push(result);
	});

	resultArr.forEach(function(item) {
		console.log(item);
	})

	return resultArr;
}

// const Margarita1 = createPizza('Margarita', 25, [{name: 'cheese', price: 3}, {name: 'tomato', price: 6}]);
// const Margarita2 = createPizza('Pizza order number 1', 10, [{name: 'cheese', price: 2}, {name: 'tomatos', price: 6}, {name: 'mushrooms', price: 4}]);

// console.log(Margarita1);
// console.log(Margarita1.getPrice());

// console.log(Margarita2)
// console.log(Margarita2.getPrice());

let arraysPizza1 = [['Pizza order number 2', 10, [{name: 'cheese', price: 2}]], ['Pizza order number 3', 13, [{name: 'tomatos', price: 2}]], ['Palermo', 50, [{name: 'tomatos', price: 80}]]];
const getArraysPizza = pizzaManager(arraysPizza1);
console.log(arraysPizza1)
console.log(`Price of the first pizza: ${getArraysPizza[0].getPrice()}`);