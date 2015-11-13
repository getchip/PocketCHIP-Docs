# Welcome to DERP

We made a computer. *A $9 computer*. And every computer needs an operating system. 

Ours is **DERP**: **D**ebian **E**nvironment for **R**adical **P**roducts. Grab an old TV (or any screen with a composite video input), a keyboard and mouse, and stick some electricity  in the micro USB port. In a few seconds, you'll have CHIP's DERP on your screen, ready for your commands. 

CHIP is built for making - we've packed a powerful processor, 8 GB of storage, stereo audio, video out,  and lots of connections for playing and making your projects and products. 

DERP is built for doing. You probably didn't expect to be able to browse the 'net, send email, play video games, listen to music, write a novel, watch a video, or learn programming. And because it's based on the popular linux debian, if there's something you need, you can probably install it. 

So how do use this thing? Read on and learn how much you can do. 

## Start CHIP
First things first. Let's boot CHIP into DERP and do some computer things! Add some power, then we can turn on the wireless network, and even connect a bluetooth keyboard to get rid of those annoying cables.

### Power up
The single most important thing to using any electronic device is getting electricity to the right places. This tutorial covers how to turn CHIP "on". This might seem so straightforward that it doesn't deserve several paragraphs, but CHIP is pretty clever, so there's actually a few things worth knowing.

#### What's It Need?
In general, CHIP is powered by a 5-volt source like a USB port or phone charger, and draws about 300mA peak (at boot time), runs on around 100mA, and rests with around 80mA with the processor totally unloaded. This may be more than you need to know if you just want to plug it in to the wall, but, as you build projects with CHIP, you'll be happy to know there's a lot of ways to get the electricity flowing.

#### How Do I Know CHIP Is On?
CHIP is silent. It doesn't take much energy, so it's not very hot. It has no discernible smell. As a result, many of your senses are not great indicators that it is working. There are two LEDs next to the USB micro connector. When CHIP is on, you should see the `PWR` LED light up nice and bright.

