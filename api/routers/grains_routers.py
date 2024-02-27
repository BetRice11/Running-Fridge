from fastapi import APIRouter, Depends, Response
from queries.grains_queries import ItemIn, ItemRepository, ItemOut, Error
from typing import Union, Optional, List
router = APIRouter()

router = APIRouter(tags=["Grains"], prefix="/api/grains")

@router.post("/grains", response_model=Union[ItemOut, Error])
def add_grain(item: ItemIn, response: Response, repo: ItemRepository = Depends()):
    itemss = repo.add_grain(item)
    if itemss is None:
        response.status_code = 400
    return itemss

@router.get("/grains", response_model=Union[List[ItemOut], Error])
def get_all(
    repo: ItemRepository=Depends(),
):
    return repo.get_all()

@router.put("/grains/{item_id}", response_model=Union[ItemOut, Error])
def update_grain(item_id: int, item: ItemIn, repo: ItemRepository = Depends()) -> Union[Error, ItemOut]:
    return repo.update_grain(item_id, item)

@router.delete("/grains/{item_id}", response_model=bool)
def delete_grain(item_id: int, repo: ItemRepository = Depends()) -> bool:
    return repo.delete_grain(item_id)

@router.get("/grains/{item_id}", response_model=Optional[ItemOut])
def get_grain(item_id: int, response: Response, repo: ItemRepository = Depends()) -> ItemOut:
    item = repo.get_grain(item_id)
    if item is None:
        response.status_code = 404
    return item