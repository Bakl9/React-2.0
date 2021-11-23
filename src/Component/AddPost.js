import React from 'react';
import s from "../App.module.css";

const AddPost = ({post}) => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.post}>
                    <strong>{post.id}{post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <button>удалить</button>
            </div>
        </div>
    );
};

export default AddPost;