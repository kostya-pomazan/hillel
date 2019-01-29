// Написать класс
// Необходимо переписать данный функционал использую синтаксис классов
// https: //developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

class Ingridients {
    constructor () {
        this.list = [];
    }

    add (ingridients) {
        this.list.push(ingridients);
    }

    getAll () {
        return this.list;
    }

    getByName (name) {
        return this.list.find(function (item) {
            return item.name === name;
        });
    }
}

let myIngredients = new Ingridients();
myIngredients.add({
    name: 'tequila',
    price: 5
});
myIngredients.add({
    name: 'vodka',
    price: 3
});
console.log(myIngredients.getAll())
console.log(myIngredients.getByName('tequila'))