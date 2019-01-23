// Привести несколько примеров кода который выбрасывает
// Type Error, Syntax Error


// Type Error

var myObj = {
    name: 'object',
    getName: function () {
        return this.name;
    }
}

try {
    myObj.getNEme();
} catch (e) {
    console.log(e instanceof TypeError);
    if (e instanceof TypeError) {
        console.log(e.name);
        console.log(e.message);
    }
}

try {
    throw new TypeError('MyMessage');
} catch (e) {
    console.log(e instanceof TypeError);
    if (e instanceof TypeError) {
        console.log(e.name);
        console.log(e.message);
    }
}

// Syntax Error

const arr = [];
try {
    if (arr.length === 0) {
        throw new SyntaxError('Array is empty');
    }
} catch (e) {
    console.log('Ошибка ' + e.name + ":" + e.message);
    console.log(e instanceof SyntaxError);
}