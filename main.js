'use strict';

const title = document.getElementsByTagName('h1')[0]

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const buttonPlus = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input[type=range]')

const inputRangeValue = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')
console.log(screens);


const appData = {
    rollback: 10,
    screenPrice: 0,
    services: {},
    titleProject: '',
    screens: [],
    adaptive: true,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    init: function() {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addInput)
    },
    addTitle: function() {
        const titleText = title.textContent
        document.title = titleText
        console.log(titleText)
    },
    start: function () {
        appData.addScreens()
        
        // appData.asking()
        // appData.addPrices()
        // appData.getFullPrice();
        // appData.getServicePercentPrices()
        // appData.getTitle();

        // appData.logger()
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen')
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent           

            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value 
            })
            
        })   
        console.log(appData.screens);
         
    },
    addInput: function() {
        const newInput = screens[0].cloneNode(true)
        screens[screens.length -1 ].after(newInput)
        console.log(newInput);
        
    },
    asking: function () {
        for (let i = 0; i < 2; i++) {
            let nam
            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (appData.isNumber(name))

            let price = 0
            do {
                price = +prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },

    getTitle: function () {
        appData.title = appData.titleProject.trim()[0].toUpperCase() + appData.titleProject.trim().slice(1).toLocaleLowerCase();
    },

    getRollbackMessage: function () {
        if (appData.fullPrice >= 30000) {
            return 'Даем скидку в 10%'
        } else if (30000 >= appData.fullPrice && appData.fullPrice > 15000) {
            return 'Даем скидку в 5%'
        } else if (15000 >= appData.fullPrice && appData.fullPrice >= 0) {
            return 'Скидка не предусмотрена'
        } else {
            return 'Что то пошло не так'
        }
    },

    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key])
        }
        console.log(appData.screens);
    },

}

appData.init()





