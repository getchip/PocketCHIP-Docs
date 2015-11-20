# Making Stuff
## GPIO
### From Commandline
CHIP has several General Purpose Input/Output (GPIO) pins available for you to build around. If you want to access them in a very primitive way, just to confirm their existence, here's some things to try.

### Requirements
  * CHIP
  * Jumper Wire
  * LED
  * SSH or serial connection to CHIP or
  * Monitor and keyboard

### How You See GPIO
There are eight (8) GPIO pins always available for connecting CHIP to the sense-able world. These are in the middle of the right header, U14, Pins 13-20, labeled XIO-P0 to P7: 

![Pinout diagram for CHIP](images/chip_alpha_v02_pinouts.jpg)

### How The System Sees GPIO
There is a sysfs interface available for the GPIO. This just means you can access the GPIO states in a file-system-like manner. For example, you can reference XIO-P0 using this path:

```shell
  /sys/class/gpio/gpio408/
```

The number is somewhat unfortunate, since the `sysfs` names do not match the labels on our diagram! But is not too hard to translate. PinsXIO-P0 to P7 linearly map to gpio408 to gpio415.

### Some GPIO Switch Action
These lines of code will let us read values on pin XIO-P7. First, we tell the system we want to listen to this pin:

```shell
  echo 415 > /sys/class/gpio/export
```

View the mode of the pin. It should return “in”:

```shell
  cat /sys/class/gpio/gpio415/direction
```

Connect a jumper wire between Pin 20 (XIO-P7) and Pin 39 (GND). Now use this line of code to read the value:

```shell
  cat /sys/class/gpio/gpio415/value
```

### Some GPIO Output
You could also change the mode of a pin from “in” to “out”

```shell
  echo out > /sys/class/gpio/gpio415/direction
```

Now that it's in output mode, you can write a value to the pin:
```shell
  echo 1 > /sys/class/gpio/gpio415/value
```
If you attach an LED to the pin and ground, the LED will illuminate according to your control messages.

### Enough IO
When you are done experimenting, you can tell the system to stop listening to the gpio pin:
```shell
  echo 415 > /sys/class/gpio/unexport
```

### Learn More
You can learn more about GPIO and Linux [here:](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)

## GPIO Types
There are many different types of sensors that can be used with GPIO

### Switches
Switches provide on/off state input from the physical world to your computer. You can [use the commandline interface](#Some GPIO Switch Action) to listen to switch values. A python library was created for the [ChippyRuxpin project](https://github.com/NextThingCo/ChippyRuxpin) if you need a higher-level example in python. 

### LEDs
LEDs can be illuminated and turned off using the [commandline interface](#Some GPIO Output). Refer to the [ChippyRuxpin project](https://github.com/NextThingCo/ChippyRuxpin) on a good example on how to manipulate the commandline using python.

### Relays
Relays are special hardware bridges used to switch higher voltage electronics, protecting CHIP from the high voltages that would destroy it.  Using a relay board is programmatically no different from using switches.

### Continuous sensors (temperature, pots, FSR, photoresistor, etc)
To learn about using analog sensors, see the [ADC section](#Analog to Digital conversion)

## Expanding GPIO
If you don't need to drive an LCD, you can use those pins for more, faster GPIO if you want to. These are the pins numbered 13-40 on U13 to act as GPIO to increase the number of available GPIO pins. Documentation on this process is forthcoming!

![Pinout diagram for CHIP](images/chip_alpha_v02_pinouts.jpg)

## Analog to Digital conversion
Pin 9 on header U14 provides a link for analog to digital conversion. There is no driver for this link yet.

![Pinout diagram for CHIP](images/chip_alpha_v02_pinouts.jpg)

## I2C
Some info about how I2C is implemented on CHIP and DERP

## OneWire
Some info about how One Wire is implemented on CHIP

## UART
Some info about how UART is implemented on CHIP

## LCD
Some info about how LCDs are implemented on CHIP

## Project Examples
Here are some projects we've made

### Chippy Ruxpin
The talking bear. As wise or as foolish as you desire.

### Another Example
Another interesting thing to do with hardware!
