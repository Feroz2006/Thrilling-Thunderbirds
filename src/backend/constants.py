from os import getenv

from dotenv import load_dotenv

load_dotenv()

env = getenv('ENV')


class Database:
    """To store constants for database connection."""

    uri = getenv('MONGODB_URI')
