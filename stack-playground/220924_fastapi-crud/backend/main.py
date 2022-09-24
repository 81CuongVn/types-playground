from fastapi import FastAPI
from routes.user import user

app = FastAPI(
  title="FastAPI & MongoDB CRUD",
  description="This is a simple REST API using fastapi and mongodb",
  version="1.0.0"
)

app.include_router(user)

