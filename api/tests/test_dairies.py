from fastapi.testclient import TestClient
from queries.dairies_queries import ItemRepository
from authenticator import authenticator
from main import app

client = TestClient(app=app)

def fake_get_current_account_data():
    return {"id": "FAKE_ACCOUNT_ID"}

class FakeItemRepository:
    def add_dairy(self, item, account_id):
        items = item.dict()
        items["account_id"] = account_id
        items["id"] = "FAKE_ID"
        return items

def test_add_dairy():
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/dairies/dairies", json=item)
    assert res.status_code == 401

def test_delete_dairies():
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/dairies/dairies", json=item)
    assert res.status_code == 401

def test_get_dairies():
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/dairies/dairies", json=item)
    assert res.status_code == 401

def test_update_dairies():
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/dairies/dairies", json=item)
    assert res.status_code == 401

def test_get_all_for_account():
    app.dependency_overrides[ItemRepository] = FakeItemRepository
    item = {
        "name": "string",
        "cost": "string",
        "expiration_date": "2024-03-12",
        "measurement": "string",
        "store_name": "string"
        }
    res = client.post("/api/dairies/dairies", json=item)
    assert res.status_code == 401
