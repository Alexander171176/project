from fastapi import HTTPException
from sqlalchemy.future import select
from app.model import User, UserRole, Role, Profile
from app.core.config import db
from app.repository.role_repository import RoleRepository
from app.repository.user_repository import UserRepository
from app.repository.user_role_repository import UserRoleRepository


class UserService:

    @staticmethod
    async def get_user_list():
        user_query = select(
            User.id,
            User.nick_name,
            User.email,
            UserRole.role_id.label("id_role"),
            Profile.user_name,
            Profile.phone_number
        ).select_from(User).join(UserRole).join(Profile).order_by(User.id)

        users = await db.execute(user_query)
        users = users.mappings().all()

        user_list = []
        for user in users:
            role_query = select(Role.role_name).where(Role.id == user['id_role'])
            role = (await db.execute(role_query)).mappings().one()

            user_list.append({
                **user,
                **{'role_name': role['role_name']},
            })

        return user_list

    @staticmethod
    async def get_user_by_email(email: str):
        user_query = select(
            User.id,
            User.nick_name,
            User.email,
            User.profile_id,
            UserRole.role_id.label("id_role")
        ).select_from(User).join(UserRole).where(User.email == email)

        user = (await db.execute(user_query)).mappings().one()

        role_query = select(Role.role_name).where(Role.id == user['id_role'])
        role = (await db.execute(role_query)).mappings().one()

        profile_query = select(
            Profile.user_name,
            Profile.phone_number
        ).where(Profile.id == user['profile_id'])

        profile = (await db.execute(profile_query)).mappings().one()

        return {**user, **profile, 'id_role': user['id_role'], 'role_name': role['role_name']}

    @staticmethod
    async def update_user_role(email: str, role_id: int):
        user = await UserRepository.find_by_email(email)
        if user is None:
            raise HTTPException(status_code=404, detail=f"User with email {email} not found")

        role = await RoleRepository.get_role_by_id(role_id)
        if role is None:
            raise HTTPException(status_code=404, detail=f"Role with id {role_id} not found")

        user_role = await UserRoleRepository.get_user_role_by_user(user.id)
        if user_role is None:
            raise HTTPException(status_code=404, detail=f"UserRole for user with email {email} not found")

        user_role.role_id = role.id
        await db.commit()

        return {"message": f"Role for user with email {email} updated to {role.role_name}"}

    @staticmethod
    async def get_current_user_role(token: dict):
        email = token["email"]

        role_query = select(
            Role.id,
            Role.role_name
        ).select_from(
            User
        ).join(
            UserRole, User.id == UserRole.user_id
        ).join(
            Role, UserRole.role_id == Role.id
        ).where(
            User.email == email
        )

        role = (await db.execute(role_query)).mappings().one()

        return role['role_name']

