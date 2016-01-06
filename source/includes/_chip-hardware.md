# CHIP Hardware
CHIP is small, but it packs a lot of hardware on the PCB. Here's an overview of the connections and components.

## Parts and Pieces
![Callout graphic of chip parts on top](images/chip_top_annotated.jpg)
![Callout graphic of chip parts on bottom](images/chip_bottom_annotated.jpg)

## Wireless
### WiFi
CHIP supports 802.11b/g/n using the built-in WiFi. 
### Bluetooth
CHIP supports the Bluetooth 4.0 LE standard using the built-in Bluetooth.

## Physical Connectors
CHIP is loaded with essential connectors for USB, serial, audio, video, and loads of IO on the pin headers.
### USB
The single USB port on CHIP is USB 2.0 compatible. It can provide up to 500mA of current, as is standard for USB ports on computers. If you need to provide more current, we recommend a powered USB hub. 
### USB On The Go
The micro USB port is generally used to provide power for CHIP. However, since CHIP can be powered through the pin headers or a battery, this port can be used for different things. 
By default, connecting CHIP's micro USB to a computer will create a USB Serial connection, so you can access CHIP with a `screen` or `cu` session in a terminal. With Linux kernel modifications, it is possible to enable other modes, such as an Ethernet bridge.
### Composite Video and Stereo Audio
The 1/8" [TRRS connector](#about-the-trrs-connector) provides composite video and stereo audio output. Headphones can be plugged in for audio only.

Audio Input uses the same connection on the TRRS connector as the composite video signal. If you want to make audio input active on the TRRS connector, you need to [cut a circuit board trace](#microphone-and-audio-input). This is not as permanent as it sounds, as it is easy to re-enable composite video out with a small amount of soldering.
### Pin Headers
The Pin Headers provide a massive amount of connectivity, making CHIP a suitable platform for product development for physical computing and "internet of things" devices. Here's a basic diagram that labels all the pins:

![CHIP pinout](images/chip_pinouts.jpg)

U13L | U13R | U14L | U14R
------|------|------|------
GND : ground | CHG-IN : 5V input (power and battery charge) | GND : ground | VCC-5V : 5V power
VCC-5V : 5V power | GND : ground | UART1-TX : UART serial transmit | HPL : audio out left
VCC-3V3 : 3V power | TS : analog temperature sensor input | UART1-RX : UART serial receive | HPCOM : audio out common ground
VCC-1V8 : 1.8 V power | BAT : LiPo battery | FEL : "fel mode": connect to ground to put CHIP in fel mode for firmware HPR : audio out right
TWI1-SDA : two-wire serial bus 1 | PWRON : power on | VCC-3V3 : 3 volt power | MICM : audio in ground
TWI1-SCK : two-wire serial bus 1 | GND : ground | LRADC : low-res Analog-Digital Converter | MICIN1 : audio in
X1 : Resistive touchpanel input (touchscreen) | X2 : Resistive touchpanel input (touchscreen) | XIO-P0 : expander GPIOXIO-P1 : expander GPIO pin 1
Y1 : Resistive touchpanel input | Y2 : Resistive touchpanel input (touchscreen) | XIO-P2 : expander GPIO pin 2 | XIO-P3 : expander GPIO pin 3
LCD-D2 : RGB666 data | PWM0 : pulse width modulation (also used for LCD backlight dimming) | XIO-P4 : expander GPIO piXIO-P5 : expander GPIO pin 5
LCD-D4 : RGB666 data | LCD-D3 : RGB666 data | XIO-P6 : expander GPIO pin 6 | XIO-P7 : expander GPIO pin 7
LCD-D6 : RGB666 data | LCD-D5 : RGB666 data | GND : ground | GND : ground
LCD-D10 : RGB666 data | LCD-D7 : RGB666 data | AP-EINT1 : Application Processor Interrupt  | AP-EINT3 : Application Processor Interrupt pin, necessary for certain kinds of hardware-software interactions (keyboard expander, etc.)
LCD-D12 : RGB666 data | LCD-D11 : RGB666 data | TWI2-SDA : two-wire serial bus 2 (I2C) | TWI2-SCK : two-wire serial bus 2 (I2C)
LCD-D14 : RGB666 data | LCD-D13 : RGB666 data | CSIPCK : CMOS serial interface | CSICK : CMOS serial interface, can be used for attaching a serial camera sensor
LCD-D18 : RGB666 data | LCD-D15 : RGB666 data | CSIHSYNC : CMOS serial interface | CSIVSYNC : CMOS sync
LCD-D20 : RGB666 data | LCD-D19 : RGB666 data | CSID0 : CMOS serial interface | CSID1 : CMOS serial interface
LCD-D22 : RGB666 data | LCD-D21 : RGB666 data  | CSID2 : CMOS serial interface | CSID3 : CMOS serial interface
LCD-CLK : RGB666 clock | LCD-D23 : RGB666 data | CSID4 : CMOS serial interface | CSID5 : CMOS serial interface
LCD-VSYNC : vertical sync for LCD screen | LCD-HSYNC : horizontal sync for LCD | CSID6 : CMOS serial interface | CSID7 : CMOS serial interface
GND : ground | LCD-DE : RGB666 data | GND : ground | GND : ground

## Open Source Hardware: Where To Get It
CHIP is open source hardware. Here's where you can get all the data you need to make, modify, or learn about your own CHIP. Visit the [CHIP Hardware git repository](https://github.com/NextThingCo/CHIP-Hardware).

![Sample schematic of CHIP](images/chip_schematic.jpg)