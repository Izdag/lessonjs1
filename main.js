// №1
// function createChessBoard() {
//     const chessBoard = document.getElementById('chessBoard')
//     const chessItemsCount = 8
//     let isOdd = true
//     for (let i = 1; i <= chessItemsCount; i++) {
//         for (let j = 1; j <= chessItemsCount; j++) {
//             const chessItem = document.createElement('div')
//             chessItem.classList.add('chess-board-item')
//             chessBoard.appendChild(chessItem)
//             if (isOdd) {
//                 chessItem.classList.add('chess-board-item-odd')
//             }
//             isOdd = !isOdd
//         }
//         isOdd = !isOdd
//     }
// }

// №2
const basketproducts = [
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
function countBasketPrice(basketproducts) {
    let pricesSum = 0
    for (let i = 0; i < basketproducts.length; i++) {
        pricesSum += basketproducts[i].price
    }
    return pricesSum
}

function createBasket() {
    const basket = document.getElementById('basket')
    const basketContent = document.createElement('div')
    let basketContentValue = ''
    if (basketproducts.length) {
        basketContentValue =
            `В корзине: ${basketproducts.length} товаров на сумму ${countBasketPrice(basketproducts)} рублей`
    } else {
        basketContentValue = 'Корзина пуста'
    }
    basketContent.innerHTML = basketContentValue
    basket.appendChild(basketContent)
}

function init() {
    // createChessBoard()
    createBasket()
}

window.onload = init