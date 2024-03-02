from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routers import accounts_routers, beverages_routers, dairies_routers, grains_routers, produces_routers, proteins_routers
import os
from authenticator import authenticator

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }

app.include_router(authenticator.router, tags = ['AUTH'])
app.include_router(beverages_routers.router)
app.include_router(dairies_routers.router)
app.include_router(grains_routers.router)
app.include_router(produces_routers.router)
app.include_router(proteins_routers.router)
app.include_router(accounts_routers.router)
