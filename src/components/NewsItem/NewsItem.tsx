import { Link } from 'react-router-dom';
import './NewsItem.css';
import { FC } from 'react';
import { INews } from '../../interfaces/INews';

const NewsItem: FC<INews> = ({ id, title, author, time, score }) => {
    const date = new Date(time || 0 * 1000);

    return (
        <Link to={`/${id}`} className='card'>
            <li className='card__body'>
                <h2 className='card__title'>{title}</h2>
                <div className='card__info'>
                    <p className='card__author'>Автор: {author}</p>
                    <p className='card__date'>
                        Дата публикации: {date.toLocaleDateString()} {date.toLocaleTimeString().slice(0, -3)}
                    </p>
                    <p className='card__score'>Рейтинг: {score}</p>
                </div>
            </li>
        </Link>
    );
}

export default NewsItem;