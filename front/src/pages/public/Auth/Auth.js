import React, { useState, useEffect } from "react";

// Импортируем компоненты форм
import Forgot from "../../../form/ForgotForm";
import Login from "../../../form/LoginForm";
import Register from "../../../form/RegisterForm";
import Profile from "../Profile/Profile"

import Header from '../../../components/public/Header/Header'; // импортирование блока Header


// Основной компонент приложения
function Auth() {
  // Состояние страницы, которую мы показываем пользователю
  const [page, setPage] = useState("login");
  // Состояние токена авторизации
  const [token, setToken] = useState();

  // Загрузка токена из локального хранилища при первом рендере компонента
  useEffect(() => {
    const auth = localStorage.getItem("auth_token");
    setToken(auth);
  }, [token]);


  // Выбор страницы для отображения в зависимости от состояния
  const chosePage = () => {
    if (page === "login") {
      return <Login setPage={setPage} />;
    }
    if (page === "forgot") {
      return <Forgot setPage={setPage} />;
    }
    if (page === "register") {
      return <Register setPage={setPage} />;
    }
  };

  // Определяем, какую страницу нужно отобразить
  const pages = () => {
    if (token == null) {
      // Если токена нет, то отображаем соответствующую страницу входа/регистрации
      return (
        <>
          <Header /> {/* блок Header */}
          <div className="bg-image-one dark:bg-image-two min-h-screen flex justify-center items-center"
            style={{
              height: "100vh",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}>
            <div className="py-4 px-4 bg-white rounded-2xl shadow-xl z-20">
              {chosePage()}
            </div>
          </div>
        </>
      );
    } else {
      // Если токен есть, то отображаем главную страницу
      return <Profile />;
    }
  };

  // Отображаем страницу
  return <React.Fragment>{pages()}</React.Fragment>;
}

// Экспортируем компонент по умолчанию
export default Auth;
