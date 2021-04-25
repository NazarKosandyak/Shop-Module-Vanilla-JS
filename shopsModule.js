
let getBalance = document.querySelector('.blc')
let getCountBeer = document.querySelector('.br')
let getCountWine = document.querySelector('.wn')
let getCountPepsi = document.querySelector('.pps')
let getRadio = document.querySelector('.choice')
let getTextAdd = document.querySelector('.text1')
let getForm1 = document.forms.myMenu
let enterCountProd = document.querySelector('.num')

let getRadBeer = document.querySelector('.fbeer')
let getRadWine = document.querySelector('.fwine')
let getRadPepsi = document.querySelector('.fpepsi')

let getTextFirst = document.querySelector('.text1')
let getModal = document.querySelector('.modal')
let getTextModal = document.querySelector('.mt')
let getOutMess = document.querySelector('.ot')
let getBackImage = document.querySelector('.blockItem')
let FormMyCap = document.forms.myCap
let getCountInp;
getForm1.add.addEventListener('click', function (e) {
    e.preventDefault()
    getCountInp = getForm1.num.value
    if (getRadBeer.checked == true) {
        SHOP.buyBeer()
    }
    if (getRadWine.checked == true) {
        SHOP.buyWine()
    }
    if (getRadPepsi.checked == true) {
        SHOP.buyPepsi()
    }

})
let getChoice = document.querySelector('.choice')
let getBeer = document.querySelector('.playBeer')
let getWine = document.querySelector('.playWine')
let getPepsi = document.querySelector('.playPepsi')
getChoice.addEventListener('click', function (e) {
    if (e.target.classList.contains('rad')) {
        getBackImage.style.backgroundImage = `url(${e.target.value})`
        if (e.target.value == 'img/beer1.png'){
            getBeer.play()
            getWine.load()
            getPepsi.load()
            yourItem.textContent = 'Ви вибрали: Пиво'
            getBackImage.classList.add('showBlock')

        }
        if (e.target.value == 'img/wine.png') {
            getWine.play()
            getBeer.load()
            getPepsi.load()
            yourItem.textContent = 'Ви вибрали: Вино'
            getBackImage.classList.add('showBlock')

        }
        if (e.target.value == 'img/pep.png') {
            getPepsi.play()
            getWine.load()
            getBeer.load()
            yourItem.textContent = 'Ви вибрали: Пепсі'
            getBackImage.classList.add('showBlock')
        }
    }
})

let getCross = document.querySelector('.cross')
getCross.addEventListener('click', function () {
    getModal.classList.remove('show')
})
let getClose = document.querySelector('.close')
getClose.addEventListener('click', function () {
    getModal.classList.remove('show')
})
let buyProd = document.querySelector('.buy')
let buySound = document.querySelector('.buySound')
let yourItem = document.querySelector('.yourItem')

buyProd.addEventListener('click', function (e) {
    e.preventDefault()
    SHOP.confirmPurchase()
    getBackImage.style.backgroundImage = ``
    buySound.play()
    yourItem.textContent = ' '

})

const SHOP = (function () {
    let moneySpentForBeer = 0
    let moneySpentForWine = 0
    let moneySpentForPepsi = 0
    let bank = 2250
    let beerDrink = {
        name: "Beer",
        price: 30,
        count: 100
    }
    let wineDrink = {
        name: "Wine",
        price: 50,
        count: 45
    }
    let pepsiDrink = {
        name: "Pepsi",
        price: 20,
        count: 70
    }

    function buyBeer() {

        if (getCountInp <= beerDrink.count && getCountInp != false) {
            if (getRadBeer.checked) {
                beerDrink.count -= getCountInp
                bank += getCountInp * beerDrink.price
                getTextFirst.innerHTML += `Пиво : ${getCountInp} шт.\n`
                moneySpentForBeer = getCountInp * beerDrink.price
                console.log(moneySpentForBeer);
                getForm1.reset()
            }

        } else if (getCountInp == false) {
            getModal.classList.add('show')
            getTextModal.textContent = 'Ви нічого не ввели'
            getForm1.reset()
        } else {
            getModal.classList.add('show')
            getTextModal.textContent = `Вибачте , але на складі залишилось ${beerDrink.name} ${beerDrink.count} шт.`
            getForm1.reset()
        }
    }

    function buyWine() {
        if (getCountInp <= wineDrink.count && getCountInp != false) {
            if (getRadWine.checked) {
                wineDrink.count -= getCountInp
                bank += wineDrink.price * getCountInp
                getTextFirst.innerHTML += `Вино : ${getCountInp} шт.\n`
                moneySpentForWine = wineDrink.price * getCountInp
                console.log(moneySpentForWine);
                getForm1.reset()
            }
        } else if (getCountInp == false) {
            getModal.classList.add('show')
            getTextModal.textContent = 'Ви нічого не ввели'
            getForm1.reset()
        } else {
            getModal.classList.add('show')
            getTextModal.textContent = `Вибачте , але на складі залишилось ${wineDrink.name} ${wineDrink.count} шт.`
            getForm1.reset()
        }
    }

    function buyPepsi() {
        if (getCountInp <= pepsiDrink.count && getCountInp != false) {
            if (getRadPepsi.checked) {
                pepsiDrink.count -= getCountInp
                bank += pepsiDrink.count * getCountInp
                getTextFirst.textContent += `Пепсі : ${getCountInp} шт.\n`
                moneySpentForPepsi = pepsiDrink.price * getCountInp
                getForm1.reset()
            }
        } else if (getCountInp == false) {
            getModal.classList.add('show')
            getTextModal.textContent = 'Ви нічого не ввели'
            getForm1.reset()
        } else {
            getModal.classList.add('show')
            getTextModal.textContent = `Вибачте , але на складі залишилось ${pepsiDrink.name} ${pepsiDrink.count} шт.`
            getForm1.reset()
        }
    }

    function confirmPurchase() {
        if (getCountInp != undefined) {
            getBalance.value = 2250 + moneySpentForBeer + moneySpentForWine + moneySpentForPepsi, ' грн.'
            getCountBeer.value = beerDrink.count + ' шт.'
            getCountWine.value = wineDrink.count + ' шт.'
            getCountPepsi.value = pepsiDrink.count + ' шт.'
            getOutMess.textContent = getTextFirst.textContent + `\n Всього: ${moneySpentForBeer+moneySpentForWine+moneySpentForPepsi} грн. `
            getTextFirst.textContent = ''
            moneySpentForBeer = 0
            moneySpentForWine = 0
            moneySpentForPepsi = 0
        } else {
            alert("Відкрий консоль і починай уважно :)")
            throw new Error('Тримай помилку, треба заповнювати поле!')
        }
    }
    return {
        moneySpentForBeer: moneySpentForBeer,
        moneySpentForWine: moneySpentForWine,
        moneySpentForPepsi: moneySpentForPepsi,
        buyBeer: buyBeer,
        buyWine: buyWine,
        buyPepsi: buyPepsi,
        confirmPurchase: confirmPurchase
    }
})()