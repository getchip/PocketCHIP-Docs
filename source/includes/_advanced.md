# Advanced
For those interested in building with a stripped-down version of an operating system, or looking to customize CHIP from the command line, we have several tutorials that describe how to setup CHIP with more depth.

## Installing C.H.I.P. SDK
CHIP-SDK has everything needed to develop software for C.H.I.P. Most importantly, if you want to load an operating system onto CHIP, the only supported way is to do this from a virtual machine. Given that the virtual machine runs Ubuntu, it's pretty safe to say that Ubuntu users can flash without the virtual machine.

### Requirements
* Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
* At least 1 GB free RAM, up to 40 GB of disk space may be used
* Software: VirtualBox, Vagrant, git, terminal

### Software Setup
There are several required software pieces to get the CHIP SDK virtual machine running.

#### Install VirtualBox and Extensions
* Get the installer for [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
* Install the Oracle VM VirtualBox [Extension Pack](https://www.virtualbox.org/wiki/Downloads).
* If you are using Windows, you need to add the VirtualBox installation directory to your PATH.
* In case of an Ubuntu host: add your user to the vboxusers group!

#### Install Vagrant
Install Vagrant from the [Vagrant site.](https://www.vagrantup.com/downloads.html)
Alternatively, if OS X, you can use the [homebrew](http://brew.sh/) package manager:
brew install caskroom/cask/brew-cask
brew cask install vagrant

#### Install Git
Installation of Git depends on your operating system:

* Windows: [direct to download](https://git-scm.com/download/win)
* Debian Linux: `sudo apt-get install git`
* OS X homebrew: `brew install git`

### Clone the CHIP-SDK repository and boot the Virtual Machine
Assuming you have [git in your PATH](http://www.chambaud.com/2013/07/08/adding-git-to-path-when-using-github-for-windows/), open up a terminal and type:

```shell
git clone https://github.com/NextThingCo/CHIP-SDK
```

and start up the virtual machine:

```shell
cd CHIP-SDK
vagrant up
```

### Login To Virtual Machine
In the same shell on the host type the following:

```shell
 vagrant ssh
```
If everything went well you should see the following prompt:

```shell
vagrant@vagrant-ubuntu-trusty-32:~$
```

#### All The Commands At Once
Here's all the commands in one place:

```shell
git clone https://github.com/NextThingCo/CHIP-SDK
cd CHIP-SDK
vagrant up
vagrant ssh
```

Congratulations! Now you're ready to Flash a C.H.I.P. from your SDK!

### Troubleshooting
Here are a few possible problems.

#### Shared Folder Out of Sync
In case you run into trouble because the kernel in the VM was updated and the shared vagrant folder can no longer be mounted, update the guest additions by typing the following in the CHIP-SDK directory on the host:

```shell
vagrant plugin install vagrant-vbguest
```

This [blog post](http://kvz.io/blog/2013/01/16/vagrant-tip-keep-virtualbox-guest-additions-in-sync/) has some more tips on keeping additions in sync.

#### Invalid State
If you get an error like:

```shell
error: The guest machine entered an invalid state while waiting for it to boot.
```

This probably means your version of VirtualBox needs updating and/or needs the Extension Pack. Update as necessary and try `vagrant up` again.

#### Couldn't Find File
If you get the error:

```shell
error: Couldn't open file /Volumes/Satellite/gitbins/CHIP-SDK/base
```

that means you didn't cd CHIP-SDK. Very basic, perhaps, but late nights sometimes need that bump!

### Updating the CHIP-SDK Virtual Machine
You may have been working with CHIP for a while now, and you want to updated your SDK. It's only slightly more involved than sync'ing with the git repo; you have to update the virtual machine, too.

#### Requirements
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
  * Existing [installation of CHIP-SDK](#installing-c-h-i-p-sdk)

#### How To Update
Just follow these steps:

On your host operating system, pull the latest changes from our Git repository:

```shell
  cd ~/CHIP-SDK
  git pull
```

Make sure the virtual machine is shut down and update it:

```shell
  vagrant halt
  vagrant provision
```

Now you can boot the virtual machine and ssh into it:

```shell
  vagrant up
  vagrant ssh
```

Once you see the trusty prompt, your CHIP SDK virtual machine is ready to use:

```shell
  vagrant@vagrant-ubuntu-trusty-32:~$
```
#### All The Commands At Once
Here's all the commands in one place:

```shell
  cd ~/CHIP-SDK
  git pull
  vagrant halt
  vagrant provision
  vagrant up
  vagrant ssh
```

## Flash CHIP Firmware
Now that the [virtual machine and SDK](#installing-c.h.i.p.-sdk) are running and configured, you can connect CHIP to your computer and give it an operating system. If you want to flash using a native Ubuntu installation, read how to [prepare Ubuntu to flash](#setup-ubuntu-for-flashing)

#### Have you repaired your CHIP?

The original batch of CHIPs shipped with a software bug in the NAND flash storage. We've built a repair tool.


#### Prepare CHIP for Flashing
Prepare CHIP with a jumper wire connecting Pin 7 and Pin 39 on header U14 (UBOOT pin and GND). Here's a reference image that labels the headers and pins:

![CHIP with jumper wire attached](images/uboot_jumper.jpg)

*Note: this jumper needs to be present only when you connect CHIP to power*. If for some reason the wire becomes disconnected after you have powered CHIP, there is no problem or need to panic.

Now connect CHIP to your computer with a [micro-USB](https://commons.wikimedia.org/wiki/File:Micro_USB.jpg)->USB-B cable. The power LED will illuminate.

#### Option 1: Flash With NTC Buildroot OS
Buildroot is a lean operating system, and does not have a package manager to install software. You can add additional software before you flash CHIP by [customizing buildroot](#customize-buildroot). To flash CHIP with the buildroot OS:

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh -f
```
The `-f` option means "fastboot." If you have problems flashing, particularly on Windows or OS X, you can run `./chip-update-firmware.sh` to disable fastboot flashing. 

During flashing, the terminal will fill with messages.  If successful, you'll see C.H.I.P. run through a hardware test, with the answers being 'OK'.  If C.H.I.P. is 'OK', you can remove the jumper wire. Here is a [sample successful output](#buildroot-output).

#### Option 2: Flash With Debian
If you want to flash CHIP with the debian OS with no window manager or GUI

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh -d -f
```  

The `-f` option means "fastboot." If you have problems flashing, particularly on Windows or OS X, you can disable fastboot by leaving off the -f option: `./chip-update-firmware.sh -d`. Here is a [sample successful output](#debian-output).

#### Option 3: Flash With CHIP Operating System
If you want to flash CHIP with the complete CHIP Operating System

```shell
  cd ~/CHIP-tools
  ./chip-update-firmware.sh -d -b stable-gui -f
```  

During flashing, the terminal will fill with messages. If successful, you'll see C.H.I.P. run through a hardware test, with the answers being 'OK'.  If C.H.I.P. is 'OK', you can remove the jumper wire. Here is a [sample successful output](#debian-output). Because of filesize, the "gui" option must also include the `-f` fastboot option. Windows and OS X are not yet supported as flashing hosts.

#### Connect to CHIP and Do Something
If everything went OK, you can now power up your CHIP again and connect via serial as a USB gadget:

```shell
  screen /dev/ttyACM0 115200
```
You can login to CHIP as `chip` or `root` using the password `chip`.

and even test the hardware:

```shell
  hwtest
```

#### Customize Buildroot
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
  BUILDROOT_OUTPUT_DIR=../CHIP-buildroot/output ./chip-fel-flash.sh
```

Unless you changed the users or passwords, you can login to CHIP as `chip` or `root` using the password `chip`.

### Appendix
Sample outputs are provided in this appendix so you can more easily troubleshoot or proceed with confidence when flashing CHIP with firmware.

#### Buildroot Output
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

#### Debian Output
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

#### Failure
There are a couple common errors that occur when flashing. 

The first is a that CHIP is not in `fel` mode, ready to receive firmware. There are three possible reasons for this:
  * You already successfully flashed CHIP, and haven't disconnected the USB cable from your computer.
  * The jumper wire between Pins 7 & 39 is either not present, loose, or the jumper is in the wrong holes.
  * There is a problem with the USB cable.
  
You'll know this is the problem when you see this error in the terminal window:
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

The other common error is that you need to run the **chip-update-firmware.sh** script with **sudo** (or you need to add a rules file as described in the next section). This error looks like this in your terminal window:
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

#### Option: Flash Without sudo
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
## Setup Ubuntu For Flashing
If you are running Ubuntu OS on your computer, and don't want to bother with a virtual machine, you can flash CHIP from your real computer.

### Requirements
  * Computer running Ubuntu 14.04+
  * Jumper wire
  * CHIP

### Install Dependencies
Install some tools:

```shell
sudo apt-get update
sudo apt-get install u-boot-tools android-tools-fastboot git build-essential curl android-tools-fsutils libusb-1.0-0-dev pkg-config
```

If you intend to customize buildroot with additional software, install these packages:

```shell
  sudo apt-get install libncurses5-dev libc6-i386 lib32stdc++6 lib32z1
```

Get and make the fel tools:

```shell
git clone http://github.com/NextThingCo/sunxi-tools
cd sunxi-tools
make
sudo rm -f /usr/local/bin/fel
sudo ln -s $PWD/fel /usr/local/bin/fel
```

Clone the CHIP-tools repository

```shell
cd .. 
git clone http://github.com/NextThingCo/CHIP-tools 
cd CHIP-tools
```

If you have already cloned the CHIP-tools from a previous CHIP flashing, you can, of course, just update your existing repository

```shell
cd CHIP-tools
git pull http://github.com/NextThingCo/CHIP-tools
```

Now you are ready to [flash CHIP](#flash-chip-firmware) with firmware.

#### All The Commands At Once
Here's all the commands in one place:

```shell
sudo apt-get update
sudo apt-get install u-boot-tools android-tools-fastboot git build-essential libusb-1.0-0-dev libncurses5-dev libc6-i386 lib32stdc++6 lib32z1 android-tools-fsutils
git clone http://github.com/NextThingCo/sunxi-tools
cd sunxi-tools
make
sudo rm -f /usr/local/bin/fel
sudo ln -s $PWD/fel /usr/local/bin/fel
cd .. 
git clone http://github.com/NextThingCo/CHIP-tools 
cd CHIP-tools
```

## WiFi Connection
### Connecting C.H.I.P. to a Wireless Network With connman
The buildroot operating system uses the `connman` command-line network manager to connect and manage your network connections.
If you want all the details of `connman` [visit the ArchLinux wiki.](https://wiki.archlinux.org/index.php/Connman)

#### Requirements
  * CHIP
  * One of the following:
    * Keyboard and monitor for CHIP
    * [Serial connection](#headless-chip) to CHIP

#### Step 1: Enable WiFi and Find a Network

These three commands will, in turn, enable wifi, scan for access points, and see what networks are available:

```shell
  connmanctl enable wifi
  connmanctl scan wifi
  connmanctl services
```
  
The `services` command has output similar to:

```shell
*AO 
    NTC                  wifi_7cc70905cd77_4e5443_managed_psk
                         wifi_7cc70905cd77_hidden_managed_psk
    NTC Guest            wifi_7cc70905cd77_4e5443204775657374_managed_psk
                         wifi_7cc70905cd77_hidden_managed_none
    ATT312               wifi_7cc70905cd77_415454333132_managed_psk
    HP-Print-99-LaserJet 1102 wifi_7cc70905cd77_48502d5072696e742d39392d4c617365724a65742031313032_managed_none
    ATT344               wifi_7cc70905cd77_415454333434_managed_psk
    CBCI-1B57-2.4        wifi_7cc70905cd77_434243492d314235372d322e34_managed_psk
    mi-fi                wifi_7cc70905cd77_6d692d6669_managed_none
    0024A5D8CF33         wifi_7cc70905cd77_303032344135443843463333_managed_psk
    Twirl-Eco-Events-2.4 wifi_7cc70905cd77_547769726c2d45636f2d4576656e74732d322e34_managed_psk
    xfinitywifi          wifi_7cc70905cd77_7866696e69747977696669_managed_none
```

#### Step 2: Connect To An Access Point
Unfortunately, connman doesn't use the nice name on the left of the services list. It wants the unfriendly string on the right, so you'll want to get copy and paste ready.
##### A: No Password
For example, to connect to NTC Guest, which has no password, `services` shows two choices. We want the one without “hidden” in the string. Use the connect command to connect:

```shell
  connmanctl connect wifi_7cc70905cd77_4e5443204775657374_managed_psk
```

If your network is not password protected, you'll get some output that will indicate a successful connection, such as:

```shell
[  961.780000] RTL871X: rtw_set_802_11_connect(wlan0)  fw_state=0x00000008
[  962.070000] RTL871X: start auth
[  962.080000] RTL871X: auth success, start assoc
[  962.090000] RTL871X: rtw_cfg80211_indicate_connect(wlan0) BSS not found !!
[  962.100000] RTL871X: assoc success
[  962.110000] RTL871X: send eapol packet
[  962.290000] RTL871X: send eapol packet
[  962.300000] RTL871X: set pairwise key camid:4, addr:0a:18:d6:97:2d:26, kid:0, type:AES
[  962.320000] RTL871X: set group key camid:5, addr:0a:18:d6:97:2d:26, kid:1, type:AES
```

If your network is password protected, you'll get an error.

##### B: Password-Protected
To deal with passwords, you'll need to put `connman` into interactive mode:

```shell
  connmanctl
```

which gives a connmanctl prompt:

```shell
  connmanctl>
```

In the shell, turn the 'agent' on so it can process password requests:

```shell
  agent on
```

and now use the connect command (your network name will be different than what's below of course)

```shell
  connect wifi_7cc70905cd77_4e5443_managed_psk
```

and enter your password when prompted:

```shell
  Agent RequestInput wifi_7cc70905cd77_4e5443_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
  Passphrase?
```

Now that you are connected to a wireless network, you can exit connmanctl interactive mode by typing

```shell
  quit
```

###### All The Commands In One Place
Here's all the commands in one place:

```shell
  connmanctl
  agent on
  connect wifi_7cc70905cd77_4e5443_managed_psk
  quit
```


#### Step 3: Test Connection
In CHIP's command line, you can ping Google four times:

```shell
  ping -c 4 8.8.8.8
```

and expect ping to output some timing messages like:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: seq=0 ttl=55 time=209.147 ms
64 bytes from 8.8.8.8: seq=1 ttl=55 time=111.125 ms
64 bytes from 8.8.8.8: seq=2 ttl=55 time=183.627 ms
64 bytes from 8.8.8.8: seq=3 ttl=55 time=147.398 ms
--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 111.125/162.824/209.147 ms
```

If your connection is not successful, then ping will tell you your network is down:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
ping: sendto: Network is unreachable
```

##### Troubleshooting Connection Problems
  * You'll need to make sure you used the right network when you used the connect commnand. 
  * Review any messages that the connect commnand gave you. Did they look like the examples of a successful connection? 
  * If everything checked out until you got to `ping`, there's a good chance the problem is with your router or connection to the internet.

#### Disconnecting And Forgetting Networks
To disconnect from your network, you might first want a reminder of what unfriendly string is used to describe your access point, so type:

```shell
  connmanctl services
```

which will output information about your current link:

```shell
  *AO NTC                  wifi_7cc70905cd77_4e5443_managed_psk
```

Use the ID to disconnect:

```shell
  connmanctl disconnect wifi_7cc70905cd77_4e5443_managed_psk
```

and you'll get some status like this:

```shell
[  301.890000] RTL871X: clear key for addr:0a:18:d6:97:2d:26, camid:4
[  301.900000] RTL871X: clear key for addr:0a:18:d6:97:2d:26, camid:5
[  301.920000] IPv6: ADDRCONF(NETDEV_UP): wlan0: link is not ready
Disconnected wifi_7cc70905cd77_4e5443_managed_psk
```

Generally, `conman` will remember and cache setup information - if you reboot in the vicinity of a known network, it will attempt to connect. However, if you need to forget a network setup, these setups can be found by navigating:

```shell
  cd /var/lib/connman/
```

You can delete a single connection by seeing what connections are stored

```shell
  ls /var/lib/connman/
```

and then delete a setup that you find, for example

```shell
  rm -r wifi_7cc70905cd77_4e5443_managed_psk
```

You can delete all the “wifi” directories with

```shell
  rm -r wifi*
```

(the `-r` is needed because these are directories you are deleting, and the star at the end of `wifi*` assumes your configurations all start with the string “wifi”)

#### For Advanced Users
It's worth noting that you'll see two wireless networking interfaces if you list them with

```shell
  ifconfig
```

`connman` is configured to see only the physical interface wlan0 which simplifies setup. We do this with a blacklist, which can be modified at `/etc/connman/main.conf`

### Connecting C.H.I.P. to Wi-Fi with nmcli
There are several tools in Linux for connecting and configuring networks. We will be using the command nmcli (Network Manager Client). You may see other tutorials that reference iw or iwconfig, however, these tools are not recommended for C.H.I.P. You can read more about nmcli on the internet.

#### Requirements
You will need one of these scenarios:

  * CHIP with monitor and keyboard attached
  * [SSH or serial](#headless-chip) connection
  * Wireless access to internet

#### Step 1: List available Wi-Fi networks
In the terminal, type

```shell
nmcli device wifi list
```

The output will list available access points

```shell
*  SSID      MODE   CHAN  RATE       SIGNAL  BARS  SECURITY  
*  NextThing HQ    Infra  11    54 Mbit/s  100     ▂▄▆█  --        
   NextThing Shop  Infra  6     54 Mbit/s  30      ▂___  WPA1 WPA2 
   2WIRE533        Infra  10    54 Mbit/s  44      ▂▄__  WPA1 WPA2 
```

#### Step 2: Connect to a network
You can connect to password -protected or open access points.
##### A: No Password
To connect to an open network with no password, use this command:

```shell
sudo nmcli device wifi connect '(your wifi network name/SSID)' ifname wlan0
```

These commands will respond with information about the connection.
##### B: Password Protected
To connect to a password protected network, use this command, inserting your own network name and password:

```shell
sudo nmcli device wifi connect '(your wifi network name/SSID)' password '(your wifi password)' ifname wlan0
```

#### Step 3: Test your Connection
You can verify and test your wireless network connection.
##### Verify
You can verify your connection using the command

```shell
nmcli device status
```

which outputs a list of the various network devices and their connections. For example, a successful connection would look like this:

```shell
DEVICE   TYPE      STATE         CONNECTION 
wlan0    wifi      connected     NextThing HQ   
wlan1    wifi      disconnected  --         
ip6tnl0  ip6tnl    unmanaged     --         
lo       loopback  unmanaged     --         
sit0     sit       unmanaged     --
```

Because it is worth knowing that Linux offers many ways of doing things, another command that shows your current active connection is

```shell
nmcli connection show --active
```

which outputs like so:

```shell
NAME  UUID                                  TYPE             DEVICE 
NTC   59962bac-3441-437b-94ea-bf31dee66e8f  802-11-wireless  wlan0 
```

After you have connected once, your C.H.I.P. will automatically connect to this network next time you reboot (or start NetworkManager services).

##### Test
Finally, you can test your connection to the internet with `ping`. Google's DNS server at the IP address 8.8.8.8 is probably the most reliable computer on the internet, so:

```shell
ping -c 4 8.8.8.8
```

results in output like:

```shell
64 bytes from 8.8.8.8: icmp_seq=1 ttl=55 time=297 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=55 time=26.3 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=55 time=24.8 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=55 time=55.7 ms
```

You can stop this command by pressing CTRL-C on your keyboard. The `-c 4` option means it will happen only 4 times.

Congratulations! You are now network with CHIP!

#### Disconnecting and Forgetting Networks
The command to disconnect from a wireless device needs a few parameters:

```shell
sudo nmcli dev disconnect wlan0
```

You may want to prevent auto-connection to a network, so you can use this command to "forget" a network:

```shell
sudo nmcli connection delete id  (your wifi network name/SSID) 
```

#### Troubleshooting
Here are a few possible problems with connections.

##### No network found
Not much to say about that. If there's no network, you can't connect. Go find a network!

##### Incorrect password
If you type in the wrong password, you'll get some errors like this:

```shell
[32258.690000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32258.800000] RTL871X: start auth
[32263.720000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32263.820000] RTL871X: start auth
[32264.430000] RTL871X: auth success, start assoc
[32269.850000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32269.970000] RTL871X: start auth
Error: Timeout 90 sec expired.
```

Try connecting again with the correct password.

##### Failed ping
If you don't have access to the internet, your ping to an outside IP will fail. 
It is possible that you can connect to a wireless network, but have no access to the internet, so you'd see a connection when you request device status, but have a failed ping. This indicates a problem or restriction with the router or the access point, not a problem with the CHIP.

A failed ping looks something like:

```shell
From 192.168.2.56 icmp_seq=14 Destination Host Unreachable
From 192.168.2.56 icmp_seq=15 Destination Host Unreachable
From 192.168.2.56 icmp_seq=16 Destination Host Unreachable
18 packets transmitted, 0 received, +9 errors, 100% packet loss, time 17013ms
pipe 4
```

##### Loss of wireless network
A sudden, unplanned disconnection will post an error in the terminal window, for example:

```shell
[30863.880000] RTL871X: linked_status_chk(wlan0) disconnect or roaming
```

The Network Manager will periodically try to reconnect. If the access point is restored, you'll get something like this in your terminal window:

```shell
[31798.970000] RTL871X: rtw_set_802_11_connect(wlan0)
[31799.030000] RTL871X: start auth
[31799.040000] RTL871X: auth success, start assoc
[31799.050000] RTL871X: rtw_cfg80211_indicate_connect(wlan0) BSS not found !!
[31799.060000] RTL871X: assoc success
```

##### nmcli not installed error
If you try to use `nmcli` and you get an error that it is not found or is not a command, chances are that you are using the CHIP buildroot image. The `nmcli` commands only apply to CHIPs running debian linux.

## Configure Sound Output on Debian
Getting simple audio playback working on CHIP is pretty easy, once you install the correct packages and enable audio output. In the code examples below, we've inserted the && characters at the end of lines so you can copy and paste the entire block into a terminal window and execute each line in series.

### Requirements
  * CHIP
  * A [SSH or serial connection to CHIP](#headless-chip) or
  * Monitor and keyboard
  * Headphones or powered speakers connected to CHIP a/v jack
  * A [Connection to the internet](#connecting-c-h-i-p-to-wi-fi-with-nmcli)

### Setup CHIP
Update your apt repository list if you haven't done so recently:

```shell
  sudo apt-get update
```
  
Then install ALSA:

```shell
  sudo apt-get install libasound2 alsa-utils
```

This will install alsa and some utilities for playing sound from the command line. Once those have installed, you'll need to make the outputs active for sound

```shell
  alsamixer
```

will open up a simple interface. Use the left and right arrow keys on your keyboard to select among the items, and use the up/down keys to change the options:

  * DAC Output - set to Direct
  * Left Mixer - set to Left
  * PA - set to desired volume
  * Right Mixer - set to Right

![alsamixer interface](images/alsamixer.jpg)

### Play a Sound
Change to the root media directory:

```shell
  cd /media
```

Alternatively, you could download a sound into chip's home directory:

```shell
  mkdir /home/chip/Media && cd /home/chip/Media
```

Use `wget` to download a sound of piano chords to the file test.wav:

```shell
  wget -O test.wav https://upload.wikimedia.org/wikipedia/commons/d/db/Descending_thirds.wav
```

If wget returns command not found you can install it:

```shell
  sudo apt-get install wget
```

We can finally play the sound and hear it over CHIP's headphone jack:

```shell
  aplay test.wav
```

If you want to play mp3 or ogg files, you can install mplayer:

```shell
  sudo apt-get install mplayer
```

Then try an ogg file:

```shell
  wget -O test.ogg https://upload.wikimedia.org/wikipedia/commons/e/e7/Agogo.ogg &&
  mplayer test.ogg
```

And mp3 file:

```shell
  wget -O test.mp3 http://www.freesound.org/data/previews/315/315618_2050105-lq.mp3 &&
  mplayer test.mp3
```

### Record A Sound
If you want to try the audio input, you need to connect audio input to [header U14, pins 06 & 12](#pin-headers) or [modify CHIP](#microphone-and-audio-input) to use audio in on the TRRS connector.
Once you have an audio signal going into CHIP, you can test it out by recording a three second (`-d 3`) WAV file with arecord:

```shell
arecord -f cd -d 3 -D hw:0,0 chipaudioin.wav
```

### More Packages
Developers that want to use sound will probably want to download these packages:

```shell
sudo apt-get install portaudio19-dev &&
sudo apt-get install swig &&
sudo apt-get install python-setup-tools &&
sudo apt-get install python-dev
```

## USB Storage Devices
In this tutorial, we'll describe how you can use the USB port to add more storage with a thumb drive, hard drive, card reader, or whatever else. You can then copy, store, and edit files on the storage device, extending the capability of CHIP.

This tutorial is suitable for the buildroot image. If you are following this for other Linux distributions, there are some adjustments that you'll need to make for paths, permissions, and enabling 'sudo.' With buildroot, you work as the root user, so this tutorial is appropriately terse.

### Requirements 
  * USB thumb drive or hard drive
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+ (to format USB device, if needed)

### Step 1: Format the Drive
First, you'll want to format the drive as an MS-DOS (FAT), NTFS, or ext3 volume. You can do this on another computer.

Once formatted, insert the drive into CHIP's USB port. Enter the command

```shell
dmesg
```

You'll get output like:

```shell
[ 4953.430000] usb 1-1: new high-speed USB device number 2 using ehci-platform
[ 4953.580000] usb-storage 1-1:1.0: USB Mass Storage device detected
[ 4953.590000] scsi host0: usb-storage 1-1:1.0
[ 4954.590000] scsi 0:0:0:0: Direct-Access USB Flash Memory 1.00 PQ: 0 ANSI: 2
[ 4954.600000] sd 0:0:0:0: [sda] 3911616 512-byte logical blocks: (2.00 GB/1.86 GiB)
[ 4954.610000] sd 0:0:0:0: [sda] Write Protect is off
[ 4954.620000] sd 0:0:0:0: [sda] Mode Sense: 65 44 09 30
[ 4954.630000] sd 0:0:0:0: [sda] No Caching mode page found
[ 4954.630000] sd 0:0:0:0: [sda] Assuming drive cache: write through
[ 4954.650000] sda: sda1
[ 4954.650000] sd 0:0:0:0: [sda] Attached SCSI removable disk
```

Notice the second to last line. This tells you the device location for the drive. Storage devices generally have device names that start with “sd”. If you want to see all the storage devices attached to CHIP, you can use a wildcard to display all devices that start with “sd”:

```shell
ls /dev/sd*
```

and you'll get something like:

```shell
/dev/sda /dev/sda1
```

With one thumb drive attached, it appears as two devices: the device itself (sda), and the storage partitions (sda1). There is only one partition on this drive.

Another way to find storage devices is the command

```shell
blkid
```

which lists them, along with the names you might have initialized them with:

```shell
/dev/sda1: LABEL="TEST" UUID="6668-11E9"
```

### Step 2: Mount the Drive Device to Your Filesystem
Now that you know where your partition is, it's time to mount the partition so you can access the files. 

First, make a directory where your drive can mount:

```shell
mkdir /drives
```

Mount the drive device to your /drives directory:

```shell
mount /dev/sda1 /drives
```

Now you can navigate to the `drives` directory and see all the files in the drive:

```shell
cd /drives
ls
```

### Step 3: Unmount the Drive From Filesystem
If you want to remove the drive from the USB port on CHIP, it's best to unmount it:

```shell
umount /dev/sda1
```

### Step 4: Automatic Mounting on Boot
You'll probably want to mount this drive automatically next time you use it, though. We can set that up with a quick modification to the `fstab` (file system table) document:

```shell
vi /etc/fstab
```

Getting around vi is not very intuitive. If you are new to it, here's a quick guide on getting this text into the fstab document:
  * 'arrow' key to the end of the file,
  * press the 'i' key to insert text
  * type (or copy-paste) this:

```shell
/dev/sda1 /drives vfat defaults 0 0
```

To exit vi, 
  * press the 'esc' key, 
  * type ':' (colon), 
  * type 'wq' to write and quit vi.

You can test your work with:

```shell
mount -a
```

If there's an error, double check the `fstab` file and make sure it has the line `/dev/sda1 /drives vfat defaults 0 0` at the end. If it's successful, you'll be able to view, modify and copy the files on the disk:

```shell
ls /drives
```

Now, if you reboot , the drive will mount automatically. If you remove the drive, then insert it again, you'll need the command

```shell
mount -a
```

## Connecting Bluetooth Devices
CHIP has built-in Bluetooth. This tutorial instructs how to use a Bluetooth keyboard, since it is a simple and obvious example. There are, of course, several types of Bluetooth devices, such as earpieces, audio connectors, vacuum cleaners, and more. Future tutorials will cover those devices, but the keyboard is a good introduction to the commands and an easy way to test your system.

### Requirements
  * CHIP
  * SSH or serial connection to CHIP or
  * Monitor and keyboard
  * Bluetooth device, preferably keyboard

### Important!
Start with a CHIP completely unplugged and powered down. Add power and boot up. A known limitation is that after `reboot`, CHIP's Bluetooth controller may not work until you `power` and physically disconnect from a power source.

### About `bluetoothctl`
We'll be using the command `bluetoothctl` to find, pair with, and connect to devices.

In the terminal, type

```shell
  bluetoothctl
```

This starts up `bluetoothctl` in interactive mode. You should see output like

```shell
[NEW] Controller 7C:C7:08:05:CD:77 BlueZ 5.27 [default]
[NEW] Device 60:33:4B:13:A7:45 nyb
[NEW] Device 15:03:26:A0:26:26 SK032B02-2626
```

which is a list of MAC addresses of CHIP's Bluetooth controller chip (the first line) and any other devices that have been paired with CHIP in the past. Use the `help` command - it lists all the very useful commands in the `bluetoothctl` interactive mode.

In Bluetooth interactive mode, use the command

```shell
  power on
```

which outputs

```shell
Changing power on succeeded
[CHG] Controller 7C:C7:08:05:CD:77 Powered: yes
```

### Find A Bluetooth Device
If you need to discover a device, start the scan process:

```shell
  scan on
```

which will start printing MAC addresses and names (if available) of Bluetooth devices in your vicinity.

```shell
[NEW] Device 15:03:26:A0:26:26 SK032B02-2626
[NEW] Device 1C:1A:C0:85:5E:2C 1C-1A-C0-85-5E-2C
[NEW] Device 60:33:4B:13:A7:45 nyb
```

### Pair With A Bluetooth Device
Pair to a device with the MAC address and the `pair` command:

```shell
  pair 1C:1A:C0:85:5E:2C
```

This may fail if the device is powered off, goes out of range, or your toddler spills water on it. Here's what failure looks like:

```shell
Attempting to pair with 1C:1A:C0:85:5E:2C 
[CHG] Device 1C:1A:C0:85:5E:2C Connected: yes 
[CHG] Device 1C:1A:C0:85:5E:2C Connected: no 
Failed to pair: org.bluez.Error.AuthenticationCanceled
```

As the scan continues, you'll eventually see the device you are interested in, so copy that MAC address and type:

```shell
  pair 15:03:26:A0:26:26
```

with output like:

```shell
[CHG] Device 15:03:26:A0:26:26 Connected: yes
[CHG] Device 15:03:26:A0:26:26 Modalias: usb:v05ACp3232d0001
[CHG] Device 15:03:26:A0:26:26 UUIDs:
 00001124-0000-1000-8000-00805f9b34fb
 00001200-0000-1000-8000-00805f9b34fb
[CHG] Device 15:03:26:A0:26:26 Paired: yes
Pairing successful
[CHG] Device 15:03:26:A0:26:26 Connected: no
Pair with a Bluetooth Device with Password (keyboard)
```

Some Bluetooth devices need user input to pair. In that case, you'll need to turn the agent 'on' so the device can post a password, and you can enter it:

```shell
  agent on
```

will output

```shell
  Agent registered
```

now you can pair it:

```shell
  pair DC:2C:26:D7:B6:8F
```

will output

```shell
Attempting to pair with DC:2C:26:D7:B6:8F
[CHG] Device DC:2C:26:D7:B6:8F Connected: yes
[agent] PIN code: 245261
```

Now you can use the Bluetooth device to enter the PIN code, then hit enter. The terminal will give some status about the pairing:

```shell
[CHG] Device DC:2C:26:D7:B6:8F Modalias: usb:v05ACp022Cd011B
[CHG] Device DC:2C:26:D7:B6:8F UUIDs:
        00001000-0000-1000-8000-00805f9b34fb
        00001124-0000-1000-8000-00805f9b34fb
        00001200-0000-1000-8000-00805f9b34fb
[CHG] Device DC:2C:26:D7:B6:8F Paired: yes
Pairing successful
[CHG] Device DC:2C:26:D7:B6:8F Connected: no
```

Now that you are paired, you will have to connect.

### Connect With A Bluetooth Device
Now that you have paired the Bluetooth device, you won't have to do that again. However, the device still needs to be connected:

```shell
  connect 15:03:26:A0:26:26
```

will output, when successful:

```shell
Attempting to connect to 15:03:26:A0:26:26
[CHG] Device 15:03:26:A0:26:26 Connected: yes
Connection successful
[bluetooth]## [ 1405.340000] hid-generic 0005:05AC:3232.0001: unknown main item tag 0x0
[ 1405.360000] input: SK032B02-2626 as /devices/platform/soc@01c00000/1c28c00.serial/tty/ttyS1/hci0/hci0:4/0005:05AC:3232.0001/input/input1
[ 1405.380000] hid-generic 0005:05AC:3232.0001: input: BLUETOOTH HID v0.01 Mouse [SK032B02-2626] on 7c:c7:08:05:cd:77
```

or, if the device is not available, it will fail:

```shell
Attempting to connect to 15:03:26:A0:26:26
[bluetooth]## [ 1304.470000] Bluetooth: HIDP (Human Interface Emulation) ver 1.2
[ 1304.480000] Bluetooth: HIDP socket layer initialized
Failed to connect: org.bluez.Error.Failed
```

### Troubleshooting
If your Bluetooth controller module on CHIP is not functioning, you can easily find the problem. Type

```shell
  bluetoothctl
```

to get into the interactive mode, then type

```shell
  power on
```

If you get the response

```shell
  No default controller available
```

Then there's a problem with CHIP recognizing the Bluetooth module. [Read the very first instructions](#important!) at the top of this tutorial.

## Install X-windows
If you want a windowed desktop on C.H.I.P., you can install X-Windows. 

### Requirements
  * CHIP [connected to WiFi](#connecting-c-h-i-p-to-wi-fi-with-nmcli)
  * Monitor attached to CHIP
  * Keyboard or [Serial or SSH Connection](#headless-chip) to CHIP

### Installation (xfce4)
CHIP is a lightweight computer, so we'll install the lightweight xfce4:

```shell
  sudo apt-get install xfce4
```

It might take some time to download and install all the packages, since there are a lot of dependencies and libraries involved. Once installed, start the windowing system with the command

```shell
  startx&
```

(the `&` runs Xwindows in the background, so you can still use your terminal). After a minute or so, you'll get an image on the monitor:

![Xwindows up and running on CHIP](images/xwindows_first.jpg)

Now you can use a mouse and keyboard to explore CHIP and launch programs.

### Troubleshooting

If you get errors from apt that report "unmet dependencies," you can run the command

```shell
sudo apt-get install -f
```

which will force installation of any alternate or missing dependencies of any installed packages.
