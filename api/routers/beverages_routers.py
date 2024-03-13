from queries.beverages_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from fastapi import Depends, Response, HTTPException, status, APIRouter
from fastapi.security import OAuth2PasswordBearer




router = APIRouter()

router = APIRouter(tags=["Beverages"], prefix="/api/beverages")

def get_item_repository():
    return ItemRepository()

@router.post("/beverages", response_model=Union[ItemOut, Error])
def add_beverage(item: ItemIn, response: Response, repo: ItemRepository = Depends(get_item_repository)):
    itemss = repo.add_beverage(item)
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/beverages", response_model=Union[List[ItemOut], Error])
def get_all_beverages(repo: ItemRepository=Depends()):
    return repo.get_all()

@router.put("/beverages/{item_id}", response_model=Union[ItemOut, Error])
def update_beverage(item_id: str, item: ItemIn, repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    return repo.update_beverage(item_id, item)

@router.delete("/beverages/{item_id}", response_model=bool)
def delete_beverage(item_id: str, repo: ItemRepository = Depends()) -> bool:
    return repo.delete_beverage(item_id)

@router.get("/beverages/{item_id}", response_model=Optional[ItemOut])
def get_beverage(item_id: str, response: Response, repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_beverage(item_id)
    if item is None:
        response.status_code = 404
    return item
