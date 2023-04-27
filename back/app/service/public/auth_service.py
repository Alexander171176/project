from fastapi import HTTPException
from app.repository.auth_repository import JWTRepo
from app.repository.profile_repository import ProfileRepository
from app.repository.role_repository import RoleRepository
from app.repository.user_role_repository import UsersRoleRepository
from app.repository.users_repository import UsersRepository
from app.schema.register_schema import RegisterSchema
from app.schema.login_schema import LoginSchema
from app.schema.forgot_schema import ForgotSchema
from app.model import Profile, Users, UsersRole, Role
from passlib.context import CryptContext
from uuid import uuid4

# Создание объекта, используемого для хэширования паролей
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Класс AuthService с методами для регистрации, входа в систему и сброса пароля
class AuthService:
    # Метод регистрации пользователя
    @staticmethod
    async def register_service(register: RegisterSchema):
        # Генерация идентификаторов для зарегистрированного пользователя
        _profile_id = str(uuid4())
        _user_id = str(uuid4())

        # Создание объектов Person и Users для добавления в БД
        _profile = Profile(id=_profile_id, user_name=register.user_name, phone_number=register.phone_number)

        _users = Users(id=_user_id, nick_name=register.nick_name, email=register.email,
                       password=pwd_context.hash(register.password),
                       profile_id=_profile_id)

        # Установка роли "user" для нового пользователя
        _role = await RoleRepository.find_by_role_name("user")
        _users_role = UsersRole(users_id=_user_id, role_id=_role.id)

        # Проверка, не используется ли уже имя пользователя или электронный адрес
        _nick_name = await UsersRepository.find_by_nick_name(register.nick_name)
        if _nick_name:
            raise HTTPException(
                status_code=400, detail="Такой ник уже существует!")

        _email = await UsersRepository.find_by_email(register.email)
        if _email:
            raise HTTPException(
                status_code=400, detail="Электронная почта уже существует!")

        # Добавление нового пользователя в БД
        else:
            await ProfileRepository.create(**_profile.dict())
            await UsersRepository.create(**_users.dict())
            await UsersRoleRepository.create(**_users_role.dict())

    # Метод входа в систему
    @staticmethod
    async def logins_service(login: LoginSchema):
        # Поиск пользователя по электронному адресу
        _user_name = await UsersRepository.find_by_email(login.email)

        # Если пользователь найден, проверка введенного пароля
        if _user_name is not None:
            if not pwd_context.verify(login.password, _user_name.password):
                raise HTTPException(
                    status_code=400, detail="Неверный пароль!")
            # генерируем токен JWT и возвращаем его
            return JWTRepo(data={"email": _user_name.email}).generate_token()
        raise HTTPException(
            status_code=404, detail="Электронная почта не найдена!")

    @staticmethod
    async def forgot_service(forgot_password: ForgotSchema):
        _email = await UsersRepository.find_by_email(forgot_password.email)
        if _email is None:
            raise HTTPException(
                status_code=404, detail="Электронная почта не найдена !")
        await UsersRepository.update_password(forgot_password.email, pwd_context.hash(forgot_password.new_password))


# Generate roles manually
async def generate_role():
    _role = await RoleRepository.find_by_list_role_name(["admin", "user"])
    if not _role:
        await RoleRepository.create_list(
            [Role(id=str(uuid4()), role_name="admin"), Role(id=str(uuid4()), role_name="user")])
