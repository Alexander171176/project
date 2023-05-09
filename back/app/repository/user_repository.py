from typing import List, Optional
from sqlalchemy import update as sql_update
from sqlalchemy.future import select

from app.core.config import db, commit_rollback
from app.model.user import User
from app.repository.base_repository import BaseRepo


class UserRepository(BaseRepo):
    model = User

    @staticmethod
    async def create_user(user: User) -> User:
        """
        Создает нового пользователя.

        :param user: Данные нового пользователя.
        :type user: User
        :return: Новый пользователь.
        """
        db.add(user)
        await commit_rollback()
        return user

    @staticmethod
    async def get_user_by_id(user_id: str) -> Optional[User]:
        """
        Находит пользователя по ID.

        :param user_id: ID пользователя.
        :type user_id: str
        :return: Найденный пользователь или None, если пользователь не найден.
        """
        query = select(User).where(User.id == user_id)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def get_all_users() -> List[User]:
        """
        Возвращает список всех пользователей.

        :return: Список всех пользователей.
        """
        query = select(User)
        return (await db.execute(query)).scalars().all()

    @staticmethod
    async def update_user(user: User) -> User:
        """
        Обновляет данные пользователя.

        :param user: Обновленные данные пользователя.
        :type user: User
        :return: Обновленный пользователь.
        """
        db.add(user)
        await commit_rollback()
        return user

    @staticmethod
    async def delete_user(user: User):
        """
        Удаляет пользователя.

        :param user: Удаляемый пользователь.
        :type user: User
        """
        db.delete(user)
        await commit_rollback()

    @staticmethod
    async def find_by_nick_name(nick_name: str):
        """
        Находит пользователя по никнейму.

        :param nick_name: Никнейм пользователя.
        :type nick_name: str
        :return: Найденный пользователь или None, если пользователь не найден.
        """
        query = select(User).where(User.nick_name == nick_name)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def find_by_email(email: str):
        """
        Находит пользователя по адресу электронной почты.

        :param email: Адрес электронной почты пользователя.
        :type email: str
        :return: Найденный пользователь или None, если пользователь не найден.
        """
        query = select(User).where(User.email == email)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def update_password(email: str, password: str):
        """
        Обновляет пароль пользователя по адресу электронной почты.

        :param email: Адрес электронной почты пользователя.
        :type email: str
        :param password: Новый пароль пользователя.
        :type password: str
        """
        query = sql_update(User).where(User.email == email).values(password=password).execution_options(
            synchronize_session="fetch")
        # установка опции синхронизации сессии при выполнении запроса
        await db.execute(query)  # выполнение запроса
        await commit_rollback()  # коммит или откат транзакции в зависимости от результата выполнения запроса
