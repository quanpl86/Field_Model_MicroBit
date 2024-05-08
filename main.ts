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
/**
 * Các tính năng của mô hình Hospital:
 * 
 * - Nâng hạ thang máy: Dựa vào điều khiển chuyển động của động cơ bước (STEP Motor).
 * 
 *    + Nhấn nút A trên mạch Micro:Bit để nâng thang máy.
 * 
 *    + Nhấn nút B trên mạch Micro:Bit để hạ thang máy.
 * 
 * - Hiển thị trên màn hình LCD 16X4
 * 
 *    + Màn hình LCD hiển thị văn bản:
 * 
 *     ->   Welcome To  <-
 * 
 *       TEKY HOSPITAL
 * 
 * - Đèn tự động: Tắt/ mở theo điều kiện ánh sáng từ môi trường với cảm biến ánh sáng.
 * 
 * ====================================================================
 * 
 * - Cài đặt thư viện mở rộng để lập trình cho mạch mở rộng: mạch Magic:bit
 * 
 * magicbit=github:emakefun/pxt-magicbit.
 * 
 * - Thông tin về thư viện: https://github.com/emakefun/pxt-magicbit/tree/ee1b367329051c8b117ca4deb5f3a467e8d12720
 */
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
