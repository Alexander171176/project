from sqlalchemy.future import select
from app.model import User, Profile
from app.core.config import db


class ProfileService:

    @staticmethod
    async def get_user_profile(email: str):
        query = select(User.nick_name,
                       User.email,
                       Profile.user_name,
                       Profile.phone_number).join_from(User, Profile).where(User.email == email)
        return (await db.execute(query)).mappings().one()
