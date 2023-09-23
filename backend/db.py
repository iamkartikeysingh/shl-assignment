from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient

MONGODB_URI = 'mongodb://localhost:27017/'
client = AsyncIOMotorClient(MONGODB_URI)


client = AsyncIOMotorClient(MONGODB_URI)
db = client["projectDb"]
collection = db["projectCollection"]