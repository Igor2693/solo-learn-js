'use strict';

const title = document.getElementsByTagName('h1')[0]

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const buttonPlus = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input[type=range]')
console.log(inputRange);


const inputRangeValue = document.querySelector('.rollback .range-value')
console.log(inputRangeValue);

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')
console.dir(screens);


const appData = {
    rollback: 0,
    screenPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    titleProject: '',
    screens: [],
    adaptive: true,
    isError: false,
    fullPrice: 0,
    countInput: 0,
    fullPriceRoll: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addInput)
        inputRange.addEventListener('input', appData.rollBackForm)
        inputRange.addEventListener('change', appData.rollBackForm)
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
        totalCount.value = appData.countInput
        totalCountOther.value = appData.servicePricesNumber
        fullTotalCount.value = appData.servicePricesNumber + appData.screenPrice
        totalCountRollback.value = appData.fullPriceRoll

        



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
                screenNum: input.value,
                count: +input.value
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
            appData.countInput += screen.count
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += (appData.screenPrice / 100) * appData.servicesPercent[key]
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        } 
        
        appData.fullPrice = +appData.servicePricesPercent + appData.servicePricesNumber + appData.screenPrice
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        appData.fullPriceRoll = appData.fullPrice + appData.servicePercentPrice       

    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        console.log();
        
    },
    rollBackForm: function(event) {
        inputRangeValue.textContent = event.target.value
        appData.rollback = +inputRangeValue.textContent
    },

    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key])
        }
        console.log(appData.screens);
    },

}

appData.init()





