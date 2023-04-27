from sqlalchemy import update as sql_update
# импорт функции update из модуля sqlalchemy и переименование ее в sql_update
from sqlalchemy.future import select
# импорт функции select из модуля sqlalchemy.future

from app.core.config import db, commit_rollback  # импорт объектов db и commit_rollback из модуля app.config
from app.model.user import User  # импорт класса Users из модуля app.model.users
from app.repository.base_repository import BaseRepo  # импорт класса BaseRepo из модуля app.repository


class UserRepository(BaseRepo):  # определение класса UsersRepository, наследующегося от класса BaseRepo
    model = User  # установка модели на класс Users

    @staticmethod
    async def find_by_id(user_id: int):
        query = select(User).where(User.id == user_id)
        return (await db.execute(query)).scalar_one_or_none()

    @staticmethod
    async def find_by_nick_name(
            nick_name: str):  # определение статического метода find_by_username, принимающего строку username
        query = select(User).where(
            User.nick_name == nick_name)  # формирование запроса select с фильтром по имени пользователя
        return (await db.execute(query)).scalar_one_or_none()  # выполнение запроса и возврат результата

    @staticmethod
    async def find_by_email(email: str):  # определение статического метода find_by_email, принимающего строку email
        query = select(User).where(
            User.email == email)  # формирование запроса select с фильтром по адресу электронной почты
        return (await db.execute(query)).scalar_one_or_none()  # выполнение запроса и возврат результата

    @staticmethod
    async def update_password(email: str, password: str):
        # определение статического метода update_password, принимающего строки email и password
        query = sql_update(User).where(User.email == email).values(
            # формирование запроса update с фильтром по адресу электронной почты и установкой нового пароля
            password=password).execution_options(synchronize_session="fetch")
        # установка опции синхронизации сессии при выполнении запроса
        await db.execute(query)  # выполнение запроса
        await commit_rollback()  # коммит или откат транзакции в зависимости от результата выполнения запроса
