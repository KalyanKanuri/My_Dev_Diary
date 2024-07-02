from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from loguru import logger
from pydantic import BaseModel

# Initialize FastAPI
app = FastAPI()

origins = [
    "http://localhost:5173",
    "*"
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

class DevDairy(BaseModel):
    title: tuple = 'My Dev Dairy',
    description: tuple = 'This is a Portfolio API for my Dev Dairy',
    url: str = 'https://github.com/KalyanKanuri/My_Dev_Diary'
    technologies: list = ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'React']


@app.get("/test")
async def root():
    return {"message": "API Test Successful"}
