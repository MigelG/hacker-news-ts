import { FC, useEffect, useState } from 'react';
import api from '../../utils/api';
import CommentItem from '../CommentItem/CommentItem';
import './CommentsList.css';
import { IComment } from '../../interfaces/IComment';

interface Props {
    commentsList: number[];
}

const CommentsList: FC<Props> = ({ commentsList }) => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const promises = commentsList.map((id: number) => {
            return api.getItemById(id);
        });
        Promise.all(promises)
            .then((results) => {
                return results.filter(c => !c.deleted && !c.dead);
            })
            .then((res) => {
                setComments(res);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='comments'>
            <ul className='comments__list'>
                {comments.map((comment) => <CommentItem
                    key={comment.id}
                    comment={comment} />)}
            </ul>
        </div>
    );
}

export default CommentsList;