from fastapi import Depends, Response, HTTPException, status, APIRouter
from queries.dairies_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from authenticator import authenticator

router = APIRouter(tags=["Dairies"], prefix="/api/dairies")

def get_item_repository():
    return ItemRepository()

@router.post("/dairies", response_model=Union[ItemOut, Error])
def add_dairy(item: ItemIn, response: Response, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends(get_item_repository)):
    return repo.add_dairy(item, account_id=account_data['id'])

@router.get("/dairies/mine", response_model=Union[List[ItemOut], Error])
def get_all_for_account(account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository=Depends()):
    return repo.get_all_for_account(account_id=account_data['id'])

@router.put("/dairies/{item_id}", response_model=Union[ItemOut, Error])
def update_dairy(item_id: str, item: ItemIn, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    dairy = repo.update_dairy(item_id, account_data['id'], item)
    if dairy is None:
        raise HTTPException(status_code = 404, detail="dairy not found")
    return dairy

@router.delete("/dairies/{item_id}", response_model=bool)
def delete_dairy(item_id: str, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> bool:
    return repo.delete_dairy(item_id=item_id, account_id=account_data['id'])

@router.get("/dairies/{item_id}", response_model=Optional[ItemOut])
def get_dairy(item_id: str, response: Response, account_data: dict = Depends(authenticator.get_current_account_data),
repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_dairy(item_id, account_id=account_data['id'])
    if item is None:
        response.status_code = 404
    return item
