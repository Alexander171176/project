from typing import Optional  # импортируем тип Optional для аннотации необязательных параметров
from sqlmodel import SQLModel, Field, Relationship  # импортируем SQLModel, Field, Relationship из sqlmodel
from app.model.mixins import TimeMixin  # импортируем TimeMixin из нашего приложения


# Определяем модель Person, которая наследуется от SQLModel и TimeMixin
class Profile(SQLModel, TimeMixin, table=True):
    __tablename__ = "profile"  # определяем имя таблицы в базе данных

    id: Optional[str] = Field(None, primary_key=True,
                              nullable=False)  # поле для уникального идентификатора пользователя
    user_name: str  # поле для имени пользователя
    phone_number: str  # поле для номера телефона пользователя

    user: Optional["User"] = Relationship(  # определяем отношение с моделью User
        sa_relationship_kwargs={'uselist': False},
        back_populates="profile")  # указываем аргументы для отношения и свойство обратной ссылки для связи модели
    # Profile и User
