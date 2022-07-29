from importlib import import_module
from pathlib import Path

from constants import Database
from fastapi import FastAPI
from log import get_logger
from pymongo import MongoClient

log = get_logger(__name__, 'setup')


class RouterNotFound(Exception):
    """Raised when a router instance is not found in a module in `routers` dir"""

    def __init__(self, module: str) -> None:
        super().__init__(f'Router instance not found in {module}')


class App(FastAPI):
    """Subclass for `FastAPI` to load the routers from `routers` folder."""

    def __init__(self) -> None:
        super().__init__()

    def setup(self) -> None:
        """Loading routers from `routers` directory"""
        super().setup()
        routers = map(
            lambda x: str(x)[:-3].replace('\\', '.'),
            Path('routers').glob('**/[!_]*.py')
        )

        for router_module in routers:
            module = import_module(router_module)
            try:
                self.include_router(module.router)
                log.info(f'{module.__name__} loaded!')
            except AttributeError:
                raise RouterNotFound(router_module)


database_client = MongoClient(Database.uri)
