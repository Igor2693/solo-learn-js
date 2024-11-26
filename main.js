'use strict'
const title = prompt("Как называется ваш проект?")
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
const screenPrise = +prompt("Сколько будет стоить данная работа?", "12000")
const rollback = 10

const adaptive = confirm("Нужен ли адаптив на сайте?")
const service1 = prompt("Какой дополнительный тип услуги нужен")
const servicePrice1 = +prompt("Сколько это будет стоить?")
const service2 = prompt("Какой дополнительный тип услуги нужен")
const servicePrice2 = +prompt("Сколько это будет стоить?")
const fullPrice = screenPrise + servicePrice1 + servicePrice2
const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))

if (fullPrice > 30000) {
    console.log("Даем скидку 10%")
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%")
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена")
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так :(")
}


console.log(title)
console.log(fullPrice)
console.log(adaptive)
console.log(screens.length)
console.log("Стоимость верстки экратов " + screenPrise + " рублей/долларов/юаней")
console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/юаней")
console.log(screens.toLocaleLowerCase().split())
console.log(servicePercentPrice)
console.log(Math.ceil(servicePercentPrice))