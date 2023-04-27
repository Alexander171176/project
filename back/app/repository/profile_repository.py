from app.model.profile import Profile
from app.repository.base_repository import BaseRepo


class ProfileRepository(BaseRepo):
    model = Profile
