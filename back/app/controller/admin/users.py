from fastapi import Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer

from app.main import app
from app.model.role import Role
from app.model.user import User
from app.model.user_role import UserRole
from app.repository.role_repository import RoleRepository
from app.repository.user_role_repository import UserRoleRepository
from app.repository.user_repository import UserRepository
from app.repository.auth_repository import JWTRepo

# Создаем объект router класса APIRouter с префиксом и тегом
router = APIRouter(prefix="/admin", tags=['Dashboard'])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


async def get_user(current_user: User = Depends(JWTRepo().decode)):
    return current_user


async def get_role_by_user(user_id: str):
    role = await RoleRepository.find_by_user_id(user_id)
    if not role:
        raise HTTPException(status_code=400, detail="User has no role")
    return role


async def requires(role: str):
    async def _requires(current_user: User = Depends(JWTRepo().decode), role: Role = Depends(get_role_by_user)):
        if role.role_name != "admin" and role.role_name != "user":
            raise HTTPException(status_code=403, detail="Forbidden")
        return current_user

    return _requires


@app.get("/users")
async def get_users(current_user: User = Depends(get_user), role: Role = Depends(get_role_by_user)):
    if role.role_name != "admin":
        raise HTTPException(status_code=403, detail="Forbidden")
    return {"users": "All users"}


@app.get("/user/{user_id}")
async def get_user_by_id(user_id: str, current_user: User = Depends(get_user), role: Role = Depends(get_role_by_user)):
    if role.role_name != "admin" and current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Forbidden")
    user = await UserRepository.find_by_id(user_id)
    return {"user": user}
