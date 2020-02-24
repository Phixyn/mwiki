---
title: Shells Cheatsheet
description: Cheatsheet with some useful shell commands. Most work in shell and bash.
date: 2020-01-21 01:38
category: Programming
collection: Shells
tag:
  - shell
  - bash
  - linux
  - unix
  - cli
layout: page
---

# Shells Cheatsheet

- [Calendar](#calendar)
- [Searching](#searching)
- [Archiving](#archiving)
- [SCP Usage Example](#scp-usage-example)

- - -

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
