---
title: ADB Cheatsheet
description: Android Debug Bridge commands
date: 2020-01-20 22:11
updated: 2020-01-21 01:29
category: Android
tag:
  - android
  - adb
---

# Android Debug Bridge (ADB) Cheatsheet

- [Listing Connected Devices](#listing-connected-devices)
- [Sending Commands To Specific Device](#sending-commands-to-specific-device)
- [Installing An App](#installing-an-app)
- [Uninstalling An App](#uninstalling-an-app)
- [Copying Files To/From Device](#copying-files-tofrom-device)
- [Logcat](#logcat)

- - -

## Listing Connected Devices

```sh
adb devices
```

Lists connected devices.

```sh
adb devices -l
```

Lists connected devices and device descriptions.

## Sending Commands To Specific Device

```sh
adb -s 1234567 install NotePhix.apk
```

```sh
ANDROID_SERIAL=1234567
adb install NotePhix.apk
```

If more than one device is connected, specify target using `-s` or setting `$ANDROID_SERIAL` env variable.

## Installing An App

```sh
adb install local_path/to_apk.apk
```

Install an app at `local_path/to_apk.apk`, or just `YourApp.apk`.

```sh
adb install -r local_path/to_apk.apk
```

Re-install the app, but keep its existing data and cache directories on the device.

## Uninstalling An App

```sh
adb uninstall package
```

Uninstall the given package and remove all app data and cache directories.

```sh
adb uninstall –k package
```

Uninstall the app, but keep its existing data and cache directories on the device.

## Copying Files To/From Device

```sh
adb pull remote/path local/path
```

Copies the file or directory and sub-directories specified by `remote/path` to `local/path`.

```sh
adb push local/path remote/path
```

Copies the file or directory and sub-directories specified by `local/path` to `remote/path` on the Android device.

```sh
adb pull /sdcard/. backup
```

Copies the whole `/sdcard/` directory recursively to a local folder called `backup`.

## Logcat

> Dump log of system messages.

```sh
adb logcat -c
```

Clear (flush) the selected buffers and exit. The default buffer set is `main`, `system` and `crash`. To clear all of the buffers, use `-b all -c`.

```sh
adb logcat ClassName:D AndroidRuntime:E \*:S
```

Debug log output from specific package/class.

```sh
(adb logcat) 2>&1 | tee logcat.log
```

Log to stdout but also pipe output to a file using `tee`.

```sh
(adb logcat | grep -i "com.phixyn") 2>&1 | tee app.log
```

Same as above but use `grep` to only show logging for app with specific identifier.
