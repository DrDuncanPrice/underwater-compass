input.onPinPressed(TouchPin.P1, function () {
    button = !(button)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let bearing = 0
let button = false
button = false
while (!(button)) {
    basic.showString("PRESS BUTTON")
}
input.calibrateCompass()
button = false
basic.forever(function () {
    bearing = input.compassHeading()
    if (button) {
        for (let index = 0; index < 4; index++) {
            basic.pause(1000)
            bearing = bearing + input.compassHeading()
        }
        bearing = Math.round(bearing / 25) * 5
        basic.showNumber(bearing)
    } else {
        if (bearing >= 338 || bearing <= 22) {
            images.arrowImage(ArrowNames.North).showImage(0)
        }
        if (bearing >= 23 && bearing <= 67) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
        }
        if (bearing >= 68 && bearing <= 112) {
            images.arrowImage(ArrowNames.West).showImage(0)
        }
        if (bearing >= 113 && bearing <= 157) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
        }
        if (bearing >= 158 && bearing <= 202) {
            images.arrowImage(ArrowNames.South).showImage(0)
        }
        if (bearing >= 203 && bearing <= 247) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
        }
        if (bearing >= 248 && bearing <= 292) {
            images.arrowImage(ArrowNames.East).showImage(0)
        }
        if (bearing >= 292 && bearing <= 337) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
        }
    }
})
