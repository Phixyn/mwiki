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
