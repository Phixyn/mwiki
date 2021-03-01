---
title: Kotlin Cheatsheet
description: General notes about Kotlin, pretty basic at the moment.
date: 2020-01-20 22:11
updated: 2020-03-01 19:00
category: Programming
collection: Kotlin
tags:
  - kotlin
  - android
layout: page
---

# Kotlin Cheatsheet

<p align="center">
<a href="https://kotlinlang.org/"><img alt="Kotlin Logo" src="../../.vuepress/public/programming/kotlin/kotlin-logo-text.png?raw=true" width="50%" height="50%" /></a>
</p>

> Kotlin is a statically typed programming language for modern multiplatform applications. It is a JVM language.

- [Variables](#variables)
    - [Mutability](#mutability)
    - [Inferred Types and Deferred Assignment](#inferred-types-and-deferred-assignment)
    - [Strings](#strings)
- [Control Flow](#control-flow)
    - [Using `if` As An Expression](#using-if-as-an-expression)
    - [`for` Loops](#for-loops)
    - [`while` Loops](#while-loops)
    - [`when` Statement](#when-statement)
- [Functions](#functions)
    - [Parameters & Return Types](#parameters--return-types)
    - [Function Expressions](#function-expressions)
    - [Higher Order Functions / Lambdas](#higher-order-functions--lambdas)
- [Classes](#classes)
    - [Primary Constructor](#primary-constructor)
- [Scoping Functions](#scoping-functions)
    - [How To Choose a Scoping Function](#how-to-choose-a-scoping-function)
- [`associateWith` and Related Functions](#associatewith-and-related-functions)

- - -

## Variables

### Mutability

```kotlin
var mutableString: String = "Phixyn"
val immutableString: String = "Phixyn"
```

### Inferred Types and Deferred Assignment

```kotlin
val a: Int = 7
val b = 4   // Type Int is inferred
val c: Int  // Type required when no initializer is provided
c = 2       // Deferred assignment
```

### Strings

```kotlin
val zoey = Person("Zoey")
val myName = "Phixyn"

println("My name is: $myName.")
println("Person's name is: ${zoey.name}.") // For properties
```

## Control Flow

### Using `if` As An Expression

```kotlin
val max = if (a > b) a else b
```

`if` is an expression (i.e. it returns a value).

```kotlin
val max = if (a > b) {
    print("Choose a")
    a
} else {
    print("Choose b")
    b
}
```

When using `if` blocks, the last expression is the return value of the block.

### `for` Loops

```kotlin
for (i in 0..10) { } // 1 - 10
```

```kotlin
for (i in 0 until 10) // 1 - 9
```

```kotlin
(0..10).forEach { }
```

```kotlin
for (i in 0 until 10 step 2) // 0, 2, 4, 6, 8
```

```kotlin
for (i in 10 downTo 1 step 2) // 10, 8, 6, 4, 2
```

### `while` Loops

```kotlin
while (x > 0) {
    x--
}
```

```kotlin
do {
    x--
} while (x > 0)
```

### `when` Statement

```kotlin
when (direction) {
    NORTH -> {
        print("North")
        // Some other things
    }
    SOUTH -> print("South")
    EAST, WEST -> print("East or West")
    "N/A" -> print("Unavailable")
    else -> print("Invalid Direction")
}
```

The counterpart to `switch` statements.

## Functions

### Parameters & Return Types

```kotlin
fun printName() {
    print("Phixyn")
}

fun printName(person: Person) {
    print(person.name)
}

fun getGreeting(person: Person): String {
    return "Hello, ${person.name}"
}

fun getGreeting(person: Person): String = "Hello, ${person.name}"
fun getGreeting(person: Person) = "Hello, ${person.name}"
```

### Function Expressions

```kotlin
fun max(a: Int, b: Int): Int = if (a > b) a else b
```

One-liner functions can be declared and defined as above.

### Higher Order Functions / Lambdas

```kotlin
fun displayWithLambda(func: (s: String) -> Unit) {
    func(name)
}

// ...

fun printName(name: String) {
    println(name)
}

person.displayWithLambda(::printName)
```

```kotlin
fun callbackIfTrue(condition: Boolean, callback: () -> Unit) {
    if (condition) {
        callback()
    }
}

callbackIfTrue(someBoolean) {
    print("Condition was true")
}
```

## Classes

### Primary Constructor

```kotlin
class Person(val name: String, val age: Int)
val zoey = Person("Zoey", 21)
```

## Scoping Functions

![How To Choose a Scoping Function (Image)](../../.vuepress/public/programming/kotlin/kotlin-standard-scoping-functions2.png?raw=true)

### How To Choose a Scoping Function

![How To Choose a Scoping Function (Image)](../../.vuepress/public/programming/kotlin/kotlin-standard-scoping-functions.png?raw=true)

**See also:**

[Mastering Kotlin standard functions: `run`, `with`, `let`, `also` and `apply`](https://medium.com/@elye.project/mastering-kotlin-standard-functions-run-with-let-also-and-apply-9cd334b0ef84)
[Kotlin Scoping Functions `apply` vs. `with`, `let`, `also`, and `run`](https://medium.com/@fatihcoskun/kotlin-scoping-functions-apply-vs-with-let-also-run-816e4efb75f5)


## `associateWith` and Related Functions

> Handy thing someone taught me at work.

Use the `associateWith` method to convert a collection into a Map where the keys are collection items and the values are obtained by calling a given lambda on each item.

**Examples:**

```kotlin
val list = listOf(1, 2, 3, 4, 5)
val squares = list.associateWith { it * it }
println(squares) // {1=1, 2=4, 3=9, 4=16, 5=25}
```

```kotlin
val words = listOf("a", "abc", "ab", "def", "abcd")
val withLength = words.associateWith { it.length }
println(withLength) // {a=1, abc=3, ab=2, def=3, abcd=4}
```

Similar functions: `associate`, `associateBy`, `associateByTo`, `associateTo`, `associateWith`, `associateWithTo`
