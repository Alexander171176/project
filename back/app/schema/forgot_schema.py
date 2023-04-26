from pydantic import BaseModel
import logging

# получаем корневой логгер
logger = logging.getLogger(__name__)


# Создаем модель данных Pydantic для сброса пароля
class ForgotSchema(BaseModel):
    email: str
    new_password: str
