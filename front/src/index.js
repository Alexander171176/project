// Импортировать необходимые модули
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

// Создать корневой элемент для рендеринга приложения
const root = ReactDOM.createRoot(document.getElementById("root"));

// Отрисовать приложение в корневом элементе, используя React.StrictMode, BrowserRouter и ToastContainer
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Если необходимо измерять производительность, можно передать функцию для логирования результатов
// Например, можно использовать функцию reportWebVitals(console.log) или отправить результаты на аналитический сервис.
reportWebVitals();