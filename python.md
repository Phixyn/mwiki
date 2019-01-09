# Python Cheatsheet

## Argparse

```python
parser = argparse.ArgumentParser(description="Program description.")
parser.add_argument("pos_arg", action="store", help="Positional argument.")
parser.add_argument("-f", "--foo", action="store", help="Optional argument.")
parser.add_argument("-o", "--optional", action="store", default="bar", help="Optional argument with default value.")
parser.add_argument("-t", "--transpose", action="store_true", help="Optional true argument.")
parser.add_argument("-V", "--version", action="version", version="Program Name v1.0.0", help="Displays version information and exits.")
args = vars(parser.parse_args())

args["pos_arg"]
args["foo"]
args["keys"]
args["indent_spaces"]
```

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
