# Installing C.H.I.P. SDK
CHIP-SDK has everything needed to develop software for C.H.I.P. Most importantly, if you want to load an operating system onto CHIP, the only supported way is to do this from a virtual machine. Given that the virtual machine runs Ubuntu, it's pretty safe to say that Ubuntu users can flash without the virtual machine.

## Requirements
* Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
* At least 1 GB free RAM, up to 40 GB of disk space may be used
* Software: VirtualBox, Vagrant, git, terminal

## Software Setup

There are several required software pieces to get the CHIP SDK virtual machine running. Follow the instructions to get it all setup.

### Install VirtualBox and Extensions

* Get the installer for [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
* Install the Oracle VM VirtualBox [Extension Pack](https://www.virtualbox.org/wiki/Downloads).
* If you are using Windows, you need to add the VirtualBox installation directory to your PATH.
* In case of a Ubuntu host: add your user to the vboxusers group!

### Install Vagrant

Install Vagrant from the [Vagrant site.](https://www.vagrantup.com/downloads.html)
Alternatively, if OS X, you can use the [homebrew](http://brew.sh/) package manager:
brew install caskroom/cask/brew-cask
brew cask install vagrant

### Install Git
Installation of Git depends on your operating system:

* Windows: [direct to download](https://git-scm.com/download/win)
* Debian Linux: `sudo apt-get install git`
* OS X homebrew: `brew install git`

## Clone the CHIP-SDK repository and boot the Virtual Machine

Assuming you have [git in your PATH](http://www.chambaud.com/2013/07/08/adding-git-to-path-when-using-github-for-windows/), open up a terminal and type:

```shell
git clone https://github.com/NextThingCo/CHIP-SDK
```

and start up the virtual machine:

```shell
cd CHIP-SDK
vagrant up
```


## Login To Virtual Machine

In the same shell on the host type the following:

```shell
 vagrant ssh
```
If everything went well you should see the following prompt:

```shell
vagrant@vagrant-ubuntu-trusty-32:~$
```

Congratulations!Now you're ready to Flash a C.H.I.P. from your SDK!


## Troubleshooting
Here are a few possible problems.

### Shared Folder Out of Sync

In case you run into trouble because the kernel in the VM was updated and the shared vagrant folder can no longer be mounted, update the guest additions by typing the following in the CHIP-SDK directory on the host:

```shell
vagrant plugin install vagrant-vbguest
```

This [blog post](http://kvz.io/blog/2013/01/16/vagrant-tip-keep-virtualbox-guest-additions-in-sync/) has some more tips on keeping additions in sync.

### Invalid State

If you get an error like:

```shell
error: The guest machine entered an invalid state while waiting for it to boot.
```

This probably means your version of VirtualBox needs updating and/or needs the Extension Pack. Update as necessary and try `vagrant up` again.

### Couldn't Find File
If you get the error:

```shell
error: Couldn't open file /Volumes/Satellite/gitbins/CHIP-SDK/base
```

that means you didn't cd CHIP-SDK. Very basic, perhaps, but late nights sometimes need that bump!
