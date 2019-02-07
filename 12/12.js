const buttons = document.querySelector('#buttons');
function eventHandler() {
    alert('test')
}
// buttons.addEventListener('click', eventHandler)
// buttons.onclick = eventHandler
const btns = document.querySelectorAll('button');
    btns[0].addEventListener('click', eventHandler)
    btns[1].addEventListener('click', function () {
    btns[0].removeEventListener('click', eventHandler)
})



// Order

// cocktail.name cocktail.items cocktail.price totalPrice
// margarita         2              5            10
// . ...................
//..............

// <hr> -------------------------------------------------
                                    //           40