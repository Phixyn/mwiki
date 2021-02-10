---
title: Shells Cheatsheet
description: Cheatsheet with some useful shell commands. Most work in shell and bash.
date: 2020-01-21 01:38
updated: 2020-03-01 19:00
category: Programming
collection: Shells
tags:
  - shell
  - bash
  - linux
  - unix
  - cli
layout: page
---

# Shells Cheatsheet

- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Calendar](#calendar)
- [Searching](#searching)
- [Archiving](#archiving)
- [SCP Usage Example](#scp-usage-example)

- - -

## Keyboard Shortcuts

| Shortcut            | Meaning                                         |
| ------------------- | ----------------------------------------------- |
| `CTRL + B`          | Move back one character                         |
| `CTRL + F`          | Move forward one character                      |
| `ALT + B`           | Move back a word                                |
| `ALT + F`           | Move forward a word                             |
| `CTRL + Left/Right` | Jump to the beginning of the previous/next word |
| `CTRL + A`          | Move to the start of line                       |
| `CTRL + E`          | Move to the end of line                         |
| `CTRL + D`          | Delete current character                        |
| `CTRL + U`          | Clear from cursor to beginning of line          |
| `CTRL + K`          | Clear from cursor to end of line                |
| `CTRL + D`          | Clear one character to the right of the cursor  |
| `ESC + Backspace`   | Clear one word to the left of the cursor        |
| `ESC + D`           | Clear one word to the right of the cursor       |

## Calendar

```sh
cal
```

Display calendar for current month.

```sh
cal -3
```

Display the previous, current and next month surrounding today.

## Searching

```sh
grep -Rnw "ScrollView" .
```

Search all files recursively from the current directory for "ScrollView" as a word.  
Example output:

`./about_me.xml:77: </ScrollView>`

```sh
grep -Rn "ScrollView" .
```

Search all files recursively from the current directory for lines with "ScrollView".  
Example output:

`./fragment_about.xml:165: </com.phixyn.example.flows.someview>`

## Archiving

```sh
zip -r archive.zip . -x ".*" -x "__MACOSX"
```

Create an archive without any hidden files or the `__MACOSX` folder.

```sh
unzip -vl archive.zip
```

```sh
zipinfo -1 archive.zip
```

List files inside an archive.

## SCP Usage Example

```
scp some-file.txt scp://user@192.168.1.10/
```

Normal usage. Copy to user's home directory.

```sh
scp file.html scp://hostname/../../var/www/
```

Usage with a host alias in your SSH config.
