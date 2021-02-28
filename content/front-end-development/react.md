---
title: React
description: Cheatsheet, notes and links about the React framework.
date: 2020-09-08 01:52
category: Front-End Development
tags:
  - front-end
  - front-end-development
  - web-development
  - react
  - javascript
layout: page
---

# React

- [Getting Started](#getting-started)
- [Basic Component](#basic-component)
- [Fragments](#fragments)
    - [Short Syntax](#short-syntax)
- [Typechecking With PropTypes](#typechecking-with-proptypes)

- - -

## Getting Started

**[React.js cheatsheet](https://devhints.io/react)**  
[Getting Started – React](https://reactjs.org/docs/getting-started.html)  
[W3Schools - React Tutorial](https://www.w3schools.com/react/default.asp)  
[State and Lifecycle – React](https://reactjs.org/docs/state-and-lifecycle.html)  
[JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html)  

## Basic Component

**Class based components:**

```jsx
import React from "react"

class ComponentName extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>App Name</h1>
      </div>
    )
  }
}

export default ComponentName
```

**Function based components:**

```jsx
function ComponentName() {
  return (
    <div className="container">
      <h1>App Name</h1>
    </div>
  )
}

export default ComponentName
```

## Fragments

Every React component can return at most one HTML element. Sometimes, you might want a component to return multiple HTML elements. The common solution is to wrap these elements inside `<div>` tag. This can eventually lead to a messy DOM.

Fragments let you group a list of children without adding extra nodes to the DOM. This is useful when we don't want to fill the DOM with a bunch of `<div>` tags. Fragments are used like any other component:

```jsx
function About() {
  return (
    <React.Fragment>
      <h1 className="text-xl font-bold">About</h1>
      <p className="mt-4">This is a simple to-do list app.</p>
    </React.Fragment>
  );
}
```

> _See also: [React Fragments documentation](https://reactjs.org/docs/fragments.html)_

### Short Syntax

There is a new, shorter syntax for using fragments:

```jsx
function About() {
  return (
    <>
      <h1 className="text-xl font-bold">About</h1>
      <p className="mt-4">This is a simple to-do list app.</p>
    </>
  );
}
```

You can use `<> </>` in the same way you'd use any other element, except that it doesn't support keys or attributes. For that you'd still use `React.Fragment`.

## Typechecking With PropTypes

Even though you can use TypeScript with React, React also has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special `propTypes` property:

```jsx
import PropTypes from "prop-types"

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

// Set up prop typechecking
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

// You can also give props a default value
Button.defaultProps = {
  color: "steelblue"
}

export default Button
```

See React's [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper) documentation for more info.
