# Using The CHIP Operating System
If you've used a desktop or laptop computer before, the CHIP Operating System should be pretty familiar. There are menus, icons to click, menus with more stuff when you right-click, keyboard shortcuts, applications to run, and settings to set. CHIP is small, so we keep our operating system simple. Almost everything can be accessed from the **Computer Things** menu: settings, launching apps, and access to files. There's also a few convenient functions in the top right **system tray.** 

## Settings and Configuration
Most of the settings for the computer and for the desktop can be set using the apps in the "Computer Things" menu. Select the appropriate app from either the Settings Menu or the Settings Manager.

![Screenshot of GUI showing where to change WiFi settings](images/screen_settingsmenu.jpg)

![Screenshot of GUI showing where to change WiFi settings](images/screen_settingsmgr.jpg)

### WiFi

Connecting to a WiFi network is easy using the WiFi icon the top right system tray. Just select a network to initiate a connection. If you need a password, you'll be prompted for it.

![Select a wireless connection access point](images/screen_wifisettings.jpg)

If you need more control and information over your network connection, use the Settings->Network Connections panel to show your connections. Double click on a connection to bring up the connection editor:

![Network connection editor](images/screen_networksettings.jpg)

### Bluetooth
Bluetooth device setup can be accessed using the Bluetooth icon in the top right system tray.

![Bluetooth settings menu](images/screen_btsettings.jpg)

When you begin a connection, you'll be guided through the necessary steps to connect to your device. For example, when you pair with a keyboard, you'll often be prompted for a code to enter to ensure a unique connection. Once you have paired a device, future connections will usually be automatic when the devices are in range and powered up.

![Bluetooth settings menu](images/screen_btsetup01.jpg)

You can manage, and also connect to, your devices using the the Bluetooth Devices panel, accessed from the Bluetooth system tray:

![Bluetooth devices panel](images/screen_btdevices.jpg)

### Sound
By default sound output comes from the built-in connector, served by the "sunxi codec" driver. If you want to change the volume, you can use the volume control in the top right system tray:

![Desktop volume control](images/screen_volumectl.jpg)

Or, open the Audio Mixer in the Multimedia category:

![Open Audio Mixer app in Multimedia category](images/screen_audiomixermenu.jpg)

Here, you can select the "Playback" category to change the volume:

![Control panel for sound](images/screen_audiosettings03.jpg)

If you don't see that control, just click on the "Select Controls" button and enable all controls:

![Enable all controls for audio mixer](images/screen_audiosettings02.jpg)

### Display
Use the Settings->Display control panel to adjust the monitor's resolution and rotation settings:

If you want to customize the desktop image, icons, colors, and fonts, there are two different panels. The Appearance panel lets you select a theme to make instant changes for several properties.

![Change monitor settings with the Display control panel](images/screen_desktopsettings04.jpg)

The Desktop panel lets you customize images and colors, along with the behavior of menus.

![Change desktop look with Desktop panel](images/screen_desktopsettings01.jpg)

