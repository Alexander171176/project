from typing import List, Optional
from sqlalchemy import Column, String
from sqlmodel import SQLModel, Field, Relationship

from app.model.mixins import TimeMixin
from app.model.user_role import UserRole


class User(SQLModel, TimeMixin, table=True):
    # Определяем имя таблицы в базе данных, которую представляет модель Users
    __tablename__ = "user"

    # Определяем поля модели и их типы данных, а также параметры, такие как primary_key и nullable
    id: Optional[str] = Field(None, primary_key=True, nullable=False)
    nick_name: str = Field(sa_column=Column("nick_name", String, unique=True))
    email: str = Field(sa_column=Column("email", String, unique=True))
    password: str

    # Определяем отношение "один-к-одному" с моделью Person и используем свойство back_populates
    # для указания на обратную связь
    profile_id: Optional[str] = Field(default=None, foreign_key="profile.id")
    profile: Optional["Profile"] = Relationship(back_populates="user")

    # Определяем отношение "многие-ко-многим" с моделью Role, используя свойство Relationship
    # Также используем свойство link_model, чтобы указать модель, которая представляет связующую таблицу
    roles: List["Role"] = Relationship(back_populates="user", link_model=UserRole)
