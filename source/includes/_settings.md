# Settings
![settings](images/bright.png)

Use the **PocketC.H.I.P.** settings to change **WiFi**, **screen brightness**, or **volume levels**. 

![sproket](images/no_scale/settings-icon.jpg)

To access the **PocketC.H.I.P. settings**, tap on the sprocket icon on the Home Screen.


## WiFi & Bluetooth
![wifi settings](images/wifi-setting.jpg)

From the Settings Screen, tap the switch next to the WiFi icon to turn WiFi on. 

Press the button to the right of the WiFi switch to open a menu of all the networks in range. Scroll through the list by tapping the onscreen arrows, and select your network by tapping on its name.

When prompted, enter the network password in the text field, then touch the **[Connect]** button. It may take a few seconds to connect.

Currently only WiFi is configurable from the PocketC.H.I.P graphical interface. If you want to configure Bluetooth, consult the C.H.I.P. documentation page [here](http://docs.getchip.com).

## Screen Brightness
![brightness](images/brightness.jpg)

Tap the brightness slider on the left to decrease brightness or tap the right to increase. Lowering the brightness is an easy way to increase battery life.

## Volume
![volume](images/volume.jpg)

Adjust the volume slider by tapping on the left to decrease volume or on the right to increase it. Of course, you'll need to have headphones or speakers attached to PocketC.H.I.P. to hear anything.


## Security

Just like you have a **username** and **password** for your e-mail account, PocketC.H.I.P. has a username and password for its operating system. The main user account on PocketC.H.I.P. is chip, and the password is also chip. **Both username and password are case sensitive**.

At startup, **PocketC.H.I.P. automatically logs you in as chip**. This means there's no need to manually enter chip’s password chip. There are times when you'll need to use the chip password, but you can get most things done without it.

**PocketC.H.I.P. also has a second username called root**, which should only be used for administrative tasks such as installing and removing software. The root password is also chip, and both are also case sensitive.

**Never login directly as root**, since it is extremely easy to delete critical files in the system. Instead, use the system administration command **sudo**, which provides a bit of protection from accidentally breaking your system.

For more information on using sudo, see the C.H.I.P. docs [here](http://docs.getchip.com/#terminal-for-beginners-glossary).

|**Username** 	| **Password** |
| ------------- | -------- |
|chip		| chip     |
|root		| chip     |


### Changing Your Password

![terminal icon](images/no_scale/terminal-icon.png)

**You should change your password** for both the chip and root account to something other than chip. Open the **terminal application** from the PocketC.H.I.P. Home Screen, type the following command:

*passwd*

and press **ENTER**.

You'll be prompted for your current password, which is chip and then required to enter in your new password twice. That's it!
