import React, { useState, useEffect } from "react"; // импортирование модуля React и useState хук и useEffect из React
import { useNavigate, NavLink } from "react-router-dom"; // импортирование компонентов Link и useNavigate из react-router-dom

import axios from "axios"; // импортирование библиотеки axios для выполнения HTTP запросов
import { toast } from "react-toastify"; // импортирование компонента toast из react-toastify для уведомлений пользователей

import Header from '../../../components/public/Header/Header'; // импортирование блока Header
import AgreementModal from '../../../components/public/Modal/AgreementModal'; // импортирование модалки Пользовательского соглашения
import ContractOfferModal from '../../../components/public/Modal/ContractOfferModal'; // импортирование модалки Договора оферты

export default function Register(props) { // компонент страницы Регистрации пользователя со свойствами

    useEffect(() => { // действия для состояния страницы
        document.title = 'Регистрация'; // установка заголовка страницы
    }, []);

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

    const [agreementChecked, setAgreementChecked] = useState(false); // изначальное состояние чекбокса принятия Соглашений

    const handleAgreementChecked = () => { // обработчик чекбокса принятия Соглашений в форме
        setAgreementChecked(!agreementChecked);
    };

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
            default:
                console.log(`Unknown label: ${label}`);
                break;
        }
    };

    //   Обработчик отправки и вывода сообщений
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!agreementChecked) {
            toast.error("Вы должны принять пользовательское соглашение!");
            return;
        }

        if (formRegister.password !== formRegister.password_confirm) {
            toast.error("Пароли не совпадают!");
            return;
        }

        // console.log(formRegister);
        // Post API Регистрация
        await axios
            .post("http://localhost:8888/auth/register", formRegister)
            .then((response) => {

                toast.success(response.data.detail); // добавить успешно уведомленное

                setTimeout(() => { // перезагрузить страницу через 1 секунду
                    window.location.reload();
                }, 1000);

                navigate('/login'); // перейти на страницу входа

                // console.log(response);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.detail); // в случае добавить уведомление об ошибке
            });
    };

    return (
        <>
            <Header /> {/* блок Header */}

            <h1 className="pt-20 text-2xl tracking-wide font-extrabold text-blue-600 dark:text-white">Страница регистрации</h1>

            <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl text-blue-600 dark:text-blue-300">
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img
                                alt="image"
                                aria-hidden="true"
                                className="object-cover w-full h-full dark:hidden"
                                src={process.env.PUBLIC_URL + '/img/create-account-office.jpeg'}
                            /> {/* папка public */}
                            <img
                                alt="image"
                                aria-hidden="true"
                                className="hidden object-cover w-full h-full dark:block"
                                src={process.env.PUBLIC_URL + '/img/create-account-office-dark.jpeg'}
                            /> {/* папка public */}
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">

                                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                    Создать аккаунт
                                </h2>

                                <form onSubmit={onSubmitHandler}> {/* обработчик формы */}
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Придумайте Логин"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('nick_name', e)}
                                        /> {/* обработчик поля логина */}
                                        <input
                                            type="text"
                                            placeholder="Ваша Фамилия и Имя"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('user_name', e)}
                                        /> {/* обработчик поля имя */}
                                        <input
                                            type="number"
                                            placeholder="Ваш номер телефона"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('phone_number', e)}
                                        /> {/* обработчик поля телефон */}
                                        <input
                                            type="email"
                                            placeholder="Ваш Email"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('email', e)}
                                            required 
                                        /> {/* обработчик поля email */}
                                        <input
                                            type="password"
                                            placeholder="Придумайте Пароль"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('password', e)} 
                                            required 
                                        /> {/* обработчик поля пароля */}
                                        <input
                                            type="password"
                                            placeholder="Повторите Пароль"
                                            className="block text-sm py-1.5 px-2 rounded-md w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                                            onChange={(e) => onChangeForm('password_confirm', e)} 
                                            required 
                                        /> {/* обработчик поля повтора пароля */} 
                                    </div>
                                    <div className="text-center mt-6">
                                        <button type="submit"
                                            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                        >
                                            Зарегистрироваться
                                        </button>
                                    </div>
                                </form>

                                <div className="flex mt-6 text-sm">
                                    <label className="flex items-center dark:text-gray-400">
                                        <input
                                            type="checkbox"
                                            className="text-blue-600 form-checkbox focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-gray"
                                            checked={agreementChecked}
                                            onChange={handleAgreementChecked} 
                                            required
                                        /> {/* обработчик включения чекбокса Соглашений */}
                                        <span className="ml-2">
                                            Вы соглашаетесь c <AgreementModal /> и&nbsp; <ContractOfferModal />
                                        </span>
                                    </label>
                                </div>

                                <hr className="my-8" />

                                <p className="mt-4">
                                    {/* ссылка на страницу логина */}
                                    <NavLink to="/login"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        У вас уже есть учетная запись? Вход
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
