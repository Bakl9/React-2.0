import s from './App.module.css';
import {useState} from "react";
import AddPost from "./Component/AddPost";
import PostList from "./Component/PostList";
import Input from "./Component/BLL/MyInput/Input";
import MyButton from "./Component/BLL/MyButton/MyButton";
import FormPost from "./Component/FormPost";

function App() {

    const [post, setPost] = useState( [
        {id:1, title:'Javascript', body:'Description'},
        {id:2, title:'Javascript', body:'Description'},
        {id:3, title:'Javascript', body:'Description'}
    ])

    const createPost = (newPost) => {
      setPost([...post,newPost])
    }

  return (
      <div className={s.App}>
          <FormPost create={createPost}/>
          <PostList post={post} title={'Новый Пост'}/>
      </div>
  );
}

export default App;
