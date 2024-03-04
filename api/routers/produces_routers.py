from fastapi import APIRouter, Depends, Response
from queries.produces_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
router = APIRouter()

router = APIRouter(tags=["Produces"], prefix="/api/produces")

@router.post("/produces", response_model=Union[ItemOut, Error])
def add_produce(item: ItemIn, response: Response, repo: ItemRepository = Depends()):
    itemss = repo.add_produce(item)
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/produces", response_model=Union[List[ItemOut], Error])
def get_all(
    repo: ItemRepository=Depends(),
):
    return repo.get_all()

@router.put("/produces/{item_id}", response_model=Union[ItemOut, Error])
def update_produce(item_id: str, item: ItemIn, repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    return repo.update_produce(item_id, item)

@router.delete("/produces/{item_id}", response_model=bool)
def delete_produce(item_id: str, repo: ItemRepository = Depends()) -> bool:
    return repo.delete_produce(item_id)

@router.get("/produces/{item_id}", response_model=Optional[ItemOut])
def get_produce(item_id: str, response: Response, repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_produce(item_id)
    if item is None:
        response.status_code = 404
    return item
