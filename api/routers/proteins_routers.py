from fastapi import APIRouter, Depends, Response
from queries.proteins_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
router = APIRouter()

router = APIRouter(tags=["Proteins"], prefix="/api/proteins")

@router.post("/proteins", response_model=Union[ItemOut, Error])
def add_protein(item: ItemIn, response: Response, repo: ItemRepository = Depends()):
    itemss = repo.add_protein(item)
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/proteins", response_model=Union[List[ItemOut], Error])
def get_all(
    repo: ItemRepository=Depends(),
):
    return repo.get_all()

@router.put("/proteins/{item_id}", response_model=Union[ItemOut, Error])
def update_protein(item_id: str, item: ItemIn, repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    return repo.update_protein(item_id, item)

@router.delete("/proteins/{item_id}", response_model=bool)
def delete_protein(item_id: str, repo: ItemRepository = Depends()) -> bool:
    return repo.delete_protein(item_id)

@router.get("/proteins/{item_id}", response_model=Optional[ItemOut])
def get_protein(item_id: str, response: Response, repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_protein(item_id)
    if item is None:
        response.status_code = 404
    return item
