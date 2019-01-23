// Задача 1
// Создать объект (pizza) который будет иметь свойства:
// name - string
// ingredients - array,
// size - array of objects - {name: string, price: number},
// getPrice - метод который вернет цену за пиццу
// Выполнить задачу максимальным количество способов

const pizza1 = {
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

// pizza1.getPrice(small);
console.log(pizza1.getPrice(large));

//============================//

const pizza2 = {};

pizza2.name = 'Pizza from Buffet';
pizza2.ingredients = ['Chicken', 'Ananas', 'Cheese'];
pizza2.size = [
    small  = {name: 'Palermo', price: 60},
    large  = {name: 'Piemonte', price: 120}
];
pizza2.getPrice = function (value) {
  if (value === small) {
    return this.size[0].price;
  }
  return this.size[1].price;
}
console.log(pizza2.getPrice(1));
pizza2.getPrice(1); // 120

//============================//

const pizza3 = new Object();

pizza3['name'] = 'Pizza from Buffet';
pizza3['ingredients'] = ['Chicken', 'Ananas', 'Cheese'];
pizza3.size = [
  small  = {name: 'Palermo', price: 60},
  large  = {name: 'Piemonte', price: 120}
];
pizza3.getPrice = function (value) {
  if (value === small) {
    return this.size[0].price;
  }
  return this.size[1].price;
}
pizza3.getPrice();
pizza3['name']; // Pizza from Buffet
