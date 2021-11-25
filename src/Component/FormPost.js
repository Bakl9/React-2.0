import React, {useState} from 'react';
import Input from "./BLL/MyInput/Input";
import MyButton from "./BLL/MyButton/MyButton";

const FormPost = ({create}) => {

    const [posts, setPosts] = useState({body: ' ',title: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...posts,id:Date.now()
        }
        create(newPost)
        setPosts({body: ' ',title: '' })
    }

    return (
        <form>
            <Input type="text"
                   placeholder={'введите текс'}
                   value={posts.title}
                   onChange={e => setPosts ({...posts,title: e.target.value})}
            />
            <Input
                type="text"
                placeholder={'введите текс'}
                value={posts.body}
                onChange={e => setPosts ({...posts, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Добавить</MyButton>
        </form>
    );
};

export default FormPost;