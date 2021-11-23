import s from './App.module.css';
import {useState} from "react";
import AddPost from "./Component/AddPost";
import PostList from "./Component/PostList";
import Input from "./Component/BLL/MyInput/Input";
import MyButton from "./Component/BLL/MyButton/MyButton";

function App() {

    const [post, setPost] = useState( [
        {id:1, title:'Javascript', body:'Description'},
        {id:2, title:'Javascript', body:'Description'},
        {id:3, title:'Javascript', body:'Description'}
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const addPost = {
            id: Date.now(),
            title,
            body,
        }
        console.log(addPost)
    }

  return (
      <div className={s.App}>
          <form>
              <Input type="text"
                     placeholder={'введите текс'}
                     value={title}
                     onChange={e => setTitle (e.target.value)}
              />
              <Input
                  type="text"
                  placeholder={'введите текс'}
                  value={body}
                  onChange={e => setBody (e.target.value)}
              />
              <MyButton onClick={addNewPost}>Добавить</MyButton>
          </form>
          <PostList post={post} title={'Новый Пост'}/>
      </div>
  );
}

export default App;
