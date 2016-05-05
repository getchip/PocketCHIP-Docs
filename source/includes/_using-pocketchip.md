# Using PocketC.H.I.P.

## Security

Just like you have a username and password for your e-mail account, PocketC.H.I.P. has a username and password for its operating system. The main user account on PocketC.H.I.P. is chip, and the password is also chip. Both username and password are case sensitive.

At startup, PocketC.H.I.P. automatically logs you in as chip. This means there's no need to manually enter chip’s password chip. There are times when you'll need to use the chip password, but you can get most things done without it.

PocketC.H.I.P. also has a second username called root, which should only be used for administrative tasks such as installing and removing software. The root password is also chip, and both are also case sensitive.

Never login directly as root, since it is extremely ease to delete critical files in the system. Instead, use the system administration command sudo, which provides a bit of protection from accidentally breaking your system.

For more information on using sudo, see the C.H.I.P. docs: [http://docs.getchip.com/#terminal-for-beginners-glossary](http://docs.getchip.com/#terminal-for-beginners-glossary)

|Username 	| Password |
| ------------- | -------- |
|chip		| chip     |
|root		| chip     |


### Changing Your Password
You should change your password for both the chip and root account to something other than chip. Open the terminal application from the PocketC.H.I.P. home screen, type the following command:

*passwd*

and press ENTER.

You'll be prompted for your current password, which is chip and then required to enter in your new password twice. That's it!

## Flashing

![Flash PocketC.H.I.P](images/power-menu.png)

To update your PocketC.H.I.P. to the latest factory settings, tap the power button and then press the flash software button. Then use a USB cable to connect PocketCHIP to a computer and follow the directions on [http://flash.getchip.com](http://flash.getchip.com). 

![PocketC.H.I.P. connected to a computer via USB](images/laptop-and-pocketchip.jpg)

**WARNING:**  This will permanently **delete all the data** on PocketC.H.I.P., so backup anything you want to keep!
