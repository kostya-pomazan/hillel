const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const isAlcoholFilter = document.querySelector('#is-alcohol');
const isLongFilter = document.querySelector('#is-long');
const buttons = document.querySelectorAll('.btn-order');

class Cocktail {
	constructor(name, ingredients, isAlcohol, type) {
		this.name = name; // instance property
		this.ingredients = ingredients;
		this.isAlcohol = isAlcohol;
		this.type = type;
	}
	get price() { // methods of prototype
		return this.ingredients.reduce(function (sum, ingredient) {
			return sum + ingredient.price
		}, 0)
	}
}

class CocktailsList {
	constructor() {
		this.list = []; // model 
		this.filteredList = []; // view model 

		this.filters = { // view model
			isAlcohol: true,
			isLong: true,
			cocktailValue: ''
		}
	}

	setFilterValue(value, type) {
		this.filters[type] = value;
	}

	add(cocktail) {
		this.list.push(cocktail)
	}

	getAll() {
		return this.list;
	}

	applyFilters() {
		this.filteredList = this.list.filter(item => {
			return item.isAlcohol === this.filters.isAlcohol &&
				(item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong) &&
				(this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0)
		});
	}


	render() {
		this.applyFilters(); // change this.list
		let fragment = document.createDocumentFragment();

		this.filteredList.forEach(function (item) {
			let cocktailItem = document.createElement('div');
			let coctailName = document.createElement('strong');
			let cocktailPrice = document.createElement('strong');
			let button = document.createElement('button');

			coctailName.innerText = item.name;
			cocktailPrice.innerText = item.price + '$';
			button.innerText = 'Buy';
			button.className = 'btn-order';
			cocktailItem.className = 'cocktail-item';
			coctailName.className = 'cocktail';
			cocktailItem.append(coctailName);
			cocktailItem.append(cocktailPrice);
			cocktailItem.append(button);
			fragment.appendChild(cocktailItem);
		})
		return fragment;
	}

	wrap() {
		let wrapper = document.createElement('div');
		let el = document.querySelectorAll('.cocktail');
		console.log(el)
		el.parentNode.insertBefore(wrapper, el);
		wrapper.append(el);
	}
}


let list = new CocktailsList();
list.add(new Cocktail('margarita', [{
	name: 'tequila',
	price: 5
}, {
	name: 'lime',
	price: 3
}], true, 'long'))
list.add(new Cocktail('old fashioned', [{
	name: 'wiskey',
	price: 6
}, {
	name: 'bitter',
	price: 3
}], true, 'shot'))
list.add(new Cocktail('negroni', [{
	name: 'wiskey',
	price: 6
}, {
	name: 'bitter',
	price: 3
}], true, 'long'))
list.add(new Cocktail('mojito', [{
	name: 'wiskey',
	price: 6
}, {
	name: 'bitter',
	price: 3
}], false, 'long'))
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
listElement.appendChild(list.render())
// //showButton.addEventListener('click', showList);



function filterHandler() {
	let value = this.type === "checkbox" ? this.checked : this.value;
	list.setFilterValue(value, this.name);
	listElement.innerHTML = '';
	listElement.appendChild(list.render())
}

function orderHandler() {
	return false;
}

isAlcoholFilter.addEventListener('change', filterHandler);
isLongFilter.addEventListener('change', filterHandler);
filterInput.addEventListener('input', filterHandler);
// btnOrder.addEventListener('click', orderHandler);

let container = document.querySelector('#cocktail-list');

container.onclick = function(e) {
	if (!e.target.classList.contains('btn-order')) return;

	e.target.parentNode.classList.add('active');
}

// Order

// cocktail.name cocktail.items cocktail.price totalPrice
// margarita         2              5            10
// . ...................
//..............

// <hr> -------------------------------------------------
//           40