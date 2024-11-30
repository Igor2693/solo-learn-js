'use strict'
const titleProject = prompt("Как называется ваш проект?")
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000")
const rollback = 10
const adaptive = confirm("Нужен ли адаптив на сайте?")
const service1 = prompt("Какой дополнительный тип услуги нужен")
const servicePrice1 = +prompt("Сколько это будет стоить?")
const service2 = prompt("Какой дополнительный тип услуги нужен")
const servicePrice2 = +prompt("Сколько это будет стоить?")
// const fullPrice = screenPrise + servicePrice1 + servicePrice2
// const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))

const getAllServicePrices = function (a, b) {
    return servicePrice1 + servicePrice2
}
const allServicePrices = getAllServicePrices()

function getFullPrice() {
    return screenPrice + allServicePrices
}
const fullPrice = getFullPrice()

const getTitle = function () {
    return titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLocaleLowerCase()
}
const title = getTitle()

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}
const servicePercentPrice = getServicePercentPrices()
console.log(servicePercentPrice)

const showTypeOf = function (type) {
    console.log(type, typeof (type))
}

const getRollbackMessage = function (price) {
    if (price > 30000) {
        console.log("Даем скидку 10%")
    } else if (price > 15000 && price <= 30000) {
        console.log("Даем скидку в 5%")
    } else if (price <= 15000 && price >= 0) {
        console.log("Скидка не предусмотрена")
    } else {
        console.log("Что-то пошло не так")
    }
}

showTypeOf(title)
showTypeOf(screens)

getRollbackMessage(fullPrice)

getServicePercentPrices()






