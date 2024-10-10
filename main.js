const title = prompt('Как называется наш проект?')
const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные')
const screenPrice = +prompt('Сколько будет стоить данная работа?','12000')
const rollback = 10
const adaptive = confirm('Нужен ли адаптив на сайте?')
const service1 = prompt('Какой дополнительный тип услуги нужен?')
const servicePrice1 = +prompt('Сколько это будет стоить?')
const service2 = prompt('Какой дополнительный тип услуги нужен?')
const servicePrice2 = +prompt('Сколько это будет стоить?')
const fullPrice = screenPrice + servicePrice1 + servicePrice2
const servicePercentPrice = fullPrice * rollback / 100
console.log(Math.ceil(servicePercentPrice))

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%')
} if (30000 > fullPrice && fullPrice >= 15000) {
    console.log('Даем скидку в 5%')
} if (15000 > fullPrice && fullPrice >= 0) {
    console.log('Скидка не предусмотерна')
} if (fullPrice < 0) {
    console.log('Что-то пошло не так')
}



console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)

console.log(title)
console.log(screenPrice)
console.log(adaptive)
console.log(fullPrice)
console.log(screens.length)


console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани \n' + 'Стоимость разработки сайта ' + fullPrice + 'рублей/долларов/гривен/юани')

console.log(Array(screens.toLowerCase()))

console.log('Процент отката посреднику за работу ' + fullPrice * (rollback / 100))

