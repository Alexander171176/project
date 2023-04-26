from pydantic import BaseModel
import logging

# получаем корневой логгер
logger = logging.getLogger(__name__)


class LoginSchema(BaseModel):
    email: str
    password: str
