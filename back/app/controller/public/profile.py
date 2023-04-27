# Импортируем классы APIRouter, Depends, Security из модуля fastapi
from fastapi import APIRouter, Depends, Security

# Импортируем схемы ответов, используемые в маршрутах
from app.schema.response_schema import ResponseSchema

# Импортируем классы JWTBearer и JWTRepo из модуля app.repository.auth_repo
from app.repository.auth_repository import JWTBearer, JWTRepo

# Импортируем класс HTTPAuthorizationCredentials из модуля fastapi.security
from fastapi.security import HTTPAuthorizationCredentials

# Импортируем класс UserService из модуля app.service.users
from app.service.public.profile import ProfileService

# Создаем объект router класса APIRouter с префиксом "/account", тегом "Профиль"
# и зависимостью от класса JWTBearer для аутентификации пользователя
router = APIRouter(
    prefix="/account",
    tags=['Профиль'],
    dependencies=[Depends(JWTBearer())]
)


# Определяем маршрут "/"
# Функция get_user_profile использует класс Security для аутентификации пользователя и получения токена доступа
# Затем используется метод extract_token класса JWTRepo для извлечения информации из токена
# Используется метод get_user_profile класса UserService для получения профиля пользователя
# Затем возвращается объект ResponseSchema с сообщением "Успешное получение данных!"
# и информацией о профиле пользователя
@router.get("/", response_model=ResponseSchema, response_model_exclude_none=True)
async def get_user_profile(credentials: HTTPAuthorizationCredentials = Security(JWTBearer())):
    token = JWTRepo.extract_token(credentials)
    result = await ProfileService.get_user_profile(token['email'])
    return ResponseSchema(detail="Успешное получение данных!", result=result)
