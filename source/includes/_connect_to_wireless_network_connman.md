# Connecting C.H.I.P. to a Wireless Network (buildroot)
The buildroot operating system uses the `connman` command-line network manager to connect and manage your network connections.
If you want all the details of `connman` [visit the ArchLinux wiki.](https://wiki.archlinux.org/index.php/Connman)

## Requirements
  * CHIP
  * One of the following:
    * Keyboard and monitor for CHIP
    * [Serial connection](Headless CHIP - ssh and serial) to CHIP

## Step 1: Enable WiFi and Find a Network
First enable WiFi:
  connmanctl enable wifi
then scan for access points:
  connmanctl scan wifi
and see what networks are available:
  connmanctl services
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

## Step 2: Connect To An Access Point

Unfortunately, connman doesn't use the nice name on the left of the services list. It wants the unfriendly string on the right, so you'll want to get copy and paste ready.
### A: No Password
For example, to connect to NTC Guest, which has no password, `services` shows two choices. We want the one without “hidden” in the string. Use the connect command to connect:
  connmanctl connect wifi_7cc70905cd77_4e5443204775657374_managed_psk
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

### B: Password-Protected

To deal with passwords, you'll need to put `connman` into interactive mode:
  connmanctl
which gives a connmanctl prompt:
  connmanctl>
turn the 'agent' on so it can process password requests:
  agent on
and now use the connect command
  connect wifi_7cc70905cd77_4e5443_managed_psk
and enter your password when prompted:
  Agent RequestInput wifi_7cc70905cd77_4e5443_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
  Passphrase?
Now that you are connected to a wireless network, you can exit connmanctl interactive mode by typing
  quit

## Step 3: Test Connection

In CHIP's command line, you can ping Google four times:
  ping -c 4 8.8.8.8
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

### Troubleshooting Connection Problems
  * You'll need to make sure you used the right network when you used the connect commnand. 
  * Review any messages that the connect commnand gave you. Did they look like the examples of a successful connection? 
  * If everything checked out until you got to `ping`, there's a good chance the problem is with your router or connection to the internet.

## Disconnecting And Forgetting Networks

To disconnect from your network, you might first want a reminder of what unfriendly string is used to describe your access point, so type:
  connmanctl services
which will output information about your current link:

```shell
  *AO NTC                  wifi_7cc70905cd77_4e5443_managed_psk
```

Use the ID to disconnect:
  connmanctl disconnect wifi_7cc70905cd77_4e5443_managed_psk
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

(the -r is needed because these are directories you are deleting, and the wifi* assumes your configurations all start with the string “wifi”)

## For Advanced Users

It's worth noting that you'll see two wireless networking interfaces if you list them with

```shell
  ifconfig
```

`connman` is configured to see only the physical interface wlan0 which simplifies setup. We do this with a blacklist, which can be modified at `/etc/connman/main.conf`
