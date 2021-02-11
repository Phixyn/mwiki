---
title: Python Bookmarks
date: 2020-01-17 12:48
updated: 2020-03-01 19:00
category: Programming
collection: Python
tags:
  - python
  - pytest
layout: page
---

# Python Bookmarks

- [General](#general)
- [Documentation and Guides](#documentation-and-guides)
- [Low-Level Python](#low-level-python)
- [IPC](#ipc)
    - [asyncio](#asyncio)
- [Messaging](#messaging)
- [Profiling](#profiling)
    - [Visualizers](#visualizers)
    - [Articles](#articles)
- [Data Compression](#data-compression)
- [Testing With Python](#testing-with-python)
    - [Pytest](#pytest)
    - [Test Tools](#test-tools)
    - [Test Automation](#test-automation)

- - -

## General

* [Python 3 Cheatsheet](https://perso.limsi.fr/pointal/_media/python:cours:mementopython3-english.pdf)
* [Python Tips Book - Decorators](http://book.pythontips.com/en/latest/decorators.html) - whole site seems good
* [One-Liners — Python Tips 0.1 documentation](http://book.pythontips.com/en/latest/one_liners.html)
* [Python Pandemonium – Medium](https://medium.com/python-pandemonium)
* ['not x is None' vs 'x is not None'](https://legacy.python.org/dev/peps/pep-0008/#programming-recommendations) - PEP8 says it's a matter of readability

## Documentation and Guides

* [Example on how to document your Python docstrings](https://thomas-cokelaer.info/tutorials/sphinx/docstring_python.html)
* [Errors and Exceptions — Python 3.7.4 documentation](https://docs.python.org/3/tutorial/errors.html)
* [Retrying after exceptions, and handling Internet connection problems](https://pragmaticcoders.com/blog/retrying-exceptions-handling-internet-connection-problems/)
* [The definitive guide to Python exceptions](https://julien.danjou.info/python-exceptions-guide/)
* [Python yield, Generators and Generator Expressions](https://www.programiz.com/python-programming/generator)
* [Python Generators](https://www.programiz.com/python-programming/generator)
* [When to use `yield` instead of `return` in Python?](https://www.geeksforgeeks.org/use-yield-keyword-instead-return-keyword-python/)
* [The `yield` statement](https://docs.python.org/2.4/ref/yield.html)

## Low-Level Python

* [Disassembling Python Bytecode – Peter Goldsborough](http://www.goldsborough.me/python/low-level/2016/10/04/00-31-30-disassembling_python_bytecode/)
* [Working with Binary Data in Python | DevDungeon](https://www.devdungeon.com/content/working-binary-data-python)
* [Python Bits and Bytes](https://www.theunterminatedstring.com/python-bits-and-bytes/)
* [struct — Interpret bytes as packed binary data — Python 3.7.6 documentation](https://docs.python.org/3.7/library/struct.html#struct-examples)

## IPC

* [Networking and Interprocess Communication — Python 3.8.3 documentation](https://docs.python.org/3/library/ipc.html)

### asyncio

* [Coroutines and Tasks — Python 3.8.3 documentation](https://docs.python.org/3/library/asyncio-task.html)

## Messaging

* [The PyZMQ API — PyZMQ 19.0.0 documentation](https://pyzmq.readthedocs.io/en/latest/api/index.html)

## Profiling

* cProfile (standard lib)
* [GitHub - joerick/pyinstrument: Call stack profiler for Python.](https://github.com/joerick/pyinstrument)
* [GitHub - benfred/py-spy: Sampling profiler for Python programs](https://github.com/benfred/py-spy)
* [GitHub - pyutils/line_profiler: Line-by-line profiling for Python](https://github.com/pyutils/line_profiler)
* [GitHub - fabianp/memory_profiler: Monitor Memory usage of Python code](https://github.com/fabianp/memory_profiler)

### Visualizers

* [SnakeViz](https://jiffyclub.github.io/snakeviz/)
* [GitHub - jrfonseca/gprof2dot: Converts profiling output to a dot graph.](https://github.com/jrfonseca/gprof2dot)

kcachegrind reading cProfile data converted with `pyprof2calltree`:

```sh
brew install qcachegrind --with-graphviz
pip3 install pyprof2calltree

pyprof2calltree -k -i myscript.cprof
```

Saving line profiler output (do this before changing the code, or else the numbers won't match)

```
python -m line_profiler dckern.kprof > non-optimized_report.txt
```

### Articles

* [Python Profilers: Learn the Basics of a profiler for Python in this blog](https://stackify.com/how-to-use-python-profilers-learn-the-basics/)
* [Profiling Python using cProfile: a concrete case](https://julien.danjou.info/guide-to-python-profiling-cprofile-concrete-case-carbonara/)
* [Performance Profiling in Python](https://www.lachlaneagling.com/profiling-python/)
* [Python Profiling | Medium](https://medium.com/@antoniomdk1/hpc-with-python-part-1-profiling-1dda4d172cdf)
* [Python profiling - Yves Callaert - Medium](https://medium.com/@yvescallaert/python-profiling-bec32603ec31)
* [Profiling asyncio code – roguelynn](https://www.roguelynn.com/words/asyncio-profiling/)

## Data Compression

* [Quick User's Guide · Blosc/python-blosc Wiki · GitHub](https://github.com/Blosc/python-blosc/wiki/Quick-User's-Guide)

## Testing With Python

### Pytest

* [Basic patterns and examples — pytest documentation](https://docs.pytest.org/en/latest/example/simple.html#making-test-result-information-available-in-fixtures)
* [Advanced Pytest Fixtures](http://devork.be/talks/advanced-fixtures/advfix.html)
* [python - py.test logging control - Stack Overflow](https://stackoverflow.com/questions/11855170/py-test-logging-control)
* [python - How to include selenium screenshot in pytest bdd for passed tests? - Stack Overflow](https://stackoverflow.com/questions/48099835/how-to-include-selenium-screenshot-in-pytest-bdd-for-passed-tests)
* [pytest-fixture-modularization.md](https://gist.github.com/peterhurford/09f7dcda0ab04b95c026c60fa49c2a68)

### Test Tools

* [Factory Boy - Github](https://github.com/FactoryBoy/factory_boy)

### Test Automation

* [Testlio Python test automation utilities](https://github.com/Testlio/testlio-automation-py)
