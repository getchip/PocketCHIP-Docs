# Connecting Accessories
CHIP has a lot of connectors, some for building, some for doing normal computer things. This section covers the normal computer things, like audio, video, and input.

##Recommended Accessories
CHIP is a minimal computer. Many CHIP users may never connect common peripherals, instead using CHIP as a "headless" computer. 
Like desktop computers from Best Buy, you may find that certain accessories will improve the overal usability of CHIP. We recommend:

  * Bluetooth Keyboard
  * USB mouse
  * Monitor with a composite video input
  * USB cable: microUSB to USB B
  * TRRS to RCA connector
  
Additionally, some of the advanced tutorials require:

  * Speakers with RCA audio input
  * Jumper wire
  * USB to UART cable
  * Single cell Lithium Polymer battery
  
## Powered USB Hub
You'll find that a simple powered USB hub is pretty essential if you want to use a lot of USB devices with CHIP. Not only is there only one USB port (keeping CHIP nice and small), but CHIP's micro USB power port can only provide so much power for the USB port. If you don't have a powered USB port, you'll quickly max out power if you attach too many accessories. 

## Keyboard and Mouse
Many keyboards have USB hubs built-in, so you can attach a mouse to the keyboard, attach the keyboard to CHIP, and immediately have control. However, it's likely the two will draw too much current, so you'll want to connect to a powered hub before you connect.

![keyboard, mouse, and powered USB hub connected to CHIP](images/chip_usbconnections.jpg)

## Bluetooth Keyboard and Mouse
As you know, CHIP has built-in bluetooth. If you want to use a keyboard and mouse, you can keep your USB port free for other things (like mass storage or a MIDI controller!) and keep your desk clean. See [connecting to bluetooth section](#bluetooth)

## Monitor
In the spirit of keeping things small, CHIP packs all the audio and video into a small TRRS (Tip-Ring-Ring-Sleeve) connector. Built-in video output is restricted to standard composite video resolution of 640x480. (Higher resolutions can be achieved with the upcoming VGA and DVI output accessories.)

![monitor connected to CHIP](images/chip_withmonitor.jpg)

Here's what the other end of the cable looks like, attached to a monitor with stereo audio inputs (red and white) and the composite video plug, moved so you can see the label on the monitor:

![monitor connected to CHIP](images/chip_withmonitor_cnxn.jpg)

### About the TRRS Connector
CHIP comes with a 1/8" (3.5mm) Tip-Ring-Ring-Sleeve (TRRS) jack, capable of carrying stereo audio, and either composite video out, or microphone in.

![Typical AV cable that carries stereo audio and composite video](images/avcable.jpg)

This is a fairly common port, but there are a few different arrangements of the conductors, so not all cables are equal.  Fortunately, CHIP uses the same conductor arrangement as Pi, Zune, and iPod audio/video cables, so the most common "mini to RCA A/V" cables should work just fine.

Some cables will route signals a bit differently, using the Red RCA cable for Video instead of Yellow.  If video out isn't working through the yellow cable, see if red works.  If not, your cable may be a version that's arranged in a way that it just won't work with CHIP:

  * yellow : video
  * red : stereo audio right channel
  * white : stereo audio left channel

The conductors on the TRRS plug are arranged like this:

![Tip: Audio Left, Ring: Audio Right, Ring: Ground, Sleeve: Video](images/trrs_annotated.jpg)

If you want to learn even more about TRRS connectors and the general lack of standardization with them, [this page](http://wiki.robotz.com/index.php/TRRS_Phono_Plug) has even more details.

### NTSC or PAL
The composite video format is NTSC by default. If you need to hook up to a monitor that only uses a PAL signal, you'll need to change that at u-boot time.
First, connect to CHIP with a [UART cable](#usb-to-uart-serial-connection).
Then power up CHIP, and press a key on the keyboard to boot into u-boot mode to change the environment variable manually.

```shell
printenv video-mode
setenv video-mode (mode data)
saveenv
reset
```
where *mode data* can be, for NTSC and PAL respectively:

```shell
setenv video-mode sunxi:640x480-24@60,monitor=composite-ntsc,overscan_x=40,overscan_y=20

setenv video-mode sunxi:720x576-24@50,monitor=composite-pal,overscan_x=40,overscan_y=20

```

## Headphones
The audio and video connector on CHIP can be dedicated to audio output suitable for headphones or connecting to an amplifier for filling a room or public space with glorious sound. 
Just connect a standard 3.5 mm (1/8") TRS audio plug into CHIP's a/v jack. Of course, if headphones are plugged in, there will be no room for a composite video output jack. You can also get audio left, common, and right output from [pins 4, 6 & 8 on header U14](#pin-headers).

![CHIP connected to headphones](images/chip_withaudio.jpg)

## Microphone and Audio Input
If you want to use audio input, you might find it easiest to use the pins on [pins 10 and 12 on header U14](#pin-headers). However, if you want to use the 1/8" TRRS connector, you can modify the CHIP board to replace the composite video connection with an audio input connection. 

If you look at the bottom of CHIP with the audio and USB jacks pointed up, you'll see three small contact pads to the left of the audio jack. The left pad has a small label of **mic** and the right pad has a **tv** label. Between the middle pad and the **tv** pad is a trace that can be carefully cut with an Exacto or utility razor blade. Once that is cut (check with a volt or continuity meter), you can put a solder blob between the **mic** and middle pad. Now the outer ring can be used for audio input.

![Slice video trace, bridge mic in pad](images/chip_audioinbridge.jpg)

As another reference, if you had X-ray vision and you were looking from the **top** of CHIP, you'd see a trace like this:

![Xray vision of TV and Mic traces from top of CHIP](images/chip_tvmonxray.jpg)

If the composite video connection is needed again, just reverse the process: desolder the connection between **mic** and the middle pad, then solder a bridge between **tv** and the middle pad.

## USB Storage
If you have files that you want to modify, use, or transfer to CHIP's internal storage, you can attach a USB thumb drive, card-reader, or hard drive. Open the file manager and access the files.

![USB drive attatched to CHIP](images/chip_usbstorage.jpg)

## USB Audio
CHIP can use Class-compliant USB audio devices. A popular, and inexpensive choice for audio devices are USB dongbles based on the C-Media chipset. These have been tested successfully with CHIP and can often be purchased for less than $10. Some good resources for linux and audio compatibility are on the [linux audio](http://wiki.linuxaudio.org/wiki/hardware_matrix) and [alsa project](http://www.alsa-project.org/main/index.php/Matrix:Main) websites.


Many of the drivers have not been tested with CHIP - as CHIP matures, more information will be available. For now, we recommened USB Class-compliant or "plug-and-play" audio devices.

## Battery and Charging
Like any modern laptop, CHIP can run and charge any single-cell LiPo battery. Read more in the [powering CHIP section](#power-up).
