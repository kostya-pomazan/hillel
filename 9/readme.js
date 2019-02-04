//getPrice ложен быть в прототипе
//при создании cocktail нужно указать объект с методом getPrice как прототип

function createCocktail(data) {
    let obj = Object.create(prototype)
    obj.name = data.name // и так далее
    return obj
}

//как один из способов
//тогда можно использовать эту функцию для создания разных коктейлей

//можно сделать через конструктор

function Coctail(data) {
    this.name = data.name....
}
Cocktail.prototype = {
    getPrice: function () {
        return this.name......
    }
}

let coctail = new Coctail({
    name: 'test'
})

// смысл в том, чтобы объект coctail имел свои поля а метод getPrice брался из прототипа
