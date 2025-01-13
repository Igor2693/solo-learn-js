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
console.dir(screens);


const appData = {
    rollback: 10,
    screenPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    titleProject: '',
    screens: [],
    adaptive: true,
    isError: false,
    fullPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addInput)
    },
    addTitle: function () {
        const titleText = title.textContent
        document.title = titleText
    },
    start: function () {
        if (!appData.isError) {
            appData.addScreens()
            appData.addServices()

            appData.addPrices()
            // appData.getServicePercentPrices()

            // appData.logger()
            console.log(appData)
            appData.showResult()
        }

    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.screens.screenNum
        totalCountOther.value = appData.servicePricesNumber
        fullTotalCount.value = appData.servicePricesNumber + appData.screenPrice
        totalCountRollback.value = appData.fullPrice



    },
    addScreens: function () {
        appData.isError = false;
        screens = document.querySelectorAll('.screen')
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                screenNum: input.value
            })

            for (let i = 0; i < screens.length; i++) {

                if (select.value === '' || input.value === '') {
                    appData.isError = true
                }
            }

        })
        console.log(appData.screens)

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addInput: function () {
        const newInput = screens[0].cloneNode(true)
        screens[screens.length - 1].after(newInput)
        console.log(newInput);

    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += (appData.screenPrice / 100) * appData.servicesPercent[key]
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        appData.fullPrice = +appData.servicePricesPercent + appData.servicePricesNumber + appData.screenPrice
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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





