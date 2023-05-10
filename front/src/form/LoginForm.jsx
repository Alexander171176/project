/* eslint-disable default-case */  // отключение предупреждения eslint для блока switch-case

import React, { useState } from "react";  // импорт необходимых модулей и библиотек
import axios from "axios";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { FiRefreshCw } from 'react-icons/fi';

const Login = (props) => {  // экспорт компонента функции Login

  const handleReload = () => {
    window.location.reload();
  };

  // обработчиках нажатий для кнопки восстановление пароля
  const handleForgotPasswordClick = () => {
    props.setPage("forgot");
  };

  // обработчиках нажатий для кнопки регистрация
  const handleSignUpClick = () => {
    props.setPage("register");
  };

  const [loginForm, setLoginform] = useState({  // инициализация состояния формы входа
    email: "",
    password: "",
  });

  // Проверка наличия значения reCAPTCHA
  const [captchaValue, setCaptchaValue] = useState(null);  // инициализация состояния для значения reCAPTCHA

  const onChange = (value) => {  // функция для обработки изменения значения reCAPTCHA
    setCaptchaValue(value);
  };

  const onChangeForm = (label, event) => {  // функция для обработки изменений в полях формы
    switch (label) {  // обработка поля в зависимости от метки
      case "email":  // для поля "Логин"
        setLoginform({ ...loginForm, email: event.target.value });  // изменить значение "Логин" в состоянии формы
        break;
      case "password":  // для поля "Пароль"
        setLoginform({ ...loginForm, password: event.target.value });  // изменить значение "Пароль" в состоянии формы
        break;
    }
  };

  const onSubmitHandler = async (event) => {  // функция для обработки отправки формы
    event.preventDefault();  // отменить действие по умолчанию для события отправки формы
    console.log(loginForm);

    // Проверка наличия значения reCAPTCHA
    if (!captchaValue) {  // если значение reCAPTCHA не существует
      toast.error("Пожалуйста, подтвердите, что вы не робот");  // показать сообщение об ошибке с помощью библиотеки toast
      return;
    }

    // вызов api для входа в систему
    await axios  // выполнить POST-запрос
      .post("http://localhost:8888/auth/login", loginForm)
      .then((response) => {  // в случае успеха
        console.log(response);

        // Сохранить токен в локальном хранилище
        localStorage.setItem("auth_token", response.data.result.access_token);  // сохранить токен доступа в локальном хранилище
        localStorage.setItem(
          "auth_token_type",
          response.data.result.token_type
        );  // сохранить тип токена в локальном хранилище

        // добавить успешно уведомленное
        toast.success(response.data.detail);  // показать сообщение об успешном входе с помощью библиотеки toast

        // перезагрузите страницу после успешного входа в систему
        setTimeout(() => {

          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        // добавить уведомление об ошибке

        console.log(error);
        toast.error(error.response.data.detail);
      });
  };

  return (
    <React.Fragment>
      <div>
        <h2 className="text-3xl font-medium text-center mb-3 cursor-pointer">
          Авторизация
        </h2>
        <p className="w-80 text-center text-md mb-6 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          Для входа в систему, пожалуйста введите логин и пароль
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(e) => onChangeForm('email', e)}
          />
          <input
            type="password"
            placeholder="Пароль"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("password", event);
            }}
          />
        </div>

        <button className="flex mt-2 mx-auto" onClick={handleReload}>
          <FiRefreshCw className="mt-1" /> &nbsp; Перезагрузить reCAPTCHA
        </button>

        <ReCAPTCHA
          className="mt-4"
          sitekey="6LffPWQlAAAAAJysCpBO6xPpeJHTsgsRXFqft2dS"
          onChange={onChange}
        />
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-1.5 w-48 text-lg text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
          >
            Войти
          </button>
          <p className="mt-4 text-md">
            Нет учетной записи?{" "}
            <button className="underline cursor-pointer" onClick={handleSignUpClick}>Регистрация</button>
            <br></br>
            {" "}или{" "}
            <button className="underline cursor-pointer" onClick={handleForgotPasswordClick}>Забыли пароль?</button>
          </p>
        </div>
      </form>
    </React.Fragment>
  );
}

export { Login }
