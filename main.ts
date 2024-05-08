input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    Degrees = -1440
    magicbit.StepperDegree(magicbit.Steppers.STPM1, Degrees)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    Degrees = 1440
    magicbit.StepperDegree(magicbit.Steppers.STPM1, Degrees)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
let Degrees = 0
Degrees = 0
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.setBrightness(250)
sensors.i2cLcdInit(39)
sensors.seti2cLcdBacklight(LcdBacklight._on)
sensors.i2cLcdDisplay_Control(Item._on)
sensors.i2cLcdDisplay_Control(Item._clear)
basic.forever(function () {
    sensors.i2cLcdShowString(1, 4, "Welcome To")
    basic.pause(100)
    sensors.i2cLcdShowString(2, 2, "TEKY  HOSPITAL")
    sensors.i2cLcdShowString(1, 15, "<-")
    sensors.i2cLcdShowString(1, 1, "->")
    basic.pause(500)
    sensors.i2cLcdShowString(1, 15, "  ")
    sensors.i2cLcdShowString(1, 1, "  ")
    basic.pause(500)
})
basic.forever(function () {
    if (sensors.sensor_illumination(AnalogPin.P0) <= 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
