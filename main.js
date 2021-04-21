
// №1
// Вслучае использования префиксного инкремента в выражениях,
// в функции alert выводится уже увеличенное значение переменной.
// При использовании же постфикстного инкремента, в функцию alert выводится текущее значение переменной.


// №2
// Ответ 5


// №3
// let a = -90;
// let b = 26;
// if (a >= 0 && b >= 0) {
//     alert(Math.abs(a - b));
// } else if (a <= 0 && b <= 0) {
//     alert(a * b);
// } else if (a != b) {
//     alert(a + b);
// }


// №4
// let stringNumber = prompt('Ввeдите номер')
// let num = parseInt(stringNumber)
// let numbers = ''
// for (let count = num; count <= 15; count++) {
//     numbers = numbers + count
// }
// alert(numbers)


// №5
function sum(a, b) {
    return a + b;
}
// let c = sum(73, 98)
// alert(c);

function subtraction(a, b) {
    return a - b;
}
// let c = subtraction(54, 18)
// alert(c);

function multiplication(a, b) {
    return a * b;
}
// let c = multiplication(7, 10)
// alert(c);

function division(a, b) {
    return a / b;
}
// let c = division(500, 5)
// alert(c);

// №6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2)
        case 'subtraction':
            return subtraction(arg1, arg2)
        case 'multiplication':
            return multiplication(arg1, arg2)
        case 'division':
            return division(arg1, arg2)
        default:
            break;
    }
}

alert(mathOperation(16, 7, 'multiplication'))
