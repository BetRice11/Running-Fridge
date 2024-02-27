from fastapi import (Depends, Request, Response, HTTPException, status, APIRouter)
from queries.accounts_queries import (AccountUserQueries)
from models.accounts import AccountUserRequest, AccountUserResponse
from utilities.authentication import (try_get_jwt_user_data, hash_password, generate_jwt, verify_password)

router = APIRouter(tags=["Authentication"], prefix="/api/auth")


@router.post("/signup")
async def signup(new_user: AccountUserRequest, request: Request, response: Response, queries: AccountUserQueries = Depends()) -> AccountUserResponse:
    hashed_password = hash_password(new_user.password)
    try:
        user = queries.create_user(new_user.username, hashed_password)
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    token = generate_jwt(user)
    user_out = AccountUserResponse(**user.model_dump())
    secure = True if request.headers.get("origin") == "localhost" else False
    response.set_cookie(
        key="fast_api_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=secure,
    )
    return user_out


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
    return AccountUserResponse(id=user.id, username=user.username)


@router.get("/authenticate")
async def authenticate(user: AccountUserResponse = Depends(try_get_jwt_user_data)) -> AccountUserResponse:
    """
    This function returns the user if the user is logged in.

    The `try_get_jwt_user_data` function tries to get the user and validate
    the JWT

    If the user isn't logged in this returns a 404

    This can be used in your frontend to determine if a user
    is logged in or not
    """
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Not logged in"
        )
    return user


@router.delete("/signout")
async def signout(request: Request, response: Response):
    secure = True if request.headers.get("origin") == "localhost" else False
    response.delete_cookie(
        key="fast_api_token", httponly=True, samesite="lax", secure=secure
    )
    return
