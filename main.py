pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)

zahajeno = False
nahodna_doba = 0
is_pin1 = False
is_pin2 = False
start = False
startovac()

def startovac():
    global zahajeno
    basic.pause(3000)
    zahajeno = True
    basic.show_icon(IconNames.HEART)
    basic.pause(250)
    basic.clear_screen()

    nahodna_doba = randint(3000, 10000)
    basic.pause(nahodna_doba)
    na_pozadi()

def on_forever():
    global is_pin1, is_pin2, start, zahajeno 
    is_pin1 = input.pin_is_pressed(TouchPin.P1)
    is_pin2 = input.pin_is_pressed(TouchPin.P2)

    if start == True:
        if is_pin1 == True:
            basic.show_number(1)
        if is_pin2 == True:
            basic.show_number(2)
        if is_pin1 == True and is_pin2 == True:
            basic.show_string("R")
        start = False
        zahajeno = False

    elif zahajeno == True:
        if is_pin1 == True:
            basic.show_string("B")
        if is_pin2 == True:
            basic.show_string("A")
        if is_pin1 == True and is_pin2 == True:
            basic.show_string("C")
        start = False
        zahajeno = False
basic.forever(on_forever)

def na_pozadi():
    global start
    start = True
    print(start)
    music.play_tone(Note.C, music.beat(1500))

control.in_background(na_pozadi)