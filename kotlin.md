# Kotlin Cheatsheet

<p align="center">
<a href="https://kotlinlang.org/"><img alt="Kotlin Logo" src="assets/kotlin-logo-text.png?raw=true" width="50%" height="50%" /></a>
</p>

> Kotlin is a statically typed programming language for modern multiplatform applications.

* JVM language
* Object oriented
* Functional

## Variables

### Mutability

```kotlin
var mutableString: String = "Phixyn"
var immutableString: String = "Phixyn"
var inferredString = "Phixyn" // Type: String
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
