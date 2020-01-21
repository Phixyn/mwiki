---
title: XCTest Cheatsheet
description: A reference for XCTest.
date: 2020-01-20 21:46
category: iOS
tag:
  - ios
  - xctest
  - xcuitest
  - test-automation
---

# XCTest Cheatsheet

- [Finding Elements](#finding-elements)
  - [Advanced Queries](#advanced-queries)
- [Interacting With Elements](#interacting-with-elements)
  - [Element Specific](#element-specific)
- [Assertions](#assertions)

- - -

## Finding Elements

```swift
app.alerts.element
app.buttons.element
app.collectionViews.element
app.images.element
app.maps.element
app.navigationBars.element
app.pickers.element
app.progressIndicators.element
app.scrollViews.element
app.segmentedControls.element
app.staticTexts.element
app.switches.element
app.tabBars.element
app.tables.element
app.textFields.element
app.textViews.element
app.webViews.element
```

_**Note:** `staticTexts` refers to labels on iOS._

### Advanced Queries

```swift
app.buttons.element
```

The only button.

```swift
app.buttons["Help"]
```

The button with description or accessibility identifier "Help".

```swift
app.scrollViews["Main"].children(matching: .button)
```

All buttons inside a specific scroll view (direct subviews only).

```swift
app.scrollViews["Main"].descendants(matching: .button)    
```

All buttons anywhere inside a specific scroll view (subviews, sub-subviews, sub-sub-subviews, etc).

```swift
app.buttons.element(boundBy: 0)
app.buttons.element(boundBy: 3)
```

Find the first and fourth buttons.

```swift
app.buttons.firstMatch
```

Find the first button.

## Interacting With Elements

```swift
app.x.element.tap()
app.x.element.doubleTap()
app.x.element.twoFingerTap()
app.x.element.tap(withNumberOfTaps:, numberOfTouches:)
app.x.element.press(forDuration:)
app.x.element.swipeLeft()
app.x.element.swipeRight()
app.x.element.swipeUp()
app.x.element.swipeDown()
app.x.element.pinch(withScale:, velocity:)
app.x.element.rotate(_: withVelocity:)
```

### Element Specific

```swift
app.pickers.element.adjust(toPickerWheelValue: 1)
```

For pickers, use `adjust(toPickerWheelValue:)` to make a picker scroll through to select a particular value.

```swift
adjust(toNormalizedSliderPosition: 0.5)
```

For sliders, use `adjust(toNormalizedSliderPosition:)` to move it to a specific position.

```swift
app.textFields.element.typeText("test")
```

For text fields, use `typeText(text:)` to type whole strings.

```swift
app.textFields.element.tap()
app.keys["t"].tap()
app.keys["e"].tap()
app.keys["s"].tap()
app.keys["t"].tap()
```

Alternatively, tap on the text field to activate the soft keyboard, then tap on individual letters.

## Assertions

```swift
XCTAssertEqual(app.buttons.element.title, "Buy")
XCTAssertEqual(app.staticTexts.element.label, "test")
```

Basic assertions.

```swift
guard let completion = app.progressIndicators.element.value as? String else {
    XCTFail("Unable to find the progress indicator.")
    return
}

XCTAssertEqual(completion, "0%")
```

Percentages for elements like progress indicators are reported as strings with `%`. This is one way to check them.

```swift
XCTAssertTrue(app.alerts["Warning"].exists)
```

Checking if an element exists (i.e. if it's in the view hierarchy as an accessibility element).

```swift
XCTAssertTrue(app.alerts["Warning"].waitForExistence(timeout: 2))
```

Same as above but wait up to 2 seconds for element, before returning.
