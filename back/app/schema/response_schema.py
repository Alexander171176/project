import logging
from typing import Optional, TypeVar
from pydantic import BaseModel

# T - это параметризованный тип, который будет использоваться позже в коде
T = TypeVar('T')

# получаем корневой логгер
logger = logging.getLogger(__name__)


# Создаем модель данных Pydantic для ответа сервера
class ResponseSchema(BaseModel):
    detail: str
    result: Optional[T] = None


# Создаем модель данных Pydantic для ответа сервера с дополнительными данными
class DetailSchema(BaseModel):
    status: str
    message: str
    result: Optional[T] = None
