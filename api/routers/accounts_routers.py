from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.accounts_queries import AccountRepo, DuplicateAccountError
from models.accounts import AccountIn, AccountOut, AccountToken, AccountForm, Account
from authenticator import authenticator



router = APIRouter(tags=["Authentication"], prefix="/api/auth")


@router.post("/api/accounts", response_model=AccountToken)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountRepo = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: Account = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

# @router.post("/signin")
# async def signin(user_request: AccountUserRequest, request: Request, response: Response, queries: AccountUserQueries = Depends()) -> AccountUserResponse:
#     user = queries.get_by_username(user_request.username)
#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect username or password",
#         )
#     if not verify_password(user_request.password, user.password):
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect username or password",
#         )
#     token = generate_jwt(user)
#     secure = True if request.headers.get("origin") == "localhost" else False
#     response.set_cookie(
#         key="fast_api_token",
#         value=token,
#         httponly=True,
#         samesite="lax",
#         secure=secure,
#     )
#     return AccountUserResponse(id=user.id, username=user.username, token=token)


# @router.get("/authenticate")
# async def authenticate_user(user: AccountUserResponse = Depends(try_get_jwt_user_data)) -> AccountUserResponse:

#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token or expired")
#     return user


# @router.delete("/signout")
# async def signout(request: Request, response: Response):
#     secure = True if request.headers.get("origin") == "localhost" else False
#     response.delete_cookie(
#         key="fast_api_token", httponly=True, samesite="lax", secure=secure
#     )
#     return
