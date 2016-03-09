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
  * [Connection to the internet](#connecting-c-h-i-p-to-wi-fi-with-nmcli)

### SSH
SSH (or "Secure Shell") is a common way to control a computer remotely over a network. You'll need to first get your computer's network name or IP address before you can connect.

#### How to get your IP address.
The easiest way to get CHIPs IP address is to hook up a monitor and keyboard. Bootup, log in, [connect to the network](#connecting-c-h-i-p-to-wi-fi-with-nmcli) if you need to, and use the command

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

#### Make Connections To CHIP Easy
You may want to setup your network so it will always provide the same (static) IP address to CHIP. You can then rely on CHIP always having the same IP address. 

Alternatively, you can [setup zero configuration networking](#zero-configuration-networking) to give your CHIP an easily remembered name. 

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

![Pinout diagram for CHIP](images/chip_pinouts.jpg)

#### About the Cable
If you need a connector, search your favorite shop for 'USB to UART cable' - any will do.

Here's the [one we bought](http://www.amazon.com/Armorview-PL2303HX-RS232-Module-Converter/dp/B008AGDTA4). Most of them will have a USB A plug for your computer on one end and four wires (red, green, black, and white) with female header pins on the other.

You may find other USB-UART cables that have more wires. There will be some labels that will help you connect to the correct pins (GND, TX, RX) on terminal U14.
Just be sure to check your datasheets to make sure you're using the correct pins.

#### Install the driver
For this tutorial, we are using a PL2303 USB to Serial cable. 
If you are using this one too, you'll probably need to [install the PL2303 driver](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041) for your computer.

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
  * Windows: [PuTTy](http://www.chipkin.com/using-putty-for-serial-com-connections-hyperterminal-replacement/) or [cygwin](https://cygwin.com)
  * Linux: `screen`, `cu`

No matter the software, you'll need to set some settings for the port (aka connection). You'll probably only need to set the baud rate, as the others will be defaults:

  * Baud Rate (Data Rate): 115200
  * Data Bits: 8
  * Parity: none
  * Stop bits: 1
  * Flow control: none

#### Using screen
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

#### Using PuTTy
If you are on Windows using PuTTy, you'll probably want to open the windows Device Manager to get the COM name for the serial port. The device won't show up in the Ports list until after the kernel loads and presents the device, so it may take a minute or so before Windows actually detects it.

![Device Manager showing serial ports](images/win_putty_00.jpg)

In the PuTTy configuration panel, you can now use the COM name to set it up. In this case, it's "COM4":

![PuTTy configuration](images/win_putty_01.jpg)

Press "Open" to open a terminal window ,where you can log in to CHIP with username and password `chip`.

You are now free to do whatever it is you do with Linux command line on CHIP.

## Zero Configuration Networking
You can make working with CHIP on a local network much more convenient by installing zero-conf networking. OS X users may know this as “Bonjour”.

With zero-conf properly configured, your CHIP can be contacted using a name, such as `chip.local`, rather than an IP. This is especially convenient, if you are moving CHIP to different networks that might assign different IP addresses. The key technology for this in Linux is the `avahi` set of tools. There are a few related packages, but this tutorial is a minimal installation to get it up and running.

### Requirements
  * CHIP
  * [SSH or serial connection to CHIP](#headless-chip) or
  * Monitor and keyboard
  * [Connection to the internet](#connecting-c-h-i-p-to-wi-fi-with-nmcli)

### Install avahi
Getting avahi running is extremely simple. First, install the avahi-daemon:

```shell
  sudo apt-get install avahi-daemon
```

to install the necessary libraries. 
You may want to configure the daemon with this service file so you can find Apple Bonjour devices from CHIP :

```shell
  sudo nano /etc/avahi/services/afpd.service
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
 sudo /etc/init.d/avahi-daemon restart
```

You can now find the hostname that you can use to reach CHIP:


```shell
  hostname
```

which will probably return “chip” as the hostname.

### Use Zero-Conf
From a terminal on another computer you can try accessing CHIP with the network name `chip.local`

```shell
  ssh chip@chip.local
```

and enter the password (default is `chip`). That's it. You can now reach CHIP without knowing the IP.

### Change the hostname
If you have more than one CHIP on the network, or you just want to change the name from “chip” to fit into your network name scheme, you can modify the hostnames file. Open the file in an editor:

```shell
  sudo nano /etc/hostname
```
  
where you'll see a single word “chip.” Just modify that line (for example, change it to “bobofettywap”) and save the file. 
You'll also need to modify the hosts file where you'll need to change the first line `127.0.0.1    chip` where you replace "chip" with your new username.

```shell
  sudo nano /etc/hosts
```

Finally, to get this new name to broadcast over the network restart avahi-daemon:

```shell
  sudo /etc/init.d/avahi-daemon restart
```
You can now access chip with the new name:

```shell
  ssh root@bobofettywap.local 
```

### Other packages
You may want to explore some of the other features of avahi, such as browsing a network for other zero-configure enabled computers. There's a package you can install:

```shell
  sudo apt-get update &
  sudo apt-get install avahi-utils
```

which gives you a set of tools for browsing the network, such as the command

```shell
  avahi-browse -d local _ssh._tcp --resolve -t
```
which will list other zero-configure-enabled devices on the local network. You could ssh to your Macintosh named "bananna", for example with 

```shell
  ssh username@bananna
```

An alternative to just installing the avahi-daemon, you can

```shell
  sudo apt-get install libnss-mdns
```

which installs some other tools for network name propagation.

### Troubleshooting
If your computer returns the error

```shell
  ssh: Could not resolve hostname chip.local: nodename nor servname provided, or not known
```

then you either need to wait a minute or try installing avahi-daemon again, but pay closer attention to any errors that `apt-get` returns.

If you can't connect to CHIP even though you are sure avahi is properly configured, confirm that your CHIP and the computer you are trying to connect are on the same local network (and on the same subnet).
