from fastapi import APIRouter, Depends, HTTPException, Security

from app.schema.user_role_request_schema import UserRoleRequestSchema
from app.schema.response_schema import ResponseSchema
from app.service.admin.users_service import UserService

from app.repository.auth_repository import JWTBearer, JWTRepo
from fastapi.security import HTTPAuthorizationCredentials

router = APIRouter(
    prefix="/admin",
    tags=['Администратор'],
    dependencies=[Depends(JWTBearer())]
)


@router.get("/users", response_model=ResponseSchema, response_model_exclude_none=True)
async def get_user_list(credentials: HTTPAuthorizationCredentials = Security(JWTBearer())):
    token = JWTRepo.extract_token(credentials)
    role = await UserService.get_current_user_role(token)
    if role != "admin":
        raise HTTPException(status_code=403, detail="Недостаточно прав для просмотра пользователей")

    users = await UserService.get_user_list()
    return ResponseSchema(detail="Успешное получение данных!", result=users)


@router.get("/users/{email}", response_model=ResponseSchema, response_model_exclude_none=True)
async def get_user_by_email(email: str, credentials: HTTPAuthorizationCredentials = Security(JWTBearer())):
    token = JWTRepo.extract_token(credentials)
    role = await UserService.get_current_user_role(token)
    if role != "admin":
        raise HTTPException(status_code=403, detail="Недостаточно прав для просмотра пользователя")

    user = await UserService.get_user_by_email(email)
    return ResponseSchema(detail="Успешное получение данных!", result=user)


@router.put("/users/{email}/role", response_model=ResponseSchema, response_model_exclude_none=True)
async def update_user_role(email: str,
                           role: UserRoleRequestSchema,
                           credentials: HTTPAuthorizationCredentials = Security(JWTBearer())):
    token = JWTRepo.extract_token(credentials)
    user_role = await UserService.get_current_user_role(token)
    if user_role != "admin":
        raise HTTPException(status_code=403, detail="Недостаточно прав для изменения роли пользователя")

    await UserService.update_user_role(email, role.role_id)

    return ResponseSchema(detail="Роль пользователя успешно изменена!", result=None)
