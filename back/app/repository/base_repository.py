from typing import Generic, TypeVar  # импортируем Generic и TypeVar из модуля typing
from sqlalchemy import update as sql_update, delete as sql_delete
# импортируем функции update и delete из модуля sqlalchemy
from sqlalchemy.future import select  # импортируем функцию select из модуля sqlalchemy.future
from app.core.config import db, commit_rollback  # импортируем объекты db и commit_rollback из модуля app.config

T = TypeVar('T')  # создаем параметризованный тип T с помощью функции TypeVar из модуля typing


class BaseRepo:  # создаем класс BaseRepo
    model = Generic[T]  # создаем классовую переменную model, которая инициализируется параметризованным типом T

    @classmethod  # декоратор для метода класса
    async def create(cls, **kwargs):  # метод класса для создания записи в БД
        model = cls.model(**kwargs)  # создаем экземпляр модели и передаем ему аргументы
        db.add(model)  # добавляем модель в объект сессии
        await commit_rollback()  # коммитим транзакцию
        return model  # возвращаем созданный экземпляр модели

    @classmethod  # декоратор для метода класса
    async def get_all(cls):  # метод класса для получения всех записей из БД
        query = select(cls.model)  # формируем запрос на получение всех записей
        return (await db.execute(query)).scalars().all()  # выполняем запрос и возвращаем все записи

    @classmethod  # декоратор для метода класса
    async def get_by_id(cls, model_id: str):  # метод класса для получения записи по ее id из БД
        query = select(cls.model).where(cls.model.id == model_id)  # формируем запрос на получение записи по id
        return (await db.execute(query)).scalars()  # выполняем запрос и возвращаем запись

    @classmethod  # декоратор для метода класса
    async def update(cls, model_id: str, **kwargs):  # метод класса для обновления записи в БД
        query = sql_update(cls.model).where(cls.model.id == model_id).values(
            **kwargs).execution_options(synchronize_session="fetch")  # формируем запрос на обновление записи
        await db.execute(query)  # выполняем запрос
        await commit_rollback()  # коммитим транзакцию

    @classmethod  # декоратор для метода класса
    async def delete(cls, model_id: str):  # метод класса для удаления записи из БД
        query = sql_delete(cls.model).where(cls.model.id == model_id)  # формируем запрос на удаление записи по id
        await db.execute(query)  # выполняем запрос
        await commit_rollback()  # коммитим транзакцию
