## USB Storage Devices

In this tutorial, we'll describe how you can use the USB port to add more storage with a thumb drive, hard drive, card reader, or whatever else. You can then copy, store, and edit files on the storage device, extending the capability of CHIP.

This tutorial is suitable for the buildroot image. If you are following this for other Linux distributions, there are some adjustments that you'll need to make for paths, permissions, and enabling 'sudo.' With buildroot, you work as the root user, so this tutorial is appropriately terse.

## Requirements 
  * USB thumb drive or hard drive
  * Computer running OS X 10.10+, Ubuntu 14.04+, or Windows 7+ (to format USB device, if needed)

## Step 1: Format the Drive
First, you'll want to format the drive as an MS-DOS (FAT), NTFS, or ext3 volume. You can do this on another computer.

Once formatted, insert the drive into CHIP's USB port. Enter the command

```shell
dmesg
```

You'll get output like:

```shell
[ 4953.430000] usb 1-1: new high-speed USB device number 2 using ehci-platform
[ 4953.580000] usb-storage 1-1:1.0: USB Mass Storage device detected
[ 4953.590000] scsi host0: usb-storage 1-1:1.0
[ 4954.590000] scsi 0:0:0:0: Direct-Access USB Flash Memory 1.00 PQ: 0 ANSI: 2
[ 4954.600000] sd 0:0:0:0: [sda] 3911616 512-byte logical blocks: (2.00 GB/1.86 GiB)
[ 4954.610000] sd 0:0:0:0: [sda] Write Protect is off
[ 4954.620000] sd 0:0:0:0: [sda] Mode Sense: 65 44 09 30
[ 4954.630000] sd 0:0:0:0: [sda] No Caching mode page found
[ 4954.630000] sd 0:0:0:0: [sda] Assuming drive cache: write through
[ 4954.650000] sda: sda1
[ 4954.650000] sd 0:0:0:0: [sda] Attached SCSI removable disk
```

Notice the second to last line. This tells you the device location for the drive. Storage devices generally have device names that start with “sd”, so if you wanted to see all the storage devices attached to CHIP, you can use a wildcard to display all devices that start with “sd”:

```shell
ls /dev/sd*
```

and you'll get something like:

```shell
/dev/sda /dev/sda1
```

With one thumb drive attached, it appears as two devices: the device itself (sda), and the storage partitions (sda1). There is only one partition on this drive.

Another way to find storage devices is the command

```shell
blkid
```

which lists them, along with the names you might have initialized them with:

```shell
/dev/sda1: LABEL="TEST" UUID="6668-11E9"
```

## Step 2: Mount the Drive Device to Your Filesystem

Now that you know where your partition is, it's time to mount the partition so you can access the files. 

First, make a directory where your drive can mount:

```shell
mkdir /drives
```

Mount the drive device to your /drives directory:

```shell
mount /dev/sda1 /drives
```

Now you can navigate to the `drives` directory and see all the files in the drive:

```shell
cd /drives
ls
```

## Step 3: Unmount the Drive From Filesystem
If you want to remove the drive from the USB port on CHIP, it's best to unmount it:

```shell
umount /dev/sda1
```

## Step 4: Automatic Mounting on Boot

You'll probably want to mount this drive automatically next time you use it, though. We can set that up with a quick modification to the `fstab` (file system table) document:

```shell
vi /etc/fstab
```

Getting around vi is not very intutive, so if you are new to it, here's a quick guide on getting this text into fstab: 
  * 'arrow' key to the end of the file,
  * press the 'i' key to insert text
  * type (or copy-paste) this:

```shell
/dev/sda1 /drives vfat defaults 0 0
```

To exit vi, 
  * press the 'esc' key, 
  * type ':' (colon), 
  * type 'wq' to write and quit vi.

You can test your work with:

```shell
mount -a
```

If there's an error, double check the `fstab` file and make sure it has the line `/dev/sda1 /drives vfat defaults 0 0` at the end. If it's successful, you'll be able to view, modify and copy the files on the disk:

```shell
ls /drives
```

Now, if you reboot , the drive will mount automatically. If you remove the drive, then insert it again, you'll need the command

```shell
mount -a
```
