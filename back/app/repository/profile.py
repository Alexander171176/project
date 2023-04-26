from app.model.profile import Profile
from app.repository.base_repo import BaseRepo


class ProfileRepository(BaseRepo):
    model = Profile
