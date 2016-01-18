# Start CHIP. Boot CHIP.
First things first. Let's boot CHIP into the CHIP Operating System and do some computer things! Add some power, turn on the wireless network, and even connect a bluetooth keyboard to get rid of those annoying cables.

## Power Up
The single most important thing to using any electronic device is getting electricity to the right places. We're going to cover how to turn CHIP "on". This might seem so straightforward that it doesn't deserve several paragraphs, but CHIP is pretty clever, so there's actually a few things worth knowing.

### What's It Need?
In general, CHIP is powered by a 5-volt source like a USB port or phone charger, and draws about 500mA peak (at boot time), runs on around 100mA, and rests with around 80mA with the processor totally unloaded. To make sure you have enough headroom, we recommend that you use a 5v power supply with at least 900mA current available. This may be more than you need to know if you just want to plug it in to the wall, but, as you build projects with CHIP, you'll be happy to know there's a lot of ways to get the electricity flowing.

### How Do I Know CHIP Is On?
CHIP is silent. It doesn't take much energy, so it's not very hot. It has no discernible smell. As a result, many of your senses are not great indicators that it is working. There are two LEDs next to the USB micro connector. When CHIP is on, you should see the `PWR` LED light up nice and bright.

### Power From The Wall
The CHIP's microUSB connector is used to provide power from most any USB power source. USB wall-wart adapters are probably littered all over your house. If for some reason you don't have one, you can buy one at any electronics retailer. We recommend a 5V powersupply with at least 900mA current available. Just plug a USB-A-to-microUSB-B cable (that's the same cable most phones, tablets, and whatnot use to charge) into the wall-wart and CHIP, and you'll see the `PWR` LED light up. This CHIP is using the power from a computer's USB port:

![CHIP indicator LEDs](images/chip_ledon.jpg)

### Power From A Battery
CHIP can also be battery powered. Specifically, any single cell (1S) 3.7V Lithium Polymer (LiPo) battery with a 2-pin JST-PH 2.0mm end can be connected to the JST-PH socket.

![CHIP powered by a battery. Slick!](images/chip_battery.jpg)

The JST can only plug it in one way: if you are having a hard time lining things up, turn it around! Needless to say, do not force the battery connector into the socket if something doesn't feel right!

What's really great is that if you plug in to a charger and plug in a battery, the battery will charge - all the power management is on CHIP itself. Roughly, it takes about four to six hours to charge a 3000 mAh LiPo battery from a 5V 1A power source. Also, our delightful little Power Management IC, the AXP209, handles pass-through power, so while on and charging a battery, CHIP is basically running on a un-interruped power supply -- If charge power fails, CHIP seamlessly switches onto battery power without shutting off.

## Connect To WiFi
Connecting to a WiFi network is easy using the WiFi icon the top right system tray. Just select a network to initiate a connection.  If the network requires a password you’ll be prompted for it.

![Select a wireless connection access point](images/screen_wifisettings.jpg)

If you need more control and information over your network connection, use the Settings->Network Connections panel to show your connections. Double click on a connection to bring up the connection editor:

![Network connection editor](images/screen_networksettings.jpg)

## Connect Bluetooth
Bluetooth device setup can be accessed using the Bluetooth icon in the top right system tray.

![Bluetooth settings menu](images/screen_btsettings.jpg)

When you begin a connection, you'll be guided through the necessary steps to connect to your device. For example, when you pair with a keyboard, you'll often be prompted for a code to enter to ensure a unique connection. Once you have paired a device, future connections will usually be automatic when the devices are in range and powered up.

![Bluetooth settings menu](images/screen_btsetup01.jpg)

You can manage, and also connect to, your devices using the the Bluetooth Devices panel, accessed from the Bluetooth system tray:

![Bluetooth devices panel](images/screen_btdevices.jpg)

## Terminal for Beginners Glossary
One of the great things about Linux is the terminal application. 
While it may look unfriendly and terse, if you want to really extend the capabilities of CHIP, you'll often find yourself in the terminal. 
If you're a beginner, here's a quick reference of some really important and common commands. You can simply add `-h` to get some hints on how to use a command, such as `cp -h` or you can read a manual page using `man cp`. Most unix commands have a variety of options that can be executed in the command with *flags*, such as `ls -l -a`. Even better, search the internet! This primer is simply here to help you understand what a command might be doing, not to help you use it to its full ability.

* **cd** change directory. open a folder. ex: `cd ~/Pictures` changes your current directory to the home Pictures folder, so you can easily access the files within.
* **mkdir** make directory. create a folder. ex: `mkdir Vacation` makes a folder named *Vacation* in the current directory. `mkdir ~/Pictures/Vacation` makes a `Vacation` folder in the home Pictures directory.
* **ls** list files in the current directory so you know what is in it. Some options are `ls -l` to list in long format to provide information about permissions, size, and date. `ls -a` to show hidden files that start with the `.` character.
* **mv** move a file from one directory to another, or to give it a new name. Ex: `mv this.one that.one` renames a file. `mv this.one ~/Pictures/Vacation/` puts the file *this.one* into the `Vacation` directory.
* **cp** copy a file from one place to another. Ex: `cp this.one this_01.one` will copy `this.one` to another file `this_01.one`. Add directories for more fun: `cp ~/Pictures/Vacation/saturn.jpg /Users/otherone/Pictures/Vacation/saturn.jpg`. 
* **rm** remove a file. delete it, and beware!. Use the `-r` to make it recursive to delete a directory. Ex: `rm this.one` deletes that file. `rm -r ~/Pictures/Vacation` to forget the good times.
* **sudo** super user do. many commands need administrator-like privileges, otherwise they won't work. `apt-get` is a command that needs to be run with `sudo` to allow files to be written to protected directories. You'll see `sudo` as the first word in a lot of commands - all it is doing is giving the command the necessary access. You'll be asked for a password the first time you use `sudo`.
* **apt-get** the command used for installing, removing, and finding software for Debian Linux systems, such as the CHIP Operating System. `sudo apt-get install puredata` installs the Pure Data program and any dependencies. `sudo apt-get remove puredata` will remove the program. `sudo apt-cache search image` will search apt repositories for the keyword *search*. And so on.
* **pwd** present working directory. In case you forget where you are. Not much to it: `pwd` will output the directory name, such as `/Users/home/chip/Pictures/Vacation/`
* **grep** a tool used for searching through files. It's quite deep and can be complicated, but if you see the word `grep` in some command, you know it's searching for a match.
* **| (pipe)**  a command used to redirect data into an application.
* **< (redirect)** a command use to redirect data into a file.
* **cat** concactenate. used to append data to a file. Ex: `cat "Last line of text" > sometext.txt`. Merge files: `cat append.txt > main.txt` will put all the text in append.txt into main.txt.
* **less** makes it so you can paginate and read a text tile. Ex: `less longtext.txt` will fill the screen with the first part of the longtext.txt file. Use the space bar to view the next page. Type `q` to exit.
* **nano** a text editor. You'll often see commands that call `nano` so you can edit a configuration. Ex: `nano /etc/avahi/services/afpd.service` to edit the avahi Apple file service file.
* **find** look for files in the filesystem. Ex: `find ~/Documents -name particular.txt -type f` will look for the file with the name `particular.txt` in the Documents directory.
* **chmod** change mode. Used for file permissions, which can be important when sharing things on the network, scripting actions, and many more reasons. 
* **htop** display the processes currently alive on the CPU. If things seem slow, or you want to see how much CPU or memory a program is using, just type `htop` to see a table of all running processes, then type `q` when you want to exit.
* **scp** secure copy. copy a file from one computer to another over a network. Ex: `cp Pictures/Vacation/motel.jpg Pictures/Vacation/accident.jpg chip@otherchip.local:~/Pictures` copies a couple jpegs to another computer on the network.
* **ssh** secure shell. access another computer on the network and use the terminal commands to make changes and control it. Ex: `ssh chip@chip.local` to access your CHIP on a local network.
* **CTRL C** if you can't use the terminal because a process is taking too long, type CTRL-C on your keyboard to cancel the most recent command.
