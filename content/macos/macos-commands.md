---
title: MacOS Commands
description: MacOS and iOS shell commands and CLI utilities.
date: 2020-02-24 21:58
updated: 2020-03-01 19:00
category: MacOS
tag:
  - shell
  - cli
  - macos
layout: page
---

# MacOS Commands

- [Recursively Deleting `.DS_Store` Files](#recursively-deleting-dsstore-files)
- [Listing USB Devices and Info](#listing-usb-devices-and-info)

- - -

## Recursively Deleting `.DS_Store` Files

```sh
find . -name '.DS_Store' -type f -delete
```

Delete all `.DS_Store` files in the current directory and all directories inside it (i.e. recursively).

_Be careful using a wildcard (*) with this command. Be 100% sure of the result (tip: use `ls` to preview a list of affected files by the wildcard)._

## Listing USB Devices and Info

```sh
system_profiler SPUSBDataType
```

* You can also use `ioreg -p IOUSB` and `ioreg -r -c IOUSBHostDevice -l`
