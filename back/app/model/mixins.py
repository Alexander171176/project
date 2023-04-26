# Импортируем класс datetime из модуля datetime
from datetime import datetime

# Импортируем класс BaseModel, Field из модуля pydantic
from pydantic import BaseModel

# Импортируем класс Column из модуля sqlalchemy
from sqlalchemy import Column, DateTime

# Импортируем класс Field из модуля sqlmodel
from sqlmodel import Field


# Создаем класс TimeMixin, наследующийся от класса BaseModel
class TimeMixin(BaseModel):
    """Mixin со значением даты и времени, когда объект был создан и когда он был изменен в последний раз. """

    # Определяем два поля класса, created_at и modified_at, тип которых - datetime Поле created_at имеет значение по
    # умолчанию, задаваемое функцией datetime.now, которая возвращает текущее время Поле modified_at определяется
    # через аргумент sa_column класса Field модуля sqlmodel Это поле также имеет значение по умолчанию, задаваемое
    # функцией datetime.now, и также является обязательным Для поля modified_at также задается аргумент
    # onupdate=datetime.now, что означает, что при изменении объекта значение этого поля будет обновлено на текущее
    # время
    created_at: datetime = Field(default_factory=datetime.now)
    modified_at: datetime = Field(
        sa_column=Column(DateTime, default=datetime.now,
                         onupdate=datetime.now, nullable=False)
    )
