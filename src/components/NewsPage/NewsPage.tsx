import CommentsList from '../CommentList/CommentsList';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import './NewsPage.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { INews } from '../../interfaces/INews';
import Button from '@mui/material/Button';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState<INews>({});
    const navigate = useNavigate();
    const [notFoundError, setNotFoundError] = useState(false);

    // Получаю новость с сервера по id
    useEffect(() => {
        api.getItemById(id)
            .then((i) => {
                if (i && i.type === 'story') {
                    setNews(i);
                } else {
                    setNotFoundError(true);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const date = new Date(news.time || 0 * 1000);

    return (
        notFoundError ?
            <NotFoundPage /> :
            <div className='news'>
                <Button
                    variant='contained'
                    onClick={() => navigate('/')}>
                    На главную
                </Button>
                <div className='news__info'>
                    <p className='news__author'>Автор: {news.by}</p>
                    <p className='news__date'>
                        Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(-1. - 3)}.
                    </p>
                </div>
                <h1 className='news__title'>{news.title}</h1>
                <p>{news.text}</p>
                {news.url ?
                    <a className='news__link' href={news.url} target='_blank' rel="noreferrer">Ссылка на новость</a> :
                    <span className='news__link'>Ссылка на новость отсутствует</span>}
                {news.kids ?
                    <>
                        <h2 className='news__comments'>Комментарии ():</h2>
                        <CommentsList
                            commentsList={news.kids} />
                    </> :
                    <h2 className='news__comments'>Комментариев пока нет :(</h2>}
            </div>
    );
}

export default NewsPage;