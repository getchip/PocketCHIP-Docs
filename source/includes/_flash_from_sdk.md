# Flash CHIP With Firmware from SDK
Before you begin, follow the tutorial to [install the CHIP-SDK](Install CHIP SDK - minimal). If you have already installed the SDK, you may need to [update the virtual machine](Update CHIP SDK - minimal). Now you're ready to launch the virtual machine and give CHIP some firmware and operating system.

## Requirements
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
  * CHIP
  * Jumper wire
  * Internet connection
  * Software: terminal, VirtualBox, Vagrant, git

## Boot Virtual Machine

On the host machine, open a terminal and

```shell
  cd CHIP-SDK
  vagrant up
  vagrant ssh
```

This opens a virtual machine running Ubuntu Linux, and you'll get this prompt in your Terminal:

```shell
  vagrant@vagrant-ubuntu-trusty-32:~$
```

If you have previously installed the CHIP-SDK, you may need to update from within the virtual machine. If this is the first SDK install, [move on to flashing](##Flash With NTC Buildroot OS)):

```shell
  cd ~/
  sudo rm -r ~/sunxi-tools
  git clone https://github.com/NextThingCo/sunxi-tools.git
  cd sunxi-tools
  make
  sudo ln -s $PWD/fel /usr/local/bin/fel
  cd ~/CHIP-tools
  git pull https://github.com/NextThingCo/CHIP-tools.git
  cd ~/CHIP-SDK
  git pull https://github.com/NextThingCo/CHIP-SDK.git
```
##Flash With Firmware
Now that the virtual machine is running and configured, you can connect CHIP to your computer and give it an operating system.

### Prepare CHIP for Flashing

Prepare CHIP with a jumper wire connecting Pin 7 and Pin 39 on header U14 (UBOOT pin and GND). Here's a reference image that labels the headers and pins:
{{ wiki:uboot_jumper.jpg?400 }}
*Note: this jumper needs to be present only when you connect CHIP to power*. If for some reason the wire becomes disconnected after you have powered CHIP, there is no problem or need to panic.

Now connect CHIP to your computer with a [micro-USB](https://commons.wikimedia.org/wiki/File:Micro_USB.jpg)->USB-B cable. The power LED will illuminate.

### Option 1: Flash With NTC Buildroot OS

Buildroot is a lean operating system, and does not have a package manager to install software. You can add additional software before you flash CHIP by [[##Customize buildroot|customizing buildroot]]. To flash CHIP with the buildroot OS:

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh
```

During flashing, the terminal will fill with messages.  If successful, you'll see C.H.I.P. run through a hardware test, with the answers being 'OK'.  If C.H.I.P. is 'OK', you can remove the jumper wire. Here is a [sample successful output](##Buildroot Output).

### Option 2: Flash With Debian
If you want to flash CHIP with the debian OS

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh -d
```  

During flashing, the terminal will fill with messages. If successful, you'll see C.H.I.P. run through a hardware test, with the answers being 'OK'.  If C.H.I.P. is 'OK', you can remove the jumper wire. Here is a [sample successful output](##Debian Output).

### Connect to CHIP and Do Something
After a few minutes, you'll be able to connect to CHIP via serial:

```shell
  cu -l /dev/ttyACM0 -s 115200
```

and even test the hardware:

```shell
  hwtest
```

### Customize buildroot

If you want to customize buildroot, use these commands before you run the `./chip-update-firmware.sh` script to flash CHIP with firmware:

```shell
  cd ~/CHIP-buildroot
  make chip_defconfig
  make nconfig
```
  
The `nconfig` command will display a text interface in your terminal. Use your arrow keys to browse and select additional software for the buildroot OS. When you're finished with your selections, exit by hitting the F9 key, which will automatically save your custom buildroot to:

```shell
  /home/vagrant/CHIP-buildroot/.config
```

Now let's build your buildroot with your custom additions:
  make
This will take a while, maybe an hour. When finished, flash CHIP with the script:

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh
```

---------------------------------------
---------------------------------------

## Appendix
Some additional info and examples.

### Buildroot Output
Sample output from flashing Buildroot to CHIP looks like:

```shell
ROOTFS_URL=http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images
BUILD=71
BR_URL=http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images
BR_BUILD=71
/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/rootfs.ubi
MD5: 90315ca1fb8ff95fc6878ce8126bdf02
S3_MD5: 6d59af4a0f673e1d61147e4a06dd7ba8
md5sum differs
--2015-10-21 15:59:16--  http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/rootfs.ubi
Resolving opensource.nextthing.co.s3.amazonaws.com (opensource.nextthing.co.s3.amazonaws.com)... 54.231.176.13
Connecting to opensource.nextthing.co.s3.amazonaws.com (opensource.nextthing.co.s3.amazonaws.com)|54.231.176.13|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 54525952 (52M) [binary/octet-stream]
Saving to: ‘/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi’

100%[======================================>] 54,525,952  1.83MB/s   in 29s    

2015-10-21 15:59:45 (1.82 MB/s) - ‘/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi’ saved [54525952/54525952]

/home/doge/gits/CHIP-tools/.firmware/images/sun5i-r8-chip.dtb exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/sun5i-r8-chip.dtb
MD5: de0beb674eeb382901251febfbf1cf9b
S3_MD5: de0beb674eeb382901251febfbf1cf9b
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/sunxi-spl.bin exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/sunxi-spl.bin
MD5: dd3f9c9c0984a6c1d7cdca2921f6f448
S3_MD5: dd3f9c9c0984a6c1d7cdca2921f6f448
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/uboot-env.bin exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/uboot-env.bin
MD5: 6f2b79a781f9f490911012ec3aa653e9
S3_MD5: 6f2b79a781f9f490911012ec3aa653e9
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/zImage exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/zImage
MD5: 0d35ad764564a2cee9281715823597a2
S3_MD5: 0d35ad764564a2cee9281715823597a2
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/u-boot-dtb.bin exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/buildroot/stable/71/images/u-boot-dtb.bin
MD5: 97340d221bcbcc8f0bf27e26adc26f0a
S3_MD5: 97340d221bcbcc8f0bf27e26adc26f0a
file already downloaded
BUILDROOT_OUTPUT_DIR = /home/doge/gits/CHIP-tools/.firmware
== preparing images ==
/home/doge/gits/CHIP-tools/spl-image-builder -d -r 3 -u 4096 -o 1664 -p 16384 -c 1024 -s 64 /home/doge/gits/CHIP-tools/.firmware/images/sunxi-spl.bin /tmp/chipflashqVYEIs/sunxi-padded-spl
filesize= 3573504
PADDED_SPL_SIZE=0x000000c6
35+1 records in
36+0 records out
589824 bytes (590 kB) copied, 0.00082507 s, 715 MB/s
12+0 records in
12+0 records out
196608 bytes (197 kB) copied, 0.0176519 s, 11.1 MB/s
Image Name:   flash CHIP
Created:      Wed Oct 21 15:59:46 2015
Image Type:   ARM Linux Script (uncompressed)
Data Size:    736 Bytes = 0.72 kB = 0.00 MB
Load Address: 00000000
Entry Point:  00000000
Contents:
   Image 0: 728 Bytes = 0.71 kB = 0.00 MB
== upload the SPL to SRAM and execute it ==
waiting for fel...OK
== upload spl ==
== upload u-boot ==
== upload u-boot script ==
== upload ubi ==
100% [============================================================]
== execute the main u-boot binary ==
== write ubi ==
flashing................OK
login... OK
password... OK
poweroff... OK
```

### Debian Output
Sample output from a successful Debian output:

```shell
debian selected
ROOTFS_URL=http://opensource.nextthing.co.s3.amazonaws.com/chip/debian/stable/37
BUILD=37
BR_URL=http://opensource.nextthing.co/chip/buildroot/stable/71/images
BR_BUILD=71
/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi exists... comparing to http://opensource.nextthing.co.s3.amazonaws.com/chip/debian/stable/37/rootfs.ubi
MD5: 6d59af4a0f673e1d61147e4a06dd7ba8
S3_MD5: 90315ca1fb8ff95fc6878ce8126bdf02
md5sum differs
--2015-10-21 16:06:36--  http://opensource.nextthing.co.s3.amazonaws.com/chip/debian/stable/37/rootfs.ubi
Resolving opensource.nextthing.co.s3.amazonaws.com (opensource.nextthing.co.s3.amazonaws.com)... 54.231.160.10
Connecting to opensource.nextthing.co.s3.amazonaws.com (opensource.nextthing.co.s3.amazonaws.com)|54.231.160.10|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 245366784 (234M) [binary/octet-stream]
Saving to: ‘/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi’

100%[======================================>] 245,366,784 1.27MB/s   in 2m 11s 

2015-10-21 16:08:48 (1.78 MB/s) - ‘/home/doge/gits/CHIP-tools/.firmware/images/rootfs.ubi’ saved [245366784/245366784]

/home/doge/gits/CHIP-tools/.firmware/images/sun5i-r8-chip.dtb exists... comparing to http://opensource.nextthing.co/chip/buildroot/stable/71/images/sun5i-r8-chip.dtb
MD5: de0beb674eeb382901251febfbf1cf9b
S3_MD5: de0beb674eeb382901251febfbf1cf9b
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/sunxi-spl.bin exists... comparing to http://opensource.nextthing.co/chip/buildroot/stable/71/images/sunxi-spl.bin
MD5: dd3f9c9c0984a6c1d7cdca2921f6f448
S3_MD5: dd3f9c9c0984a6c1d7cdca2921f6f448
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/uboot-env.bin exists... comparing to http://opensource.nextthing.co/chip/buildroot/stable/71/images/uboot-env.bin
MD5: 6f2b79a781f9f490911012ec3aa653e9
S3_MD5: 6f2b79a781f9f490911012ec3aa653e9
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/zImage exists... comparing to http://opensource.nextthing.co/chip/buildroot/stable/71/images/zImage
MD5: 0d35ad764564a2cee9281715823597a2
S3_MD5: 0d35ad764564a2cee9281715823597a2
file already downloaded
/home/doge/gits/CHIP-tools/.firmware/images/u-boot-dtb.bin exists... comparing to http://opensource.nextthing.co/chip/buildroot/stable/71/images/u-boot-dtb.bin
MD5: 97340d221bcbcc8f0bf27e26adc26f0a
S3_MD5: 97340d221bcbcc8f0bf27e26adc26f0a
file already downloaded
BUILDROOT_OUTPUT_DIR = /home/doge/gits/CHIP-tools/.firmware
== preparing images ==
/home/doge/gits/CHIP-tools/spl-image-builder -d -r 3 -u 4096 -o 1664 -p 16384 -c 1024 -s 64 /home/doge/gits/CHIP-tools/.firmware/images/sunxi-spl.bin /tmp/chipflashUooSfo/sunxi-padded-spl
filesize= 3573504
PADDED_SPL_SIZE=0x000000c6
35+1 records in
36+0 records out
589824 bytes (590 kB) copied, 0.00181383 s, 325 MB/s
12+0 records in
12+0 records out
196608 bytes (197 kB) copied, 0.0164913 s, 11.9 MB/s
Image Name:   flash CHIP
Created:      Wed Oct 21 16:08:49 2015
Image Type:   ARM Linux Script (uncompressed)
Data Size:    736 Bytes = 0.72 kB = 0.00 MB
Load Address: 00000000
Entry Point:  00000000
Contents:
   Image 0: 728 Bytes = 0.71 kB = 0.00 MB
== upload the SPL to SRAM and execute it ==
waiting for fel...OK
== upload spl ==
== upload u-boot ==
== upload u-boot script ==
== upload ubi ==
100% [============================================================]
== execute the main u-boot binary ==
== write ubi ==
flashing...........................OK
login... OK
password... OK
poweroff... OK
```

### Failure
Here's a couple common errors:

```shell
== upload the SPL to SRAM and execute it ==
ERROR: Allwinner USB FEL device not found!
== upload images ==
ERROR: Allwinner USB FEL device not found!
ERROR: Allwinner USB FEL device not found!
ERROR: Allwinner USB FEL device not found!
ERROR: Allwinner USB FEL device not found!
== execute the main u-boot binary ==
ERROR: Allwinner USB FEL device not found!
```

This indicates that CHIP is probably booted into Linux, and not ready to receive firmware. There are three possible reasons for this:
  - You already successfully flashed CHIP, and haven't disconnected the USB cable from your computer.
  - The jumper wire between Pins 7 & 39 is either not present, loose, or the jumper is in the wrong holes.
  - There is a problem with the USB cable.

```shell
Image 0: 848 Bytes = 0.83 kB = 0.00 MB
== upload the SPL to SRAM and execute it ==
ERROR: You don't have permission to access Allwinner USB FEL device
== upload images ==
ERROR: You don't have permission to access Allwinner USB FEL device
ERROR: You don't have permission to access Allwinner USB FEL device
ERROR: You don't have permission to access Allwinner USB FEL device
ERROR: You don't have permission to access Allwinner USB FEL device
== execute the main u-boot binary ==
ERROR: You don't have permission to access Allwinner USB FEL device
```

This error means that you need to run the **chip-update-firmware.sh** script with **sudo** (or you need to add a rules file as described below).

### Optional Convenience
As a developer, there's a good chance you'll flash CHIP more than once in your life. You'll probably want to follow these steps.
In order to be able to run the **chip-update-firmware.sh** script without sudo, make a rules file:

```shell
sudo touch /etc/udev/rules.d/99-allwinner.rules
```

and add the content with the tee command:

```shell
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1f3a", ATTRS{idProduct}=="efe8", GROUP="plugdev", MODE="0660" SYMLINK+="usb-chip"' | sudo tee /etc/udev/rules.d/99-allwinner.rules
```

then, to make this rules file work:
```shell
  sudo udevadm control --reload-rules
```
