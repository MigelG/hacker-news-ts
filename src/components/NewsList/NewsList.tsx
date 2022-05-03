import NewsItem from '../NewsItem/NewsItem';
import { useState, useEffect, FC } from 'react';
import api from '../../utils/api';
import Preloader from '../Preloader/Preloader';
import './NewsList.css';
import { INews } from '../../interfaces/INews';

interface Props {
    newsList: INews[];
    setNewsList: React.Dispatch<React.SetStateAction<INews[]>>;
}

const NewsList: FC<Props> = ({ newsList, setNewsList }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!newsList.length) {
            // Получаю с сервера массив из 500 id последних новостей
            api.getNews()
                .then(data => {
                    return data.slice(0, 100);
                })
                .then((data) => {

                    // На каждый id запрашиваю новость
                    const promises = data.map((id: number) => {
                        return api.getItemById(id);
                    });

                    // Когда все новости будут получены, показываю их пользователю
                    Promise.all(promises)
                        .then((results) => {
                            setNewsList(results);
                            setLoading(false);
                        })
                        .catch(err => console.log(err));

                })
                .catch(err => console.log(err));
        } else {
            setLoading(false);
        }

    }, []);

    return (
        loading ?
            <Preloader /> :
            <ul className='news-list'>
                {newsList.map((item) => <NewsItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    author={item.by}
                    time={item.time}
                    score={item.score}
                />)}
            </ul>
    );
}

export default NewsList;