from fastapi import APIRouter, Depends, Response
from queries.dairies_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from authenticator import authenticator
router = APIRouter()

router = APIRouter(tags=["Dairies"], prefix="/api/dairies")

@router.post("/dairies", response_model=Union[ItemOut, Error])
def add_dairy(item: ItemIn, response: Response, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()):
    itemss = repo.add_dairy(item)
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/dairies", response_model=Union[List[ItemOut], Error])
def get_all(account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ItemRepository=Depends(),
):
    return repo.get_all()

@router.put("/dairies/{item_id}", response_model=Union[ItemOut, Error])
def update_dairy(item_id: str, item: ItemIn, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    return repo.update_dairy(item_id, item)

@router.delete("/dairies/{item_id}", response_model=bool)
def delete_dairy(item_id: str, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> bool:
    return repo.delete_dairy(item_id)

@router.get("/dairies/{item_id}", response_model=Optional[ItemOut])
def get_dairy(item_id: str, response: Response, account_data: dict = Depends(authenticator.get_current_account_data),
repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_dairy(item_id)
    if item is None:
        response.status_code = 404
    return item
