# Python Cheatsheet

## Argparse

### Basic Setup

```python
parser = argparse.ArgumentParser(description="Program description.")
parser.add_argument("pos_arg", action="store", help="Positional argument.")
parser.add_argument("-f", "--foo", action="store", help="Optional argument.")
args = vars(parser.parse_args())
args["pos_arg"]
args["foo"]
```

Basic setup where `pos_arg` is a required positional argument and `-f` or `--foo` are optional arguments.

### Optional Arguments

```python
parser.add_argument("-o", "--optional",
                    action="store",
                    default="foo",
                    help="Optional argument with default value.")
```

Adds an optional argument with a default value of `foo`.

```python
parser.add_argument("-t", "--transpose",
                    action="store_true",
                    help="Optional True argument.")
```

Adds an optional argument with a default value of `False`. If this argument is used, the value will be set to `True`.

_See also: [Argparse action](https://docs.python.org/3/library/argparse.html#action)._

### Multiple Values With `nargs`

```python
parser.add_argument("keys",
                    action="store",
                    nargs="+",
                    default=None, help="Positional list argument")
```

All of the values present in this argument will be stored into a list.

_See also: [Argparse nargs](https://docs.python.org/3/library/argparse.html#nargs)_.

### Type, Metavar and Dest

```python
parser.add_argument("-i", "--indent-spaces",
                    action="store",
                    default=4,
                    type=int,
                    metavar="SPACES",
                    help="Number of spaces to use for indentation (defaults to 4).")
args["indent_spaces"]
```

Adds an optional argument which expects an `int` as a value. The help text will refer to the value as `SPACES` instead of `INDENT_SPACES` due to [metavar](https://docs.python.org/3/library/argparse.html#metavar). However, it is still accessed with `args["indent_spaces"]`, due to the default [dest](https://docs.python.org/3/library/argparse.html#dest) value.

### Display Version

```python
parser.add_argument("-V", "--version",
                    action="version",
                    version="Program Name v1.0.0",
                    help="Displays version information and exits.")
```

Adds an argument to display a version string.

## Logging

### Basic Logger Setup

```python
LOG_LEVEL = logging.DEBUG

# Create a Formatter to specify how logging messages are displayed
# e.g. [2017-10-20 02:28:14][INFO] Initializing...
LOG_FORMATTER = logging.Formatter("[%(asctime)s][%(levelname)s] %(message)s", datefmt="%Y-%m-%d %H:%M:%S")

# Set up logger
logger = logging.getLogger()
logger.setLevel(LOG_LEVEL)
```

Basic logger setup. Used in combination with one or more of the handlers below.

_Requirements: `import time` and `import logging`._

### Logging Handlers

```python
# Create and add logging handler for stdout (console) logging
loggerConsoleHandler = logging.StreamHandler(sys.stdout)
loggerConsoleHandler.setFormatter(LOG_FORMATTER)
logger.addHandler(loggerConsoleHandler)
```

Logging handler used to display logging output in STDOUT.

_Requirements: `import sys` and basic setup._

```python
LOGS_FOLDER_NAME = "logs"
# Save log files with the project, date and time in the name
# (e.g. Program-Name_2017-10-20_09-55.log)
LOG_FILE_NAME = time.strftime("Program-Name_%Y-%m-%d_%H-%M.log")
LOG_FILE_PATH = os.path.join(os.getcwd(), LOGS_FOLDER_NAME, LOG_FILE_NAME)

# Create logs folder if it is not present
if not os.path.isdir(LOGS_FOLDER_NAME):
    os.mkdir(LOGS_FOLDER_NAME)

# Create and add logging handler for file logging
loggerFileHandler = logging.FileHandler(LOG_FILE_PATH)
loggerFileHandler.setFormatter(LOG_FORMATTER)
logger.addHandler(loggerFileHandler)
```

Logging handler used to save logging output to a file.

_Requirements: `import os` and basic setup._
