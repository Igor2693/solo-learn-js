const title = 'Изучение JS'
const screens = 'Простые, Сложные, Интерактивные'
const screenPrice = 10
const rollback = 10
const fullPrice = 50000
const adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)

console.log(screens.length)

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани \n' + 'Стоимость разработки сайта ' + fullPrice + 'рублей/долларов/гривен/юани')

console.log(Array(screens.toLowerCase()))

console.log('Процент отката посреднику за работу ' + fullPrice * (rollback / 100))

console.log(Number.isSafeInteger(fullPrice))
console.log(Number.isSafeInteger(Infinity))