// Создать Объект coctail следующей структуры {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: getPrice  - с помощью reduce
// Создать Объект cocktails
// Поместить следующие методы в прототип:
// добавить коктейль
// удалить коктейль по имени
// вернуть все
// вернуть все безаклкогольные
// вернуть все алкогольные

//можно сделать через конструктор

function Coctail(name, ingridients, isAlcohol, type) {
    // const Ingridient = {
    //     name: name,
    //     price: price
    // }

    this.name = name;
    this.ingridients = [Ingridient]
    this.isAlcohol = isAlcohol;
    this.type = type;
}
Coctail.prototype = {
    getPrice: getCoctailPrice
}

function getCoctailPrice() {
    let coctailPrice = this.ingridients.reduce(function (count, curr) {
        console.log(count + curr.price)
        return count + curr.price;
    }, 0);
   return coctailPrice;
}

// console.log(Coctail.isPrototypeOf(getPrice))

let myCoctail = new Coctail({
    name: 'test',
    ingridients: [{
        name: 'test',
        price: 20
    }],
    isAlcohol: true,
    type: 'Long'
});

myCoctail.getPrice()