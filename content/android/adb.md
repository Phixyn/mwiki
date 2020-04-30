---
title: ADB Cheatsheet
description: Android Debug Bridge commands
date: 2020-01-20 22:11
updated: 2020-03-01 19:00
category: Android
tag:
  - android
  - adb
layout: page
---

# Android Debug Bridge (ADB) Cheatsheet

- [Listing Connected Devices](#listing-connected-devices)
- [Sending Commands To Specific Device](#sending-commands-to-specific-device)
- [ADB Shell](#adb-shell)
- [Installing An App](#installing-an-app)
- [Uninstalling An App](#uninstalling-an-app)
- [Copying Files To/From Device](#copying-files-tofrom-device)
- [Screen Resolution and Density](#screen-resolution-and-density)
- [Logcat](#logcat)
- [Key Events](#key-events)
    - [Keycode Values](#keycode-values)

- - -

## Listing Connected Devices

```sh
adb devices
```

List connected devices.

```sh
adb devices -l
```

List connected devices and device descriptions.

## Sending Commands To Specific Device

```sh
adb -s 1234567 install NotePhix.apk
```

```sh
ANDROID_SERIAL=1234567
adb install NotePhix.apk
```

If more than one device is connected, specify target using `-s` or setting `$ANDROID_SERIAL` env variable.

## ADB Shell

```sh
adb shell
```

Start an interactive shell for the connected device.

```sh
adb shell shell_command
```

Run the specified shell command on the connected device.

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

```sh
adb shell pm clear package
```

Delete all data associated with a package.

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

## Screen Resolution and Density

```sh
adb shell wm size 2048x1536
adb shell wm density 288
```

Set screen resolution and density.

```sh
adb shell wm size reset
adb shell wm density reset
```

Reset resolution and density to default.

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

## Key Events

```sh
adb shell input keyevent key_code
```

Send key event to connected device.

```sh
adb shell input keyevent 3
```

Example: send Home button key event to connected device.

### Keycode Values

> [https://developer.android.com/reference/android/view/KeyEvent.html](https://developer.android.com/reference/android/view/KeyEvent.html)

```
0   --> KEYCODE_UNKNOWN
1   --> KEYCODE_SOFT_LEFT
2   --> KEYCODE_SOFT_RIGHT
3   --> KEYCODE_HOME
4   --> KEYCODE_BACK
5   --> KEYCODE_CALL
6   --> KEYCODE_ENDCALL
7   --> KEYCODE_0
8   --> KEYCODE_1
9   --> KEYCODE_2
10  --> KEYCODE_3
11  --> KEYCODE_4
12  --> KEYCODE_5
13  --> KEYCODE_6
14  --> KEYCODE_7
15  --> KEYCODE_8
16  --> KEYCODE_9
17  --> KEYCODE_STAR
18  --> KEYCODE_POUND
19  --> KEYCODE_DPAD_UP
20  --> KEYCODE_DPAD_DOWN
21  --> KEYCODE_DPAD_LEFT
22  --> KEYCODE_DPAD_RIGHT
23  --> KEYCODE_DPAD_CENTER
24  --> KEYCODE_VOLUME_UP
25  --> KEYCODE_VOLUME_DOWN
26  --> KEYCODE_POWER
27  --> KEYCODE_CAMERA
28  --> KEYCODE_CLEAR
29  --> KEYCODE_A
30  --> KEYCODE_B
31  --> KEYCODE_C
32  --> KEYCODE_D
33  --> KEYCODE_E
34  --> KEYCODE_F
35  --> KEYCODE_G
36  --> KEYCODE_H
37  --> KEYCODE_I
38  --> KEYCODE_J
39  --> KEYCODE_K
40  --> KEYCODE_L
41  --> KEYCODE_M
42  --> KEYCODE_N
43  --> KEYCODE_O
44  --> KEYCODE_P
45  --> KEYCODE_Q
46  --> KEYCODE_R
47  --> KEYCODE_S
48  --> KEYCODE_T
49  --> KEYCODE_U
50  --> KEYCODE_V
51  --> KEYCODE_W
52  --> KEYCODE_X
53  --> KEYCODE_Y
54  --> KEYCODE_Z
55  --> KEYCODE_COMMA
56  --> KEYCODE_PERIOD
57  --> KEYCODE_ALT_LEFT
58  --> KEYCODE_ALT_RIGHT
59  --> KEYCODE_SHIFT_LEFT
60  --> KEYCODE_SHIFT_RIGHT
61  --> KEYCODE_TAB
62  --> KEYCODE_SPACE
63  --> KEYCODE_SYM
64  --> KEYCODE_EXPLORER
65  --> KEYCODE_ENVELOPE
66  --> KEYCODE_ENTER
67  --> KEYCODE_DEL
68  --> KEYCODE_GRAVE
69  --> KEYCODE_MINUS
70  --> KEYCODE_EQUALS
71  --> KEYCODE_LEFT_BRACKET
72  --> KEYCODE_RIGHT_BRACKET
73  --> KEYCODE_BACKSLASH
74  --> KEYCODE_SEMICOLON
75  --> KEYCODE_APOSTROPHE
76  --> KEYCODE_SLASH
77  --> KEYCODE_AT
78  --> KEYCODE_NUM
79  --> KEYCODE_HEADSETHOOK
80  --> KEYCODE_FOCUS
81  --> KEYCODE_PLUS
82  --> KEYCODE_MENU
83  --> KEYCODE_NOTIFICATION
84  --> KEYCODE_SEARCH
85  --> KEYCODE_MEDIA_PLAY_PAUS
86  --> KEYCODE_MEDIA_STO
87  --> KEYCODE_MEDIA_NEX
88  --> KEYCODE_MEDIA_PREVIOU
89  --> KEYCODE_MEDIA_REWIN
90  --> KEYCODE_MEDIA_FAST_FORWAR
91  --> KEYCODE_MUT
92  --> KEYCODE_PAGE_U
93  --> KEYCODE_PAGE_DOW
94  --> KEYCODE_PICTSYMBOL
...
122 --> KEYCODE_MOVE_HOME
123 --> KEYCODE_MOVE_END
...
207 --> KEYCODE_CONTACTS
220 --> KEYCODE_BRIGHTNESS_DOWN
221 --> KEYCODE_BRIGHTNESS_UP
277 --> KEYCODE_CUT
278 --> KEYCODE_COPY
279 --> KEYCODE_PASTE
```
