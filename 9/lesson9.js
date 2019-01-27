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
// Создать Объект coctail следующей структуры {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: getPrice  - с помощью reduce
// Создать Объект cocktails
// Поместить следующие методы в прототип:
// добавить коктейль
// удалить коктейль по имени
// вернуть все
// вернуть все безаклкогольные
// вернуть все алкогольные