import {useLocation} from "react-router-dom";
import CenterInformation from "@ui/CenterInformation.tsx";

const NotFoundPage = () => {

    const location = useLocation();
    return (
        <CenterInformation text={`Страница ${location.pathname} не найдена`}/>
    );
};

export default NotFoundPage;