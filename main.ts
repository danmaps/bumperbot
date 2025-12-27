input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.baDing.playUntilDone()
    crickit.motor1.run(50)
    crickit.motor2.run(50)
})
input.onGesture(Gesture.Shake, function () {
    crickit.motor1.stop()
    crickit.motor2.stop()
    crickit.motor1.setInverted(true)
    crickit.motor2.setInverted(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    music.powerDown.playUntilDone()
    crickit.motor1.stop()
    crickit.motor2.stop()
    crickit.motor1.setInverted(true)
    crickit.motor2.setInverted(true)
})
music.setVolume(20)
music.magicWand.play()
light.showRing(
`green red green red green green red green red green`
)
