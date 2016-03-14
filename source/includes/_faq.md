# FAQs
Frequently Asked Questions

## Do I need to install something for CHIP to be a computer?
No. CHIP comes preinstalled with the CHIP Operating System and several applications. Just power on, and get started.

## Why composite video?
Several reasons: 
  * Televisions are the most commonly available screen in the world and the vast majority of them have a composite input. 
  * Composite video can be integrated without adding licensing fees to the cost of C.H.I.P. 
  * Composite is a very low profile connector, allowing us to keep the footprint of the board small for people wanting to build C.H.I.P. into projects.
  
## Is CHIP an exposed circuit board?
Yes! Not having a case for C.H.I.P. is one of the ways we are able to keep our costs down. As makers, we’re excited to introduce people to the physical components of computers and show them that electronics aren’t scary, they’re fun! We hope to spark curiosity and encourage people to begin tinkering themselves.

## What resolution can CHIP function at?
With the VGA and HDMI adapters, C.H.I.P. is designed to work at 720p resolution, though the Mali 400 GPU is technically capable of up to 1080p outputs. The composite video connector operates at the "SD" resolution of 640x480.

## How is CHIP so cheap?
QUANTITY. Our partners at Allwinner worked hard to help us find how to reduce costs, so  we could introduce C.H.I.P. to EVERYBODY. To sell C.H.I.P. for $9, we need to order tens of thousands of chips. By using common, available, and volume-produced processor, memory, and wifi chips, we are able to leverage the scales at which tablet manufacturers operate to get everyone the best price.

## What does CHIP stand for?
We’re curious to hear what you think ;)

