import classes from './NewPost.module.css';

function NewPost(props) {

    return (
        <form className={classes.form}>
            <p>
                {/*기능 추가시 react에선 선언형 접근법을 사용한다*/}
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </p>
            <p>
                <label htmlFor="name">roofTopCaat</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
        </form>
    );
}

export default NewPost;