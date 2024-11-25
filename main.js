const title = "solo-learn-js"
const screens = "Простые, Сложные, Интерактивные"
const screenPrise = 100
const rollback = 10
const fullPrice = 50000
const adaptive = true

console.log(title)
console.log(fullPrice)
console.log(adaptive)

console.log(screens.length)

console.log("Стоимость верстки экратов " + screenPrise + " рублей/долларов/юаней")
console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/юаней")

console.log(screens.toLocaleLowerCase().split())

console.log("Процент отката посрелнику за работу " + fullPrice * (rollback / 100))