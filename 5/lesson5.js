 // написать ф-цию которая возвращает объект "human" и он будет иметь
 // Name, Age, и метод getName
 // создать 3 человека

// function Human(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName = function() {
//         return this.name;
//     }
// }

// const human1 = new Human('Коля', '25');
// console.log(human1);
// console.log(human1.getName());

// function newHuman(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }

// const myObj = newHuman('Petia', 32)

// console.log(myObj);

// создать ф-цию которая вернет объект содержащий методы реализующие основные арифм. операции

// function createCalc(num1, num2) {
//     let result = 0;
//     return {
//         add: (num1, num2) => {
//             result += num1, ;
//         }
//     }
// }

// const myCalc = createCalc.add(1,2);
// console.log(myCalc);


const ticketManager = {
    tickes: 10,
    buyTicket: function(count) {
       if (this.tickes - count < 0) {
            console.log('error');
       } else {
            console.log('here is: ' + this.tickes);
            this.tickes -= count;
       }
    },
    showTickets: function() {
        return this.tickes;
    }
}
ticketManager.buyTicket(1);