import { useNavigate } from 'react-router-dom';
import MyButton from '../ui/MyButton/MyButton';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <MyButton onClick={() => navigate('/')}>Назад</MyButton>
            <h1>Страница не найдена</h1>
        </>
    )
}

export default NotFoundPage;