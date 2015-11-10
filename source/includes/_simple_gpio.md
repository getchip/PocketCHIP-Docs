# Simple GPIO Experiments

CHIP has several General Purpose Input/Output (GPIO) pins available for you to build around. If you want to access them in a very primitive way, just to confirm their existence, here's some things to try.

## Requirements
  * CHIP
  * Jumper Wire
  * SSH or serial connection to CHIP or
  * Monitor and keyboard

## How You See GPIO
There are eight (8) GPIO pins always available for connecting CHIP to the sense-able world. These are in the middle of the right header, U14, Pins 13-20, labeled XIO-P0 to P7: 

![Pinout diagram for CHIP](wiki:chip_alpha_v02_pinouts.png?500)

## How The System Sees GPIO
There is a sysfs interface available for the GPIO. This just means you can access the GPIO states in a file-system-like manner. For example, you can reference XIO-P0 using this path:

```shell
  /sys/class/gpio/gpio408/
```

The number is somewhat unfortunate, since the `sysfs` names do not match the labels on our diagram! But is not too hard to translate. PinsXIO-P0 to P7 linearly map to gpio408 to gpio415.

## Some GPIO Switch Action
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

## Some GPIO Output
You could also change the mode of a pin from “in” to “out”

```shell
  echo out > /sys/class/gpio/gpio415/direction
```

Now that it's in output mode, you can write a value to the pin:
```shell
  echo 1 > /sys/class/gpio/gpio415/value
```

## Enough IO

When you are done experimenting, you can tell the system to stop listening to the gpio pin:
```shell
  echo 415 > /sys/class/gpio/unexport
```

## Learn More
You can learn a bit more about GPIO and Linux [here:](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)
