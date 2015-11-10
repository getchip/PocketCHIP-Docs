## Connecting Bluetooth Devices

CHIP has built-in bluetooth. This tutorial instructs how to use a bluetooth keyboard, since it is a simple and obvious example. There are, of course, several types of bluetooth devices, such as earpieces, audio connectors, vacuum cleaners, and more. Future tutorials will cover those devices, but the keyboard is a good introduction to the commands and an easy way to test your system.

## Requirements
  * CHIP
  * SSH or serial connection to CHIP or
  * Monitor and keyboard
  * Bluetooth device, preferably keyboard

## Important!
Start with a CHIP completely unplugged and powered down. Add power and boot up. A known limitation is that after `reboot`, CHIP's Bluetooth controller may not work until you `power` and physically disconnect from a power source.

## About `bluetoothctl`
We'll be using the command `bluetoothctl` to find, pair with, and connect to devices.

Type
```shell
  bluetoothctl
```

in the command line. This starts up `bluetoothctl` in interactive mode. You should see output like

```shell
[NEW] Controller 7C:C7:08:05:CD:77 BlueZ 5.27 [default]
[NEW] Device 60:33:4B:13:A7:45 nyb
[NEW] Device 15:03:26:A0:26:26 SK032B02-2626
```

which is a list of MAC addresses of CHIP's bluetooth controller chip (the first line) and any other devices that have been paired with CHIP in the past. Use the

```shell
  help
```

command - it lists all the very useful commands in the `bluetoothctl` interactive mode.

In bluetooth interactive mode, use the command
```shell
  power on
```

which outputs

```shell
Changing power on succeeded
[CHG] Controller 7C:C7:08:05:CD:77 Powered: yes
```

## Find A Bluetooth Device

If you need to discover a device, start the scan process:

```shell
  scan on
```

which will start printing MAC addresses and names (if available) of bluetooth devices in your vicinity.

```shell
[NEW] Device 15:03:26:A0:26:26 SK032B02-2626
[NEW] Device 1C:1A:C0:85:5E:2C 1C-1A-C0-85-5E-2C
[NEW] Device 60:33:4B:13:A7:45 nyb
```

## Pair With A Bluetooth Device

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

Now you can use the bluetooth device to enter the PIN code, then hit enter. The terminal will give some status about the pairing:

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

## Connect With A Bluetooth Device

Now that you have paired the bluetooth device, you won't have to do that again. However, the device still needs to be connected:

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

## Troubleshooting

If your bluetooth controller module on CHIP is not functioning, you can easily find the problem. Type

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

Then there's a problem with CHIP recognizing the bluetooth module. [Read the very first instructions](#Important) at the top of this tutorial.

If you connect a bluetooth keyboard, you may not see keyboard output in the monitor. However, if all the messages from `bluetoothctl` indicated success, the problem is a configuration issue with CHIP, not a bluetooth issue.
