# Powering CHIP

The single most important thing to using any electronic device is getting electricity to the right places. This tutorial covers how to turn CHIP "on". This might seem so straightforward that it doesn't deserve several paragraphs, but CHIP is pretty clever, so there's actually a few things worth knowing.

## What's It Need?

In general, CHIP is powered by a 5-volt source like a USB port or phone charger, and draws about 300mA peak (at boot time), runs on around 100mA, and rests with around 80mA with the processor totally unloaded. This may be more than you need to know if you just want to plug it in to the wall, but, as you build projects with CHIP, you'll be happy to know there's a lot of ways to get the electricity flowing.

## How Do I Know CHIP Is On?

CHIP is silent. It doesn't take much energy, so it's not very hot. It has no discernible smell. As a result, many of your senses are not great indicators that it is working. There are two LEDs next to the USB micro connector. When CHIP is on, you should see the `PWR` LED light up nice and bright.

## Power From The Wall

The CHIP's microUSB connector is used to provide power from most any USB power source. USB wall-wart adapters are probably littered all over your house. If for some reason you don't have one, you can buy one from us or any electronics retailer. Just plug a USB-A-to-microUSB-B cable (that's the same cable most phones, tablets, and whatnot use to charge) into the wall-wart and CHIP, and you'll see the `PWR`LED light up (forgive the underexposure, but you can see a small pink LED under the green one, and FWIW, LED colors may be different on your CHIP!).

![CHIP indicator LEDs](wiki:chip_ledon.jpg?400)

## Power From a Battery

CHIP can also be battery powered. Specifically, any single cell (1S) 3.7V Lithium Polymer (LiPo) battery with a 2-pin JST-PH 2.0mm end can be connected to the JST-PH socket.

![CHIP powered by a battery. Slick!](wiki:chip_battery.jpg?400)

The JST can only plug it in one way, so if you are having a hard time lining things up, turn it around! Needless to say, do not force the battery connector into the socket if something doesn't feel right!


What's really great is that if you plug in to a charger and plug in a battery, the battery will charge - all the power management is on CHIP itself. Roughly, it takes about four to six hours to charge a 3000mAh LiPo battery from a 5V 1A power source. Also, our delightful little Power Management IC, the AXP209, handles pass-through power, so while on and charging a battery, C.H.I.P. is basically running on a uninterruped power supply -- If charge power fails, C.H.I.P. seamlessly switches onto battery power without shutting off.

## More Battery Details

Besides the JST connector, you can connect a battery to header U13, pin 8 for BAT+, and U13 pin 4 for Ground (or any GND, really).

Some LiPo batteries have three wire connectors. The third (usually yellow) wire is a temperature sensor that helps regulate battery charging. That can be connected to U13, pin 6.

There are some battery-specific configurations accessible through the AXP209 PMIC. For very advanced users, you may want to tweak charge rates, completion voltages, temperature sensor type, and whatnot to match the battery you select for your C.H.I.P.

![Pinout diagram for CHIP](wiki:chip_alpha_v02_pinouts.png?500)

## Power From Some Other Power Source

Electricity can be generated in a lot of ways, so if you can make +5V (up to 6.5V is ok) happen with enough current†, CHIP makes it easy to use. Just plug your +5 V and ground into header U13 pins 2 (Charge Input) and 4 (Ground) respectively and bask in the glow of the `PWR` LED indicating power.

†: *minimum useful current depends on what you have your C.H.I.P. doing, but at least 500mA is a good place to start, and then add for any additional draw from attached USB devices.*

## Power Limitations

The USB micro connector only provides up to 500mA by default.
The CHG-IN connections on U13.2 can take +5V up to +6.5V.

## Power Up and Power Down

When you connect a power source, CHIP will boot up. If CHIP is shutdown, but connected to power, you can hold the tiny button for about one second to boot.
If you want to power down, there's a few ways to do this.

• Use software to shutdown (or restart).
The best way to power down is to use the terminal command

```shell
  poweroff
```

This ensures that the memory will be best protected.

• Unplug the USB micro cable and/or battery, or whatever power source you're using.
This works, though it may cause memory instability over time.memory won't get corrupted.

• Use the tiny button.
CHIP has a small button that you can hold for 10 seconds, which will turn CHIP off.

• Use *your own* button.
U13, pin 10 can be used to connect a switch of your choice which can turn CHIP on or off when shorted to GND. The behavior is the same as the onboard tiny button.

## User Configurable Power Management.

Because CHIP is highly configurable and the scope of this document is topical, it is sufficient to say that there are several ways to adjust power management using the power of programming, so if you don't like what you read so far, you can probably change it.

## Board Labels: ACIN-5V vs CHARGE-IN

These are exactly the same thing. A great debate was had (inside Gus' head) about whether it would be less confusing for folks to stick with ACIN, which is the pin naming used on the AXP209, or use a reasonable name that makes sense for the actual function of the pin. If you see "ACIN" anywhere, don't worry, it's not AC. Don't plug it into a wall. Don't go buy a 5VAC transformer. Just pretend it says what it should: CHARGE-IN.
