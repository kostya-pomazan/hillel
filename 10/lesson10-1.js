// // let food = {
// //     init: function (type) {
// //         this.type = type;
// //     },
// //     eat: function () {
// //         console.log(`eat ${this.type}`)
// //     },

// // }

// // function Food (type) {
// //     this.type = type;
// // }

// // Food.prototype = food;
// // console.log(Function.prototype.isPrototypeOf(Food))
// // let pizza = new Food('pizza')
// // pizza.eat()

// // function a () {
// //     // [{key:0, value: 1}, {key: 1, value: 2}..]
// //     //
// //     console.log([].map.call(arguments, (item, i) => {
// //         return {key:i, value: item}
// //     }))
// // }

// // // напишите прототип - food - с методом eat;
// // // напишите прототип - candies - c методом - sweetEat();
// // // создать объект - который будет иметь цепочку из этих прототипов:

// // // food --> candies --> cookie

// var food = {
//     eat: function () {
//         console.log('you ate the food')
//     }
// }

// var candies = Object.create(food);
// candies.sweatEat = function () {
//     console.log('sweeet, you ate the candie')
// }

// var cookie = Object.create(candies);
// cookie.sweatEat()
// cookie.eat()


let pizza = {
    name: 'margarita',
    ingridients: [{
            name: 'tomato',
            price: 2
        },
        {
            name: 'cheese',
            price: 3
        },
        {
            name: 'basil',
            price: 4
        }
    ]
}

// tomato:2, cheese:3, basil:4

let result = pizza.ingridients.reduce(function (prev, current, i, arr) {
    let res = prev.price + current.price
    return {
        price: res
    }
})
//
// Создать Объект cocktail следующей структуры {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: getPrice  - с помощью reduce
// Создать Объект cocktails
// Поместить следующие методы в прототип:
// добавить коктейль
// удалить коктейль по имени
// вернуть все
// вернуть все безаклкогольные
// вернуть все алкогольные
const cocktailProto = {
    getPrice: function () {
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum + ingredient.price
        }, 0)
    }
}

function createCocktail(name, ingredients, isAlcohol, type) {
    let obj = Object.create(cocktailProto);
    obj.name = name;
    obj.ingredients = ingredients;
    obj.isAlcohol = isAlcohol;
    obj.type = type;
    return obj;
}
let margarita = createCocktail('margarita', [{
    name: 'tequila',
    price: 5
}, {
    name: 'lime',
    price: 3
}], true, 'long')
console.log(margarita.getPrice())
let oldFashioned = createCocktail('old fashioned', [{
    name: 'wiskey',
    price: 6
}, {
    name: 'bitter',
    price: 3
}], true, 'long')
console.log(oldFashioned.getPrice())


const cocktailsListProto = {
    add: function (cocktail) {
        this.list.push(cocktail)
    },
    getAll: function () {
        return this.list
    }

}

function createCoctailsList() {
    return Object.create(cocktailsListProto, {
        list: {
            value: [],
            enumerable: true,
            writable: true,
            configurable: true
        }
    });
}

const myCocktailList = createCoctailsList()
myCocktailList.add(margarita)


const ingridientsProto = {
    add: function (ingredient) {
        this.items.push(ingredient);
    },
    getAll: function () {
        return this.items;
    },
    getByName: function (name) {
        return this.items.find(function (item) {
            return item.name === name
        })
    }
}

function createIngridientsList() {
    let list = Object.create(ingridientsProto);
    list.items = [];
    return list;
}
let myIngredients = createIngridientsList();
myIngredients.add({
    name: 'tequila',
    price: 5
})
myIngredients.add({
    name: 'vodka',
    price: 3
})
console.log(myIngredients.getByName('tequila'))