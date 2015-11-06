# Flash CHIP from Ubuntu

# Requirements
  * Computer running Ubuntu 14.04+
  * Jumper wire
  * CHIP

#Intro
If you are running Ubuntu OS on your computer, and don't want to bother with a virtual machine, you can flash CHIP from your real computer.

# Install Dependencies
Install some tools:
```
sudo apt-get update
sudo apt-get install u-boot-tools android-tools-fastboot git build-essential libusb-1.0-0-dev
```
If you intend to customize buildroot with additional software, install these packages:
  apt-get install libncurses5-dev libc6-i386 lib32stdc++6 lib32z1 android-tools-fsutils
Get and make the fel tools:
```
git clone http://github.com/NextThingCo/sunxi-tools
cd sunxi-tools
make
sudo rm -f /usr/local/bin/fel
sudo ln -s $PWD/fel /usr/local/bin/fel
```
Clone the CHIP-tools repository
```
cd .. 
git clone http://github.com/NextThingCo/CHIP-tools 
cd CHIP-tools
```
If you have already cloned the CHIP-tools from a previous CHIP flashing, you can, of course, just update your existing repository
```
cd CHIP-tools
git pull http://github.com/NextThingCo/CHIP-tools
```
Now you are ready to [[flash_chip_from_sdk_-_minimal#Flash With NTC Buildroot OS|flash CHIP]] with firmware.