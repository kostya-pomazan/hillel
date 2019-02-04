/* Дано. последовательность (массив) инструкций обозначающий направление движения.
Инструкция может быть одна из четырех строк - “Left”, “Right”, “Forward”, “Back”.
Пример последовательности [“Back”, “Back”, “Forward”, “Left”, “Right”, “Right”].
Стартовые координаты [0;0].
Инструкция “Forward” увеличивает первую координату на 1,
инструкция “Back” - уменьшает координату на 1,
инструкция “Right” увеличивает вторую координату на 1,
инструкция “Left” уменьшает вторую координату на 1.
Необходимо вывести в консоль полный путь и отметить начало и конец
Пример
начало [0;0]
[-1; 0]
[-2; 0]
[-1; 0]
[-1; -1]
конец [-1;1]

*Дополнительно нужно учитывать граничные значение - обе координаты не могут быть больше 3 или меньше -3;
Если после выполнения команды данное условие может нарушиться - команду нельзя выполнять и весь процесс остановить выведя текущие координаты
как конечные - игнорируя последующие команды. Пример - имеет текущие координаты [1; 3]
и поступившую команду “Right” - в данном случае мы останавливаем и выводим начало [0;0]
….
….
[1; 3]
конец [1; 3]
*/

const instructions1 = ["Back", "Back", "Forward", "Left", "Left", "Left", "Left", "Left", "Left", "Right", "Right", "asd"];
const defaultInstructions = {
    back: "Back",
    forward: "Forward",
    left: "Left",
    right: "Right"
};

function moveDirection(instructions) {
    let location = {
        x: 0,
        y: 0
    };

    console.log('Начало: ' + '[' + location.x + '; ' + location.y + ']');

    let i = 0;
    while (instructions[i] !== undefined) {
        switch (instructions[i]) {
            case defaultInstructions.back:
                if (location.x === 3) {
                    location.x = 0;
                    break;
                } else if (location.x === -3) {
                    location.x = 0;
                    break;
                } else {
                    location.x--
                    break;
                }

            case defaultInstructions.forward:
                if (location.x === 3) {
                    location.x = 0;
                    break;
                } else if (location.x === -3) {
                    location.x = 0;
                    break;
                } else {
                    location.x++
                    break;
                }

            case defaultInstructions.left:
                if (location.y === 3) {
                    location.y = 0;
                    break;
                } else if (location.y === -3) {
                    location.y = 0;
                    break;
                } else {
                    location.y--
                    break;
                }

            case defaultInstructions.right:
                if (location.y === 3) {
                    location.y = 0;
                    break;
                } else if (location.y === -3) {
                    location.y = 0;
                    break;
                } else {
                    location.y++
                    break;
                }
        }

        i++;

        if (i === instructions.length) {
            console.log('Конец: ' + '[' + location.x + '; ' + location.y + ']');
        } else {
            console.log('[' + location.x + '; ' + location.y + ']');
        }
    }

    return location;
}

moveDirection(instructions1);