## Is CHIP open source? Where are the docs?
YES!  Very open source!  We are still in the process of testing and refining the whole C.H.I.P. family.  As we hit design completion, we'll release our design files.  We've already released quite a bit!  Check them out at [our GitHub repo](https://github.com/NextThingCo)!

## Can I upgrade CHIP's RAM/Storage/Processor?
Technically, yes, but the components are soldered on and not intended to be swapped out. If you really like reworking small BGA and fine pitch components, though, we won't stop you. :)

If you want additional storage, you can attach a USB drive!

## How many accessible pins does CHIP have?
Eight digital GPIOs, one PWM pin, SPI, TWI (I2C), UART, USB, CSI, Parallel LCD output, touchpanel input, stereo audio out, mono audio in, composite video out, and a whole bunch of power rails in and out.

The most up-to-date information is on [our GitHub repo](https://github.com/NextThingCo).

## Can I make my own adapter board?
Absolutely! The schematics and layout for the boards, both of C.H.I.P. and C.H.I.P.’s adapters will be released as they are finalized for production. From that, you can build whatever sort of adapters or add-ons you want!

## Does the HDMI adapter have HDMI audio output?
Not at this time. Because there is no onboard digital audio support from our processor, C.H.I.P.’s current design only has analog audio output via the ⅛” headphone/composite jack. Adding a USB sound card is the easiest way to beef up your CHIP’s digital audio output options.

## Does Linux come pre-installed?
YES! C.H.I.P. comes with Linux installed, and a selection of our favorite programs and games. Like any real computer, you can download more software and customize C.H.I.P.s applications and operating system to suit your needs!

## Can I plug in a Keyboard, Mouse, AND Power?
The easiest way to accomplish this is to power C.H.I.P. as usual via the microUSB port. Attach a USB keyboard with an accessory USB port on it, then connect your wired mouse to that port. Alternatively, a bluetooth keyboard or mouse can be used to free up the need for USB connections.

For more advanced use cases, C.H.I.P. can be powered via its interconnects, leaving both the full size USB and microUSB ports available to attach devices to.

## Can I stream Netflix?
Due to a lack of support for Silverlight (the back-end software that allows Netflix to be streamed) in Linux, it is unlikely that Netflix will work on C.H.I.P. using entirely open-source software. This would require someone to come up with an alternate back-end. That said, some very astute backers have reported that Netflix should be possible by installing the Google Chrome browser, which allows Netflix streaming via HTML5.

## Does CHIP have a power switch?
Yes! C.H.I.P. has a tiny power on-off button and a status LED on the board itself.

## Can I make a supercomputer by linking 100 CHIPs together?
We’re focused on individual uses of C.H.I.P. but what you’re talking about is called clustering, and may be possible -- A good place to start, if you’re interested in clustering, is reading up on [Debian-Beowulf](https://www.debian.org/ports/beowulf/)

## What about a camera?
C.H.I.P. has exposed CSI pins on its headers for integrating a camera directly to the processor, or if drivers and sensor tuning sound like a bit much, you can always add a USB camera too.

## How do I connect a display?
You can connect a display through the 3.5mm (⅛”) TRRS composite video port on C.H.I.P. If you’d like to connect to a vga or hdmi monitor, we have adapters available for that! You can also connect any parallel LCD to the exposed display pins on C.H.I.P.’s headers.

## Does CHIP have an SD card slot?
No. But by integrating reliable storage onto the device, we’re able to both save you a “getting started” cost and allow Linux to come preinstalled on C.H.I.P. meaning it's ready to go when it arrives at your door. One of the big goals of this project is making C.H.I.P. easy to use, and this goes a long way towards that end. If you need additional storage, it’s easy to add an SD card reader or other USB storage with the built-in USB port.

## Can I connect to composite video AND audio out at the same time?
YES! The 1/8" mini (TRRS) jack can be used either with a video-only cable, audio only cable, headphones, headphones with mic, OR a combined Audio/Video composite cable. Pretty versatile little port, isn't it!?

## What software does CHIP ship with? What programs can it run?
C.H.I.P. comes pre-loaded with some of our favorite open-source applications, and the ability to install hundreds more. What’s even more exciting, though, is that if any given program isn’t supported out of the box, the community can work together to make it happen. That’s what we <3 about Open Source Software.

## What programming languages does CHIP support?
C.H.I.P. is a **real computer**, and can run software written in all kinds of programming languages, so long as there’s a compiler for them. Python, Java (via JDK8), Ruby, PHP, Squeak, C++, JS, Assembly, BF.. even our favorite, ArnoldC, and lots lots more.

## Does CHIP have Real Time Clock?
No, but adding an RTC is a great (and easy) hardware hack, for the folks that need it. For most people, though, an RTC isn’t necessary since it is easy to get C.H.I.P. to pull time from a remote NTP server over wifi.

## What voltage are GPIOs?
CHIP uses 3V3 digital logic on GPIOs.

## What connector is use on the battery?
We are using a JST-2.0 PH 2-pin shrouded male connector to connect LiPo cells to C.H.I.P. In the current design there are also BATT pins available on the interconnect headers, which allow alternate battery connectors/placements when attaching C.H.I.P. to a custom PCBA.

## I want to know more about the Allwinner R8 processor!
You can find out more from the [Allwinner R8 User Manual.](https://github.com/NextThingCo/CHIP-Hardware/blob/master/CHIP%5Bv1_0%5D/CHIPv1_0-BOM-Datasheets/Allwinner%20R8%20User%20Manual%20V1.1.pdf)
The [Allwinner A13 Manual](A13 datasheet [on linux-sunxi.org](https://linux-sunxi.org/images/e/eb/A13_Datasheet.pdf) is also a good cross reference, as it is very similar to the R8.

## What kind of battery can I use with CHIP?
Any single-cell (3.7V) LiPo battery will work with C.H.I.P. You can go bigger or smaller than 3000mAH as needed for your project!

## Does CHIP's WiFi support AP mode?
YES!

## Does C.H.I.P. have an ethernet port?
No. But it does have built-in 802.11b/g/n wifi. But if you like wires, you can use a USB-Ethernet connector.

## Does C.H.I.P. come with a banana?
C.H.I.P. is strictly B.Y.O.B. ;)

## Is there a command that lets me know more about the CPU and Memory? 
It's a computer! It will tell you anything. If you want to find out more details about CHIP's processor, use the command:

```shell
cat /proc/cpuinfo
```

This will give output similar to:

```shell
processor	: 0
model name	: ARMv7 Processor rev 2 (v7l)
BogoMIPS	: 1001.88
Features	: half thumb fastmult vfp edsp neon vfpv3 tls vfpd32 
CPU implementer	: 0x41
CPU architecture: 7
CPU variant	: 0x3
CPU part	: 0xc08
CPU revision	: 2

Hardware	: Allwinner sun4i/sun5i Families
Revision	: 0000
Serial		: 162542c10c427777
```

If you want know more about the memory:

```
cat /proc/meminfo
```

with output something like:

```shell
MemTotal:         507108 kB
MemFree:          298600 kB
MemAvailable:     382592 kB
Buffers:               0 kB
Cached:            92216 kB
SwapCached:            0 kB
Active:            98752 kB
Inactive:          64096 kB
Active(anon):      73180 kB
Inactive(anon):     5812 kB
Active(file):      25572 kB
Inactive(file):    58284 kB
Unevictable:           0 kB
Mlocked:               0 kB
HighTotal:             0 kB
HighFree:              0 kB
LowTotal:         507108 kB
LowFree:          298600 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Dirty:                 0 kB
Writeback:             0 kB
AnonPages:         70660 kB
Mapped:            37768 kB
Shmem:              8360 kB
Slab:              22784 kB
SReclaimable:      11560 kB
SUnreclaim:        11224 kB
KernelStack:        1176 kB
PageTables:         2240 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:      253552 kB
Committed_AS:     615216 kB
VmallocTotal:     507904 kB
VmallocUsed:       14560 kB
VmallocChunk:     482532 kB
```