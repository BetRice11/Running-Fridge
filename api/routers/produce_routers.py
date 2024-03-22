from fastapi import APIRouter, Depends, Response,  HTTPException
from queries.produce_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from authenticator import authenticator

router = APIRouter(tags=["Produce"], prefix="/api/produce")

def get_item_repository():
    return ItemRepository()

@router.post("/produce", response_model=Union[ItemOut, Error])
def add_produce(item: ItemIn, response: Response, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends(get_item_repository)):
    return repo.add_produce(item, account_id=account_data['id'])

@router.get("/produce/mine", response_model=Union[List[ItemOut], Error])
def get_all_for_account(account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository=Depends()):
    return repo.get_all_for_account(account_id=account_data['id'])

@router.put("/produce/{item_id}", response_model=Union[ItemOut, Error])
def update_produce(item_id: str, item: ItemIn, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    produce = repo.update_produce(item_id, account_data['id'], item)
    if produce is None:
        raise HTTPException(status_code = 404, detail="produce not found")
    return produce

@router.delete("/produce/{item_id}", response_model=bool)
def delete_produce(item_id: str, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> bool:
    return repo.delete_produce(item_id=item_id, account_id=account_data['id'])

@router.get("/produce/{item_id}", response_model=Optional[ItemOut])
def get_produce(item_id: str, response: Response, account_data: dict = Depends(authenticator.get_current_account_data),
repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_produce(item_id, account_id=account_data['id'])
    if item is None:
        response.status_code = 404
    return item
