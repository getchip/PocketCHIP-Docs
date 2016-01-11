# Troubleshooting FAQ

## Sudden Shutdown (Brown-out)
***Problem:*** I attached a mouse and keyboard, and my CHIP suddenly turned off.

***Fixes:*** Like most tiny computers, the USB port on CHIP provides a limited amount of power. When you plug in a keyboard and an optical mouse, for example, they will draw too much current from CHIP, not leaving enough for the processor. As a result, CHIP will immediately shut down. There are a few ways to avoid this. 
 - Use a [powered USB hub](powered-usb-hub)
 - Use a [bluetooth keyboard and mouse](bluetooth-keyboard-and-mouse). Yes, this is a very specific solution, but a good one when you are only using the USB port for keyboard and mouse. Keeps your desk cleaner too!
 - Execute the command `sudo axp209 --no_limit` in the terminal before you attach your USB peripherals.

***Problem:*** My CHIP booted fine until it got to loading the desktop GUI, then it shut down.

***Fixes:*** This is usually the result of an underpowered power supply. We recommend a 5V power supply with a minimum 1A current rating. 
- You can find the current rating on your power supply's "Output" - it should read *1000 mA* or *1A* (or a higher number). You may need a magnifying glass to read it, but they all should have this info on the label!
- Instead of powering CHIP using the microUSB port, try using the [header pins](pin-headers) CHG-IN (U13-2) and GND (U13-1). 
- Add a [LiPo battery](power-from-a-battery). This provides enough extra current and power buffer to prevent this problem. 

## CHIP Won't Startup
***Problem:*** I pressed the start button, the lights come on, but nothing seems to happen. I have a monitor connected, and there's just a few lines of text and nothing else. Nothing!

***Fixes:*** It has been observed that this can happen if CHIP is trying to boot when too hot, or if the NAND has become corrupted. For example, if it's in a sealed enclosure in a hot place, and is rebooted after computationally heavy work. 
- **Fix 1** is to let CHIP rest for several minutes, then try again.
- **Fix 2** is to reflash CHIP with new firmware. This, of course, is the "nuclear option" because you will lose any files or data stored on CHIP.

## No Video Output
Problem: Monitor is attached, but there is no video on my monitor

Fixes: There are a few possible problems here
- **wrong TRRS arrangement**: try different ends of your cable. Make sure is subscribes to [this use of the tip, rings, and sleeve](about-the-trrs-connector)
- **PAL monitor**: CHIP outputs NTSC format video by default. You can change this, however, by following [this guide](ntsc-or-pal).
- **Video trace cut for mic in**: This is pretty unlikely, but if you are working with a used CHIP, it may be that the tip connector has been switched to [work as a microphone input](microphone-and-audio-input). Before you do fix this with a bit of solder, take a close look at your board to see if there is evidence of a score mark indicating the cut trace. 

## How to Contact Us
If you need more support, try our [forums](https://bbs.nextthing.co) or 
[email](mailto:ahoyahoy@nextthing.co?subject="C.H.I.P. S.O.S.") us.
