basic.forever(function () {
    if (calliBot2E.readLineSensor(C2eSensor.links, C2eSensorStatus.hell)) {
        calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        basic.pause(500)
        if (calliBot2E.readLineSensor(C2eSensor.links, C2eSensorStatus.hell)) {
            calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, 10)
            basic.pause(500)
        } else {
            calliBot2E.motorStop(C2eMotor.links, C2eStop.Frei)
            basic.pause(500)
        }
    } else if (calliBot2E.readLineSensor(C2eSensor.rechts, C2eSensorStatus.hell)) {
        calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        basic.pause(500)
        if (calliBot2E.readLineSensor(C2eSensor.rechts, C2eSensorStatus.hell)) {
            calliBot2E.motor(C2eMotor.rechts, C2eDir.vorwärts, 10)
            basic.pause(500)
        } else {
            calliBot2E.motorStop(C2eMotor.rechts, C2eStop.Frei)
            basic.pause(500)
        }
    } else {
        calliBot2E.motor(C2eMotor.beide, C2eDir.vorwärts, 50)
    }
})
