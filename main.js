'use strict';

const newTitle = document.getElementsByTagName('h1')[0]
console.log(newTitle);

const result = document.getElementsByClassName('handler_btn')[0]
const reset = document.getElementsByClassName('handler_btn')[1]
console.log(result);
console.log(reset);

const btnPlus = document.querySelector('.screen-btn')
console.log(btnPlus);

const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
console.log(itemsPercent);
console.log(itemsNumber);

const inputRoll = document.querySelector('.rollback input[type=range]')
console.log(inputRoll);

const spanValue = document.querySelector('.rollback .range-value')
console.log(spanValue);

const sumPrice = document.getElementsByClassName('total-input')[0]
console.log(sumPrice);
const sumScreens = document.getElementsByClassName('total-input')[1]
console.log(sumScreens);
const sumServes = document.getElementsByClassName('total-input')[2]
console.log(sumServes);
const sumResult = document.getElementsByClassName('total-input')[3]
console.log(sumResult);
const sumRollback = document.getElementsByClassName('total-input')[4]
console.log(sumRollback);

let blockScreens = document.querySelectorAll('.screen')
console.log(blockScreens);




// const appData = {
//     rollback: 10,
//     screenPrice: 0,
//     services: {},
//     titleProject: '',
//     screens: [],
//     adaptive: true,
//     fullPrice: 0,
//     allServicePrices: 0,
//     servicePercentPrice: 0,

//     start: function () {
//         appData.asking()
//         appData.addPrices()
//         appData.getFullPrice();
//         appData.getServicePercentPrices()
//         appData.getTitle();

//         appData.logger()
//     },
//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num)
//     },

//     asking: function () {
//         do {
//             appData.titleProject = prompt('Как называется ваш проект?')
//         } while (appData.isNumber(appData.titleProject))

//         for (let i = 0; i < 2; i++) {
//             let name
//             do {
//                 name = prompt('Какие типы экранов нужно разработать?')
//             } while (appData.isNumber(name))

//             let price = 0

//             do {
//                 price = prompt('Сколько будет стоить данная работа?')
//             } while (!appData.isNumber(price))

//             appData.screens.push({ id: i, name: name, price: price })

//         }

//         for (let i = 0; i < 2; i++) {
//             let name
//             do {
//                 name = prompt('Какой дополнительный тип услуги нужен?')
//             } while (appData.isNumber(name))

//             let price = 0
//             do {
//                 price = +prompt('Сколько это будет стоить?')
//             } while (!appData.isNumber(price))

//             appData.services[name] = +price
//         }
//         appData.adaptive = confirm('Нужен ли адаптив на сайте?')
//     },
//     addPrices: function () {
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price
//         }

//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key]
//         }
//     },

//     getFullPrice: function () {
//         appData.fullPrice = +appData.screenPrice + appData.allServicePrices
//     },

//     getServicePercentPrices: function () {
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },

//     getTitle: function () {
//         appData.title = appData.titleProject.trim()[0].toUpperCase() + appData.titleProject.trim().slice(1).toLocaleLowerCase();
//     },

//     getRollbackMessage: function () {
//         if (appData.fullPrice >= 30000) {
//             return 'Даем скидку в 10%'
//         } else if (30000 >= appData.fullPrice && appData.fullPrice > 15000) {
//             return 'Даем скидку в 5%'
//         } else if (15000 >= appData.fullPrice && appData.fullPrice >= 0) {
//             return 'Скидка не предусмотрена'
//         } else {
//             return 'Что то пошло не так'
//         }
//     },

//     logger: function () {
//         for (let key in appData) {
//             console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key])
//         }
//         console.log(appData.screens);
//     },

// }

// appData.start()





