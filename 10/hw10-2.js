const buttonProto = {
    registerEvent: function (type, callback) {
        this.events.push({
            id: Date.now(),
            type: type,
            callback: callback
        });
    },
    getEvents: function () {
        return this.events;
    },
    clearEvents: function () {
        this.events = [];
    },
    getEvenstByType: function (type) {
        return this.events.filter(function (event) {
            return event.type === type;
        });
    }
}

function createButton(label, width, height) {
    let obj = Object.create(buttonProto);

    obj.label = label;
    obj.widgth = width;
    obj.height = height;
    obj.events = [];

    return obj;
}

let btn1 = createButton('test', 50, 50);
btn1.registerEvent('click', () => {});
console.log(btn1.getEvenstByType('click'));