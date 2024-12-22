'use strict'


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?", "12000")
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },

    getAllServicePrices: function () {
        let sum = 0
        for (let i = 0; i < 2; i++) {

            if (i == 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i == 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }

            sum += +prompt("Сколько это будет стоить?")
        }
        return sum
    },

    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },

    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase()
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },

    getRollbackMessage: function (price) {
        if (price > 30000) {
            return "Даем скидку 10%"
        } else if (price > 15000 && price <= 30000) {
            return "Даем скидку в 5%"
        } else if (price <= 15000 && price >= 0) {
            return "Скидка не предусмотрена"
        } else {
            return "Что-то пошло не так"
        }
    },

    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle()
        appData.logger()

    },
    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key])
        }
        console.log(appData.screens);
    }

}

appData.start()






