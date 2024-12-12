'use strict'
let title
let screens
let screenPrice
let rollback = 10
let adaptive
let allServicePrices
let fullPrice
let servicePercentPrice

let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить данная работа?", "12000")
    }

    adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {

        if (i == 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i == 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += +prompt("Сколько это будет стоить?")
    }
    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

function getFullPrice() {
    return screenPrice + allServicePrices
}


const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLocaleLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getRollbackMessage = function (price) {
    if (price > 30000) {
        return "Даем скидку 10%"
    } else if (price > 15000 && price <= 30000) {
        return "Даем скидку в 5%"
    } else if (price <= 15000 && price >= 0) {
        return "Скидка не предусмотрена"
    } else {
        return "Что-то пошло не так"
    }
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice))
console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)
console.log(allServicePrices)


let lang = prompt("Введите язык", "ru/eng")

if (lang == "ru") {
    console.log("понедельник, вторник, четыерг...")
} else if (lang == "eng") {
    console.log("wensday, tusday...")
}

switch (true) {
    case lang == "ru":
        console.log("понедельник, вторник, четверг...")
        break
    case lang == "eng":
        console.log("wensday, tusday...")
        break
    default:
        console.log("Вы ввели неправильнок значение")
}

let namePerson = prompt("Введите имя", "Игорь или Ваня")

console.log(
    namePerson === "Игорь" ? "Директор" : namePerson === "Ваня" ? "Преподователь" : "Студент"
)

// namePerson === "Игорь" ? console.log("Директор") : console.log("Студент")
// namePerson === "Ваня" ? console.log("Преподаватель") : ("Студент")

