from typing import List
from sqlalchemy.future import select

from app.core.config import db, commit_rollback
from app.model.role import Role
from app.repository.base_repository import BaseRepo


class RoleRepository(BaseRepo):
    model = Role

    @staticmethod
    async def find_by_role_name(role_name: str):
        query = select(Role).where(Role.role_name == role_name)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def find_by_list_role_name(role_name: List[str]):
        query = select(Role).where(Role.role_name.in_(role_name))
        return (await db.execute(query)).scalars().all()

    @staticmethod
    async def create_list(role_name: List[Role]):
        db.add_all(role_name)
        await commit_rollback()

    @staticmethod
    async def create_role(role: Role) -> Role:
        db.add(role)
        await commit_rollback()
        return role

    @staticmethod
    async def get_role_by_id(role_id: int):
        query = select(Role).where(Role.id == role_id)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def get_all_roles():
        query = select(Role)
        return (await db.execute(query)).fetchall()

    @staticmethod
    async def update_role(role_id: int, role: Role) -> Role:
        role_db = await RoleRepository.get_role_by_id(role_id)
        if role_db:
            role_dict = role.dict(exclude_unset=True)
            for key, value in role_dict.items():
                setattr(role_db, key, value)
            await commit_rollback()
            return role_db

    @staticmethod
    async def delete_role(role_id: int) -> None:
        role = await RoleRepository.get_role_by_id(role_id)
        if role:
            async with db.session.begin():
                db.session.delete(role)
            await commit_rollback()
