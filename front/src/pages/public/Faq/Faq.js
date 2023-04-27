import { useEffect } from 'react'; // импортирование модуля useEffect из React
import Header from '../../../components/public/Header/Header'; // импортирование блока Header 

export default function Faq() { // компонент страницы Вопросы и Ответы

    useEffect(() => { // действия для состояния страницы 
        document.title = 'F.A.Q'; // установка заголовка страницы
    }, []);

    return (
        <>
            <Header /> {/* блок Header */}
            
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h1 className="mb-4 text-2xl tracking-tight font-extrabold text-fuchsia-600 dark:text-white">Часто задаваемые вопросы</h1>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Что такое IPTV ?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Это телевидение, которое можно смотреть с любого устройства, везде где есть интернет.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    На каких устройствах можно смотреть?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">На компьютере, телефоне, планшете - Iptv player или vlc player.
                                    На SMART TV - при помощи OTTPlayer, SS-IPTV.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Как произвести настройку iptv плеера для просмотра ?
                                    Скачать IPTV плеер Ott Player с магазина вашего устройства и настройте следуя инструкциям.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Добавление плейлиста:&#160;
                                    <a href="#!" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">
                                        https://ottplayer.tv/support
                                    </a>
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Или скачать IPTV плеер SSIPTV с магазина вашего устройства и настройте следуя инструкциям.
                                    <br />
                                    Добавление плейлиста:&#160;
                                    <a href="#!" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">
                                        https://ss-iptv.com/ru/users/documents/how-to-upload-playlist
                                    </a>
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    На приставках MAG - плейлист из кабинета.
                                    На приставках Android - при помощи OTTPlayer, SS-IPTV, Televizo.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Какая минимальная скорость для просмотра SD и HD каналов?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Минимальная скорость SD - 7mb/s, HD - 15mb/s, при условии подключения одного устройства.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    В чём отличие плейлистов?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400"><span className="font-bold text-fuchsia-600 dark:text-yellow-300">HLS</span> - для современных устройств, более предпочтительный.</p>
                                <p className="text-gray-500 dark:text-gray-400"><span className="font-bold text-fuchsia-600 dark:text-yellow-300">MPEG-TS</span> - формат, у кого устройства не поддерживает HLS.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    На скольких устройствах можно смотреть плейлист?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Два онлайна с одной вашей ссылкой в личном кабинете, без привязки к устройству или сети - абсолютная свобода в пределах вашей страны проживания.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Что произойдет, если превысить просмотр на количестве устройств?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Доступ будет заблокирован на пару минут. При повторных нарушениях время блокировки увеличивается.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Как происходит продление подписки?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Автоматический, при положительном балансе.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Как мне протестировать ваши услуги?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Каждый может протестировать наш сервис совершенно бесплатно. После прохождения регистрации, подтверждения с переходом по ссылке отправленной сервисом на электронную почту. Взять ссылку плейлиста с личного кабинета и прописать её в IPTV плеере.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-orange-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Что произойдет если в личном кабинете на балансе не достаточно средств для продления?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Списания не будет. Доступ будет заблокирован до пополнения счета/баланса.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};
