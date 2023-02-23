
import { useState } from 'react';
import Post from './Post.js';
import classes from './PostsList.module.css';
import NewPost from './NewPost.js';
import Modal from './Modal';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
        <Modal>
            <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={authorChangeHandler} 
            />
        </Modal>

        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author={enteredAuthor} body={enteredBody}/>
        </ul>
        </>
    )
}

export default PostsList;