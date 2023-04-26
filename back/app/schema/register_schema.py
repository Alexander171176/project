from fastapi import HTTPException
import logging
import re
from typing import TypeVar
from pydantic import BaseModel, validator

T = TypeVar('T')

# получаем корневой логгер
logger = logging.getLogger(__name__)


class RegisterSchema(BaseModel):
    nick_name: str
    user_name: str
    phone_number: str
    email: str
    password: str

    @validator("phone_number")
    def phone_validation(cls, v):
        regex = r"^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
        if v and not re.search(regex, v, re.I):
            raise HTTPException(status_code=400, detail="Неверно введенный номер телефона!")
        return v
