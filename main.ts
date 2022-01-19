pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let zahajeno = false
let nahodna_doba = 0
let is_pin1 = false
let is_pin2 = false
let start = false
startovac()
function startovac() {
    
    basic.pause(3000)
    zahajeno = true
    basic.showIcon(IconNames.Heart)
    basic.pause(250)
    basic.clearScreen()
    let nahodna_doba = randint(3000, 10000)
    basic.pause(nahodna_doba)
    na_pozadi()
}

basic.forever(function on_forever() {
    
    is_pin1 = input.pinIsPressed(TouchPin.P1)
    is_pin2 = input.pinIsPressed(TouchPin.P2)
    if (start == true) {
        if (is_pin1 == true) {
            basic.showNumber(1)
        }
        
        if (is_pin2 == true) {
            basic.showNumber(2)
        }
        
        if (is_pin1 == true && is_pin2 == true) {
            basic.showString("R")
        }
        
        start = false
        zahajeno = false
    } else if (zahajeno == true) {
        if (is_pin1 == true) {
            basic.showString("B")
        }
        
        if (is_pin2 == true) {
            basic.showString("A")
        }
        
        if (is_pin1 == true && is_pin2 == true) {
            basic.showString("C")
        }
        
        start = false
        zahajeno = false
    }
    
})
function na_pozadi() {
    
    start = true
    console.log(start)
    music.playTone(Note.C, music.beat(1500))
}

control.inBackground(na_pozadi)
