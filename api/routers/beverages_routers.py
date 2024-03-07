from queries.beverages_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from fastapi import Depends, Response, HTTPException, status, APIRouter
from authenticator import authenticator




router = APIRouter()

router = APIRouter(tags=["Beverages"], prefix="/api/beverages")

def get_item_repository():
    return ItemRepository()

@router.post("/beverages", response_model=Union[ItemOut, Error])
def add_beverage(item: ItemIn, response: Response, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends(get_item_repository)):
    itemss = repo.add_beverage(item, account_id=account_data['id'])
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/beverages/mine", response_model=Union[List[ItemOut], Error])
def get_all_for_account(account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository=Depends()):
    return repo.get_all_for_account(account_id=account_data['id'])

@router.put("/beverages/{item_id}", response_model=Union[ItemOut, Error])
def update_beverage(item_id: str, item: ItemIn, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    beverage = repo.update_beverage(item_id, account_data['id'], item)
    if beverage is None:
        raise HTTPException(status_code = 404, detail="beverage not found")
    return beverage

@router.delete("/beverages/{item_id}", response_model=bool)
def delete_beverage(item_id: str, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> bool:
    return repo.delete_beverage(item_id=item_id, account_id=account_data['id'])

@router.get("/beverages/{item_id}", response_model=Optional[ItemOut])
def get_beverage(item_id: str, response: Response, account_data: dict = Depends(authenticator.get_current_account_data),
repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_beverage(item_id, account_id=account_data['id'])
    if item is None:
        response.status_code = 404
    return item
