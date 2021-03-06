const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const isAlcoholFilter = document.querySelector('#is-alcohol');
const isLongFilter = document.querySelector('#is-long');
const buttons = document.querySelectorAll('.btn-order');
const orderedRow = document.querySelector('#ordered-row');

class Cocktail {
  constructor(name, ingredients, isAlcohol, type) {
    this.name = name; // instance property
    this.ingredients = ingredients;
    this.isAlcohol = isAlcohol;
    this.type = type;
    this.isOrdered = 0;
  }
  get price() { // methods of prototype
    return this.ingredients.reduce(function (sum, ingredient) {
      return sum + ingredient.price
    }, 0)
  }

  totalPrice() {
    return this.isOrdered.reduce(function (sum, isOrdered) {
      return sum + isOrdered;
    }, 0);
  }
}

class CocktailsList {
  constructor() {
    this.list = []; // model 
    this.filteredList = []; // view model 

    this.filters = { // view model
      isAlcohol: true,
      isLong: true,
      cocktailValue: ''
    }

    this.ordered = {
      orderedList: []
    }
  }

  setFilterValue(value, type) {
    this.filters[type] = value;
  }

  add(cocktail) {
    this.list.push(cocktail)
  }

  getAll() {
    return this.list;
  }

  applyFilters() {
    this.filteredList = this.list.filter(item => {
      return item.isAlcohol === this.filters.isAlcohol &&
        (item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong) &&
        (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0)
    });
  }

  // getOrderedCoctails() {
  //   this.orderedList = this.li
  // }

  render() {
    this.applyFilters(); // change this.list
    let fragment = document.createDocumentFragment();

    this.filteredList.forEach(function (item) {
      let cocktailItem = document.createElement('div');
      let coctailName = document.createElement('strong');
      let cocktailPrice = document.createElement('strong');
      let button = document.createElement('button');

      coctailName.innerText = item.name;
      coctailName.setAttribute('data-name', item.name);
      coctailName.className = 'cocktail';

      cocktailPrice.innerText = item.price + '$';

      button.innerText = 'Buy';
      button.className = 'btn-order';

      cocktailItem.className = 'cocktail-item';
      cocktailItem.append(coctailName);
      cocktailItem.append(cocktailPrice);
      cocktailItem.append(button);

      fragment.appendChild(cocktailItem);
    })
    return fragment;
  }

  getOrderedCoctails(coctail) {
    let fragment = document.createDocumentFragment();
    let newTableRow = document.createElement('div');
    let coctailName = document.createElement('div');
    let coctailPrice = document.createElement('div');
    let coctailTotalPrice = document.createElement('div');
    let coctailQuantity = document.createElement('div');

    let resultCoctail = this.filteredList.find(function (item) {
      // debugger;
      return item.name === coctail;
    });

    if (this.ordered.orderedList.find((item) => item.name === resultCoctail.name)) {
      
      // update
      this.ordered.orderedList.forEach(function (item) {
        // orderedRow.innerHTML = '';
        newTableRow.className = 'table-row';
        resultCoctail.isOrdered++;

        let getTotal = item.price * item.isOrdered;
        coctailName.innerText = item.name;
        coctailPrice.innerText = item.price;
        coctailQuantity.innerText = item.isOrdered;
        coctailTotalPrice.innerText = getTotal;

        fragment.append(coctailName);
        fragment.append(coctailQuantity);
        fragment.append(coctailPrice);
        fragment.append(coctailTotalPrice);
        // debugger
        
      });
      newTableRow.appendChild(fragment);
      orderedRow.appendChild(newTableRow);

    } else {
      this.ordered.orderedList.push(resultCoctail);
      resultCoctail.isOrdered++;
      orderedRow.appendChild(list.renderOrderedCoctails())
      // debugger;
    }
  }

  renderOrderedCoctails() {
    let fragment = document.createDocumentFragment();
    let newTableRow = document.createElement('div');
    let coctailName = document.createElement('div');
    let coctailPrice = document.createElement('div');
    let coctailTotalPrice = document.createElement('div');
    let coctailQuantity = document.createElement('div');
    
    this.ordered.orderedList.forEach(function (item) {
      newTableRow.className = 'table-row';

      let getTotal = item.price * item.isOrdered;
      // debugger
      coctailName.innerText = item.name;
      coctailPrice.innerText = item.price;
      coctailQuantity.innerText = item.isOrdered;
      coctailTotalPrice.innerText = getTotal;

      fragment.appendChild(coctailName);
      fragment.appendChild(coctailQuantity);
      fragment.appendChild(coctailPrice);
      fragment.appendChild(coctailTotalPrice);
      // debugger
      newTableRow.appendChild(fragment);
    });

    return newTableRow;
  }
}


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
}], true, 'shot'))
list.add(new Cocktail('negroni', [{
  name: 'wiskey',
  price: 6
}, {
  name: 'bitter',
  price: 3
}], true, 'long'))
list.add(new Cocktail('mojito', [{
  name: 'wiskey',
  price: 6
}, {
  name: 'bitter',
  price: 3
}], false, 'long'))
list.add(new Cocktail('milk cocktails', [{
  name: 'milk',
  price: 5
}, {
  name: 'bananas',
  price: 2
}], false, 'long'));

list.add(new Cocktail('b52', [{
  name: 'Coffee liqueur',
  price: 20
}, {
  name: 'Irish cream',
  price: 15
}], true, 'shot'));
const showList = function () {

  listElement.innerHTML = '';
  listElement.appendChild(list.render())
}
listElement.appendChild(list.render())
// showButton.addEventListener('click', showList);



function filterHandler() {
  let value = this.type === "checkbox" ? this.checked : this.value;
  list.setFilterValue(value, this.name);
  listElement.innerHTML = '';
  listElement.appendChild(list.render())
}

isAlcoholFilter.addEventListener('change', filterHandler);
isLongFilter.addEventListener('change', filterHandler);
filterInput.addEventListener('input', filterHandler);

let container = document.querySelector('#cocktail-list');

container.onclick = function (e) {
  if (!e.target.classList.contains('btn-order')) return;

  let parent = e.target.parentElement;
  let coctail = parent.children[0].getAttribute('data-name');
  // debugger
  list.getOrderedCoctails(coctail);
  // list.renderOrderedCoctails();
  // orderedRow.appendChild(list.renderOrderedCoctails())
}

// Order

// cocktail.name cocktail.items cocktail.price totalPrice
// margarita         2              5            10
// . ...................
//..............

// <hr> -------------------------------------------------
//           40