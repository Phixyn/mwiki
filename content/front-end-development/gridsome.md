---
title: Gridsome
description: Notes and links about Gridsome, a Vue.js powered Jamstack framework.
date: 2020-10-06 00:04
category: Front-End Development
tags: 
  - front-end-development
  - web-development
  - vue-js
  - gridsome
  - jamstack
  - static-site-generators
layout: page
---

# Gridsome

> A Jamstack framework for Vue.js.
>
> Official site: [gridsome.org](https://gridsome.org/)

- - -

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Quick Start](#quick-start)
- [Plugins](#plugins)
- [Adding Global Metadata](#adding-global-metadata)

- - -

## Quick Start

**Docs:**

[Introduction - Gridsome](https://gridsome.org/docs/)

**Installation:**

Install the CLI tool with **Yarn** or **NPM**:

```
yarn global add @gridsome/cli
```

```
npm install --global @gridsome/cli
```

Create a new project:

```
gridsome create <folder/path>
```

Start local dev server (default at [http://localhost:8080](http://localhost:8080)):

```
gridsome develop
```

Generate static files (in a `/dist` folder):

```
gridsome build
```

See also: [Gridsome CLI - Gridsome](https://gridsome.org/docs/gridsome-cli/)

**Adding content:**

Create `.vue` components in the `src/pages` directory to create page routes.

## Plugins

> Plugins that I use frequently.

[@gridsome/source-filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem) - Transform files into content that can be fetched with GraphQL in your components.
[@gridsome/transformer-remark](https://gridsome.org/plugins/@gridsome/transformer-remark) - Markdown transformer for Gridsome with [Remark](https://remark.js.org/).

- - -

See also: [Plugin List and Search](https://gridsome.org/plugins/)

## Adding Global Metadata

Can be done either in `gridsome.server.js` or `gridsome.config.js` (via [https://gridsome.org/docs/config/#metadata](https://gridsome.org/docs/config/#metadata))
