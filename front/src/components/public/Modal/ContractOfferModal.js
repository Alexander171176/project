import React, { useState } from "react";
import { Transition } from "react-transition-group";

export default function ContractOfferModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>

            <span onClick={toggleModal}
                className="cursor-pointer underline text-blue-500 font-bold rounded"
            >
                Договором - оферты
            </span>

            <Transition in={isOpen} timeout={300} mountOnEnter unmountOnExit>
                {(state) => (
                    <div className={`fixed z-10 inset-0 overflow-y-auto ${state}`}>

                        <div className="flex items-center justify-center min-h-screen">

                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">

                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>

                            </div>

                            <div className="bg-white 
                                            rounded-lg 
                                            overflow-hidden 
                                            transform transition-all 
                                            pointer-events-auto 
                                            relative 
                                            flex max-h-[100%] w-full flex-col 
                                            border-none 
                                            bg-clip-padding 
                                            text-current 
                                            shadow-lg outline-none 
                                            dark:bg-gray-800">

                                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                    <div className="rounded-t-md 
                                                    border-b-2 border-neutral-100 border-opacity-100 
                                                    pb-4 
                                                    dark:border-opacity-50 
                                                    text-gray-800 dark:text-neutral-200">

                                        <h3 className="text-xl font-medium 
                                                        leading-normal uppercase">
                                            Договор-оферта
                                        </h3>

                                        <button type="button"
                                            className="float-right 
                                                        absolute 
                                                        top-5 
                                                        right-5 
                                                        box-content 
                                                        rounded-none 
                                                        border-none 
                                                        hover:no-underline hover:opacity-75 
                                                        focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss
                                            aria-label="Close" onClick={toggleModal}>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>

                                    <div className="mt-2 text-gray-800 dark:text-neutral-200">

                                        <h4 className="text-lg font-medium py-4">
                                            25. 01. 2023 г.
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            Настоящий договор-оферта является официальным предложением (публичной офертой)
                                            адресованным любому физическому лицу (гражданину), в дальнейшем именуемому Заказчик.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Интернет сайт DomaTV.fun, именуемый в дальнейшем — Исполнитель выражает намерение заключить договор об оказании платных услуг с Заказчиком на условиях настоящего договора-оферты.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Оплата услуг Заказчиком является акцептом договора-оферты,
                                            что считается равносильным заключению договора на условиях, изложенных в договоре-оферте.
                                        </p>

                                        <p className="indent-4 text-left leading-relaxed pb-2">
                                            Заказчик обязан полностью ознакомиться с настоящим документом до момента внесения оплаты.
                                            Если Заказчик не согласен с каким-либо пунктом договора-оферты, ему рекомендовано отказаться от использования услуг,
                                            предоставляемых Исполнителем.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            1. Термины и определения
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            В настоящем договоре-оферте, если контекст не требует иного, нижеприведенные термины имеют следующие значения:
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Оферта — настоящий документ опубликованный на сайте https://domatv.fun
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Акцепт Оферты — полное и безоговорочное принятие Оферты путем осуществления действий,
                                            указанных в п. 2.2. Оферты. Акцепт Оферты создает Договор.
                                        </p>

                                        <p className="indent-4 text-left leading-relaxed pb-2">
                                            Заказчик — совершеннолетнее физическое лицо (гражданин), осуществившее Акцепт Оферты,
                                            являющееся потребителем услуг по заключенному Договору, либо правомочный представитель несовершеннолетнего лица,
                                            которое будет потребителем платных услуг.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Договор — договор между Заказчиком и Исполнителем на предоставление услуг,
                                            который заключается посредством Акцепта Оферты.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Доступ к сервису, в том числе к продукту, другим услугам, предоставляется "в том виде, как есть",
                                            и Администратор не гарантирует их соответствие ожиданиям Пользователя.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Сайт — интернет-ресурс, содержащий информацию о тарифах и их стоимости,
                                            размещенный по адресу https://domatv.fun
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Услуги — набор услуг предоставляемых для доступа к содержимому сайта.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            Заявление на возврат денежных средств — письменный односторонний отказ Заказчика от исполнения настоящего Договора.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            2. Предмет договора
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">2.1.&#160;</span>
                                            Исполнитель предоставляет, а Заказчик оплачивает услуги по доступу к контенту на Сайте.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">2.2.&#160;</span>
                                            Оплатой Заказчик выражает свое полное и безоговорочное принятие условий настоящего договора-оферты (акцепт).
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">2.3.&#160;</span>
                                            Стоимость услуг по Договору сообщается на Сайте и составляет сумму, указанную для доступа на 30 дней.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            3. Обязаности исполнителя
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">3.1.&#160;</span>
                                            Исполнитель обязан организовать и обеспечить надлежащее качественное исполнение услуг,
                                            предусмотренных в п. 2.1. настоящего Договора.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">3.2.&#160;</span>
                                            Для организации доступа Исполнитель обязуется предоставить возможность регистрации Заказчика в учётной системе Сайта.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">3.3.&#160;</span>
                                            Обеспечить Заказчика всеми необходимыми материалами.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">3.4.&#160;</span>
                                            В случае отсутствия в связи с техническими неполадками Сайта Исполнитель обязан устранить неполадки.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            4. Обязаности Заказчика
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">4.1.&#160;</span>
                                            Заказчик предоставляет достоверную информацию при регистрации на Сайте
                                            и поддерживает эту информацию в актуальном состоянии в личном кабинете на Сайте.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">4.2.&#160;</span>
                                            Исполнитель имеет право отказать Заказчику в оказании услуг в случае предоставления
                                            Заказчиком заведомо неверной (ложной) информации.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">4.3.&#160;</span>
                                            Заказчик обязан надлежащим образом выполнять правила сайта.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">4.4.&#160;</span>
                                            Заказчик обязан следовать инструкциям Исполнителя при получении услуги.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            5. права Исполнителя и Заказчика
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">5.1.&#160;</span>
                                            Исполнитель вправе для оказания услуг привлекать третьих лиц, отвечая за их действия.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">5.2.&#160;</span>
                                            Исполнитель вправе отказать Заказчику в оказании новых услуг,
                                            если Заказчик в период пользования сайтом совершил нарушения,
                                            предусмотренные настоящим договором-офертой,
                                            и дающие Исполнителю право в одностороннем порядке отказаться от исполнения договора.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">5.3.&#160;</span>
                                            В случае непонимания предоставленной информации, Заказчик обязан предупредить об этом Исполнителя
                                            путем направления уведомления на электронный почтовый адрес help@domatv.fun
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">5.4.&#160;</span>
                                            Заказчик вправе требовать от Исполнителя предоставления информации по вопросам,
                                            касающимся организации и обеспечения надлежащего исполнения услуг, предусмотренных разделом 2 настоящего договора;
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">5.5.&#160;</span>
                                            Исполнитель имеет право незамедлительно прекратить оказание услуг без возвращения денежных средств
                                            в случае проявления со стороны Заказчика агрессии, угроз или неуважительного отношения к Исполнителю.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            6. Оплата услуг и возврат денежных средств
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.1.&#160;</span>
                                            Заказчик оплачивает услуги, указанные в разделе 2.1 Договора. Оплата предоставляемых услуг
                                            производится на основании счета на оплату. Оплата счета происходит путем выбора подходящего способа оплаты на Сайте.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.2.&#160;</span>
                                            Заказчик производит оплату услуг Исполнителя до начала использования в размере 100% предоплаты
                                            путем перечисления денежных средств Исполнителю. Датой оплаты будет считаться день зачисления денежных средств Исполнителя.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.3.&#160;</span>
                                            Возврат денежных средств осуществляется на основании предъявления Заказчиком заявления.
                                            Заявление составляется в письменной форме с обязательной подписью Заказчика и датой составления заявления.
                                            В заявлении на возврат Заказчик обязан указать данные паспорта либо иного документа, удостоверяющего личность,
                                            и описать причину возврата денежных средств.
                                            Вместе с заявлением необходимо предоставить: копию платежного документа подтверждающего перечисление денежных средств Исполнителю,
                                            документ удостоверяющий личность, реквизиты для возврата перечисленных Исполнителю денежных средств.
                                            Электронные копии данных документов направляются на электронный адрес: help@domatv.fun.
                                            Возврат производится в течение 30 (тридцати) календарных дней с момента предоставления правильно заполненного заявления
                                            на возврат и всех приложений к нему. Возврат производится в безналичном порядке по реквизитам, указанным в заявлении.
                                            Исполнитель имеет право увеличить срок рассмотрения заявления на возврат денежных средств,
                                            но не более чем на 21 календарный день для проверки Исполнителем указанных в заявлении данных.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.4.&#160;</span>
                                            При одностороннем отказе Заказчика от оказания услуг Исполнителя,
                                            уплаченные денежные средства возвращаются в следующем порядке:
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.4.1.&#160;</span>
                                            В случае, если Заказчик письменно сообщил Исполнителю в течении 14 (четырнадцать) календарных дней,
                                            Исполнитель удерживает из уплаченной суммы не менее 15% (пятнадцать процентов) от стоимости
                                            за фактически понесенные Исполнителем расходы.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.5.&#160;</span>
                                            Денежные средства, не подлежат возврату, и удерживаются Исполнителем в размере 100% уплаченных средств, в случае:
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.5.1.&#160;</span>
                                            Если Заказчик письменно сообщил Исполнителю по истечению 14 (четырнадцати) дней с даты начала оказания услуги.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">6.5.2.&#160;</span>
                                            Если Заказчик не получил услугу не по вине Исполнителя.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            7. Порядок предоставления доступа и подтверждение факта исполнения обязательств.
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">7.1.&#160;</span>
                                            Заказчик получает на указанный им при регистрации адрес электронной почты сообщение,
                                            содержащее инструкцию для доступа к личному кабинету на Сайте. В личном кабинете Заказчик получает доступ к услугам.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">7.2.&#160;</span>
                                            Услуга считается предоставленным Заказчику с момента получения Заказчиком электронного почтового сообщения согласно п.7.1. Оферты.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">7.3.&#160;</span>
                                            При отсутствии замечаний Заказчика в течение 5 (пяти) дней после получения доступа,
                                            услуги в соответствии с настоящей Офертой считаются оказанными надлежащим образом.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            8. Соблюдение авторского права и конфиденциальность
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.1.&#160;</span>
                                            Заказчик обязан соблюдать действующее законодательство об авторском праве в отношении
                                            всех переданных ему материалов и иных результатов интеллектуальной деятельности.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.2.&#160;</span>
                                            Заказчику запрещается копировать какие-либо видео- или текстовые материалы.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.3.&#160;</span>
                                            Заказчику запрещено использовать материалы в коммерческих целях, от своего имени или от имени третьих лиц,
                                            размещать в открытом доступе, передавать третьим лицам.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.4.&#160;</span>
                                            Заказчику запрещено передавать третьим лицам логин и пароль доступа на Сайт.
                                            Обнаружение факта доступа к материалам третьих лиц является основанием
                                            для одностороннего отказа Исполнителем договора без возврата денежных средств.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.5.&#160;</span>
                                            Факт заключения настоящего Договора не рассматривается Сторонами как конфиденциальная информация.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.6.&#160;</span>
                                            Стороны обязуются не разглашать информацию, полученную Сторонами в ходе выполнения своих обязательств по настоящему Договору,
                                            за исключением случаев, когда Сторона обязана предоставить такую информацию в соответствии с действующим законодательством,
                                            применимым к Договору, или было получено согласие на разглашение такой информации.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.7.&#160;</span>
                                            Стороны несут ответственность в соответствии с действующим законодательством.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.8.&#160;</span>
                                            Исполнитель имеет право отказаться от исполнения настоящего Договора в одностороннем порядке в случаях:
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.8.1.&#160;</span>
                                            Размещение ссылок на скачивание видео, предоставленных Исполнителем на любых источниках и каналах,
                                            за исключением частного просмотра видео.
                                            При этом денежные средства оплаченные по настоящему договору возврату не подлежат.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.8.2.&#160;</span>
                                            Антиобщественное поведение Заказчика в чате в мессенджер Telegram и/или иной платформы
                                            (оскорбление уполномоченных лиц Исполнителя и/или других Заказчиков, а также неуважение,
                                            хамство, нецензурная брань и т.д.).
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.9.&#160;</span>
                                            Исполнитель не несет ответственности перед Заказчиком за ущерб любого рода,
                                            понесенный Заказчиком из-за утраты и/или разглашения своих логина и пароля и/или из-за предоставления ключа доступа
                                            к видео третьим лицам.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.10.&#160;</span>
                                            Заказчик самостоятельно обеспечивает конфиденциальность логина, пароля и ключа доступа,
                                            а также несет ответственность за все действия, произведенные с использованием логина, пароля
                                            и ключа доступа к видео.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.11.&#160;</span>
                                            Спорные вопросы Стороны обязуются решать путем переговоров путем направления письменной претензии.
                                            Рассмотрение письменной претензии Сторонами – 15 (пятнадцать) календарных дней.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">8.12.&#160;</span>
                                            Исполнитель освобождается от ответственности за нарушение условий настоящего договора-оферты,
                                            если такое нарушение вызвано действием обстоятельств непреодолимой силы (форс-мажор),
                                            включая: действия органов государственной власти (в т.ч. принятие правовых актов),
                                            пожар, наводнение, землетрясение, другие стихийные бедствия, отсутствие электроэнергии и/или сбои работы компьютерной сети,
                                            действия третьих лиц направленный на затруднение работы сервиса, забастовки, гражданские волнения, беспорядки,
                                            любые иные обстоятельства, не ограничиваясь перечисленным, которые могут повлиять на исполнение Исполнителем настоящего соглашения.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            9. Обработка персональных данных Заказчика
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.1.&#160;</span>
                                            При регистрации на Сайте Заказчик предоставляет адрес электронной почты.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.2.&#160;</span>
                                            Предоставляя свои персональные данные Исполнителю, Заказчик соглашается на их обработку Исполнителем,
                                            в том числе в целях выполнения Исполнителем обязательств перед Заказчиком в рамках настоящего договора-оферты,
                                            продвижения Исполнителем товаров и услуг, проведения электронных и sms-опросов, контроля результатов маркетинговых акций,
                                            клиентской поддержки, проведение розыгрышей призов среди Заказчиков, контроля удовлетворенности Заказчика,
                                            а также качества услуг, оказываемых Исполнителем.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.3.&#160;</span>
                                            Под обработкой персональных данных понимается любое действие (операция) или совокупность действий (операций),
                                            совершаемых Исполнителем с использованием средств автоматизации или без использования таких средств с персональными даными,
                                            включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение) извлечение, использование,
                                            обезличивание, блокирование, удаление, уничтожение персональных данных.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.4.&#160;</span>
                                            Исполнитель вправе использовать технологию «cookies». «Cookies» не содержат конфиденциальную информацию.
                                            Заказчик настоящим дает согласие на сбор, анализ и использование cookies, в том числе третьими лицами
                                            для целей формирования статистики и оптимизации рекламных сообщений.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.5.&#160;</span>
                                            Исполнитель получает информацию об ip-адресе посетителя Сайта.
                                            Данная информация не используется для установления личности посетителя.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">9.6.&#160;</span>
                                            Исполнитель не несет ответственности за сведения, предоставленные Заказчиком на Сайте в общедоступной форме.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            10. Основания, условия изменения и расторжения договора
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">10.1.&#160;</span>
                                            Условия, на которых заключен настоящий договор, могут быть изменены либо по соглашению сторон.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">10.2.&#160;</span>
                                            Настоящий договор может быть расторгнут по соглашению сторон. В случае расторжения договора,
                                            Исполнитель возвращает Заказчику оплату в соответствии с п. 6 Договора.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            11. Ответственность за неисполнения или ненадлежащее исполнение обязательств по настоящему договору
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">11.1.&#160;</span>
                                            Заказчик соглашается и признаёт, что действия, совершённые с использованием аутентификационных данных (логина и пароля)
                                            в личном кабинете, порождают юридические последствия, аналогичные использованию личных подписей.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">11.2.&#160;</span>
                                            Исполнитель не гарантирует отсутствие неполадок и ошибок в работе Сайта.
                                        </p>

                                        <h4 className="text-lg font-medium py-4">
                                            12. Срок действия договора и другие условия
                                        </h4>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">12.1.&#160;</span>
                                            Настоящий Договор вступает в силу с момента акцепта Заказчиком данного договора-оферты
                                            и действует до полного исполнения Сторонами взятых на себя обязательств.
                                        </p>

                                        <p className="text-left leading-relaxed pb-2">
                                            <span className="text-lg font-medium">12.2.&#160;</span>
                                            Исполнитель оставляет за собой право внести изменения в настоящий Договор в любой момент по своему усмотрению,
                                            такие изменения вступают в силу с момента размещения изменённого текста Договора,
                                            если иной срок вступления изменений в силу не определён дополнительно в тексте публикации.
                                        </p>

                                    </div>

                                </div>

                                <div className="
                                            px-4 py-3 sm:px-6 
                                            sm:flex sm:flex-row-reverse flex flex-shrink-0 flex-wrap 
                                            items-center rounded-b-md 
                                            border-t-2 border-neutral-100 border-opacity-100 
                                            dark:border-opacity-50
                                            ">

                                    <button type="button"
                                        className="
                                            inline-block 
                                            rounded 
                                            bg-primary 
                                            px-6 pb-2 pt-2.5 
                                            text-xs font-medium uppercase 
                                            leading-normal 
                                            text-white 
                                            bg-blue-600 
                                            shadow-[0_4px_9px_-4px_#3b71ca] 
                                            transition duration-150 ease-in-out 
                                            hover:bg-primary-600 
                                            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                            focus:bg-primary-600 
                                            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                            focus:outline-none 
                                            focus:ring-0 
                                            active:bg-primary-700 
                                            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        onClick={toggleModal}
                                    >
                                        Закрыть
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                )}
            </Transition>
        </>
    );
};

