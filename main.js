// №1
// function NumberToObjConverter(num) {
//     // Переводим в строку, если пришло число
//     num = num.toString()
//     if (num.length > 3) {
//         console.log('Превышена максимальная величина числа')
//         return {}
//     }
//     const numArr = num.split('')
//     while (numArr.length < 3) {
//         numArr.unshift(0)
//     }
//     return {
//         hundreds: numArr[0],
//         dozens: numArr[1],
//         units: numArr[2],
//     }
// }

// const num = 579
// const result = NumberToObjConverter(num)
// console.log('Результат работы функции с входным параметром, равным ' + num + ':')
// console.log(result)

// №2
// let priceArr = [85, 95, 700, 63, 92, 489, 1000]
const productsArr = [
    {
        name: 'Курица',
        price: 200,
    },
    {
        name: 'Рыба',
        price: 340,
    },
    {
        name: 'Креветки',
        price: 500,
    },
    {
        name: 'Мидии',
        price: 460,
    },
    {
        name: 'Сливочное пиво',
        price: 135,
    },
]
function countBasketPrice(productsArr) {
    let pricesSum = 0
    for (let i = 0; i < productsArr.length; i++) {
        pricesSum += productsArr[i].price
    }
    return pricesSum
}
const totalPrice = countBasketPrice(productsArr)
alert(totalPrice)