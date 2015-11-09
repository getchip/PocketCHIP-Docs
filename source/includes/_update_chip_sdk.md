# Updating the CHIP-SDK Virtual Machine
You may have been working with CHIP for a while now, and you want to updated your SDK. It's only slightly more involved than sync'ing with the git repo; you have to update the virtual machine, too.

## Requirements
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+
  * Existing [installation of CHIP-SDK](Install CHIP SDK - minimal)

## How To Update
Just follow these steps:

On your host operating system, pull the latest changes from our Git repository:

```shell
  cd ~/CHIP-SDK
  git pull
```

Make sure the virtual machine is shut down and update it:

```shell
  vagrant halt
  vagrant provision
```

Now you can boot the virtual machine and ssh into it:

```shell
  vagrant up
  vagrant ssh
```

Once you see the trusty prompt, your CHIP SDK virtual machine is ready to use:

```shell
  vagrant@vagrant-ubuntu-trusty-32:~$
```
