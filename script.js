const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const secDigit = document.querySelector('.sec')
const minDigit = document.querySelector('.min')
const hourDigit = document.querySelector('.hour')

function setDate() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegree = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    secDigit.textContent = seconds

    const mins = now.getMinutes()
    const minsDegree = (mins / 60) * 360 + 90
    minHand.style.transform = `rotate(${minsDegree}deg)`
    minDigit.textContent = mins

    const hours = now.getHours()
    const hoursDegree = (hours / 12) * 360 + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
    hourDigit.textContent = hours
}

setInterval(setDate, 1000)
