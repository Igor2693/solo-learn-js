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

let cmsBlock = document.querySelector('.cms')
let cmsCheck = document.getElementById('cms-open')
let cmsSelect = document.querySelector('.hidden-cms-variants')
let cmsSel = document.getElementById('cms-select')


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
    cmsNumber: 0,
    init: function () {
        startBtn.addEventListener('click', this.start.bind(this))
        buttonPlus.addEventListener('click', this.addScreenBlock.bind(this))
        inputRange.addEventListener('input', this.addRange.bind(this))
        inputRange.addEventListener('change', this.addRange.bind(this))
        resetBtn.addEventListener('click', this.reset.bind(this))
        cmsBlock.addEventListener('click', this.cms.bind(this))
        document.title = title.textContent
        // appData.cms()

    },
    start: function () {
        this.checkError()
        if (this.isError == false) {
            this.addScreen()
            this.addServices()
            this.addPrices()
            this.getFullPrice();
            this.getPriceRollback()
            this.showResult()
            this.disable()

            this.logger()
        } else {
            console.log('ошибка');
        }
    },
    reset: function () {
        blockScreens.forEach(function (item, index) {
            const select = item.querySelector('select')
            const input = item.querySelector('[type=text]')
            input.disabled = false
            select.disabled = false
            input.value = ''
            select.value = ''
            appData.screens.splice(0, 1)
            console.log(appData.screens);
        })

        allItems.forEach(function (item) {
            const check = item.querySelector('[type=checkbox]')
            check.disabled = false
            if (check.checked) {
                check.checked = !check.checked
            }
        })
        buttonPlus.disabled = false
        startBtn.style.display = 'block'
        resetBtn.style.display = 'none'

        const rightInput = document.querySelectorAll('.total-input')
        rightInput.forEach(function (item) {
            item.value = 0
        })
        appData.clearScreens()
        appData.clearCount()
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
    clearScreens: function () {
        blockScreens.forEach(function (item, index) {
            if (index > 0) {
                item.remove()
            }
        })
    },
    clearCount: function () {
        appData.screenCount = 0
        appData.fullPrice = 0
        appData.rollbackPrice = 0
        appData.screenPrice = 0
        appData.servicesNumber = {}
        appData.servicesPercent = {}
        appData.serviceNumberPrices = 0
        appData.servicePercentPrices = 0
    },
    cms: function () {
        if (cmsCheck.checked) {
            cmsSelect.style.display = 'flex'
        }
        if (!cmsCheck.checked) {
            cmsSelect.style.display = 'block'
        }
        appData.selectedChoose()
        // for (let i = 0; i < 1; i++) {
        //     const selectedOption = cmsSel.options[cmsSel.selectedIndex]
        //     console.log(i);
        //     console.log(selectedOption);
        // }
        // cmsBlock.forEach(function (item) {
        //     const cmsCheck = item.getElementById('cms-open')
        //     if (cmsCheck.checked) {
        //         cmsSelect.style.display = 'flex'
        //     }
        // })
        // const cmsCheck = document.getElementById('cms-open')

        console.log();

    },
    selectedChoose: function () {
        const select = cmsSelect.querySelector('#cms-other-input')
        console.log(select);

        const selectedOption = cmsSel.options[cmsSel.selectedIndex]
        console.log(selectedOption);
        if (selectedOption.value = 50) {
            appData.cmsNumber = 50
        }
        if (selectedOption.value = 'other') {
            select.style.display = 'flex'
        }
        console.log(this.cmsNumber);

    },
    logger: function () {
        console.log(appData);
        console.log(appData.isError);
    },
}

appData.init()


