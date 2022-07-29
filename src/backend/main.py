import uvicorn

from app import App

app = App()

uvicorn.run(app, host='127.0.0.1', port=8000)
