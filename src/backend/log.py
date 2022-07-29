from logging import DEBUG, FileHandler, Formatter, getLogger, Logger
from pathlib import Path
from typing import Literal, Optional


class UnknownLogMode(Exception):
    def __init__(self, mode: str) -> None:
        super().__init__(f'Excepted anyone of `{", ".join(LOG_FILE_MODES)}`, received `{mode}`')


LOG_FILE_MODES = {'connection': 'connection.log', 'setup': 'setup.log', 'game': 'game_info.log'}

DEFAULT_FORMAT = Formatter(fmt='%(asctime)s | %(name)s | %(levelname)s | %(message)s', datefmt='%Y-%b-%d %H:%M:%S')

DEFAULT_LOG_LEVEL = DEBUG


class Handler(FileHandler):
    def setFormatter(self, formatter: Optional[Formatter] = None):
        super().setFormatter(formatter)


def get_logger(
    name: str,
    mode: Literal['connection', 'setup', 'game'],
    *,
    log_format: Formatter = DEFAULT_FORMAT
) -> Logger:
    try:
        file = Path('logs', LOG_FILE_MODES[mode])
    except KeyError:
        raise UnknownLogMode(mode) from None
    
    _log = getLogger(name)
    _log.level = DEFAULT_LOG_LEVEL
    handler = Handler(file)
    handler.setFormatter(log_format)
    _log.addHandler(handler)
    
    return _log
