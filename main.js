'use strict'

const bookItems = document.querySelectorAll('.book')
const bookWrapper = document.querySelectorAll('.books')
const addBlock = document.querySelector('.adv')
const bookFix = document.querySelectorAll('.book > h2')[4]
const bookUlOne = document.querySelectorAll('.book > ul')[0]
const bookLi = bookUlOne.getElementsByTagName('li')
const bookUlTwo = document.querySelectorAll('.book > ul')[5]
const bookLiTwo = bookUlTwo.getElementsByTagName('li')
const newElemLi = document.createElement('li')
const bookUlSix = document.querySelectorAll('.book > ul')[2]
const bookLiSix = bookUlSix.getElementsByTagName('li')



bookItems[0].before(bookItems[1])
bookWrapper[0].append(bookItems[2])
bookItems[5].before(bookItems[3])

addBlock.remove()

bookFix.textContent = 'Книга 3. this и Прототипы Объектов'
bookFix.style.color = 'darkkhaki'

bookLi[9].after(bookLi[2])
bookLi[2].after(bookLi[5])
bookLi[4].before(bookLi[7])

bookLiTwo[1].after(bookLiTwo[9])
bookLiTwo[5].after(bookLiTwo[3])
bookLiTwo[8].after(bookLiTwo[6])

newElemLi.textContent = 'Глава 8: За пределами ES6'
bookUlSix.append(newElemLi)
bookLiSix[8].after(bookLiSix[10])










