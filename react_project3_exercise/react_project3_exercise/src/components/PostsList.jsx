import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

const PostsList = (props) => {

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
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="NO" body="BOY"/>
        <Post author="Dream.." body="Makes BOY to real MAN"/>
    </ul>
    </>
    );
}

export default PostsList;