from app.model.user_role import UserRole
from app.repository.base_repository import BaseRepo


class UserRoleRepository(BaseRepo):
    model = UserRole
