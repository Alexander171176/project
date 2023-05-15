/*
RequireAuth компонент высшего порядка (HOC), 
который оборачивает другие компоненты и обеспечивает проверку аутентификации пользователя. 
Если пользователь аутентифицирован (имеет токен), компонент, обернутый в RequireAuth, будет отображаться. 
В противном случае будет выполнено перенаправление на страницу аутентификации.
*/
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";


const RequireAuth = ({ children }) => {

    const location = useLocation();
    const { token } = useAuth();

    if (!token) {
        return <Navigate to='/login' state={{ from: location }} />;
    }

    return children;
}

export { RequireAuth };