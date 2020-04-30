---
title: Groovy Notes
date: 2020-01-20 22:11
category: Programming
tag:
  - groovy
  - gradle
layout: page
---

# Groovy Notes

- [`tokenize()` vs. `split()`](#tokenize-vs-split)

- - -

## `tokenize()` vs. `split()`

1. The `split()` method returns a `string[]` instance and the `tokenize()` method returns a `list` instance
2. `tokenize()` will ignore empty string (when a delimiter appears twice in succession) whereas `split()` keeps such string.

```groovy
String testString = "hello world"

testString.split("l")
["he", "", "o world"]   // split keeps empty string

testString.tokenize("l")
["he", "o world"]       // tokenize ignores empty string
```

3. The `tokenize()` method uses each character of a `String` as delimiter whereas `split()` takes the entire string as delimiter

```groovy
String testString = "hello world"

testString.split("lo")
["hel", " world"]

testString.tokenize("lo")
["he", " w", "r", "d"]
```

4. `split()` can take regex as delimiter whereas tokenize does not.

```groovy
String testString = "hello world 123 abc"

testString.split(/\d{3}/)
["hello world ", " abc"]
```
