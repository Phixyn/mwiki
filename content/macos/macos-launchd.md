---
title: MacOS Launchd
description: Notes and commands about managing jobs and services on MacOS with launchd.
date: 2020-01-20 21:46
updated: 2020-03-01 19:00
category: MacOS
tag:
  - launchd
  - plist
layout: page
---

# MacOS `launchd`

- [Links](#links)
- [`plist` File Locations](#plist-file-locations)
- [Validating plist files](#validating-plist-files)
- [`launchctl` Commands](#launchctl-commands)

- - -

## Links

* [A launchd Tutorial](https://www.launchd.info/)

## `plist` File Locations

| Type           | Location                      | Run on behalf of                                 | Key use cases                                           |
| -------------- | ----------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| User Agents    | ~/Library/LaunchAgents        | Currently logged in user                         | When job is only useful when users are logged in.       |
| Global Agents  | /Library/LaunchAgents         | Currently logged in user                         | When job is only useful when users are logged in.       |
| Global Daemons | /Library/LaunchDaemons        | root or the user specified with the key UserName | When job needs to run even when no users are logged in. |
| System Agents  | /System/Library/LaunchAgents  | Currently logged in user                         |                                                         |
| System Daemons | /System/Library/LaunchDaemons | root or the user specified with the key UserName |                                                         |

## Validating plist files

```sh
plutil test.plist
```

`plutil` checks the syntax of property list files.

## `launchctl` Commands

```sh
launchctl load /Library/LaunchDaemons/com.job.plist
```

Load a job.

```sh
launchctl unload /Library/LaunchDaemons/com.job.plist
```

Unload a job.

```sh
(sudo) launchctl list
(sudo) launchctl list | grep 'job'
```

Get information about available (loaded) jobs.

```sh
launchctl start com.job
```

Start a loaded job.

```sh
launchctl stop com.job
```

Stop a loaded job.

```sh
launchctl restart com.job
```

Restart a loaded job.
