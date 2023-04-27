from typing import List  # импорт List из модуля typing для указания типа данных в функциях
from sqlalchemy.future import select  # импорт функции select из модуля sqlalchemy.future для создания запросов

from app.core.config import db, commit_rollback  # импорт переменных db и commit_rollback из модуля app.config
from app.model.role import Role  # импорт класса Role из модуля app.model.role
from app.repository.base_repository import BaseRepo  # импорт класса BaseRepo из модуля app.repository.base_repo


class RoleRepository(BaseRepo):  # объявление класса RoleRepository, унаследованного от класса BaseRepo
    model = Role  # установка значения атрибута model класса RoleRepository в класс Role

    @staticmethod  # декоратор для объявления статического метода
    async def find_by_role_name(
            role_name: str):  # объявление статического асинхронного метода find_by_role_name с параметром role_name
        query = select(Role).where(
            Role.role_name == role_name)
        # создание запроса для выбора записей из таблицы Role, где поле role_name равно значению параметра role_name
        return (await db.execute(query)).scalar_one_or_none()
        # выполнение запроса к БД и возвращение результата, может вернуть одну запись или None, если записи не найдены

    @staticmethod  # декоратор для объявления статического метода
    async def find_by_list_role_name(role_name: List[str]):
        # объявление статического асинхронного метода find_by_list_role_name с параметром role_name
        query = select(Role).where(Role.role_name.in_(role_name))
        # создание запроса для выбора записей из таблицы Role,
        # где поле role_name входит в список значений параметра role_name
        return (await db.execute(query)).scalars().all()
        # выполнение запроса к БД и возвращение результата в виде списка, может вернуть пустой список,
        # если записи не найдены

    @staticmethod  # декоратор для объявления статического метода
    async def create_list(
            role_name: List[Role]):  # объявление статического асинхронного метода create_list с параметром role_name
        db.add_all(role_name)  # добавление списка объектов Role в сессию БД
        await commit_rollback()  # сохранение изменений в БД или откат транзакции при возникновении исключения
