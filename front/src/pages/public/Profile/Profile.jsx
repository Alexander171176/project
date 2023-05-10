import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loadUser = async () => {
      try {
        const auth_token = localStorage.getItem("auth_token");
        const auth_token_type = localStorage.getItem("auth_token_type");
        const token = `${auth_token_type} ${auth_token}`;
        const response = await axios.get("http://localhost:8888/account/", {
          headers: { Authorization: token },
        });
        setUser(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_token_type");
    toast("Успешно !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.href = "/";
  };


  // возврат JSX разметки
  return (
    <>

      <Header /> {/* блок Header */}

      <h1 className="pt-20 text-2xl tracking-tight font-extrabold text-fuchsia-600 dark:text-white">Страница профиля пользователя</h1>

      <main className="profile-page mt-96">
        <section className="relative block h-500-px"
          style={{ top: '-360px' }} >
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ height: '240px', backgroundPosition: '50%', backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/284.jpg")' }} >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 dark:bg-gray-700 dark:text-gray-200">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative w-40">
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center"></div>
                      <div className="mr-4 p-3 text-center"></div>
                      <div className="lg:mr-4 p-3 text-center"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {user.nick_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {user.user_name}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    Номер телефона: {user.phone_number}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    Электронная почта: {user.email}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    Идентификатор: {user.id}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    Роль пользователя: {user.role_name}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <button
                          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={logout}
                        >
                          Выйти
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export { Profile }