If you want to change the theme or the icon sets, you can search for these using the [Synaptic Package Manager](#synaptic-package-manager). Search for `gtk2 themes` or `icon sets`. There are also packages that can make it easy to find and configure themes, such as `gtk-theme-config.` Similarly you can use the command line to search packages with `apt-cache search gtk2 theme`.

### Time and Date
Set the Time with the Orage Globaltime panel. This can be found in Accessories->Orage Globaltime or in Office->Orage Globaltime. Simply click the time to bring up the preferences panel. You can quickly view the date from the Orage Calendar in the Office menu.

![Orage Globaltime is used to set the time and date](images/screencap_timesettings.jpg)

### Mouse Sensitivity
Mouse sensitivity is set for the default 640x480 resolution. If you are using CHIP with a higher resolution monitor, you may want to adjust the sensitivity of the mouse. You can get to the Mouse settings panel from **Computer Things->Settings->Mouse and Touchpad**

![Screenshot of mouse configuration panel](images/screen_mousepanel.jpg)

### Language and Location
CHIP's operating system comes with a default language of English. You can change the language and the location, but you'll need to use the terminal to do so. Use the "Computer Things!" menu to launch the Terminal Emulator. 
Then use the [`apt-get`](#apt-get) command to install the language packs and run a simple program to configure your language and location:

```shell
sudo apt-get install locales
sudo dpkg-reconfigure locales
```
![Orage Globaltime is used to set the time and date](images/screen_locales02.jpg)

## Launching Installed Apps
CHIP comes prepackaged with many open-source applications to get you started. It's easy to launch an application. 
You can select an application from the "Computer Things!" menu and select an app from the categories:

![Screenshot of GUI launching apps](images/screen_appfinder01.jpg)

Or, for more control, launch the Application Finder in Accessories, where you can use the search bar and easily navigate among the categories:

![Screenshot of GUI launching apps](images/screen_appfinder02.jpg)

Below are some of the applications that come pre-installed with CHIP:

### AbiWord
AbiWord is a fully featured word processor. You can learn more at [The AbiWord website](http://www.abiword.org)

![AbiWord can process words.](images/appscreen_abiword.jpg)

### Ice Weasel Browser
Ice Weasel is a Debian Linux version of the Firefox browser. The browser is largely the same as Firefox, just with a different name. More information is at the [Debian website](https://wiki.debian.org/Iceweasel) and in this [stack exchange thread](http://unix.stackexchange.com/questions/44215/is-there-any-advantage-of-using-iceweasel-and-firefox).

![Browse the web with IceWeasel](images/appscreen_webbrowser.jpg)

### Video Player
CHIP plays video! Use the built-in Mplayer to open and play videos.

![Mplayer plays video](images/appscreen_videoplayer.jpg)

### Terminal (commandline)
The life blood of linux. If there's something you can't do on the desktop, or you want to automate tasks, or access different hardware settings using nothing but a keyboard and text, you'll open up Terminal.

![Terminal does even more computer things](images/appscreen_terminal.jpg)

### Complete List of Installed Software
These are the applications installed by default on CHIP as accessed through the GUI.

  * Application Finder
  * Bulk Rename
  * Leafpad
  * Orage Globaltime
  * Screenshot
  * Task Manager
  * Thuner File Manger
  * Spout
  * Viewnior
  * Ice Weasel Web Browser
  * Audio Mixer
  * GNOME MPlayer
  * QjackCtl
  * AbiWord
  * Atril Document Viewer
  * Gnumetric
  * Orange Calendar
  * Orage Globaltime
  * Htop
  * Package Updater
  * Synaptic Package Manager
  * Xfce Terminal
  * Notifications
  * Various System Settings
  * Zip (and UnZip)
 
## Install and Update Software

### Synaptic Package Manager
Launch the Synaptic Package Manager to find and install new software. 
Synaptic is a graphical interface to the `apt-get` command and will install software intended for DERP and other debain-based systems. You can learn more about Synaptic [here](https://help.ubuntu.com/community/SynapticHowto)

There's a simple search bar to make it easy to find packages you are interested in. If you don't find the package you are looking for, hit the **Reload** button to refresh Synaptic's record of available packages.

![Install software with Synaptic](images/appscreen_synaptic.jpg)

### Example: Installing Scratch Programming Environment
Using Synapitc is very easy. For example, if you wanted to install the Scratch Programming Environment, you can simply search for "scratch" and you'll get a lot of results. Scroll through, and you'll eventually find "scratch" in the packages window.
However, you'll probably want to narrow your results with better search terms, such as "scratch programming environments"

![Search Synaptic for Scratch](images/screen_scratchsearch.jpg)

When search is complete, you can select "scratch" from the package panel.

![Scratch package found](images/screen_scratchfound.jpg)

Press the top "Apply" button, and you'll get the following dialog:

![Scratch package found](images/screen_instscratch_02.jpg)

and you'll be notified of the progress:

![Scratch installing](images/screen_instscratch_03.jpg)

After a minute or so, you'll be notified that it's finished:

![Scratch installed](images/screen_instscratch_04.jpg)

Now that it's installed, you can launch scratch:

![Scratch installed](images/screen_scratchinstalled.jpg)

### Auto Update
CHIP will automatically look for any updates and alert you if updates are available for your existing software and the operating system.

### apt-get

If you are using the commandline, you will use `apt-get` to install and update new software.

If you are new to apt, some important commands to know:

  * `sudo apt-get update` updates the information from repositories, so any installs you make with `install` will be the latest package
  * `sudo apt-get upgrade` upgrades any installed packages.
  * `sudo apt-get install (name of package)` to install a package and any of its dependencies.
  * `sudo apt-get remove (name of package)` will remove a package and any dependencies not used by other packages
  * `sudo apt-get purge  (name of package)` will remove a package and any dependencies not used by other packages along with all settings data
  * `apt-cache search (search terms)` will search through the package repositories for names and descriptions that include your search term.

## Uninstall Software
You can use the Synaptic Package manager to uninstall any packages you no longer need.
If you know the name, you can use the Search function to find the package, then Mark it for Removal.

For example, if you want to remove AbiWord, first open Synaptic and search for "**abiword**":

![Uninstall with Synaptic](images/screen_uninstall01.jpg)

Once found, select AbiWord in the package list, and select "**Mark for Removal**" in the Package menu:

![Uninstall with Synaptic](images/screen_uninstall03.jpg)

If there are additional, related packages that need to be removed, you'll be notified:

![Uninstall with Synaptic](images/screen_uninstall04.jpg)

Finally, press the top "**Apply**" menu to remove the packages:

![Uninstall with Synaptic](images/screen_uninstall05.jpg)

You'll be notified what changes will be applied:

![Uninstall with Synaptic](images/screen_uninstall06.jpg)

Finally, you can confirm that AbiWord has been removed by checking the Applications menu:

![Uninstall with Synaptic](images/screen_uninstall08.jpg)


