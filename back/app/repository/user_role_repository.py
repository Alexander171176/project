from app.core.config import db
from app.model.user_role import UserRole
from sqlalchemy.future import select
from typing import List

from app.repository.base_repository import BaseRepo


class UserRoleRepository(BaseRepo):
    model = UserRole

    @staticmethod
    async def get_user_role_by_user(user_id: str) -> UserRole:
        query = select(UserRole).where(UserRole.user_id == user_id)
        result = await db.execute(query)
        user_role = result.scalars().one_or_none()
        return user_role
