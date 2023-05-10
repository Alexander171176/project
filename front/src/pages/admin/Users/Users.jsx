import React, { useEffect } from 'react';

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const Users = () => {

    useEffect(() => {
        document.title = 'Пользователи'; // установка заголовка страницы
    }, []);

    return (
        <>
            <Header />
            
        </>
    );

};

export { Users }