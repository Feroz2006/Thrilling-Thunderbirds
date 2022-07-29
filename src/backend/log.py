from logging import DEBUG, FileHandler, Formatter, getLogger, Logger
from pathlib import Path
from typing import Literal


class UnknownLogMode(Exception):
    """ Raised when unknown log mode is passed """
    def __init__(self, mode: str) -> None:
        super().__init__(f'Excepted anyone of `{", ".join(LOG_FILE_MODES)}`, received `{mode}`')


LOG_FILE_MODES = {'connection': 'connection.log', 'setup': 'setup.log', 'game': 'game_info.log'}

DEFAULT_FORMAT = Formatter(fmt='%(asctime)s | %(name)s | %(levelname)s | %(message)s', datefmt='%Y-%b-%d %H:%M:%S')

DEFAULT_LOG_LEVEL = DEBUG


def get_logger(
    name: str,
    mode: Literal['connection', 'setup', 'game'],
    *,
    log_format: Formatter = DEFAULT_FORMAT
) -> Logger:
    """
    Base logger for the application.
    
    Attributes
    ----------
    name: str
        Name of the logger, usually `__name__`
    mode: Literal['connection', 'setup', 'game']
        Mode of the logger to log to a specific file
    log_format: Formatter
        Optional, default is `DEFAULT_FORMAT`
        the log format
        
    Returns
    -------
    Logger
        The logger instance
        
    Raises
    ------
    UnknownLogMode
        Raised when an unknown mode is passed
        
    Example
    -------
    >>> log = get_logger(__name__, 'setup')
    >>> log.info('Hello world!')
    """
    try:
        file = Path('logs', LOG_FILE_MODES[mode])
    except KeyError:
        raise UnknownLogMode(mode) from None
    handler = FileHandler(file)
    handler.setFormatter(log_format)
    
    log = getLogger(name)
    log.level = DEFAULT_LOG_LEVEL
    log.addHandler(handler)
    
    return log
