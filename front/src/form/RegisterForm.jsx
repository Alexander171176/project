/* eslint-disable default-case */ // игнорировать предупреждение о коммутации в данном файле

import React, { useState } from "react"; // импортирование модуля React и useState hook из React
import "react-datepicker/dist/react-datepicker.css"; // импортирование стилей из react-datepicker
import { useNavigate } from "react-router-dom"; // импортирование компонентов Link и useNavigate из react-router-dom
import axios from "axios"; // импортирование библиотеки axios для выполнения HTTP запросов
import { toast } from "react-toastify"; // импортирование компонента toast из react-toastify для уведомлений пользователей

const Register = (props) => { // экспорт по умолчанию компонента Register вместе с его свойствами

  // обработчиках нажатий для кнопки войти
  const handleLoginClick = () => {
    props.setPage("login");
  };

  const navigate = useNavigate(); // получение функции навигации из react-router-dom

    // Регистрационная форма
    const [formRegister, setFormRegister] = useState({ // хранение состояния регистрационной формы
      nick_name: "", // имя пользователя
      user_name: "", // имя учетной записи
      phone_number: "", // номер телефона
      email: "", // электронная почта
      password: "", // пароль
      password_confirm: "", // подтверждение пароля
  });

    // функция для обновления состояния формы при изменении пользователем ее полей
    const onChangeForm = (label, event) => {
        switch (label) {
            case "nick_name":
                setFormRegister({ ...formRegister, nick_name: event.target.value });
                break;
            case "user_name":
                setFormRegister({ ...formRegister, user_name: event.target.value });
                break;
            case "phone_number":
                setFormRegister({ ...formRegister, phone_number: event.target.value });
                break;
            case "email":
                // проверка электронной почты
                const email_validation = /\S+@\S+\.\S+/;
                if (email_validation.test(event.target.value)) {
                    setFormRegister({ ...formRegister, email: event.target.value });
                }
                break;
            case "password":
                setFormRegister({ ...formRegister, password: event.target.value });
                break;
            case "password_confirm":
                setFormRegister({ ...formRegister, password_confirm: event.target.value });
                break;
        }
    };

  //   Обработчик отправки

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (formRegister.password !== formRegister.password_confirm) {
      toast.error("Пароли не совпадают!");
      return;
    }
    console.log(formRegister);
    // Post API Регистрация
    await axios
      .post("http://localhost:8888/auth/register", formRegister)
      .then((response) => {
        
        // перейти на страницу входа
        navigate("/login");

        // добавить успешно уведомленное
        toast.success(response.data.detail);
        // перезагрузить страницу
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // добавить уведомление об ошибке
        toast.error(error.response.data.detail);
      });
  };

  return (
    <React.Fragment>
      <div>
        <h2 className="text-3xl font-medium text-center mb-3 cursor-pointer">
          Регистрация
        </h2>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="space-y-2">
        <input
            type="text"
            placeholder="Придумайте Логин"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("nick_name", event);
            }}
          />
          <input
            type="text"
            placeholder="Ваша Фамилия и Имя"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("user_name", event);
            }}
          />
          <input
            type="number"
            placeholder="Ваш номер телефона"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("phone_number", event);
            }}
          />
          <input
            type="email"
            placeholder="Ваш Email"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("email", event);
            }}
          />
          <input
            type="password"
            placeholder="Придумайте Пароль"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("password", event);
            }}
          />
          <input
            type="password"
            placeholder="Повторите Пароль"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("password_confirm", event);
            }}
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-1.5 w-48 text-lg text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
          >
            Создать аккаунт
          </button>
          <p className="mt-4 text-md">
            У вас уже есть учетная запись?{" "}
            <button className="underline cursor-pointer" onClick={handleLoginClick}>Войти</button>
          </p>
        </div>
      </form>
    </React.Fragment>
  );
}

export { Register }