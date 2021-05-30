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

// №7
let basket
let basketContent
const fieldsKeysArr = ['activeBasketContent', 'activeAddress', 'activeComment']
let currentItemCount = 0
let prevItemCount = 0

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

function createBasketContentItem() {
    basketContent = document.createElement('div')
    const basketContentItem = document.createElement('div')
    const basketContentContainer = document.createElement('div')
    basketContentContainer.classList.add('busketContent')
    basketContentItem.innerHTML = `Состав корзины`
    basket.appendChild(basketContentItem)
    basketContentItem.appendChild(basketContentContainer)
    basketContentContainer.appendChild(basketContent)
    const buttonReset = document.createElement('button')
    buttonReset.innerHTML = `Очистить`
    basketContentContainer.appendChild(buttonReset)
    buttonReset.onclick = () => {
        basketproducts = []
        updateBasket()
    }
}

function createAddressItem() {
    const addressItem = document.createElement('div')
    const addressInput = document.createElement('input')
    addressInput.classList.add('address')
    addressItem.innerHTML = `Адрес доставки`
    basket.appendChild(addressItem)
    addressItem.appendChild(addressInput)
}

function createCommentItem() {
    const commentItem = document.createElement('div')
    const commentInput = document.createElement('input')
    commentInput.classList.add('comment')
    commentItem.innerHTML = `Комментарий`
    basket.appendChild(commentItem)
    commentItem.appendChild(commentInput)
}

function syncCurrentItem() {
    basket.classList.remove(fieldsKeysArr[prevItemCount])
    basket.classList.add(fieldsKeysArr[currentItemCount])
    prevItemCount = currentItemCount
}

function createControllButtons() {
    const buttonBack = document.createElement('button')
    const buttonNext = document.createElement('button')
    buttonBack.innerHTML = `Назад`
    buttonNext.innerHTML = `Далее`
    basket.appendChild(buttonBack)
    basket.appendChild(buttonNext)
    buttonBack.onclick = () => {
        if (currentItemCount !== 0) {
            currentItemCount--
            syncCurrentItem()
        }
    }
    buttonNext.onclick = () => {
        if (currentItemCount < fieldsKeysArr.length - 1) {
            currentItemCount++
            syncCurrentItem()
        }
    }
}

function createBasket() {
    const basketContainer = document.getElementById('basket')
    basket = document.createElement('div')
    basketContainer.appendChild(basket)
    createBasketContentItem()
    createAddressItem()
    createCommentItem()
    createControllButtons()
    syncCurrentItem()
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
