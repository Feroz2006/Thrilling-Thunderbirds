from contextlib import asynccontextmanager
from dataclasses import dataclass
import typing as t

from fastapi import WebSocket, WebSocketDisconnect

GameDataT: t.TypeAlias = dict[str, dict[str, int]]


@dataclass
class Client:
    """ Client class ...."""
    username: str
    profile_info: t.Optional[GameDataT] = None
    
    def append(self, game: t.Literal['snake', 'maze'], data: dict[str, int]):
        self.profile_info[game] = data
    
    def update(self): ...
    
    def to_dict(self):
        """ To store the stats in the database """


class ClientManager:
    """ Client class to store instance of the active websocket connections """
    
    def __init__(self) -> None:
        self.active_clients: dict[Client, WebSocket] = {}
    
    @asynccontextmanager
    async def connect(self, client: Client, websocket: WebSocket) -> None:
        try:
            await websocket.accept()
            self.active_clients[client] = websocket
            yield
        except WebSocketDisconnect:
            del self.active_clients[client]
        finally:
            del self.active_clients[client]
