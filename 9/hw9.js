// Создать Объект coctail следующей структуры {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: getPrice  - с помощью reduce
// Создать Объект cocktails
// Поместить следующие методы в прототип:
// добавить коктейль
// удалить коктейль по имени
// вернуть все
// вернуть все безаклкогольные
// вернуть все алкогольные

function Coctail(name, ingridients, isAlcohol, type) {
    this.name = name;
    this.ingridients = ingridients
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
    console.log(coctailPrice)
    return coctailPrice;
}

// console.log(cocktailsUtils.isPrototypeOf(coctails))

let Coctails = {
    coctailsArr: []
}

Coctails.prototype = {
    add: function (name, ingridients, isAlcohol, type) {
        Coctails.coctailsArr.push(new Coctail(name, ingridients, isAlcohol, type));
    },
    remove: function(value) {
        let res = Coctails.coctailsArr.filter(function(item) {
            return item.name !== value;
        });
        Coctails.coctailsArr = res;
    },
    show: function () {
        Coctails.coctailsArr.forEach(function(item) {
            console.log(item)
            return item;
        });
    },
    isAlcohol: function (value) {
        let res = Coctails.coctailsArr.filter(function (item) {
            if (item.isAlcohol === value) {
                return true;
            } else {
                return false;
            }
        });
        res.forEach(function (item) {
            return item;
        });
        return res;
    }
}

Coctails.prototype.add('RedHoup', [{
    name: 'Jin',
    price: 50
}, {
    name: 'Strawberry',
    price: 20
}], true, 'Long');

Coctails.prototype.add('Godfather', [{
    name: 'Whiskey',
    price: 60
}, {
    name: 'Liquor',
    price: 15
}], true, 'Short');

let tropical = Coctails.prototype.add('Tropical', [{
    name: 'Milc',
    price: 10
}, {
    name: 'Bananas',
    price: 20
},
{
     name: 'Orange juce',
     price: 8
}], false, 'Long');

Coctails.prototype.remove('Godfather');
Coctails.prototype.show();
Coctail.prototype.getPrice();
let resultIsAlcohol = Coctails.prototype.isAlcohol(false);
console.log(resultIsAlcohol)