---
title: Node.js
description: Cheatsheet, notes and links about Node.js.
date: 2020-01-17 11:57
category: Web Development
tags:
  - web-development
  - node-js
  - node
  - javascript
  - front-end
  - back-end
  - full-stack
layout: page
---

# Node.js

- [Getting Started](#getting-started)
- [Common Issues](#common-issues)

- - -

## Getting Started

[Index | Node.js v12.18.4 API Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/)

**Hot reload with `nodemon`:**

```sh
# -D / --save-dev - Save as a dev dependency in package.json
npm install -D nodemon (hot reload)
```

Add to `package.json`:
```
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
```

Use with:

```sh
# npm run <script name>
npm run dev
```

## Common Issues

* [Node.js not linked error](https://stackoverflow.com/questions/12663488/node-js-not-linked-error)
