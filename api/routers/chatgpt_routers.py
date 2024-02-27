from fastapi import APIRouter, Depends, Response
from queries.chatgpt_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
router = APIRouter()

router = APIRouter(tags=["ChatGPT"], prefix="/api/chatgpt")

@router.get("/chatgpt", response_model=Union[List[ItemOut], Error])
def get_all(
    repo: ItemRepository=Depends(),
):
    return repo.get_all()

@router.get("/chatgpt", response_model=Union[List[ItemOut], Error])
def generate_recipe(
    repo: ItemRepository=Depends(),
):
    return repo.generate_recipe()
