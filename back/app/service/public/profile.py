from sqlalchemy.future import select
from app.model import Users, Profile
from app.core.config import db


class ProfileService:

    @staticmethod
    async def get_user_profile(email: str):
        query = select(Users.nick_name,
                       Users.email,
                       Profile.user_name,
                       Profile.phone_number).join_from(Users, Profile).where(Users.email == email)
        return (await db.execute(query)).mappings().one()
