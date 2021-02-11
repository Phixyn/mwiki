---
title: Gradle Cheatsheet
description: Gradle notes and reference.
date: 2020-01-20 22:11
category: Android
tags:
  - android
  - gradle
  - groovy
layout: page
---

# Gradle Cheatsheet

- [Save Shell Command Output To Variable](#save-shell-command-output-to-variable)
    - [Method 1](#method-1)
    - [Method 2](#method-2)
    - [Usage In Gradle Tasks](#usage-in-gradle-tasks)

- - -

## Save Shell Command Output To Variable

_Save the output of a shell command (with arguments too!), to a Groovy variable._

### Method 1

```groovy
def getVersionName() {
    def tagStdout = new ByteArrayOutputStream()

    exec {
        commandLine "git", "describe", "--tags"
        standardOutput = tagStdout
    }

    return tagStdout.toString().trim()
}
```

**Method 1:** inside an `exec` block.

### Method 2

```groovy
def getVersionName() {
    return "git describe --tags".execute().text.trim()
}
```

**Method 2:** without an `exec` block.

### Usage In Gradle Tasks

```groovy
task printVersionName {
    println getVersionName()
}
```

```groovy
task printVersionName {
    def versionName = getVersionName()
    doLast {
        exec {
            commandLine "echo $versionName".split(' ')
        }
    }
}
```

Using the return value of the method in two different ways.
