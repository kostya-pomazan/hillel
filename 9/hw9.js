// Создать Объект coctail следующей структуры {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: getPrice  - с помощью reduce
// Создать Объект cocktails
// Поместить следующие методы в прототип:
// добавить коктейль
// удалить коктейль по имени
// вернуть все
// вернуть все безаклкогольные
// вернуть все алкогольные

let coctail = {
    name: 'Red',
    ingridients: [{
            name: 'Gin',
            price: 40
        },
        {
            name: 'Strawberry',
            price: 20
        }
    ],
    isAlcohol: true,
    type: 'Long Drink'
}

let utils = Object.create(coctail);

utils.getPrice = function () {
    let coctailPrice = this.ingridients.reduce(function (count, curr) {
        console.log(count + curr.price)
        return count + curr.price;
    }, 0);
    return coctailPrice;
}

console.log(coctail.isPrototypeOf(utils))

utils.isAlcohol
console.log(utils.isAlcohol)

coctail.getPrice()