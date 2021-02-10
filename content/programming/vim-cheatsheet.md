---
title: Vim Cheatsheet
description: Vim shortcuts and commands cheatsheet.
date: 2020-01-21 01:41
category: Programming
tags:
  - vim
  - linux
  - unix
  - cli
  - best-text-editor-ever
layout: page
---

# Vim Cheatsheet

- [Quit All](#quit-all)
- [Move To Matching Braces/Brackets](#move-to-matching-bracesbrackets)
- [Tabs](#tabs)
- [Splits](#splits)
- [Vim Multi-Cursor](#vim-multi-cursor)
- [Infographic](#infographic)

- - -

## Quit All

`:qa`

## Move To Matching Braces/Brackets

* `%`
* `y%`: Yank until matching braces/brackets

## Tabs

* `CTRL + W + (Shift) T`: New tab
* `GT`: Cycle between tabs

## Splits

* `CTRL + W + v`: New vertical split

## Vim Multi-Cursor

> Plugin: [GitHub - terryma/vim-multiple-cursors: True Sublime Text style multiple selections for Vim](https://github.com/terryma/vim-multiple-cursors)

1. v (to enter Visual mode)
2. g + ((CTRL + N) * lines) to add new cursors - use CTRL + P while in this mode to undo a cursor (while doing this, it'll say you're in Normal mode)
    * Use CTRL + x to skip a match
3. v (to go back to Normal mode)
4. i (to enter Insert mode - you won't see this displayed in your current mode, it'll stay as Normal)
5. ESC twice when done (one to exit Insert mode, one to exit the cursor mode) - move your cursor (up/down arrows) to make the old ones go away

## Infographic

![vim-1.png](https://linuxacademy.com/site-content/uploads/2019/05/vim-1.png)
