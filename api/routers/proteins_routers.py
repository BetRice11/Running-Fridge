from fastapi import APIRouter, Depends, Response, HTTPException
from queries.proteins_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
from authenticator import authenticator

router = APIRouter(tags=["Proteins"], prefix="/api/proteins")

def get_item_repository():
    return ItemRepository()

@router.post("/proteins", response_model=Union[ItemOut, Error])
def add_protein(item: ItemIn, response: Response, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends(get_item_repository)):
    return repo.add_protein(item, account_id=account_data['id'])

@router.get("/proteins/mine", response_model=Union[List[ItemOut], Error])
def get_all_for_account(account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository=Depends()):
    return repo.get_all_for_account(account_id=account_data['id'])

@router.put("/proteins/{item_id}", response_model=Union[ItemOut, Error])
def update_protein(item_id: str, item: ItemIn, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    protein = repo.update_protein(item_id, account_data['id'], item)
    if protein is None:
        raise HTTPException(status_code = 404, detail="protein not found")
    return protein

@router.delete("/proteins/{item_id}", response_model=bool)
def delete_protein(item_id: str, account_data: dict = Depends(authenticator.get_current_account_data), repo: ItemRepository = Depends()) -> bool:
    return repo.delete_protein(item_id=item_id, account_id=account_data['id'])

@router.get("/proteins/{item_id}", response_model=Optional[ItemOut])
def get_protein(item_id: str, response: Response, account_data: dict = Depends(authenticator.get_current_account_data),
repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_protein(item_id, account_id=account_data['id'])
    if item is None:
        response.status_code = 404
    return item
