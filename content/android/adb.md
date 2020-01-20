# Android Debug Bridge (adb) Cheatsheet

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
