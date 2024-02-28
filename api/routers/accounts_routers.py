from fastapi import (Depends, Request, Response, HTTPException, status, APIRouter)
from queries.accounts_queries import (AccountUserQueries)
from models.accounts import AccountUserRequest, AccountUserResponse
from utilities.authentication import (try_get_jwt_user_data, hash_password, generate_jwt, verify_password)
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


router = APIRouter(tags=["Authentication"], prefix="/api/auth")


@router.post("/signup")
async def signup(new_user: AccountUserRequest, request: Request, response: Response, queries: AccountUserQueries = Depends()) -> AccountUserResponse:
    hashed_password = hash_password(new_user.password)
    user_queries = AccountUserQueries()
    try:
        user = user_queries.create_user(new_user.username, hashed_password)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error creating user."
        )
    token = generate_jwt(user)
    return AccountUserResponse(id=user.id, username=user.username, token=token)


@router.post("/signin")
async def signin(user_request: AccountUserRequest, request: Request, response: Response, queries: AccountUserQueries = Depends()) -> AccountUserResponse:
    user = queries.get_by_username(user_request.username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    if not verify_password(user_request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    token = generate_jwt(user)
    secure = True if request.headers.get("origin") == "localhost" else False
    response.set_cookie(
        key="fast_api_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=secure,
    )
    return AccountUserResponse(id=user.id, username=user.username, token=token)


@router.get("/authenticate")
async def authenticate_user(token: str = Depends(oauth2_scheme), queries: AccountUserQueries = Depends()):
    user_data = await try_get_jwt_user_data(token)
    if not user_data:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token or expired")
    user = queries.get_by_id(user_data.id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return AccountUserResponse(id=user.id, username=user.username)


@router.delete("/signout")
async def signout(request: Request, response: Response):
    secure = True if request.headers.get("origin") == "localhost" else False
    response.delete_cookie(
        key="fast_api_token", httponly=True, samesite="lax", secure=secure
    )
    return
