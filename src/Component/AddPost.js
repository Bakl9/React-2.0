import React from 'react';
import s from "../App.module.css";
import MyButton from "./BLL/MyButton/MyButton";

const AddPost = ({post,number,remove}) => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.post}>
                    <strong>{number}{post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <MyButton onClick={() => remove(post)} >удалить</MyButton>
            </div>
        </div>
    );
};

export default AddPost;