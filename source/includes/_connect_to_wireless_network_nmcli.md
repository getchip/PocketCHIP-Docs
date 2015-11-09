# Connecting C.H.I.P. to Wi-Fi with nmcli
There are several tools in Linux for connecting and configuring networks. We will be using the command nmcli (Network Manager Client). You may see other tutorials that reference iw or iwconfig, however, these tools are not recommended for C.H.I.P. You can read more about nmcli on the internet.

## Requirements
You will need one of these scenarios:
  * CHIP with monitor and keyboard attached
  * [SSH or serial](Headless CHIP - ssh and serial) connection
  * Wireless access to internet

## Step 1: List available Wi-Fi networks

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

## Step 2: Connect to a network
You can connect to password -protected or open access points.
### A: No Password
To connect to an open network with no password, use this command:

```shell
nmcli device wifi connect '(your wifi network name/SSID)' ifname wlan0
```

These commands will respond with information about the connection.
### B: Password Protected
To connect to a password protected network, use this command, inserting your own network name and password:

```shell
nmcli device wifi connect '(your wifi network name/SSID)' password '(your wifi password)' ifname wlan0
```

## Step 3: Test your Connection
You can verify and test your wireless network connection.
### Verify
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
```
nmcli connection show --active
```

```shell
NAME  UUID                                  TYPE             DEVICE 
NTC   59962bac-3441-437b-94ea-bf31dee66e8f  802-11-wireless  wlan0 
```

After you have connected once, your C.H.I.P. will automatically connect to this network next time you reboot (or start NetworkManager services).

### Test
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

Congratulations! You are now network with C.H.I.P.!

## Disconnecting and Forgetting Networks
The command to disconnect from a wireless device needs a few parameters:

```shell
nmcli dev disconnect iface wlan0
```

You may want to prevent auto-connection to a network, so you can use this command to "forget" a network:

```shell
nmcli connection delete id  (your wifi network name/SSID) 
```

## Troubleshooting
Here are a few possible problems with connections.

### No network found
Not much to say about that. If there's no network, you can't connect. Go find a network!

### Incorrect password
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

### Failed ping

If you don't have access to the internet, your ping to an outside IP will fail. 
It is possible that you can connect to a wireless network, but have no access to the internet, so you'd see a connection when you request device status, but have a failed ping. This indicates a problem or restriction with the router or the access point, not a problem with the C.H.I.P.

A failed ping looks something like:

```shell
From 192.168.2.56 icmp_seq=14 Destination Host Unreachable
From 192.168.2.56 icmp_seq=15 Destination Host Unreachable
From 192.168.2.56 icmp_seq=16 Destination Host Unreachable
18 packets transmitted, 0 received, +9 errors, 100% packet loss, time 17013ms
pipe 4
```

### Loss of wireless network

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

### nmcli not installed error
If you try to use `nmcli` and you get an error that it is not found or is not a command, chances are that you are using the CHIP buildroot image. The `nmcli` commands only apply to CHIPs running debian linux.
