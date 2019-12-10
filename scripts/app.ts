// Button HTML elements
var startstopbtn: HTMLElement
var resetbtn: HTMLElement

// Timing HTML elements
var timerdisplay: HTMLElement
var hoursdisplay: HTMLElement
var minutesdisplay: HTMLElement
var secondsdisplay: HTMLElement

// Internal state
var counting: boolean = false
var time: number = 0

window.addEventListener("DOMContentLoaded", function() {
    startstopbtn = document.getElementById("startstopbtn")
    resetbtn = document.getElementById("resetbtn")
    startstopbtn.addEventListener("click", toggleTimer)
    resetbtn.addEventListener("click", resetTimer)

    timerdisplay = document.getElementById("timer")
    hoursdisplay = document.getElementById("hours")
    minutesdisplay = document.getElementById("minutes")
    secondsdisplay = document.getElementById("seconds")
})

function updateButtonState(): void {
    if (counting) {
        // Should be a stop button
        startstopbtn.textContent = "Stop"
        if (!startstopbtn.classList.contains("active")) {startstopbtn.classList.add("active")}
    } else {
        // Should be a start button
        startstopbtn.textContent = "Start"
        if (startstopbtn.classList.contains("active")) {startstopbtn.classList.remove("active")}
    }
}

function setBlinking(state: boolean): void {
    if (state && !timerdisplay.classList.contains("blink")) {
        timerdisplay.classList.add("blink")
    } else if (!state && timerdisplay.classList.contains("blink")) {
        timerdisplay.classList.remove("blink")
    }
}

function stopTimer(): void {
    counting = false
    setBlinking(!counting)
}

function toggleTimer(): void {
    counting = !counting
    setBlinking(!counting)
    updateButtonState()
}

function resetTimer(): void {
    stopTimer()
    time = 0
    setTimer(time)
    updateButtonState()
}

function twoDigit(value: number): string {
    if (value < 10) {
        return "0" + value.toString()
    }
    return value.toString()
}

function setTimer(time: number): void {
    let seconds: number =  Math.floor(time % 60)
    let minutes: number = Math.floor(time / 60) % 60
    let hours: number = Math.floor(time / 60 / 60) % 60

    hoursdisplay.textContent = twoDigit(hours)
    minutesdisplay.textContent = twoDigit(minutes)
    secondsdisplay.textContent = twoDigit(seconds)

    document.title = `Stopwatch - ${twoDigit(hours)}:${twoDigit(minutes)}:${twoDigit(seconds)}`
}

function loop(): void {
    if (counting) {setTimer(time++)}
}

setInterval(loop,1000)