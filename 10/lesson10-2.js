const showButton = document.getElementById('show-button')
const hideButton = document.getElementById('hide-button')

ingridients.get('tequila');

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
    render() {
        return this.list.map(function (item) {
            return `<div>${item.name}</div>`;
        }).join('')
    }
}
// class Ingredients {}
//ingredients.retreive('tequila') -> {name: 'tequila', price: 5}

//const margarita = new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long');
//const oldFashioned = new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long')


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
}], true, 'long'))
const showList = function () {
    const listElement = document.getElementById('cocktail-list');
    listElement.innerHTML = list.render();
    listElement.classList.remove('hidden');
}
showButton.addEventListener('click', showList);



hideButton.addEventListener('click', function () {
    const listElement = document.getElementById('cocktail-list');
    listElement.app
    //listElement.style.display = "none";
    setTimeout(function () {
        console.log('Set Timeout Logic')
        listElement.classList.add('hidden')
    }, 2000)
    console.log('End of Click Handler')
});
document.createElement('div')