#### Power From The Wall
The CHIP's microUSB connector is used to provide power from most any USB power source. USB wall-wart adapters are probably littered all over your house. If for some reason you don't have one, you can buy one from us or any electronics retailer. Just plug a USB-A-to-microUSB-B cable (that's the same cable most phones, tablets, and whatnot use to charge) into the wall-wart and CHIP, and you'll see the `PWR`LED light up (forgive the underexposure, but you can see a small pink LED under the green one, and FWIW, LED colors may be different on your CHIP!).

![CHIP indicator LEDs](images/chip_ledon.jpg)

#### Power From a Battery
CHIP can also be battery powered. Specifically, any single cell (1S) 3.7V Lithium Polymer (LiPo) battery with a 2-pin JST-PH 2.0mm end can be connected to the JST-PH socket.

![CHIP powered by a battery. Slick!](images/chip_battery.jpg)

The JST can only plug it in one way, so if you are having a hard time lining things up, turn it around! Needless to say, do not force the battery connector into the socket if something doesn't feel right!

What's really great is that if you plug in to a charger and plug in a battery, the battery will charge - all the power management is on CHIP itself. Roughly, it takes about four to six hours to charge a 3000 mAh LiPo battery from a 5V 1A power source. Also, our delightful little Power Management IC, the AXP209, handles pass-through power, so while on and charging a battery, CHIP is basically running on a un-interruped power supply -- If charge power fails, CHIP seamlessly switches onto battery power without shutting off.

### Connect to WiFi
Use the Desktop environment to connect to a WiFi network.
![Screenshot of GUI showing where to change WiFi settings](images/screencap_wifisettings.jpg)

### Connect Bluetooth
Use the Desktop environment to connect a bluetooth device.
![Screenshot of GUI showing where to change BT settings](images/screencap_btsettings.jpg)
### Terminal for Beginners Glossary
One of the great things about Linux is the terminal application. While it may look unfriendly and terse, if you want to really extend the capabilities of CHIP, you'll often find yourself in the terminal. If you're a beginner, here's a quick reference of some really important and common commands.
*  cd
*  ls
*  apt-get
*  pwd
*  grep
* | (pipe)
* < (redirect)
*  cat
*  less
*  nano

## Connecting Accessories
CHIP has a lot of connectors, some for building, some for doing normal computer things. This section covers the normal computer things, like audio, video, and input.

### Powered USB Hub
You'll find that a simple powered USB hub is pretty essential if you want to use a lot of USB devices with CHIP. Not only is there only one USB port (keeping CHIP nice and small), but CHIP's micro USB power port can only provide so much power for the USB port. So if you don't have a powered USB port, you'll quickly max out power if you attach too many accessories. 

![powered USB hub connected to CHIP](images/chip_usbhub.jpg)

### Keyboard and Mouse
Many keyboards have USB hubs built-in, so you can attach a mouse to the keyboard, attach the keyboard to CHIP, and immediately have control. However, it's likely the two will draw too much current, so you'll want to connect to a powered hub before you connect.

![keyboard, mouse, and powered USB hub connected to CHIP](images/chip_usbconnections.jpg)

### Bluetooth Keyboard and Mouse
Of course, CHIP has built-in bluetooth, so if you want to use a keyboard and mouse, you can keep your USB port free for other things (like mass storage or a MIDI controller!) and keep your desk clean. See [connecting to bluetooth section](#Bluetooth)

### Monitor
In the spirit of keeping things small, CHIP packs all the audio and video into a small TRRS (Tip-Ring-Ring-Sleeve) connector. Built-in video output is restricted to standard composite video resolution of 640x480. (Higher resolutions can be achieved with the upcoming VGA and DVI output accessories.) We also provide a breakout cable that lets you connect the audio and video to a TV (or other electronics) using RCA jacks.

![monitor connected to CHIP](images/chip_withmonitor.jpg)

#### About the TRRS Connector
CHIP comes with a 1/8" (3.5mm) Tip-Ring-Ring-Sleeve (TRRS) jack, capable of carrying stereo audio, and either composite video out, or microphone in.

![Typical AV cable that carries stereo audio and composite video](images/avcable.jpg)

This is a fairly common port, but there are a few different arrangements of the conductors, so not all cables are equal.  Fortunately, CHIP uses the same conductor arrangement as Pi, Zune, and iPod audio/video cables, so the most common "mini to RCA A/V" cables should work just fine.

Some cables will route signals a bit differently, using the Red RCA cable for Video instead of Yellow.  If video out isn't working through the yellow cable, see if red works.  If not, your cable may be a version that's arranged in a way that it just won't work with CHIP

CHIPs (except the very first shipment of Alpha CHIPs) ship with cables confirmed to work using this arrangement:
  * yellow : video
  * red : stereo audio right channel
  * white : stereo audio left channel

The conductors on the TRRS plug are arranged like this:

![Tip: Audio Left, Ring: Audio Right, Ring: Ground, Sleeve: Video](images/trrs_annotated.png)

[This page](http://wiki.robotz.com/index.php/TRRS_Phono_Plug) has even more details about TRRS plugs.

### Headphones
The audio and video connector on CHIP can be dedicated to audio output suitable for headphones or connecting to an amplifier for filling a room or public space with glorious sound. Just connect a standard 3.5 mm (1/8") TRS audio plug into CHIP's a/v jack.

![CHIP connected to audio devices or groovy people listening to music](images/chip_withaudio.jpg)

### Microphone
Currently non-op - no driver.

### USB Storage
If you have files that you want to modify, use, or transfer to CHIP's internal storage, you can attach a USB thumb drive, card-reader, or hard drive. Open the file manager and access the files.

![USB drive attatched to CHIP](images/chip_usbstorage.jpg)

### USB Audio
CHIP can use Class-compliant USB audio devices. A popular, inexpensive choice for small computers are USB dongles based on the C-Media chipset. Search your favorite online store for "C-Media USB audio". These have been tested successfully with CHIP and can often be purchased for less than $10. Some good resources for linux and audio compatibility are:

*  http://wiki.linuxaudio.org/wiki/hardware_matrix
*  http://www.alsa-project.org/main/index.php/Matrix:Main

Many of the drivers have not been tested with CHIP - as CHIP matures, more information will be available. For now, we recommened USB Class-compliant or "plug-and-play" audio devices.

### Battery and Charging
Like any modern laptop, CHIP can run and charge any single-cell LiPo battery. Read more in the [powering CHIP section](#powerchip).

## Settings
### WiFi

Description of using GUI desktop to change WiFi settings.

![Screenshot of GUI showing where to change WiFi settings](images/screencap_wifisettings.jpg)

### Bluetooth
Screenshot and description of using GUI desktop to change Bluetooth settings.

![Screenshot of GUI showing where to change Bluetooth settings](images/screencap_btsettings.jpg)

### Sound
Screenshot and description of using GUI desktop to change Sound settings.

![Screenshot of GUI showing where to change audio settings](images/screencap_audiosettings.jpg)

### Display
Screenshot and description of using GUI desktop to change Display settings.

![Screenshot of GUI showing where to change monitor settings](images/screencap_monsettings.jpg)

![Screenshot of GUI showing where to change desktop picture](images/screencap_desktoppic.jpg)

### Time and Date
Screenshot and description of using GUI desktop to change Time and Date settings.

![Screenshot of GUI showing where to change time](images/screencap_timesettings.jpg)

### Printing
Screenshot and description of using GUI desktop to change Printer settings.

![Screenshot of GUI showing where to setup printer](images/screencap_printer.jpg)

### Mouse Sensitivity
Screenshot and description of using GUI desktop to change Mouse Sensitivity settings.

![Screenshot of GUI showing where to change mouse sensitivity](images/screencap_mousesettings.jpg)

## Launching Installed Apps
DERP comes prepackaged with many open-source applications to get you started. It's easy to launch an application. 

![Screenshot of GUI launching apps](images/screencap_launchapp.jpg)

### AbiWord
A word processor.

![Screenshot of AbiWord](images/appscreen_abiword.jpg)

### Maelstrom
A game

![Screenshot of Maelstrom](images/appscreen_maelstrom.jpg)

### Alex 4
A retro game

![Screenshot of Alex](images/appscreen_alex.jpg)

### Web Browser
Ice Weasel is like Firefox, just cooler. Hah.

![Screenshot of CHIP's web browser](images/appscreen_webbrowser.jpg)

### Video Player
Plays video.

![Screenshot of CHIP's video player](images/appscreen_videoplayer.jpg)

### Quake
A video game

![Screenshot of Quake game](images/appscreen_quake.jpg)

### Terminal (commandline)
The life blood of linux.

![Screenshot of Terminal](images/appscreen_terminal.jpg)

# Install and Update Software

## Synaptic Package Manager
Launch the Synaptic Package Manager to find and install new software. 
This is a graphical interface to the `apt-get` command and will install software for DERP and other debain-based systems.

## Auto Update
CHIP will automatically look for any updates and alert you if updates are available for your existing software and DERP operating system.

## apt-get

If you are using the commandline, you will use `apt-get` to install and update new software.

If you are new to apt, some important commands to know:
```shell
apt-get update
```shell
updates the information from repositories, so any installs will be the latest package
```shell
apt-get upgrade
```
upgrades any installed packages.
```
apt-get install <name of package>
```
to install a package and any of its dependencies.
```shell
apt-get remove <name of package>
```
will remove a package and any dependencies not used by other packages
```shell
apt-get purge  <name of package>
```
will remove a package and any dependencies not used by other packages along with all settings data
```shell
apt-cache search <search terms>
```
will search through the package repositories for names and descriptions that include your search term.

## Chrome-based Interface
## Design Decisions
There's a reason why CHIP is the way it is.

# CHIP Hardware
## Parts and Pieces
![Callout graphic of chip parts](images/chip_pcb.jpg)
## Wireless
### WiFi
### Bluetooth
## Connectors
### USB
### Audio
### USB On The Go
### Pin Headers
## Diagrams/Schematics
![Schematic of CHIP](images/chip_schematic.jpg)
## Open Source: where to get
CHIP is open source hardware. Here's where you can get all the data you need to make your own CHIP.

# Making Stuff
## GPIO
### From Commandline
CHIP has several General Purpose Input/Output (GPIO) pins available for you to build around. If you want to access them in a very primitive way, just to confirm their existence, here's some things to try.

### Requirements
  * CHIP
  * Jumper Wire
  * SSH or serial connection to CHIP or
  * Monitor and keyboard

### How You See GPIO
There are eight (8) GPIO pins always available for connecting CHIP to the sense-able world. These are in the middle of the right header, U14, Pins 13-20, labeled XIO-P0 to P7: 

![Pinout diagram for CHIP](images/chip_alpha_v02_pinouts.png)

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

### Enough IO
When you are done experimenting, you can tell the system to stop listening to the gpio pin:
```shell
  echo 415 > /sys/class/gpio/unexport
```

### Learn More
You can learn a bit more about GPIO and Linux [here:](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)

### Switches
### LEDs
### Relays
### Continuous sensors (temperature, pots, FSR, photoresistor, etc)
## Headless CHIP 
One of the most amazing features of CHIP is that it's insanely simple to use it as small, wireless computer. Low power requirements, battery powered with charge management, and both WiFi and Bluetooth connectivity makes CHIP easy to run as a headless, autonomous machine. 
Of course, you'll still want to access it and control it without a monitor or keyboard. You can control CHIP with another computer and a serial or network connection. Here's how you do this.

### Begin
If you want to use CHIP without a monitor or keyboard attached, there's a few ways to do this:

  * Serial connection with USB to UART cable
  * Serial connection with USB cable
  * Secure Shell (SSH) over wireless or wired ethernet

### Requirements
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
  * CHIP
  * Monitor and keyboard (somewhat optional, though handy)
  * [Connection to the internet](Connect To A Wireless Network with nmcli)

### SSH
SSH (or "Secure Shell") is a common way to control a computer remotely over a network. You'll need to first get your computer's network name or IP address before you can connect.

#### How to get your IP address.
The easiest way to get CHIPs IP address is to hook up a monitor and keyboard. Bootup, log in, [connect to the network](Connect To A Wireless Network) if you need to, and use the command

```shell
hostname -i
```

which results in your IP address, which might look like this:

```shell
10.1.1.99
```

If the `hostname -i` command doesn't work you can use

```shell
ip addr show dev wlan0
```

which will output a lot of data. Look for the line `wlan0` and the entry `inet`, something like:

```shell
inet 10.1.1.99
```

#### Connect to CHIP over a network
Now that you know your IP address, use the command:

```shell
ssh root@10.1.1.99
```

You'll be asked for CHIP's password. The default password is `chip`.
This process is the same if CHIP is connected to the network using built-in wireless or a USB-Ethernet adapter.

#### Make Connections Easy
You may want to setup your network so it will always provide the same (static) IP address to CHIP. You can then rely on CHIP always having the same IP address. 

Alternatively, you can [setup zero configuration networking](Zero Configuration Networking) to give your CHIP an easily remembered name. 

You are now free to do whatever it is you do with Linux command line on CHIP.

### USB to UART Serial Connection
There are a few reasons you'd want to use a serial connection:

  * No wireless network
  * No USB-ethernet cable
  * Don't know the IP or network name of CHIP
  * You're old-school and like it

Connect a USB to UART cable to the Ground (GND), Transmit (TX), and Recieve (RX) pins on CHIP

We'll find those on header U14, pin outs 1,3 and 5.
See the following diagram, which assumes CHIP's USB ports are pointed up...

![Pinout diagram for CHIP](images/chip_alpha_v02_pinouts.png)

#### About the Cable
If you need a connector, search your favorite shop for 'USB to UART cable' - any will do.

Here's the [one we bought](http://www.amazon.com/Armorview-PL2303HX-RS232-Module-Converter/dp/B008AGDTA4). Most of them will have a USB A plug for your computer on one end and four wires (red, green, black, and white) with female header pins on the other.

You may find other USB-UART cables that have more wires. There will be some labels that will help you connect to the correct pins (GND, TX, RX) on terminal U14. Take a look at this example of a [CP2102 UART converter](http://www.newegg.com/Product/Product.aspx?Item=9SIA86V2Z33892&nm_mc=KNC-GoogleMKP-PC&cm_mmc=KNC-GoogleMKP-PC-_-pla-_-Gadgets-_-9SIA86V2Z33892&gclid=CjwKEAiApYGyBRC-g_jIstuduV8SJABCEzhZMxn2i7ZmCxk47Jt730KDjUlUfmmJIyvQlkDFRFcGfxoCuJPw_wcB&gclsrc=aw.ds).
Just be sure to check your datasheets to make sure you're using the correct pins.

#### Install the driver
For this tutorial, we are using a PL2303 USB to Serial cable. You'll most likely need to [install the PL2303 driver](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041) for your computer.

#### Connect the Cable
You only need to worry about three of the wires:

  * Black = Ground (GND)
  * White = Transmit (TX)
  * Green = Receive (RX)

The red wire carries voltage (+5 V).
DO NOT USE THE RED ONE.
Plugging in a +5 V pin could damage your CHIP

Again, there is a chance your USB to UART cable may be different.
Please check your data sheets!

This is what our cable looks like plugged in:

![Properly connect USB to UART cable](images/uart_connection.jpg)

### USB On The Go Serial Connection

Simpler than the UART cable, you can connect to CHIP with a USB cable to your computer. Your computer will see CHIP as a serial device as well as provide power to the CHIP. Either way, you'll be able to continue with the directions below.

### Control CHIP Using a Serial Terminal

Once you've connected CHIP to your computer with the UART or USB cable, open up a terminal. There's lots out there. Here's a few:
  * OS X: [Zterm](http://www.dalverson.com/zterm/), `screen` (built-in to OS X terminal)
  * Windows: [PuTTy](http://www.chipkin.com/using-putty-for-serial-com-connections-hyperterminal-replacement/)
  * Linux: `screen`, `cu`
No matter the software, you'll need to set some settings for the port (aka connection). You'll probably only need to set the baud rate, as the others will be defaults:
  * Baud Rate (Data Rate): 115200
  * Data Bits: 8
  * Parity: none
  * Stop bits: 1
  * Flow control: none

If you are using screen, the command will look something like this:

```shell
screen /dev/tty.usbserial 115200
```
  
or

```shell
screen /dev/ttyUSB0 115200
```

What comes after the '/dev/' may vary among different systems and connections. You can narrow down the choices by using the command

```shell
ls /dev/tty*
```

to list the serial devices. 

Now power up CHIP. You could do this at anytime, but you'll have the most reliable experience powering CHIP after connecting the USB-UART wires. If you make the serial connection after booting chip, you'll probably need to hit 'return' on your keyboard a few times to get CHIP to send some data to you and print in your terminal.

You'll then be prompted for login. Defaults are username `root` and password `chip`.

You are now free to do whatever it is you do with Linux command line on CHIP.


## Zero Configuration Networking
You can make working with CHIP on a local network much more convenient by installing zero-conf networking. OS X users may know this as “Bonjour”.

With zero-conf properly configured, your CHIP can be contacted using a name, such as `chip.local`, rather than an IP. This is especially convenient, if you are moving CHIP to different networks that might assign different IP addresses. The key technology for this in Linux is the `avahi` set of tools. There are a few related packages, but this tutorial is a minimal installation to get it up and running.

### Requirements
  * CHIP
  * [SSH or serial connection to CHIP](Headless CHIP - ssh and serial) or
  * Monitor and keyboard
  * [Connection to the internet](Connect To A Wireless Network with nmcli)

### Install avahi
Getting avahi running is extremely simple. First, install the avahi-daemon:

```shell
  apt-get install avahi-daemon
```

to install the necessary libraries. To configure the daemon, you'll probably need to add this service file:

```shell
  nano /etc/avahi/services/afpd.service
```

Then just copy and paste this XML into it:

```shell
<?xml version="1.0" standalone='no'?><!--*-nxml-*-->
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
<name replace-wildcards="yes">%h</name>
<service>
<type>_afpovertcp._tcp</type>
<port>548</port>
</service>
</service-group>
```

Then restart avahi-daemon:

```shell
  /etc/init.d/avahi-daemon restart
```

You can now find the hostname that you can use to reach CHIP:


```shell
  hostname
```

which will probably return “chip” as the hostname.

### Use Zero-Conf
From a terminal on another computer you can try accessing CHIP with the network name `chip.local`

```shell
  ssh root@chip.local
```

and enter the password (default is `chip`). That's it. You can now reach CHIP without knowing the IP.

### Change the hostname
If you have more than one CHIP on the network, or you just want to change the name from “chip” to fit into your network name scheme, you can modify the hostnames file. Open the file in an editor:

```shell
  nano /etc/hostname
```
  
where you'll see a single word “chip.” Just modify that line (for example, change it to “bobofettywap”) and save the file. For this name to broadcast over the network restart avahi-daemon:

```shell
  /etc/init.d/avahi-daemon restart
```
You can now access chip with the new name:

```shell
  ssh root@bobofettywap.local 
```

### Other packages
You may want to explore some of the other features of avahi, such as browsing a network for other zero-configure enabled computers. There's a package you can install:

```shell
  apt-get install avahi-utils
```

which gives you a set of tools for browsing the network, such as the command

```shell
  avahi-browse
```

An alternative to just installing the avahi-daemon, you can

```shell
  apt-get install libnss-mdns
```

which installs some other tools for network name propagation.

### Troubleshooting
If your computer returns the error

```shell
  ssh: Could not resolve hostname chip.local: nodename nor servname provided, or not known
```

then you either need to wait a minute or try installing avahi-daemon again, but pay closer attention to any errors that apt-get returns.

If you can't connect to CHIP even though you are sure avahi is properly configured, confirm that your CHIP and the computer you are trying to connect are on the same local network (and on the same subnet).

## Project Examples
### Chippy Ruxpin
### Another Example