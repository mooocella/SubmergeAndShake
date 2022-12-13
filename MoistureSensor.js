let moisture = 0
function vibrate () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    moisture = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 100)
    basic.showNumber(Math.round(moisture))
    basic.clearScreen()
    while (40 <= moisture && moisture <= 65) {
        vibrate()
        break;
    }
})