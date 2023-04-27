/* eslint-disable default-case */ // Отключение проверки для eslint по стандартам

import React, { useState } from "react"; // Импорт React и useState из библиотеки react
import axios from "axios"; // Импорт библиотеки axios для работы с HTTP-запросами
import { toast } from "react-toastify"; // Импорт библиотеки react-toastify для уведомлений

export default function Forgot(props) { // Экспорт компонента Forgot по умолчанию

  // обработчиках нажатий для кнопки войти
  const handleLoginClick = () => {
    props.setPage("login");
  };

  const [forgotForm, setForgotForm] = useState({ // Объявление состояния с начальным значением { email: "", new_password: "" }
    email: "",
    new_password: "",
  });

  const onChangeForm = (label, event) => { // Обработчик изменения значений полей формы
    switch (label) {
      case "email": // Если label равно "email", обновить состояние forgotForm полем email
        setForgotForm({ ...forgotForm, email: event.target.value });
        break;
      case "new_password": // Если label равно "new_password", обновить состояние forgotForm полем new_password
        setForgotForm({ ...forgotForm, new_password: event.target.value });
        break;
    }
  };

  // обработчик отправки
  const onSubmitHandler = async (event) => { // Обработчик отправки формы
    event.preventDefault(); // Отмена стандартного поведения браузера
    console.log(forgotForm); // Вывод значения forgotForm в консоль
    await axios // Отправка POST-запроса на сервер с помощью axios
      .post("http://localhost:8888/auth/forgot", forgotForm) // Запрос на URL "http://localhost:8000/auth/forgot-password" с передачей данных forgotForm
      .then((response) => { // Обработка успешного ответа
        toast.success(response.data.detail); // Вывод уведомления об успешном запросе
        setTimeout(() => { // Задержка в 1 секунду
          window.location.reload(); // Обновление страницы
        }, 1000);
      })
      .catch((error) => { // Обработка ошибки
        toast.success(error.response.data.detail); // Вывод уведомления об ошибке
      });
  };
  //  Возвращаемый элемент
  return (
    <React.Fragment>
      <div>
        <h2 className="text-3xl font-medium text-center mb-3 cursor-pointer">
          Восстановление пароля
        </h2>
        <p className="w-80 text-center text-md mb-6 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          Обновление пароля учетной записи
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            value={forgotForm.email}
            placeholder="Email"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(e) => onChangeForm("email", e)}
            required
          />
          <input
            type="password"
            name="new_password"
            value={forgotForm.new_password}
            placeholder="Новый пароль"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(e) => onChangeForm("new_password", e)}
            minLength={8}
            required
          />
          <input
            type="password"
            value={forgotForm.confirm_password}
            placeholder="Подтвердите новый пароль"
            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(e) => onChangeForm("confirm_password", e)}
            minLength={8}
            required
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-1.5 w-48 text-lg text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
          >
            Обновить пароль
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
