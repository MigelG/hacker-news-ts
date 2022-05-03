import { FC } from 'react';
import CommentsList from '../CommentList/CommentsList';
import './CommentItem.css';
import { IComment } from '../../interfaces/IComment';

interface Props {
    comment: IComment;
}

const CommentItem: FC<Props> = ({ comment }) => {

    return (
        <li className='comment'>
            <p className='comment__author'>{comment.by}</p>
            <p className='comment__text'>{comment.text}</p>

            {comment.kids ?
                <CommentsList commentsList={comment.kids} /> :
                null}
        </li>
    );
}

export default CommentItem;