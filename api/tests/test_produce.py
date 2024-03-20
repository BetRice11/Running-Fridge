from fastapi.testclient import TestClient
from api.queries.produce_queries import ItemRepository
from authenticator import authenticator
from main import app

client = TestClient(app=app)

def fake_get_current_account_data():
    return {"id": "FAKE_ACCOUNT_ID"}

class FakeItemRepository:
    def add_produce(self, item, account_id):
        items = item.dict()
        items["account_id"] = account_id
        items["id"] = "FAKE_ID"
        return items

def test_add_produce():
    #arrange
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    #act
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/produce/produce", json=item)
    #assert
    assert res.status_code == 401

class FakeItemRepository:
    def delete_produce(self, item, account_id):
        items = item.dict()
        items["account_id"] = account_id
        items["id"] = "FAKE_ID"
        return items

def test_delete_produce():
    #arrange
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    #act
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/produce/produce", json=item)
    #assert
    assert res.status_code == 401
