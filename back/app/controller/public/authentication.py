# Импортируем класс APIRouter из модуля fastapi
from fastapi import APIRouter

# Импортируем схемы ответов, используемые в маршрутах
from app.schema.response_schema import ResponseSchema
from app.schema.register_schema import RegisterSchema
from app.schema.login_schema import LoginSchema
from app.schema.forgot_schema import ForgotSchema


# Импортируем класс AuthService из модуля app.service.auth_service
from app.service.public.auth_service import AuthService

# Создаем объект router класса APIRouter с префиксом "/auth" и тегом "Аутентификация"
router = APIRouter(prefix="/auth", tags=['Аутентификация'])


# Определяем маршрут "/register"
# Функция register принимает объект request_body класса RegisterSchema
# и использует метод register_service класса AuthService для регистрации пользователя
# Затем возвращается объект ResponseSchema с сообщением "Успешное сохранение данных!"
@router.post("/register", response_model=ResponseSchema, response_model_exclude_none=True)
async def register(request_body: RegisterSchema):
    await AuthService.register_service(request_body)
    return ResponseSchema(detail="Успешное сохранение данных!")


# Определяем маршрут "/login"
# Функция login принимает объект requset_body класса LoginSchema
# и использует метод logins_service класса AuthService для аутентификации пользователя и генерации токена доступа
# Затем возвращается объект ResponseSchema с сообщением "Успешный вход в систему"
# и информацией о типе токена и самом токене
@router.post("/login", response_model=ResponseSchema)
async def login(requset_body: LoginSchema):
    token = await AuthService.logins_service(requset_body)
    return ResponseSchema(detail="Успешный вход в систему", result={"token_type": "Bearer", "access_token": token})


# Определяем маршрут "/forgot-password"
# Функция forgot_password принимает объект request_body класса ForgotPasswordSchema
# и использует метод forgot_password_service класса AuthService для сброса пароля пользователя
# Затем возвращается объект ResponseSchema с сообщением "Успешное сохранение данных!"
@router.post("/forgot", response_model=ResponseSchema, response_model_exclude_none=True)
async def forgot_password(request_body: ForgotSchema):
    await AuthService.forgot_service(request_body)
    return ResponseSchema(detail="Успешное сохранение данных!")
