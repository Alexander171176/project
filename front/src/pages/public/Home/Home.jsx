import React, { useEffect } from 'react';

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const Home = () => {

    useEffect(() => {
        document.title = 'Главная'; // установка заголовка страницы
    }, []);

    return (
        <>
            <Header />
            <main className="profile-page mt-96">
                <section className="relative block h-500-px"
                    style={{ top: '-360px' }} >
                    <div className="absolute top-0 w-full h-full bg-center bg-cover dark:bg-gray-800"
                        style={{ height: '400px', backgroundPosition: '50%', backgroundImage: `url(${process.env.PUBLIC_URL}/img/head.png)` }} >
                    </div>
                </section>
                <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold dark:text-white">Семейное ТВ за 550 тенге!</h2>
                            <p className="font-serif text-md dark:text-gray-400">Тестируй 24 часа бесплатно!</p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <article className="flex flex-col dark:bg-gray-900">
                                <a  href="#!" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-md font-semibold leading-snug dark:text-white">
                                    900+ каналов от кабельного до премиального. + 3 дня запись эфира с возможностью просмотра в любой момент.
                                    </h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>14 апреля 2023 год</span>
                                        <span>2.1K</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col dark:bg-gray-900">
                                <a  href="#!" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-md font-semibold leading-snug dark:text-white">
                                    Два онлайна с одной вашей ссылки, без привязки к устройству или сети - абсолютная свобода в пределах вашей страны проживания.
                                    </h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>14 апреля 2023 год</span>
                                        <span>2.2K</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col dark:bg-gray-900">
                                <a  href="#!" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-md font-semibold leading-snug dark:text-white">
                                    Широкий выбор каналов и категорий не оставит вас равнодушными)
                                    </h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>14 апреля 2023 год</span>
                                        <span>2.3K</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col dark:bg-gray-900">
                                <a  href="#!" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?5" />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-md font-semibold leading-snug dark:text-white">
                                    Эксклюзивная реферальная система 8% с пополнения и + 8 % с дохода рефералов зарегистрированных по вашей ссылки из личного кабинета навсегда. (в разработке)
                                    </h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>14 апреля 2023 год</span>
                                        <span>2.4K</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );

};

export { Home }