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
let basket
let basketContent

let basketproducts = []
const productsList = [
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
]
function countBasketPrice(basketproducts) {
    let pricesSum = 0
    for (let i = 0; i < basketproducts.length; i++) {
        pricesSum += basketproducts[i].price
    }
    return pricesSum
}

function updateBasket() {
    let basketContentValue = ''
    if (basketproducts.length) {
        basketContentValue =
            `В корзине: ${basketproducts.length} товаров на сумму ${countBasketPrice(basketproducts)} рублей`
    } else {
        basketContentValue = 'Корзина пуста'
    }
    basketContent.innerHTML = basketContentValue
}

function createBasket() {
    basket = document.getElementById('basket')
    basketContent = document.createElement('div')
    basket.appendChild(basketContent)
    const buttonReset = document.createElement('button')
    buttonReset.innerHTML = `Очистить`
    basket.appendChild(buttonReset)
    buttonReset.onclick = () => {
        basketproducts = []
        updateBasket()
    }
    updateBasket()
}

function showProducts() {
    const productsContainer = document.createElement('div')
    productsContainer.classList.add('products-container')
    basket.appendChild(productsContainer)
    for (let j = 0; j < productsList.length; j++) {
        const productData = productsList[j]
        const product = document.createElement('div')
        product.classList.add('product')
        product.innerHTML = `Название ${productData.name} - Цена ${productData.price}₽`
        productsContainer.appendChild(product)
        const buttonBuy = document.createElement('button')
        buttonBuy.innerHTML = `Купить`
        productsContainer.appendChild(buttonBuy)
        buttonBuy.onclick = () => {
            basketproducts.push(productData)
            updateBasket()
        }
    }
}

function init() {
    createBasket()
    showProducts()
}

window.onload = init