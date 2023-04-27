import uvicorn  # импортируем модуль для запуска приложения
from fastapi import FastAPI  # импортируем FastAPI
from fastapi.middleware.cors import CORSMiddleware  # импортируем Middleware для CORS
from app.core.config import db  # импортируем экземпляр базы данных
from app.service.public.auth_service import generate_role  # импортируем функцию для генерации ролей


# origins - список источников, с которых можно получать запросы
origins = [
    "http://localhost:3000"
]

# функция инициализации приложения
def init_app():
    db.init()  # инициализируем базу данных

    # создаем приложение
    app = FastAPI(
        title="IPTV",
        description="MicroService",
        version="1",
    )
    
    # добавляем Middleware для CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )

    # функция-обработчик, вызываемая при запуске приложения
    @app.on_event("startup")
    async def startup():
        await db.create_all()  # создаем все таблицы в базе данных
        await generate_role()  # создаем роли пользователей

    @app.on_event("shutdown")
    async def shutdown():
        await db.close()

    from app.controller.public import authentication, profile  # импортируем контроллеры

    app.include_router(authentication.router)  # регистрируем контроллер аутентификации
    app.include_router(profile.router)  # регистрируем контроллер пользователей

    return app


app = init_app()


# функция запуска приложения
def start():
    """Запускается с помощью "poetry run start" на корневом уровне """
    uvicorn.run("app.main:app", host="localhost", port=8888,
                reload=True)  # запускаем приложение с помощью uvicorn. Настройки указаны в параметрах.
