## Building and Installing PureData (PD) on CHIP

PureData is a graphical programming environment, primarily for making audio and multimedia applications. This tutorial describes how to build the "vanilla" version of PD. This is a very rudimentary version of PD - it does not compile or build the extras objects, such as "bob~" or "expr~".

### Get Source
First, download and un-archive the source from Miller Puckette's website:

```shell
wget http://msp.ucsd.edu/Software/pd-0.46-7.src.tar.gz
gzip -d pd-0.46-7.src.tar.gz
tar -xvf pd-0.46-7.src.tar
```

### Install Dependencies

Now, you'll need to install all the dependencies and make a symbolic link to wish:

```shell
sudo apt-get update 
sudo apt-get install libasound2 alsa-utils mplayer software-properties-common git autoconf libtool make  build-essential gettext portaudio19-dev  jack libasound-dev qjackctl jackd2 tcl8.6 tk8.6 unzip
sudo apt-get build-dep puredata
sudo ln -s /usr/bin/wish8.6 /usr/bin/wish
```

Navigate to the pd directory the archive created:

```shell
cd pd-0.46-7
```

### Build It

You're ready to go ahead and build, running some scripts, then making the install:

```shell
./autogen.sh
./configure --disable-portaudio --disable-portmidi --no-recursion
cd src
make -f makefile.gnu
sudo make -f makefile.gnu install
```

You'll probably also want the "extra" objects such as expr, expr~, clone, fiddle~, bonk~, bob~, sigmund~, et al. 
These require an extra build step. The "extra" folder is in `pd-0.46-7/extra`, so if you are still in `src/` you can

```shell
cd ../extra
make install
```

You'll probably also want to install the deken plugin so you can add more externals to your bag of tricks:
https://github.com/pure-data/deken

I've also found this kiosk plugin to be very handy for making a pure data widow take up the entire screen:
https://puredata.info/downloads/kiosk-plugin


### Set Up Priority

Now set up pd so it can run in real-time priority mode for low latency (launching with `pd -rt`). 
This is mostly about giving audio the necessary thread priority and giving the chip user access:

```shell
sudo nano /etc/security/limits.conf
```

Navigate to the end of the file (CTL-V) and add the lines

```shell
@audio - rtprio 99
@audio - memlock unlimited
```

and save (CTL-X to exit, you'll be prompted to save)
You'll want to double check that the `chip` user is in the audio group:

```shell
sudo adduser username audio
```

Then reboot CHIP:

```shell
sudo reboot
```

### Test PD

Now test pd with a test patch. Open a terminal and use this command, which should result in a sine wave:

```shell
wget http://log.liminastudio.com/wp-content/uploads/2012/06/testPatch.pd_.zip
unzip testPatch.pd_.zip
pd -rt -nogui -noadc -alsa testPatch.pd
```

### Test MIDI Controller

If you need to test out a midi controller to make sure data is coming into CHIP, you can do this from the terminal.
You'll want to list the connected devices, if not just to get the port name as ALSA sees it.

```shell
amidi -l
```

Example output might look like
```shell
Dir Device    Name
IO  hw:1,0,0  DS1 MIDI 1
```

You can then use the command to display MIDI data bytes (in hex) in the terminal window:

```shell
amidi -p hw:1,0,0 -d
```

Moving a fader might provide output like:

```shell
B0 29 1D
B0 29 20
B0 29 24
B0 29 29
B0 29 2E
B0 29 32
B0 29 37
B0 29 3A
B0 29 3C
```


### Uninstall
If you need to remove pd, it takes a few steps:

```shell
sudo apt-get remove puredata-core
sudo apt-get remove puredata-dev puredata-import puredata-utils
sudo apt-get purge puredata-core
sudo apt-get install aptitude wget unzip
sudo apt-get autoremove
```

### Run PD
Start PD from the terminal with the command

```shell
pd -rt &
```

You can then use the mouse and keyboard to go through the Browser and learn more about PD.

### References
Here are some reference links

* [real time priority mode](https://puredata.info/docs/faq/how-can-i-run-pd-with-realtime-priority-in-gnu-linux)
* [low latency alsa](http://www.alsa-project.org/main/index.php/Low_latency_howto)
* [pure data on sourceforge](http://sourceforge.net/p/pure-data/pure-data/ci/master/tree/INSTALL.txt)
* [pd extended on RPi](http://log.liminastudio.com/writing/tutorials/how-to-build-pd-extended-on-the-raspberry-pi)