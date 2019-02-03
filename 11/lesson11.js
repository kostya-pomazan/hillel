const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const checkboxAlcohol = document.querySelector('#is-alcohol-checkbox');
const checkboxNotAlcohol = document.querySelector('#not-alcohol-checkbox');
const checkboxLongCoctail = document.querySelector('#long-coctail-checkbox');
const checkboxShotCoctail = document.querySelector('#shot-coctail-checkbox');

class Cocktail {
	constructor(name, ingredients, isAlcohol, type) {
		this.name = name; // instance property
		this.ingredients = ingredients;
		this.isAlcohol = isAlcohol;
		this.type = type;
	}
	getPrice() { // methods of prototype
		return this.ingredients.reduce(function (sum, ingredient) {
			return sum + ingredient.price
		}, 0)
	}
}

class CocktailsList {
	constructor() {
		this.list = []
	}

	add(cocktail) {
		this.list.push(cocktail)
	}

	getAll() {
		return this.list;
	}

	renderFiltered(name) {
		let list = this.list.filter(function (item) {
			return item.name.indexOf(name) === 0;
		})
		return this.render(list);
	}

	render(list) {
		let cocktails = list || this.list
		let fragment = document.createDocumentFragment();
		cocktails.forEach(function (item) {
			let cocktailItem = document.createElement('div');
			cocktailItem.innerText = item.name;
			cocktailItem.className = 'cocktail';
			fragment.appendChild(cocktailItem);
		});
		return fragment;
	}

	renderFilteredAlcohol(value) {
		let list = this.list.filter(function (item) {
			if (value === true) {
				return item.isAlcohol === true;
			} else {
				return item.isAlcohol === false;
			}
		});
		return list;
	}

	renderFilteredType(value) {
		let list = this.list.filter(function (item) {
			return item.type === value;
		});
		return list;
	}
}
let list = new CocktailsList();
list.add(new Cocktail('margarita', [{
	name: 'tequila',
	price: 5
}, {
	name: 'lime',
	price: 3
}], true, 'long'));

list.add(new Cocktail('old fashioned', [{
	name: 'wiskey',
	price: 6
}, {
	name: 'bitter',
	price: 3
}], true, 'long'));

list.add(new Cocktail('milk cocktails', [{
	name: 'milk',
	price: 5
}, {
	name: 'bananas',
	price: 2
}], false, 'long'));

list.add(new Cocktail('b52', [{
	name: 'Coffee liqueur',
	price: 20
}, {
	name: 'Irish cream',
	price: 15
}], true, 'shot'));

const showList = function () {

	listElement.innerHTML = '';
	listElement.appendChild(list.render())
}
showButton.addEventListener('click', showList);

filterInput.addEventListener('input', function (event) {
	listElement.innerHTML = '';
	listElement.appendChild(list.renderFiltered(this.value))
});

checkboxAlcohol.addEventListener('change', function () {
	listElement.innerHTML = '';
	if (this.checked) {
		let result = list.renderFilteredAlcohol(true);
		listElement.appendChild(list.render(result));
	}
});

checkboxNotAlcohol.addEventListener('change', function () {
	listElement.innerHTML = '';
	if (this.checked) {
		let result = list.renderFilteredAlcohol(false);
		listElement.appendChild(list.render(result));
	}
});

checkboxLongCoctail.addEventListener('change', function () {
	let type = this.name;
	
	listElement.innerHTML = '';
	if (this.checked) {
		let result = list.renderFilteredType(type);
		listElement.appendChild(list.render(result));
	}
	if (this.checked === false) {
		listElement.innerHTML = '';
	}
});

checkboxShotCoctail.addEventListener('change', function () {
	let type = this.name;

	listElement.innerHTML = '';
	if (this.checked) {
		let result = list.renderFilteredType(type);
		listElement.appendChild(list.render(result));
	}
});
