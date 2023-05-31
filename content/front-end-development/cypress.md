---
title: Cypress.io
description: Cypress is an end-to-end testing framework for web applications.
date: 2021-03-19 18:25
category: Front-End Development
tags: 
  - front-end
  - web-development
  - javascript
  - testing
  - ui-testing
  - end-to-end-testing
layout: page
---

# Cypress.io

- [Setting Up](#setting-up)
  - [Folder Structure](#folder-structure)
  - [Configuration](#configuration)
- [Element Selection](#element-selection)
  - [Get vs. Find](#get-vs-find)
- [Actions](#actions)
- [Assertions](#assertions)
- [Best Practices](#best-practices)
- [Debugging](#debugging)
- [Docs](#docs)
- [Examples and Recipes](#examples-and-recipes)
- [Articles](#articles)
- [Component Testing](#component-testing)
- [Plugins](#plugins)

- - -

[Cypress](https://www.cypress.io/) is an end-to-end testing framework for front-end applications.

## Setting Up

**NPM (recommended):**

```sh
$ npm install --save-dev cypress
```

**Yarn:**

```sh
$ yarn add --dev cypress
```

**`package.json` scripts:**

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
}
```

> See also: [Installing Cypress | Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html)  

### Folder Structure

Running Cypress for the first time will create example files within a standard folder structure.

- **Fixtures:** Stores all your mock requests and responses.
- **Integration:** Stores all your test files. May contain sub-folders for components, pages, etc.

Additionally, two folders called **Plugins** and **Support** will be generated. These will contain Javascript files with commented explanations and examples about Cypress plugins, custom commands, configuration, etc.

> See also: ["What files should I add to my '.gitignore file'?"](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Configuring-Folder-Structure)  

### Configuration

You should also create a `cypress.json` in the root directory of your project, with at least:

```json
{
  "baseUrl": "http://localhost:3000"
}
```

See also:
- [Configuration](https://docs.cypress.io/guides/references/configuration.html)  
- [Setting a global baseUrl](https://docs.cypress.io/guides/references/best-practices.html#Setting-a-global-baseUrl)

## Element Selection

**Basic selection:**

```javascript
cy.get("h1");       // Select by tag
cy.get(".square");  // Select by class
cy.get("#circle");  // Select by ID
```

**Selecting by attribute:**

```javascript
cy.get('[data-testid="triangle"]');
```

**Selecting child elements:**

```javascript
cy.get("#parent-element").find("#child-element");
```

> See also: [Cypress basics: Selecting elements - Filip Hric](https://filiphric.com/cypress-basics-selecting-elements)

### Get vs. Find

- `get` always looks for the specified element in the entire DOM
- `find` will look for a _child_ element inside the parent element yielded by a command such as `get`

**Note:** `find` is a child command, so it must be chained off something like `get`

## Actions

**Visiting pages:**

```javascript
cy.visit("/");
cy.visit("/about");
```

**Typing:**

```javascript
cy.get("#text-input").type("Hello world");
```

**Clicking elements:**

```javascript
cy.get("#some-button").click();
```

## Assertions

[Assertions | Cypress Documentation](https://docs.cypress.io/guides/references/assertions)

**Assert that the element's text content is _exactly_ the given text:**

```javascript
cy.get('#user-name').should('have.text', 'Joe Smith');
```

**Assert that the element's text _includes_ a given substring:**

```javascript
cy.get('#address').should('include.text', 'Atlanta');
```

**Chaining assertions with `and()`:**

```javascript
cy.get("#some-element")
  .should("have.class", "class-name")
  .and("be.visible");
```

**Testing element attributes:**

```javascript
cy.get("#text-input").should(
  "have.attr",   // assertion
  "placeholder", // attribute name
  "Add task..."  // attribute value
);
```

Alternatively, install and use the [Cypress Commands plugin](https://github.com/Lakitna/cypress-commands/blob/develop/docs/attribute.md):

```javascript
cy.get("#text-input")
  .attribute("placeholder")
  .should("contain", "Add task...");
```

> See also: [Implicit Subjects](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Implicit-Subjects) vs [Explicit Subjects](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Explicit-Subjects)

## Best Practices

[Best Practices | Cypress Documentation](https://docs.cypress.io/guides/references/best-practices.html)  

**Highlights:**

- Use `data-*` attributes to provide context to your selectors and isolate them from CSS or JS changes
- Trying to assign the return value of Commands with `const`, `let`, or `var` is an anti-pattern and does not work as you'd expect
- You rarely have to ever use `const`, `let`, or `var` in Cypress. If you’re using them, you will want to do some refactoring
  - See also: [Variables and Aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html)
- Prefer `before`/`beforeEach` hooks to clean up state before tests, if necessary
- Avoid "tiny" tests with single assertions
- Anti-pattern: Sharing page objects, using your UI to log in, and not taking shortcuts
  - Test specs in isolation, programmatically log into your application, and take control of your application's state
  - See also: [Logging in examples](https://github.com/cypress-io/cypress-example-recipes#logging-in-recipes)

## Debugging

Using [`cy.pause()`](https://docs.cypress.io/api/commands/pause) is helpful to debug. It can also be chained off other commands.

> See also: [`debug()`](https://docs.cypress.io/api/commands/debug) and [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

## Docs

[Writing and Organizing Tests | Cypress Documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)  
[Assertions | Cypress Documentation](https://docs.cypress.io/guides/references/assertions.html)  
[Kitchen Sink](https://example.cypress.io/commands/querying)  
[Custom Commands | Cypress Documentation](https://docs.cypress.io/api/cypress-api/custom-commands.html)  

## Examples and Recipes

[Recipes | Cypress Documentation](https://docs.cypress.io/examples/examples/recipes)  
[cypress-example-recipes: Various recipes for testing common scenarios with Cypress](https://github.com/cypress-io/cypress-example-recipes)  

## Articles

[Getting Started with End-to-End Tests in React using Cypress | Codementor](https://www.codementor.io/@blizzerand/manjunath-getting-started-with-end-to-end-tests-in-react-using-cypress-smtfkr5cv)  
[Modern Front-End Testing with Cypress](https://www.cypress.io/blog/2019/02/05/modern-frontend-testing-with-cypress/)  
[Testing React + Firebase Apps With Cypress](https://prescottprue.medium.com/testing-react-firebase-apps-with-cypress-7d7a64d155de)  

## Component Testing

See: [Component Testing Introduction | Cypress Documentation](https://docs.cypress.io/guides/component-testing/introduction.html)  

## Plugins

[cypress-commands: A collection of Cypress commands to extend and complement the defaults](https://github.com/Lakitna/cypress-commands)  
[cypress-firebase: Utilities to help testing firebase projects with cypress.](https://github.com/prescottprue/cypress-firebase)  
