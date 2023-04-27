from typing import List, Optional  # импортируем типы данных List и Optional из модуля typing
from sqlmodel import Relationship, SQLModel, Field
# импортируем класс Relationship, SQLModel и Field из модуля sqlmodel
from app.model.mixins import TimeMixin  # импортируем класс TimeMixin из модуля app.model.mixins
from app.model.user_role import UserRole  # импортируем класс UsersRole из модуля app.model.user_role


class Role(SQLModel, TimeMixin, table=True):
    # создаем класс Role, наследующий классы SQLModel и TimeMixin, а также устанавливаем
    # table=True, чтобы класс Role был сопоставлен с таблицей "role" в базе данных.
    __tablename__ = "role"  # задаем имя таблицы, с которой ассоциируется класс Role

    id: Optional[str] = Field(None, primary_key=True, nullable=True)
    # определяем поле id типа str, которое может принимать значение None,
    # устанавливаем его как первичный ключ и допускаем возможность его отсутствия
    role_name: str  # определяем поле role_name типа str

    user: List["User"] = Relationship(back_populates="roles", link_model=UserRole)
    # определяем поле users типа List, которое содержит
    # экземпляры класса Users, устанавливаем аргумент back_populates для указания отношения многие-ко-многим
    # с классом Users и link_model для указания промежуточной таблицы UserRole,
    # которая связывает таблицы "user" и "role".
