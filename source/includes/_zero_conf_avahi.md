# Installing Zero Configuration Networking
You can make working with CHIP on a local network much more convenient by installing zero-conf networking. OS X users may know this as “Bonjour”.

With zero-conf properly configured, your CHIP can be contacted using a name, such as `chip.local`, rather than an IP. This is especially convenient, if you are moving CHIP to different networks that might assign different IP addresses. The key technology for this in Linux is the `avahi` set of tools. There are a few related packages, but this tutorial is a minimal installation to get it up and running.

## Requirements
  * CHIP
  * [SSH or serial connection to CHIP](Headless CHIP - ssh and serial) or
  * Monitor and keyboard
  * [Connection to the internet](Connect To A Wireless Network with nmcli)

## Install avahi
Getting avahi running is extremely simple. First, install the avahi-daemon:

```shell
  apt-get install avahi-daemon
```

to install the necessary libraries. To configure the daemon, you'll probably need to add this service file:

```shell
  nano /etc/avahi/services/afpd.service
```

Then just copy and paste this XML into it:

```shell
<?xml version="1.0" standalone='no'?><!--*-nxml-*-->
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
<name replace-wildcards="yes">%h</name>
<service>
<type>_afpovertcp._tcp</type>
<port>548</port>
</service>
</service-group>
```

Then restart avahi-daemon:

```shell
  /etc/init.d/avahi-daemon restart
```

You can now find the hostname that you can use to reach CHIP:


```shell
  hostname
```

which will probably return “chip” as the hostname.

## Use Zero-Conf
From a terminal on another computer you can try accessing CHIP with the network name `chip.local`

```shell
  ssh root@chip.local
```

and enter the password (default is `chip`). That's it. You can now reach CHIP without knowing the IP.

## Change the hostname
If you have more than one CHIP on the network, or you just want to change the name from “chip” to fit into your network name scheme, you can modify the hostnames file. Open the file in an editor:

```shell
  nano /etc/hostname
```
  
where you'll see a single word “chip.” Just modify that line (for example, change it to “bobofettywap”) and save the file. For this name to broadcast over the network restart avahi-daemon:

```shell
  /etc/init.d/avahi-daemon restart
```
You can now access chip with the new name:

```shell
  ssh root@bobofettywap.local 
```

## Other packages
You may want to explore some of the other features of avahi, such as browsing a network for other zero-configure enabled computers. There's a package you can install:

```shell
  apt-get install avahi-utils
```

which gives you a set of tools for browsing the network, such as the command

```shell
  avahi-browse
```

An alternative to just installing the avahi-daemon, you can

```shell
  apt-get install libnss-mdns
```

which installs some other tools for network name propagation.

## Troubleshooting
If your computer returns the error

```shell
  ssh: Could not resolve hostname chip.local: nodename nor servname provided, or not known
```

then you either need to wait a minute or try installing avahi-daemon again, but pay closer attention to any errors that apt-get returns.

If you can't connect to CHIP even though you are sure avahi is properly configured, confirm that your CHIP and the computer you are trying to connect are on the same local network (and on the same subnet).
