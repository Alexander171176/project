from app.model.user_role import UsersRole
from app.repository.base_repository import BaseRepo


class UsersRoleRepository(BaseRepo):
    model = UsersRole
