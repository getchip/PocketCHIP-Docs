## Building and Installing PureData (PD) on CHIP

PureData is a graphical programming environment, primarily for making audio and multimedia applications. This tutorial describes how to build the "vanilla" version of PD. This is a very rudimentary version of PD - it does not compile or build the extras objects, such as "bob~" or "expr~".

### Get Source
First, download and un-archive the source from Miller Puckette's website:
```
wget http://msp.ucsd.edu/Software/pd-0.46-7.src.tar.gz
gzip -d pd-0.46-7.src.tar.gz
tar -xvf pd-0.46-7.src.tar
```

### Install Dependencies

Now, you'll need to install all the dependencies and make a symbolic link to wish:
```
sudo apt-get update 
sudo apt-get install libasound2 alsa-utils mplayer software-properties-common git autoconf libtool make  build-essential gettext portaudio19-dev  jack libasound-dev qjackctl jackd2 tcl8.6 tk8.6 unzip
sudo apt-get build-dep puredata
sudo ln -s /usr/bin/wish8.6 /usr/bin/wish
```
Navigate to the pd directory the archive created:
```
cd pd-0.46-7
```

### Build It

You're ready to go ahead and build, running some scripts, then making the install:
```
./autogen.sh
./configure --disable-portaudio --disable-portmidi --no-recursion
cd src
make -f makefile.gnu
autoconf
make clean
sudo make -f makefile.gnu install
```

### Set Up Priority

Now set up pd so it can run in real-time priority mode for low latency (launching with `pd -rt`). 
This is mostly about giving audio the necessary thread priority and giving the chip user access:
```
sudo nano /etc/security/limits.conf
```
Navigate to the end of the file (CTL-V) and add the lines
```
@audio - rtprio 99
@audio - memlock unlimited
```
and save (CTL-X to exit, you'll be prompted to save)
You'll want to double check that the `chip` user is in the audio group:
```
sudo adduser username audio
```
Then reboot CHIP:
```
sudo reboot
```

### Test PD

Now test pd with a test patch. Open a terminal and use this command, which should result in a sine wave:
```
wget http://log.liminastudio.com/wp-content/uploads/2012/06/testPatch.pd_.zip
unzip testPatch.pd_.zip
pd -rt -nogui -noadc -alsa testPatch.pd
```

### Uninstall
If you need to remove pd, it takes a few steps:
```
sudo apt-get remove puredata-core
sudo apt-get remove puredata-dev puredata-import puredata-utils
sudo apt-get purge puredata-core
sudo apt-get install aptitude wget unzip
sudo apt-get autoremove
```

### Run PD
Start PD from the terminal with the command
```
pd -rt &
```
You can then use the mouse and keyboard to go through the Browser and learn more about PD.

### References
Here are some reference links
https://puredata.info/docs/faq/how-can-i-run-pd-with-realtime-priority-in-gnu-linux
http://www.alsa-project.org/main/index.php/Low_latency_howto
http://sourceforge.net/p/pure-data/pure-data/ci/master/tree/INSTALL.txt
http://log.liminastudio.com/writing/tutorials/how-to-build-pd-extended-on-the-raspberry-pi