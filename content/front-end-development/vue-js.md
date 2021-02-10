---
title: Vue.js
description: Cheatsheet, notes and links about Vue.js.
date: 2020-10-02 07:59
category: Front-End Development
tags:
  - front-end
  - front-end-development
  - web-development
  - vue-js
  - vue
  - nuxt
  - gridsome
  - javascript
layout: page
---

# Vue.js

- [Getting Started](#getting-started)
- [Links](#links)
- [Emmet](#emmet)
- [Binding](#binding)
- [Conditional Rendering](#conditional-rendering)
- [List Rendering (Looping)](#list-rendering-looping)

- - -

## Getting Started

**💻 Vue UI start command**

```
vue ui
```

**📚 Docs**

[Introduction — Vue.js](https://vuejs.org/v2/guide/#Getting-Started)  
[Installation | Vue CLI](https://cli.vuejs.org/guide/installation.html)  
[Style Guide | Vue.js](https://v3.vuejs.org/style-guide/)  

## Links

[MadeWithVueJS - Twitter](https://twitter.com/MadeWithVueJS)  
[GitHub - madlabsinc/mevn-cli: Light speed setup for MEVN (Mongo Express Vue Node) Apps](https://github.com/madlabsinc/mevn-cli)  

## Emmet

`<script>` tags with export default object:

```
javascript.vue
```

`<style>` tags:

```
css.vue
```

or

```
css-scoped.vue
```

More at: [https://docs.emmet.io/cheat-sheet/](https://docs.emmet.io/cheat-sheet/)

## Binding

- `v-bind:` or colon (`:`)
    - `:` is shorthand for `v-bind`
- `v-html:`

**How/why/when `v-bind:` is used in attributes:**

```html
<img src="{{ project.image_path }}">
```

Interpolation inside attributes has been removed, so the example above will not work. Use `v-bind` or the colon (`:`) shorthand instead.

```html
<img :src="project.image_path">
```

Another example: instead of `<div id="{{ val }}">`, use `<div :id="val">`.

> [https://v3.vuejs.org/guide/template-syntax.html#shorthands](https://v3.vuejs.org/guide/template-syntax.html#shorthands)

## Conditional Rendering

`v-if`

**Guide:** [https://v3.vuejs.org/guide/conditional.html](https://v3.vuejs.org/guide/conditional.html)

## List Rendering (Looping)

`v-for`

**Guide:** [https://v3.vuejs.org/guide/list.html](https://v3.vuejs.org/guide/list.html)
