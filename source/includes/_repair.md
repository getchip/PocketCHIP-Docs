# CHIP Boot Repair Tool 


The initial batch of CHIPs shipped with a problem in the NAND flash storage. Don't worry, this is a software issue, and we've built a repair tool to correct this issue.


## Things you will need

![Things you will need](images/All_the_Things.png)

 * C.H.I.P.
 * Standard-USB to micro-USB connector
 * Paper clip (a jumper wire works too)
 * Computer with Ubuntu 14.4

## For Ubuntu
  * Open a terminal and type `sudo apt-get update && sudo apt-get upgrade`. Hit enter to execute the command. This updates the debian package repositories and upgrades your system to reflect any package changes.

![apt-get update && apt-get upgrade](images/apt.png)

  * Download the repair tool [here](http://opensource.nextthing.co/chip-boot-repair.deb).

  * Double-click on the repair tool icon and follow the Ubuntu software install process. Once the install finishes, use the Ubuntu search tool to find the CHIP boot repair application.

![Search for the app](search.png)

* Follow the onscreen messages to complete the repair process.

![Waiting for FEL](Wait.png)


  * Grab a paper clip (or jumper wire. Heck a stripped metal twist tie works) and bend it so one end fits in the FEL pin (U14 - pin 7) and the other end fits in the GND pin (U14 - pin 39). 

![FEL the board](images/FEL_the_Board.jpg)

 * Connect C.H.I.P. to your computer using a standard-USB to USB-micro cable.


![CHIP to laptop](images/CHIP_to_Laptop.png)

 * As soon as the repair tool software detects that CHIP is in FEL mode and connected by USB, the application begins the repair process.

![FEL Mode](images/CHIP_in_FEL_Mode.png)

 * The repair takes only seconds.

![CHIP fixed](images/CHIP_Repair_Complete.png)

 * Congratulations, your C.H.I.P. is now repaired. \\(•◡•)/

