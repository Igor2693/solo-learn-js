'use strict';

const title = document.getElementsByTagName('h1')[0]

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const buttonPlus = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const allItems = document.querySelectorAll('.other-items')


const inputRange = document.querySelector('.rollback input[type=range]')
const inputRangeValue = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let blockScreens = document.querySelectorAll('.screen')

const allInput = document.querySelectorAll('input[type=text]')



const appData = {
    rollback: 0,
    screenPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    titleProject: '',
    screens: [],
    adaptive: true,
    fullPrice: 0,
    isError: false,
    servicePercentPrices: 0,
    serviceNumberPrices: 0,
    fullServicesPercent: 0,
    screenCount: 0,
    rollbackPrice: 0,
    init: function () {
        document.title = title.textContent
        startBtn.addEventListener('click', this.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('input', appData.addRange)
        inputRange.addEventListener('change', appData.addRange)
        resetBtn.addEventListener('click', appData.reset)
    },
    start: function () {
        appData.checkError()
        if (appData.isError == false) {
            appData.addScreen()
            appData.addServices()
            appData.addPrices()
            appData.getFullPrice();
            appData.getPriceRollback()
            appData.showResult()
            appData.disable()

            appData.logger()
        } else {
            console.log('ошибка');
        }
    },
    reset: function () {
        blockScreens.forEach(function (item) {
            const select = item.querySelector('select')
            const input = item.querySelector('[type=text]')
            input.disabled = false
            select.disabled = false
        })
        allItems.forEach(function (item) {
            const check = item.querySelector('[type=checkbox]')
            check.disabled = false
        })
        buttonPlus.disabled = false
        startBtn.style.display = 'block'
        resetBtn.style.display = 'none'

        const rightInput = document.querySelectorAll('.total-input')
        rightInput.forEach(function (item) {
            item.value = 0
        })



    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.screenCount
        totalCountOther.value = appData.serviceNumberPrices
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.rollbackPrice

    },
    addScreen: function () {
        blockScreens = document.querySelectorAll('.screen')
        blockScreens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screenCount += +input.value
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
        })
    },
    addScreenBlock: function () {
        const newBlock = blockScreens[0].cloneNode(true)
        blockScreens[0].after(newBlock)

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.servicesPercent) {
            appData.servicePercentPrices += appData.servicesPercent[key]
        }
        for (let key in appData.servicesNumber) {
            appData.serviceNumberPrices += appData.servicesNumber[key]
        }

        // appData.rollbackPrice = appData.fullPrice + ((appData.fullPrice / 100) * appData.rollback)

    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.serviceNumberPrices + ((appData.screenPrice / 100) * appData.servicePercentPrices)
    },
    getPriceRollback: function () {
        appData.rollbackPrice = appData.fullPrice + ((appData.fullPrice / 100) * appData.rollback)
    },
    addRange: function (event) {
        inputRangeValue.textContent = +event.target.value
        appData.rollback = +event.target.value
    },
    checkError: function () {
        blockScreens = document.querySelectorAll('.screen')
        blockScreens.forEach(function (screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')

            for (let i = 0; i < blockScreens.length; i++) {
                if (select.value == '' || input.value == '') {
                    appData.isError = true
                } else {
                    appData.isError = false
                }
            }
        })
    },
    disable: function () {
        blockScreens.forEach(function (item) {
            const select = item.querySelector('select')
            const input = item.querySelector('[type=text]')
            input.disabled = true
            select.disabled = true
        })
        allItems.forEach(function (item) {
            const check = item.querySelector('[type=checkbox]')
            check.disabled = true
        })
        buttonPlus.disabled = true
        startBtn.style.display = 'none'
        resetBtn.style.display = 'block'


    },
    logger: function () {
        console.log(appData);
        console.log(appData.isError);
    },
}

appData.init()





