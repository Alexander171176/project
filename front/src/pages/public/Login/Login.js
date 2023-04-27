import React, { useState, useEffect } from "react"; // импортирование модуля React и useState хук и useEffect из React
import { useNavigate, NavLink } from "react-router-dom"; // импортирование компонентов Link и useNavigate из react-router-dom

import axios from "axios"; // импортирование библиотеки axios для выполнения HTTP запросов
import { toast } from "react-toastify"; // импортирование компонента toast из react-toastify для уведомлений пользователей

import ReCAPTCHA from 'react-google-recaptcha'; // импортирование библиотеки google recaptcha
import { FiRefreshCw } from 'react-icons/fi'; // импортирование иконки reload из библиотеки иконок

import Header from '../../../components/public/Header/Header'; // импортирование блока Header

export default function Login(props) { // компонент страницы Логина со свойствами

  useEffect(() => { // действия для состояния страницы
    document.title = 'Вход в систему'; // установка заголовка страницы
  }, []);

  const navigate = useNavigate(); // изначальное состояние навигации для ссылок внизу

  const [loginForm, setLoginform] = useState({ // изначальное состояние полей в форме
    email: '',
    password: '',
  });

  const handleReload = () => { // обработчик перезагрузки страницы для показа recaptcha
    window.location.reload();
  };

  const [captchaValue, setCaptchaValue] = useState(''); // изначальное состояние recaptcha

  const onChange = (value) => { // обработчик если recaptcha была пройдена
    setCaptchaValue(value);
  };

  const onChangeForm = (label, event) => { // обработчик формы полей
    switch (label) {
      case 'email':
        setLoginform({ ...loginForm, email: event.target.value });
        break;
      case 'password':
        setLoginform({ ...loginForm, password: event.target.value });
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = async (event) => { // обработчик событий

    event.preventDefault(); // подключение по умолчанию слушателя событий

    if (!captchaValue) { // выводим сообщение если recaptcha не пройдена
      toast.error('Пожалуйста, подтвердите, что вы не робот');
      return;
    }

    try { // подключаемся к серверу backend 
      const response = await axios.post('http://localhost:8888/auth/login', loginForm);

      localStorage.setItem('auth_token', response.data.result.access_token);
      localStorage.setItem( // записываем токен в куки
        'auth_token_type',
        response.data.result.token_type
      );

      toast.success(response.data.detail); // добавить успешно уведомленное

      setTimeout(() => { // перезагрузить страницу через 1 секунду
        window.location.reload();
      }, 1000);

      navigate('/profile'); // перейти на страницу профиля после успешной авторизации

      // console.log(response);

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.detail); // в случае добавить уведомление об ошибке
    }
  };

  return (
    <>
      <Header /> {/* блок Header */}

      <h1 className="pt-20 text-2xl tracking-wide font-extrabold text-blue-600 dark:text-white">Страница авторизации</h1>

      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                alt="image"
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={process.env.PUBLIC_URL + '/img/login-office.jpeg'} 
              /> {/* папка public */}
              <img
                alt="image"
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={process.env.PUBLIC_URL + '/img/login-office-dark.jpeg'} 
              /> {/* папка public */}
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">

                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Вход в систему
                </h2>

                <form onSubmit={onSubmitHandler}> {/* обработчик формы */}
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                      onChange={(e) => onChangeForm('email', e)}
                      required 
                    /> {/* обработчик поля email */}
                    <input
                      type="password"
                      placeholder="Пароль"
                      className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                      onChange={(e) => onChangeForm('password', e)} 
                      required
                    /> {/* обработчик поля пароль */}
                  </div>

                  <button className="flex mt-2 mx-auto dark:text-white" onClick={handleReload}> {/* обновить reCAPTCHA */}
                    <FiRefreshCw className="mt-1" /> &nbsp; Перезагрузить reCAPTCHA
                  </button>

                  <ReCAPTCHA
                    className="mt-2 mx-auto"
                    sitekey="6LffPWQlAAAAAJysCpBO6xPpeJHTsgsRXFqft2dS"
                    onChange={onChange}
                  /> {/* обработчик reCAPTCHA */}
                  <div className="text-center mt-6">
                    <button type="submit"
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    >
                      Войти
                    </button>
                  </div>
                </form>

                <hr className="my-8" />

                <p className="mt-4">

                  {/* ссылка на страницу восстановления пароля */}
                  <NavLink to="/forgot"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Забыли свой пароль?
                  </NavLink>

                </p>
                <p className="mt-1">

                  {/* ссылка на страницу регистрации */}
                  <NavLink to="/register"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Регистрация
                  </NavLink>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );

};
