/*
Задача 1
Нажатие на кновку "SHOW ME" должно выводить значение с поля ввода (смотрите на элементы в html-разметке)
*/

// ===================================================
const promtWorld = document.querySelector('#alertInput');
const promtBtn = document.querySelector('#alertButton');
promtBtn.addEventListener('click', () => {
    alert(promtWorld.value);
})

// ===================================================

/*
Задача 2
По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами. 
можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
*/

// ===================================================
const btnEl = document.querySelector('#swapButton');
const firstInputEl = document.querySelector('#leftSwapInput');
const secondInputEl = document.querySelector('#rightSwapInput');

btnEl.addEventListener('click', () => {
    const firstValue = firstInputEl.value;
    const secondValue = secondInputEl.value;
    firstInputEl.value = secondValue
    secondInputEl.value = firstValue
})
// ===================================================

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/

// ===================================================
const passwordInput = document.querySelector('#passwordInput');
const btn = document.querySelector('#passwordButton');

const onClick = (event) => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    event.target.textContent = passwordInput.type === 'password' ? 'Раскрыть' : 'Скрыть'
}
btn.addEventListener('click', onClick)
// ===================================================

/*
Задача 4
Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.
*/

// ===================================================
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const boxEl = document.querySelector('#box');

increaseBtn.addEventListener('click', () => {
    const size = boxEl.offsetWidth;
    boxEl.style.width = `${size + 10}px`
    boxEl.style.height = `${size + 10}px`
})

decreaseBtn.addEventListener('click', () => {
    const size = boxEl.offsetWidth;
    boxEl.style.width = `${size - 10}px`
    boxEl.style.height = `${size - 10}px`
})
// ===================================================

/*
Задача 5
Навесьте слушатель по клику и определите, когда клик происходит
внутри элемента с id "place" и когда клик приходится вне зоны элемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

// ===================================================
const placeEl = document.querySelector('#place');

window.addEventListener('click', (event) => {
    // if(event.target === placeEl) {
    //     console.log('it is good')
    // }
    if(placeEl.contains(event.target)) {
        console.log('it is good')
    }
})
// ===================================================

/*
Задача 6
По клику на кнопку "Удвоить" увеличить значение
в каждом элементе списка в 2 раза
*/

// ===================================================
const doubleBtn = document.querySelector('#double');
const allListItems = document.querySelectorAll('.listItem');

doubleBtn.addEventListener('click', () => {
    allListItems.forEach(item => {
        item.textContent = +item.textContent * 2
    })
})
// ===================================================

/*
Задача 7
При клике на круг он должен следовать за курсором.
При повторном клике он становится в начальное положение.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// ===================================================
const cicleEl = document.querySelector('.outerCircle');
cicleEl.addEventListener('click', () => {
    window.addEventListener('mousemove', onMouseMove)
    if(cicleEl.style.position === 'absolute') {
        cicleEl.style.position = 'static'
        window.removeEventListener('mousemove', onMouseMove)
        return
    }
    
})

function onMouseMove (event) {
    cicleEl.style.position = 'absolute'
    cicleEl.style.top = `${event.pageY - 15}px`
    cicleEl.style.left = `${event.pageX - 15}px`

}


//SashaHir
// const circleEl = document.querySelector('.outerCircle')

// circleEl.addEventListener('click', () => {
//     window.addEventListener('mousemove', onMove)
//     if (circleEl.style.position === 'absolute') {
//         circleEl.style.position = 'static'
//         window.removeEventListener('mousemove', onMove)
//     }
// })

// function onMove(event) {
//     circleEl.style.position = 'absolute'
//     circleEl.style.top = `${event.pageY - 15}px`
//     circleEl.style.left = `${event.pageX - 15}px`
//}
// ===================================================

/*
Задача 8
При клике на каждую из кнопок суммируются значения с data-атрибутов.
По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

// ===================================================
const btnResult = document.querySelector('#resultButton');
const list = document.querySelector('.statList');
const sectionResult = document.querySelector('#resultSection');

let sum = 0

const stat = {}

const onListClick = (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    sum += +event.target.dataset.number

    if(stat[event.target.textContent]) {
        stat[event.target.textContent] += 1
    } else stat[event.target.textContent] = 1
    // console.log(sum)
}

const onResultClick = () => {
    sectionResult.innerHTML = 
    `<p>Total: ${sum}</p><ul>${Object
        .entries(stat)
        .map(item => `<li>${item[0]} быда нажата ${item[1]} раз</li>`)
        .join('')}</ul>`
    console.log(stat)
}

list.addEventListener('click', onListClick)
btnResult.addEventListener('click', onResultClick)
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// ===================================================

// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
