from datetime import datetime, timedelta  # Импорт класса datetime и класса timedelta из модуля datetime
from typing import Optional  # Импорт типа Optional из модуля typing
from jose import jwt  # Импорт функции jwt из модуля jose

from fastapi import Request, HTTPException  # Импорт классов Request и HTTPException из модуля fastapi
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# Импорт классов HTTPBearer и HTTPAuthorizationCredentials из модуля fastapi.security

from app.core.config import SECRET_KEY, ALGORITHM  # Импорт переменных SECRET_KEY и ALGORITHM из модуля app.config


class JWTRepo:  # Объявление класса JWTRepo

    def __init__(self, data: dict = {}, token: str = None):  # Определение конструктора класса
        self.data = data  # Создание атрибута data и его инициализация значением аргумента data
        self.token = token  # Создание атрибута token и его инициализация значением аргумента token

    def generate_token(self, expires_delta: Optional[timedelta] = None):  # Определение метода generate_token
        to_encode = self.data.copy()  # Создание копии атрибута data и присваивание значения переменной to_encode
        if expires_delta:  # Если expires_delta не равно None
            expire = datetime.utcnow() + expires_delta
            # Создание объекта datetime, представляющего текущее время UTC
            # с добавлением значения expires_delta, и присваивание его переменной expire
        else:  # Иначе
            expire = datetime.utcnow() + timedelta(minutes=15)
            # Создание объекта datetime, представляющего текущее время UTC с добавлением 15 минут,
            # и присваивание его переменной expire
        to_encode.update({"exp": expire})  # Добавление в словарь to_encode ключа "exp" со значением переменной expire
        encode_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        # Создание JWT-токена на основе словаря to_encode, SECRET_KEY и ALGORITHM
        # и присваивание его переменной encode_jwt

        return encode_jwt  # Возврат JWT-токена

    def decode_token(self):  # Определение метода decode_token
        try:  # Попытаться выполнить следующий блок кода
            decode_token = jwt.decode(
                self.token, SECRET_KEY, algorithms=[ALGORITHM])
            # Декодирование JWT-токена и присваивание результата переменной decode_token
            return decode_token if decode_token["expires"] >= datetime.time() else None
            # Если значение ключа "expires" словаря decode_token больше или равно текущему времени,
            # то вернуть decode_token, иначе вернуть None
        except:  # Если в блоке try произошла ошибка
            return {}  # Вернуть пустой словарь

    @staticmethod
    def extract_token(token: str):  # Определение статического метода extract_token
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])


# Класс JWTBearer наследуется от HTTPBearer, который в свою очередь является Middleware
class JWTBearer(HTTPBearer):

    # Конструктор класса
    def __init__(self, auto_error: bool = True):
        # Вызываем конструктор родительского класса и передаем ему параметр auto_error
        super(JWTBearer, self).__init__(auto_error=auto_error)

    # Асинхронный метод вызывается при получении запроса
    async def __call__(self, request: Request):
        # Получаем заголовок авторизации из запроса
        credentials: HTTPAuthorizationCredentials = await super(JWTBearer, self).__call__(request)

        # Если заголовок получен
        if credentials:
            # Если схема авторизации не является Bearer
            if not credentials.scheme == "Bearer":
                # Выбрасываем исключение HTTPException с кодом 403 и сообщением о том, что схема авторизации неверна
                raise HTTPException(
                    status_code=403,
                    detail={"status": "Forbidden", "message": "Неверная схема аутентификации."})

            # Проверяем токен на валидность
            if not self.verify_jwt(credentials.credentials):
                # Выбрасываем исключение HTTPException с кодом 403 и сообщением о том,
                # что токен недействительный или срок его действия истек
                raise HTTPException(
                    status_code=403,
                    detail={"status": "Forbidden",
                            "message": "Недействительный токен или токен с истекшим сроком действия."})

            # Возвращаем токен
            return credentials.credentials
        else:
            # Если заголовок не получен, выбрасываем исключение HTTPException с кодом 403
            # и сообщением о неверном коде авторизации
            raise HTTPException(
                status_code=403,
                detail={"status": "Forbidden", "message": "Неверный код авторизации."})

    # Метод для проверки валидности токена
    @staticmethod
    def verify_jwt(jwt_token: str):
        # Если токен не является недействительным, возвращаем True, иначе False
        return True if jwt.decode(jwt_token, SECRET_KEY, algorithms=[ALGORITHM]) is not None else False
