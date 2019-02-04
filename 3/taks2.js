// Задача 2
// Написать функцию которая будет создавать объекты имеющие структуру описанную в первой задаче.

const pizza = {
  name: 'Pizza from Buffet',
  ingredients: ['Chicken', 'Ananas', 'Cheese'],
  size: [
      small  = {name: 'Palermo', price: 60},
      large  = {name: 'Piemonte', price: 120}
  ],
  getPrice: function (value) {
      if (value === small) {
        return this.size[0].price;
      }
      return this.size[1].price;
  }
}

function Pizza(name, arr, size) {
    this.name = name,
    this.ingredients = arr,
    this.size = size,
    this.getPrice = function () {
        return this.size.price;
    }
}

const mypizza = new Pizza('My pizza', ['Chicken', 'Ananas', 'Cheese', 'Chicken'], [small = {name: 'myPalermo', price: 25}, {name: 'myPiemonte', price: 300}]);
console.log(mypizza.getPrice(small));
console.log(mypizza);

// 1) как сделать необязательные аргументы что бы при этом подставлялись дефолтные пропертис
// 2) что если я добавлю больше аргументов