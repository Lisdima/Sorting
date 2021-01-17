let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let content = document.querySelector('.content')
let cards = document.querySelectorAll('.card')

function filterArray(cards, sortParam) { // Отфильтруем массив по уменьшению и увеличению и применяем moveItems (перемещение Card)
    let arr = arrayOfNumber();
    arr.sort(function(a, b) {
    if (sortParam) {
        return (a - b) 
    } else {
        return (b - a )
    }
    });
    moveItems(arr, cards);
};

function arrayOfNumber() { // Добавим все Item1..6 в массив
    let arr = []
    for (let card of cards) {
        arr.push(card.innerHTML)
    }
    return arr
}

let originNumbers = arrayOfNumber();

function moveItems(arr, cards) { // Возьмем каждый элемент отфильтрованного массива и сравниваем с Card.inner, если есть совпадение, то переносим Card в начало class = "content"
    for (let price of arr) {
        for (let card of cards) {
            if (card.innerHTML === price) {
                content.append(card)
            }
        }
    }
}

button1.addEventListener('click', function() {
    button1.style.display = 'none';
    button2.style.display = 'block';
    filterArray(cards, true);
})

button2.addEventListener('click', function() {
    button1.style.display = 'block'
    button2.style.display = 'none'
    filterArray(cards, false);
})

button3.addEventListener('click', function() {
    moveItems(originNumbers, cards)
})
